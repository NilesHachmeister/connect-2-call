import React, { useState } from "react";
import '../homepg.css';
import { ADD_COMMENT } from '../utils/mutations';
import Auth from '../utils/auth'
import { useMutation, useQuery } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import { GET_POSTS } from "../utils/queries";
import NewPostForm from "./NewPostForm";
import { DELETE_POST } from "../utils/mutations";


const Card = () => {

    const { loading, data } = useQuery(GET_POSTS);


    const [deleteThisPost, { deleteError }] = useMutation(DELETE_POST);
    const [commentFormData, setCommentFormData] = useState({ username: "", commentText: '', postId: '' });
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    // set state for form validation
    const [validated] = useState(true);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommentFormData({ ...commentFormData, [name]: value });


        console.log(commentFormData)
    };

    const deletePost = async (event) => {
        const { id, user } = event.target.dataset;


        const loggedUser = Auth.getProfile();

        console.log(loggedUser.data._id)
        console.log(user)

        if (user === loggedUser.data._id) {
            try {
                const { data } = await deleteThisPost({
                    variables: { postId: id, postUser: user }
                });
                console.log(data);

            } catch (err) {
                console.error(err);

            };

        } else {
            console.log("you must own this post");
        }
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const loggedUser = Auth.getProfile()

        // console.log(event.target.dataset.postid)

        // setCommentFormData({ ...commentFormData, [name]: value });
        // console.log(commentFormData.commentText)
        console.log(loggedUser.data._id)


        const commentAuthorId = loggedUser.data._id

        try {
            const { data } = await addComment({
                variables: { postId: event.target.dataset.postid, commentText: commentFormData.commentText, commentAuthor: commentAuthorId }
            });
            console.log(data);

            if (error) {
                throw new Error('something went wrong!');
            }

        } catch (err) {
            console.error(err);
        }

        setCommentFormData({
            commentText: ''
        });
    };




    return (


        <div>









            {data ? data.posts.map((element, index) => {
                return (


                    <div key={element._id}>

                        <h2> title: {element.taskTitle}</h2>
                        <p>Username: {element.postUser}</p>
                        <p>createdAt:{element.createdAt} </p>
                        <p>Call Language: {element.callLanguage} </p>
                        <p>Description: {element.description}</p>
                        <p>Call Category: {element.callCategory}</p>
                        <p>Payment: {element.payment}</p>
                        <p>Phone Number: {element.phoneNumberToCall}</p>
                        <p>Completed: {element.completed}</p>
                        <p>Comments: {element.comments.length > 0 ? element.comments.map((comment) => {
                            return (
                                <div>
                                    <div>{comment.commentText}</div>
                                    <div>{comment.commentAuthor}</div>
                                </div>
                            )
                        }) : <div>no comments</div>};</p>

                        <span role="button" tabIndex="0" data-id={element._id} data-user={element.postUser} onClick={deletePost}>
                            ✗
                        </span>

                        <Form onSubmit={handleFormSubmit} data-postId={element._id}>

                            <Form.Group>
                                <Form.Label htmlFor='comment'>Comment</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='commentText'
                                    name='commentText'
                                    onChange={handleInputChange}
                                    // value={commentFormData.commentText}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Comment is required!</Form.Control.Feedback>
                            </Form.Group>



                            <Button
                                // disabled={!(commentFormData.commentText)}
                                type='submit'
                                variant='success'>
                                Submit
                            </Button>
                        </Form>
                    </div>



                )
            }) : <div>loading</div>}






        </div>


    );
};

export default Card;
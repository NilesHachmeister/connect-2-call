import React, { useState } from "react";
import '../homepg.css';
import Auth from '../utils/auth'
import { useMutation, useQuery } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import { GET_POSTS, GET_USER } from "../utils/queries";
import NewPostForm from "./NewPostForm";
import { DELETE_POST, TOGGLE_COMPLETE, ADD_COMMENT } from "../utils/mutations";
import Header from '../components/Header';
import pattern2 from "../assets/pattern2.jpeg";


const Card = () => {

    const { loading, data } = useQuery(GET_POSTS);

    const loggedUser = Auth.getProfile()

    const commentAuthorId = loggedUser.data._id




    const [deleteThisPost, { deleteError }] = useMutation(DELETE_POST);
    const [commentFormData, setCommentFormData] = useState({ username: "", commentText: '', postId: '' });
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    const [toggleComplete] = useMutation(TOGGLE_COMPLETE);
    // set state for form validation
    const [validated] = useState(true);
    // set state for alert
    // const [showDeleteAlert, setDeleteShowAlert] = useState(false);
    const [deletePostIdState, setDeletePostIdState] = useState(commentAuthorId)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommentFormData({ ...commentFormData, [name]: value });
    };


  

    const deletePost = async (event) => {
        const { id, user } = event.target.dataset;
        const loggedUser = Auth.getProfile();

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
            setDeletePostIdState(id)
        }
        window.location.assign('/board');
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }



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


        window.location.assign('/board');
    };


    const toggleAPostCompleted = async (event) => {
        const { id } = event.target.dataset;
        try {
            const { data } = await toggleComplete({
                variables: { postId: id }
            });
            console.log(data);

        } catch (err) {
            console.error(err);
        };

        window.location.assign('/board');
    }


    return (

        <>



            {data ? data.posts.map((element, index) => {
                return (



                    <div className="container" key={element._id}>

                        <h33> Call Needed: </h33><h22>{element.taskTitle}</h22>
                        <p>Username: {element.postUser.username}</p>
                        <p>Created At: {element.createdAt} </p>
                        <p>Call Language: {element.callLanguage} </p>
                        <p><u>Description: </u>{element.description}</p>
                        <p>Call Category: {element.callCategory}</p>
                        <p>Payment: {element.payment}</p>
                        <p>Phone Number: {element.phoneNumberToCall}</p>
                        <button data-id={element._id} onClick={toggleAPostCompleted}>{element.completed ? "This task has been completed" : "Mark as completed"}</button>



                        <p>Comments: {element.comments.length > 0 ? element.comments.map((comment) => {
                            return (
                                <div>
                                    <div>Comment: {comment.commentText}</div>
                                    <div>From: {comment.commentAuthor.username != null ? comment.commentAuthor.username : ""}</div>
                                </div>
                            )
                        }) : <div>no comments</div>}</p>

                        <span role="button" tabIndex="0" data-id={element._id} data-user={element.postUser._id} onClick={deletePost}>
                            {deletePostIdState === element.postUser._id ? "Delete This Post  X" : ""}
                        </span>

                        <Form onSubmit={handleFormSubmit} data-postId={element._id}>

                            <Form.Group>
                                <Form.Label htmlFor='comment'>Comment</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Comment Here'
                                    name='commentText'
                                    onChange={handleInputChange}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
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








        </>
    );
};

export default Card;
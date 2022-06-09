import React, {  useState } from "react";
import '../homepg.css';
import { ADD_COMMENT } from '../utils/mutations';
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import { GET_POST } from "../utils/queries";
import NewPostForm from "./NewPostForm";


const Card = () => {
    const [Post, { post }] = useMutation(GET_POST);

    const [commentFormData, setCommentFormData] = useState({  username: '', commentText: ''});
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    // set state for form validation
    const [validated] = useState(true);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { username, value } = event.target;
        setCommentFormData({ ...commentFormData, [username]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const loggedUser = Auth.getProfile()

        try {
            const { data } = await Post({
                variables: { ...post, postUser: loggedUser.data._id }
            });
            console.log(data);

            if (error) {
                throw new Error('something went wrong!');
            }

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }


        try {
            const { data } = await addComment({
                variables: { ...commentFormData, postUser: loggedUser.data._id }
            });
            console.log(data);

            if (error) {
                throw new Error('something went wrong!');
            }

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setCommentFormData({
            username: '',
            commentText: ''

        });
    };




    return (
        <>
        {/* This is needed for the validation functionality above */}
        <NewPostForm noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
            </Alert>

            <Form.Group>
                <Form.Label htmlFor='taskTitle'>Title: </Form.Label>
                <Form.Label htmlFor='description'>Description: </Form.Label>
                < Post />

                <Form.Label htmlFor='username'>Name: </Form.Label>
                    
                    <Form.Control
                    type='text'
                    placeholder='commentText'
                    name='commentText'
                    onChange={handleInputChange}
                    value={commentFormData.commentText}
                    required
                    />
                    
            </Form.Group>



            <Button
                disabled={!(commentFormData.commentText )}
                type='submit'
                variant='success'>
                Submit
            </Button>
            
        </NewPostForm>
    </>
    );
};

export default Card;
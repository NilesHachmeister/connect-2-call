import React, {  useState } from "react";
import '../homepg.css';
import { ADD_COMMENT } from '../utils/mutations';
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';


const Card = () => {
    const [commentFormData, setCommentFormData] = useState({  commentText: '', username: '', caller_username: ''});
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    // set state for form validation
    const [validated] = useState(true);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommentFormData({ ...commentFormData, [name]: value });
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
            const { data } = await addComment({
                variables: { ...commentFormData, postUser: loggedUser.data._id }
            });
            console.log(data);

            if (error) {
                throw new Error('something went wrong!');
            }

            // const { token, user } = await response.json();
            // console.log(user);
            // Auth.login(data.addPost.token);



        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setCommentFormData({
            commentText: '', 
            username: '',
        });
    };




    return (
        <>
        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
            </Alert>

            <Form.Group>
                <Form.Label htmlFor='commentText'>Comment: </Form.Label>
                <Form.Control
                    type='text'
                    placeholder='commentText'
                    name='commentText'
                    onChange={handleInputChange}
                    value={commentFormData.commentText}
                    required
                />
                <Form.Control.Feedback type='text'
                placeholder='name'
                name='name'
                value={ name}
                    required></Form.Control.Feedback>
            </Form.Group>



            <Button
                disabled={!(commentFormData.commentText )}
                type='submit'
                variant='success'>
                Submit
            </Button>
        </Form>
    </>
    );
};

export default Card;
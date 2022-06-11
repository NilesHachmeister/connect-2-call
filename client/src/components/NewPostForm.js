import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'
import { ADD_POST } from '../utils/mutations';
import pattern2 from '../assets/pattern2.jpeg';

// import Auth from '../utils/auth';

const NewPostForm = () => {
    // set initial form state
    const [postFormData, setPostFormData] = useState({ taskTitle: '', callLanguage: '', description: '', callCategory: '', payment: 0, callTime: '', phoneNumberToCall: '', });
    const [addPost, { error }] = useMutation(ADD_POST);
    // set state for form validation
    const [validated] = useState(true);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const loggedUser = Auth.getProfile();


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostFormData({ ...postFormData, [name]: value });
    };


    const handleFormSubmit = async (event) => {


        console.log(loggedUser)

        // if (loggedUser.data._id){



        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        };


        try {
            const { data } = await addPost({
                variables: { ...postFormData, postUser: loggedUser.data._id }
            });
            console.log(data);

            if (error) {
                console.log(error);
                throw new Error('something went wrong!');
            };


        } catch (err) {
            console.error(err);
            setShowAlert(true);
        };

        window.location.assign('/board');


        // }

    };

    return (
        <>
            <div style={{ backgroundImage: `url(${pattern2})` }}>
                <div className="sign-up-form"></div>

                {/* This is needed for the validation functionality above */}
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    {/* show alert if server response is bad */}
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your signup!
                    </Alert>

                    <Form.Group>
                        <Form.Label htmlFor='taskTitle'>taskTitle</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='taskTitle'
                            name='taskTitle'
                            onChange={handleInputChange}
                            value={postFormData.taskTitle}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>taskTitle is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='callLanguage'> callLanguage</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='callLanguage'
                            name='callLanguage'
                            onChange={handleInputChange}
                            value={postFormData.callLanguage}
                            required
                        />
                        <Form.Control.Feedback type='invalid'> callLanguage is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='description'>description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='description'
                            name='description'
                            onChange={handleInputChange}
                            value={postFormData.description}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>description is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='callCategory'>callCategory</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='callCategory'
                            name='callCategory'
                            onChange={handleInputChange}
                            value={postFormData.callCategory}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>callCategory is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='payment'>payment</Form.Label>
                        <Form.Control
                            type='float'
                            name='payment'
                            onChange={handleInputChange}
                            value={postFormData.payment}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>payment is required!</Form.Control.Feedback>
                    </Form.Group>



                    <Form.Group>
                        <Form.Label htmlFor='callTime'>callTime</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='callTime'
                            name='callTime'
                            onChange={handleInputChange}
                            value={postFormData.callTime}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>callTime is required!</Form.Control.Feedback>
                    </Form.Group>



                    <Form.Group>
                        <Form.Label htmlFor='phoneNumberToCall'>phoneNumberToCall</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='phoneNumberToCall'
                            name='phoneNumberToCall'
                            onChange={handleInputChange}
                            value={postFormData.phoneNumberToCall}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>phoneNumberToCall is required!</Form.Control.Feedback>
                    </Form.Group>



                    <Button
                        disabled={!(postFormData.taskTitle && postFormData.callLanguage && postFormData.description)}
                        type='submit'
                        variant='success'>
                        Submit
                    </Button>

                </Form>
            </div>
        </>
    );
};

export default NewPostForm;
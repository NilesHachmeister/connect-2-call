import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'
import { ADD_POST } from '../utils/mutations';
import pattern2 from '../assets/pattern2.jpeg';

// import Auth from '../utils/auth';

const NewPostForm = () => {

    const currentLanguage = localStorage.getItem("i18nextLng");
    // set initial form state
    const [postFormData, setPostFormData] = useState({ taskTitle: '', callLanguage: '', description: '', callCategory: '', payment: 0, callTime: '', phoneNumberToCall: '', });
    const [addPost, { error }] = useMutation(ADD_POST);
    // set state for form validation
    const [validated] = useState(true);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const loggedUser = Auth.getProfile();

    const [taskTitleValidate, setTaskTitleValidate] = useState(false);
    const [descriptionValidate, setDescriptionValidate] = useState(false);
    const [callCategoryValidate, setCallCategoryValidate] = useState(false);
    const [callTimeValidate, setCallTimeValidate] = useState(false);
    const [phoneNumberToCallValidate, setPhoneNumberToCallValidate] = useState(false);

    const [callLanguage, setCallLanguage] = useState(currentLanguage);







    useEffect(() => {




        if (callLanguage === "en") {
            setCallLanguage("English");
        }
        if (callLanguage === "es") {
            setCallLanguage("Español");
        }
        if (callLanguage === "ru") {
            setCallLanguage("Русский");
        }

        console.log(currentLanguage)
        console.log(callLanguage)


        console.log(callLanguage)

        if (postFormData.taskTitle.split("").length >= 1) {
            setTaskTitleValidate(true)
        } else {
            setTaskTitleValidate(false)
        }
        if (postFormData.description.split("").length >= 1) {
            setDescriptionValidate(true)
        } else {
            setDescriptionValidate(false)
        }
        if (postFormData.callCategory.split("").length >= 1) {
            setCallCategoryValidate(true)
        } else {
            setCallCategoryValidate(false)
        }
        if (postFormData.callTime.split("").length >= 1) {
            setCallTimeValidate(true)
        } else {
            setCallTimeValidate(false)
        }
        if (postFormData.phoneNumberToCall.split("").length >= 1) {
            setPhoneNumberToCallValidate(true)
        } else {
            setPhoneNumberToCallValidate(false)
        }

    });



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostFormData({ ...postFormData, [name]: value });

        if (name === "callLanguage") {
            setCallLanguage(value)
        }

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

            <div className="container">
                <div style={{ backgroundImage: `url(${pattern2})` }}>


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
                            <Form.Control.Feedback type='invalid'>{!taskTitleValidate ? "Please enter a task title" : ""}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='callLanguage' onChange={handleInputChange} >Call Language:
                                <select name='callLanguage' value={callLanguage}>
                                    <option value="English">English</option>
                                    <option value="Español">Español</option>
                                    <option value="Русский">Русский</option>
                                </select></Form.Label>
                            <br></br>
                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'>{!descriptionValidate ? "Please enter a description" : ""}</Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'>{!callCategoryValidate ? "Please enter a category" : ""}</Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'>{!callTimeValidate ? "Please enter a task call time (please specify time zone)" : ""}</Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'>{!phoneNumberToCallValidate ? "Please enter a phone number to call" : ""}</Form.Control.Feedback>
                        </Form.Group>



                        <Button
                            disabled={!(postFormData.taskTitle && postFormData.description)}
                            type='submit'
                            variant='success'>
                            Submit
                        </Button>

                    </Form>
                </div>
            </div>
        </>
    );
};

export default NewPostForm;
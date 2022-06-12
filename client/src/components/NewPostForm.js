import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'
import { ADD_POST } from '../utils/mutations';
import pattern2 from '../assets/pattern2.jpeg';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';

const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Spanish' }
}

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
            setPostFormData({ ...postFormData, callLanguage: "English" });
            setCallLanguage("English");
        }
        if (callLanguage === "es") {
            setPostFormData({ ...postFormData, callLanguage: "Español" });
            setCallLanguage("Español");
        }
        if (callLanguage === "ru") {
            setPostFormData({ ...postFormData, callLanguage: "Русский" });
            setCallLanguage("Русский");
        }


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

    };


    return (
        <>
            <div style={{ backgroundImage: `url(${pattern2})` }}>
                <Header />




                {/* This is needed for the validation functionality above */}
                <Form className="postform" noValidate validated={validated} onSubmit={handleFormSubmit}>
                    {/* show alert if server response is bad */}
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        {t("Something went wrong with your signup!")}
                    </Alert>

                    <Form.Group>
                        <Form.Label htmlFor='taskTitle'>{t("Task Title")}</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='TASK TITLE'
                            name='taskTitle'
                            onChange={handleInputChange}
                            value={postFormData.taskTitle}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>{!taskTitleValidate ? "Please enter a task title." : ""}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='callLanguage' onChange={handleInputChange} >{t("Call Language")}:
                            <select name='callLanguage' value={callLanguage}>
                                <option value="English">English</option>
                                <option value="Español">Español</option>
                                <option value="Русский">Русский</option>
                            </select></Form.Label>
                        <br></br>
                        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='description'>{t("Description")}</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='DESCRIPTION'
                            name='description'
                            onChange={handleInputChange}
                            value={postFormData.description}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>{!descriptionValidate ? "Please enter a description." : ""}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='callCategory'>{t("Call Category")}</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='CALL CATEGORY'
                            name='callCategory'
                            onChange={handleInputChange}
                            value={postFormData.callCategory}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>{!callCategoryValidate ? "Please enter a category." : ""}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='payment'>{t("Payment")}</Form.Label>
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
                        <Form.Label htmlFor='callTime'>{t("Call Time")}</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='CALL TIME'
                            name='callTime'
                            onChange={handleInputChange}
                            value={postFormData.callTime}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>{!callTimeValidate ? "Please enter a task call time (please specify time zone)" : ""}</Form.Control.Feedback>
                    </Form.Group>



                    <Form.Group>
                        <Form.Label htmlFor='phoneNumberToCall'>{t("Phone Number To Call")}</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='PHONE NUMBER'
                            name='phoneNumberToCall'
                            onChange={handleInputChange}
                            value={postFormData.phoneNumberToCall}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>{!phoneNumberToCallValidate ? "Please enter a phone number to call." : ""}</Form.Control.Feedback>
                    </Form.Group>



                    <Button
                        disabled={!(postFormData.taskTitle && postFormData.description)}
                        type='submit'
                        variant='success'>
                        {t("Submit")}
                    </Button>

                </Form>
                <footer className="footer2">
                    <p className="copyright">Connect 2 Call © 2022</p>

                </footer>
            </div>

        </>
    );
};

export default NewPostForm;
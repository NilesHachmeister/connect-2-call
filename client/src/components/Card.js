import React, { useState } from "react";
import '../homepg.css';
import Auth from '../utils/auth'
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import { GET_POSTS, GET_USER } from "../utils/queries";
import NewPostForm from "./NewPostForm";
import { DELETE_POST, TOGGLE_COMPLETE, ADD_COMMENT } from "../utils/mutations";
import Header from '../components/Header';
import pattern2 from "../assets/pattern2.jpeg";

import { useTranslation, Trans } from "react-i18next";

import "../i18n"
import { t } from 'i18next';
const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Spanish' }
}


// import { QUERY_CHECKOUT } from '../../utils/queries';

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

    // const stripePay = async (event) => {
    //     const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    //     useEffect(() => {
    //         if (data) {
    //             stripePromise.then((res) => {
    //                 res.redirectToCheckout({ sessionId: data.checkout.session });
    //             });
    //         }
    //     }, [data]);
    // }



    const renderCallLang = (language) => {

        if (language === "en" || language === "en-US") {
            return "English";
        }
        if (language === "es") {
            return "Español";
        }
        if (language === "ru") {
            return "Русский";
        }

    };



    return (

        <>



            {data ? data.posts.map((element, index) => {
                return (

                    //figure out how to inline cap the Language


                    <div className="container" key={element._id}>


                        <h33> {t("Call Needed")}: </h33><h22>{element.taskTitle}</h22>
                        <p><u>{t("Username")}:</u> {element.postUser.username}</p>
                        <p><u>{t("Created At")}:</u> {element.createdAt} </p>
                        <p><u>{t("Call Language")}:</u> {renderCallLang(element.callLanguage)} </p>
                        <p><u>{t("Description")}:</u>{element.description}</p>
                        <p><u>{t("Call Category")}:</u> {element.callCategory}</p>
                        <p><u>{t("Payment")}:</u> ${element.payment}</p>
                        <p><u>{t("Phone Number")}:</u> {element.phoneNumberToCall}</p>

                        <button data-id={element._id} onClick={toggleAPostCompleted}>{element.completed ? "This task has been completed" : "Mark as completed"}</button>



                        <p>{t("Comments")}: {element.comments.length > 0 ? element.comments.map((comment) => {
                            return (
                                <div>
                                    <div>{t("Comment")}: <i>{comment.commentText}</i></div>
                                    <div>{t("From")}: {comment.commentAuthor.username != null ? comment.commentAuthor.username : ""}</div>
                                </div>
                            )
                        }) : <div><i>{t("No Comments")}</i></div>}</p>

                        <span role="button" tabIndex="0" data-id={element._id} data-user={element.postUser._id} onClick={deletePost}>
                            {deletePostIdState === element.postUser._id ? "Delete This Post  X" : ""}
                        </span>

                        <Form onSubmit={handleFormSubmit} data-postId={element._id}>

                            <Form.Group>
                                <Form.Label htmlFor='comment'>{t("Comment")}:</Form.Label>
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
                                {t("Submit")}
                            </Button>
                        </Form>
                    </div>



                )
            }) : <div>loading</div>}








        </>
    );
};

export default Card;
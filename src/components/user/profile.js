import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserTok, getUser, logout } from '../../services/auth'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import logo from '../../images/logo.png'

import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import '../../App.css';

function Profile(props) {

    let history = useHistory();
    const [user, setUser] = useState([]);
    const [isUser, setIsUser] = useState(false);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let tok = getUserTok()
        const header = {
            headers:{
                Authorization: `Bearer ${tok}` 
            }
        }
        const { id } = props.match.params
        const fetchData = async () => {
            axios.get(
                `${process.env.REACT_APP_API_URL}/users/${id}`, header
            ).then( result =>{
                    console.log(result.data)
                    setUser(result.data)
                    if(result.data._id === getUser()._id){
                        setIsUser(true)
                    }
                }
            ).catch(e => {
                setUser({})
            })
        };
        fetchData();
    }, []);
    
    const closeModal = () => setDeleting(false)

    const afterDelete = () => history.push(`/users`)

    const deleteUser = () => {
        let tok = getUserTok()
        const header = {
            headers:{
                Authorization: `Bearer ${tok}` 
            }
        }
		axios.delete(
            `${process.env.REACT_APP_API_URL}/users/${getUser()._id}`, header
        ).then( result =>{
                store.addNotification({
                    title: "We hope to see you again!",
                    message: "Account deleted successfully",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 1000,
                        onScreen: true
                    }
                });
                
                setTimeout(function(){
                    logout(afterDelete)
                }, 1000); 
                
            }
        ).catch(e => {
            console.log(e)
            store.addNotification({
                title: "Something went wrong!",
                message: "We were not able to delete your account...",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                duration: 3000,
                onScreen: true
                }
            });
        })
	}

    return (
        <React.Fragment>
            <ReactNotification />
            <section className="container main-section">
                <div className="row justify-content-center mt-2">
                    <div className="col-md-6 col-lg-6 col-sm-10 col-10 text-center">
                        <div className="card text-center justify-content-center">
                            <div className="row justify-content-center mt-2">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-12 text-center">
                                    <img id="logo" src={logo}alt="" className="card-img-top"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                                {
                                    isUser ?
                                        <React.Fragment>
                                            <div className="row justify-content-center mt-2">
                                                <div className="col-md-6 col-lg-6 col-sm-12 col-12 text-center">
                                                    <button className="btn btn-save" id="edit-button" type="button" ><i className="fas fa-edit"></i> Edit</button>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-sm-12 col-12 text-center">
                                                    <button className="btn btn-delete" type="button" onClick={()=> {setDeleting(true)}}><i className="far fa-trash-alt"></i> Delete</button>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    :
                                        <React.Fragment></React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={deleting} toggle={closeModal} >
                    <ModalHeader toggle={closeModal} className="delete-modal-header">Warning!</ModalHeader>
                    <ModalBody>
                            Do you really want to delete you account?
                    </ModalBody>
                    <ModalFooter>
                    <Button color="" className="btn-yes" onClick={deleteUser}>Yes</Button>
                    <Button color="" className="btn-delete" onClick={closeModal}>No</Button>
                    </ModalFooter>
                </Modal>
            </section>
        </React.Fragment>
    );
}

export default Profile;

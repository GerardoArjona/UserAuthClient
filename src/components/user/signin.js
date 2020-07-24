import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setUser, getUser } from '../../services/auth'

import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import '../../App.css';

function Signin() {

    let history = useHistory();
    const [userData, setUserData] = useState({});

    const handleUpdate = event => {

        //console.log(event.target.name)
        //console.log(event.target.value)
    
        const {name, value} = event.target
        const data = {...userData}
        data[name] = value
        //console.log(data)
        setUserData(data)
    }

    const login = () => {
        console.log("saving")
        console.log(userData)
        axios.post(
            `${process.env.REACT_APP_API_URL}/auth/signin`, userData
        ).then( result =>{
                setUser(result.data.token)
                store.addNotification({
                    title: "WELCOME!",
                    message: "You've successfully signed up",
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
                    history.push(`/profile/${getUser()._id}`)
                }, 1000); 
                
            }
        ).catch(e => {
            console.log(e)
            store.addNotification({
                title: "Sorry!",
                message: "We were not able to sign you in...",
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
                <div className="col-md-8 col-lg-8 col-sm-10 col-10 text-center">
                    <div className="form-group text-center">
                        <label htmlFor="" className="signup-text"><i class="fas fa-at"></i> Email:</label>
                        <input type="email" className="form-control text-center signup-text"
                            name="email"
                            value={userData.email}
                            onChange={e => handleUpdate(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-md-8 col-lg-8 col-sm-10 col-10 text-center">
                    <div className="form-group text-center">
                        <label htmlFor="" className="signup-text"><i class="fas fa-unlock"></i> Password:</label>
                        <input type="password" className="form-control text-center signup-text"
                            name="password"
                            value={userData.password}
                            onChange={e => handleUpdate(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-md-8 col-lg-8 col-sm-10 col-10 text-center">
                    <button className="btn btn-save" type="button" onClick={login}><i class="fas fa-sign-in-alt"></i> Sign In</button>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
}

export default Signin;

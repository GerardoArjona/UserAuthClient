import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { getUserTok, isLoggedIn } from '../../services/auth'

import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import '../../App.css';

function Profile(props) {

    let history = useHistory();
    const [user, setUser] = useState([]);

    useEffect(() => {
        if(isLoggedIn()){
            console.log(props.match.params)
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
                    }
                ).catch(e => {
                    setUser({})
                })
            };
            fetchData();
        }else{
            history.push(`/users`)
        }
	}, []);

    return (
        <section className="container main-section">
            {user.name}
            {user.email}
        </section>
    );
}

export default Profile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserTok } from '../../services/auth'

// import ReactNotification, {store} from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'

import '../../App.css';

function Profile(props) {
    const [user, setUser] = useState([]);

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
                }
            ).catch(e => {
                setUser({})
            })
        };
        fetchData();
	}, []);

    return (
        <section className="container main-section">
            {user.name}
            {user.email}
        </section>
    );
}

export default Profile;

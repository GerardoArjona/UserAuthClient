import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import '../../App.css';

function Profile(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        console.log(props.match.params)
        const { id } = props.match.params
        const fetchData = async () => {
            axios.get(
                `${process.env.REACT_APP_API_URL}/users/${id}`,
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import '../../App.css';

function List() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(
                `${process.env.REACT_APP_API_URL}/users`,
            ).then( result =>{
                    console.log(result.data)
                    setUsers(result.data)
                }
            ).catch(e => {
                setUsers([])
            })
        };
        fetchData();
	}, []);

    return (
        <section className="container main-section">
                {users.length > 0 
                    ?         			
                    <Table className="users-table mb-3">
                        <Thead>
                            <Tr>
                            <Th className="users-cels-header mobile-user-name"><i class="fas fa-signature"></i> Name</Th>
                            <Th className="users-cels-header"><i class="fas fa-at"></i> Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.map((user) => {
                                return(
                                    <Tr key={user._id}>
                                        <Td className="user-cels user-name-cel mobile-user-name"><Link to={`/profile/${user._id}`}><i class="fas fa-user-edit"></i> {user.name}</Link></Td>
                                        <Td className="user-cels">{user.email}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                    : 
                        <h1>No hay usuarios</h1>
                }
        </section>
    );
}

export default List;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import '../../App.css';

function List() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(
                `${process.env.API_URL}/api/users`,
            ).then( result =>{
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
                    <Table className="admin-cels-font mb-3">
                        <Thead>
                            <Tr>
                            <Th className="admin-cels-header">Fecha</Th>
                            <Th className="admin-cels-header">Estatus</Th>
                            <Th className="admin-cels-header">Nombre</Th>
                            <Th className="admin-cels-header">Teléfono</Th>
                            <Th className="admin-cels-header">E-mail</Th>
                            <Th className="admin-cels-header">Ciudad</Th>
                            <Th className="admin-cels-header">Tarifa</Th>
                            <Th className="admin-cels-header">Proyecto Requerido (KWp)</Th>
                            <Th className="admin-cels-header margin-price-proyect">Precio del Proyecto MXN (IVA Incluido)</Th>
                            <Th className="admin-cels-header">Método de Contacto</Th>
                            <Th className="admin-cels-header">Tiempo Límite para Ejecutar Acción</Th>
                            <Th className="admin-cels-header">Acción</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.map((user) => {
                                return(
                                    <Tr>
                                        <Td className="admin-cels">user</Td>
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

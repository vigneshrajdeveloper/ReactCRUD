import React, { useEffect, useState } from "react"
import axios from "axios";
import { API } from "../API";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Deletepage() {


    const [Readusers, SetReadusers] = useState([]);
    const getuserdetail = async () => {

        const resp = await axios.get(API + 'users');
        //console.log(resp.data);

        SetReadusers(resp.data);

    }

    useEffect(() => {

        getuserdetail();

    }, []);

    const delusers= async (indx)=>{

        console.log(indx)

        await axios.delete('https://66668f7ba2f8516ff7a3d384.mockapi.io/users/'+indx);
        getuserdetail();
    }



    return (

        <>
            <h1>Delete Page!!!</h1>
            <br>
            </br>

            <Container>
                <Row>

                    <Col>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                    <th>Email</th>
                                    <th>Feedback</th>
                                    <th>status</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Readusers.map((data, indx) =>
                                        <tr key={indx}>
                                    
                                    <td>{data.id}</td>
                                            <td>{data.email}</td>
                                            <td>{data.feedback}</td>
                                            <td>{data.checkbox ? 'followed' : 'not followed'}</td>
                                            <td><Button variant="danger" size="sm" onClick={()=>delusers(data.id)}>Delete</Button></td>
                                        </tr>
                                    )

                                }

                            </tbody>
                        </Table>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>



        </>
    );
}
import React, { useEffect, useState } from "react"
import axios from "axios";
import { API } from "../API";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from "react-router-dom";


export default function Readpage() {

  const [Readusers, SetReadusers] = useState([]);

  const navigate=useNavigate();
  const getuserdetail = async () => {

    const resp = await axios.get(API + 'users');
    //console.log(resp.data);

    SetReadusers(resp.data);

  }

  const updateuser=(data)=>{

    localStorage.setItem('id',data.id);
    localStorage.setItem('email',data.email);
    localStorage.setItem('feedback',data.feedback);
    localStorage.setItem('checkbox',data.checkbox);
    navigate('/update') 
   // console.log(data);



  }


  useEffect(() => {

    getuserdetail();

  }, []);

  return (

    <>

      <h1>Read Page!!!</h1>
      <br></br>
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
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  Readusers.map((data, indx) =>
                    <tr key={indx}>
                      <td >{data.id}</td>
                      <td>{data.email}</td>
                      <td>{data.feedback}</td>
                      <td>{data.checkbox ? 'followed' : 'not followed'}</td>
                      <td><Button variant="success" size="sm" onClick={()=>updateuser(data)}>Edit</Button></td>
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
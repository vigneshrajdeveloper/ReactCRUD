import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Axios  from 'axios';
import { API } from "../API";
import { useNavigate } from "react-router-dom";

export default function Updatepage(){

    const[email,Setemail]=useState('');
    const[feedback,Setfeedback]=useState('');
    const[checkbox,Setcheckbox]=useState();
    

    const[id,Setid]=useState();

    const navigate=useNavigate();

    useEffect(()=>{

        Setemail(localStorage.getItem('email'));
        Setfeedback(localStorage.getItem('feedback'));
        Setcheckbox(localStorage.getItem('checkbox'));
        Setid(localStorage.getItem('id'));
        
        
    },[])

   

    const submitform=(id)=>{

        alert('Form submitted successfully!!!');
    
        Axios.put(API+'users/'+id, {
          email ,feedback,checkbox
        })
        .then(function (response) {
          console.log(response.data);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    
       navigate('/read');
      
    
      }



    return(

        <>
        <h1>Update Page!!!</h1>
        <br></br>
        <Container>
      <Row>
        <Col>
        
      <Form id='userinput'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>Setemail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write your review</Form.Label>
        <Form.Control as="textarea" onChange={(e)=>Setfeedback(e.target.value)}  value={feedback} />
      </Form.Group>

      <Form.Group className="checkbox" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree the terms & conditions " checked={checkbox} onChange={(e)=>Setcheckbox(!checkbox)} />
      </Form.Group>
      <br></br>
      <Button  variant="primary" onClick={()=>submitform(id)}>submit</Button>
      </Form>

      
      
      

        </Col>
        <Col></Col>
      </Row>
      
      </Container>
        </>
    ) ;
}
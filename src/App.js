
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import  Axios  from 'axios';
import { API } from './API';

function App() {

  const[email,Setemail]=useState('');
  const[feedback,SetFeedback]=useState('');
  const[checkbox,Setcheckboxstatus]=useState(false);

  const submitform=(e)=>{

    alert('Form submitted successfully!!!')

    Axios.post(API+'users', {
      email ,feedback,checkbox
    })
    .then(function (response) {
      console.log(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });

    Setemail("");
    SetFeedback("");
    Setcheckboxstatus(false);
  

  }
  
  return (
    <div className="App" >
      
      <h1>Feedback Form</h1>
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
        <Form.Control as="textarea" onChange={(e)=>SetFeedback(e.target.value)}  value={feedback} />
      </Form.Group>

      <Form.Group className="checkbox" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree the terms & conditions " checked={checkbox} onChange={(e)=>Setcheckboxstatus(!checkbox)} />
      </Form.Group>
      <br></br>
      <Button onClick={submitform} variant="primary" >submit</Button>
      </Form>
      
      

        </Col>
        <Col></Col>
      </Row>
      
      </Container>
      
    </div>
  );
}

export default App;

//import { Button } from 'bootstrap';
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import "./Login.css";
function Login() {
    
    return (
      <div>
        
            <div className='row'>
                {/* <Col className='first_col'> */}
                    <Card  className='card_img'>
                        <Card.Img variant="top" src={require("./../AdminComponent/card_img.png")}/>
                        <Card.Body className='cardbody' style={{height:'3px'}} >
                            
                            <Card.Text style={{color:'white'}} >
                            Good things on your way!
                            </Card.Text>

                        </Card.Body>
                    </Card>
                {/* </Col> */}
                {/* <Col className='second_col'> */}
                <Form>
                <Card.Title className='title'>Login</Card.Title>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Employee ID</Form.Label>
    <Form.Control type="email" placeholder="" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>
  
  <Button   variant="primary" type="submit" >
    Login
  </Button>
  <Button variant="secondary" type="cancel">
    Cancel
  </Button>
</Form>
               {/* </Col> */}
            </div>
        
        </div>
    )
}

export default Login;
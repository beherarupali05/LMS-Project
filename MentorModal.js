import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function BatchModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

 

  return (
    <>
      <Button style={{backgroundColor:"#FAA81D",borderColor:"#FAA81D"}} variant="primary" onClick={handleShow}>
        +NewMentor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#086288"}} >Add new mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Mentor Name</Form.Label>
    <Form.Control type="text" placeholder=" " />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Employee ID</Form.Label>
    <Form.Control type="text" placeholder=" " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>E-mail ID</Form.Label>
    <Form.Control type="email" placeholder=" " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Skills</Form.Label>
    {/* <Form.Control type="text" placeholder=" " /> */}
    <Form.Select id="Technologies" defaultValue="Choose...">
                <option>Java</option>
                <option>React Js</option>
                <option>Angular Js</option>
              </Form.Select>
  </Form.Group>
  
  
 
  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  style={{color:"white",backgroundColor:"#086288"}} variant="secondary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default BatchModal;
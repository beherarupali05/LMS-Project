import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function ApproveModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

 

  return (
    <>
   <td>
      <Button style={{backgroundColor:"#FAA81D",borderColor:"#FAA81D", marginRight:"20px"}} variant="primary" onClick={handleShow}>
        Approve
      </Button>  <Button style={{backgroundColor:"#FAA81D",borderColor:"#FAA81D",marginRight:"-100px"}} variant="secondary" onClick={handleShow}>
        Reject
      </Button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#086288"}} >change status</Modal.Title>
        </Modal.Header>

        
        <Modal.Body>
        <Form>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Batch Name</Form.Label>
    {/* <Form.Control type="text" placeholder=" " /> */}
    <Form.Select id="Technologies" defaultValue="Choose...">
                <option> </option>
                <option> </option>
                <option> </option>
              </Form.Select>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Batch ID</Form.Label>
    {/* <Form.Control type="text" placeholder=" " /> */}
    <Form.Select id="Technologies" defaultValue="Choose...">
                <option> </option>
                <option> </option>
                <option> </option>
              </Form.Select>
  </Form.Group>
  
  
 
  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  style={{color:"white",backgroundColor:"#086288"}} variant="secondary" onClick={handleClose}>
        Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ApproveModal;
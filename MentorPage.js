import { InsertRowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { borderColor } from '@mui/system';
import { Breadcrumb, Button, Input, } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
//import React, { useEffect ,useState} from 'react'
import { Table, Navbar, Container, Form, FormControl, Nav, Row, Col } from 'react-bootstrap';
import "./MentorPage.css";
import MentorModal from './MentorModal';





function MentorPage(props) {
  
  
  return (
    <div>
      <Layout>
        <Header>
          <img className='navbarimg' src={require("./../AdminComponent/logo1.png")} alt=" " />

          <Input className='searchbar' placeholder="default size" prefix={<SearchOutlined />} />
          <Button style={{ backgroundColor: "white", color: "#075575", borderColor: "#075575",borderRadius:'5px',fontWeight:'bold' }} >Logout</Button>

        </Header>
        <Layout>
          <Sider style={{ width: "20px" }}><br></br>
            <img className='img1' src={require("./../AdminComponent/group.png")} alt=" " />
            <h1 className='h1'>Batch</h1><br></br><br></br>
            <img src={require("./../AdminComponent/team.png")} alt=" " />
            <h2 className='h2'>Mentor</h2><br></br><br></br>
            <img src={require("./../AdminComponent/add-user.png")} alt=" " />
            <h3 className='h3'>Request</h3>

          </Sider>

          <Content>

            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Mentor List
              </Breadcrumb.Item>
             

            </Breadcrumb>
            <div className='table'>
              <Navbar bg="light" expand="lg">
                <Container fluid>

                  <Navbar.Collapse id="navbarScroll">

                    <Nav.Link href="#action1" style={{color:'#FAA81D'}} >Mentor List</Nav.Link>

                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Q   Search" 
                        className="me-2"
                        aria-label="Search"
                      />
                      <MentorModal/>
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Table >
                <thead>
                  <tr>
                     <th>
                       <input type='checkbox' name='checkbox' />
                     </th>
                    <th>No.</th>
                    <th>Mentor Name</th>
                    <th>Employee ID</th>
                    <th>Email ID</th>
                    <th>Skills</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    <input type='checkbox' name='checkbox' />
                    </td>
                    <td>01</td>
                    <td>Chandan</td>
                    <td></td>
                    <td></td>
                    <td>
                      <button style={{backgroundColor:"#086288", color:"white",borderRadius:'20px',borderColor:"#086288"}} >React</button>
                      <button style={{backgroundColor:"#086288", color:"white",borderRadius:'20px',borderColor:"#086288",marginLeft:'9px'}} >Angular</button><br></br><br></br>
                      <button style={{backgroundColor:"#086288", color:"white",borderRadius:'20px',borderColor:"#086288"}} >Java+Springboot</button><br></br><br></br>
                      <button style={{backgroundColor:"#086288", color:"white",borderRadius:'20px',borderColor:"#086288"}} >Node & Express JS</button>
                    </td>
                    
                   


                    <td><i class="fa-solid fa-pen"></i>  <i class="fa-solid fa-trash" style={{marginLeft:'7px'}} ></i>

                    </td>


                  </tr>
                 
                </tbody>
              </Table>
            </div>
          </Content>
        </Layout>

      </Layout>
    </div>
  )
}

export default MentorPage;
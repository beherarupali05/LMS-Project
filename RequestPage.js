import { InsertRowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { borderColor } from '@mui/system';
import { Breadcrumb, Button, Input, } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { useEffect, useState } from 'react'
import { Table, Navbar, Container, Form, FormControl, Nav, Row, Col } from 'react-bootstrap';
import "./RequestPage.css";
import ApproveModal from './ApproveModal';
// import RejectModal from './RejectModal';





function RequestPage(props) {

    return (
        <div>
            <Layout>
                <Header>
                    <img className='navbarimg' src={require("./../AdminComponent/logo1.png")} alt=" " />

                    <Input className='searchbar' placeholder="default size" prefix={<SearchOutlined />} />
                    <Button style={{ backgroundColor: "white", color: "#075575", borderColor: "#075575", borderRadius: '5px', fontWeight: 'bold' }} >Logout</Button>

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
                                Request List
                            </Breadcrumb.Item>

                        </Breadcrumb>
                        <div className='table'>
                            <Navbar bg="light" expand="lg">
                                <Container fluid>

                                    <Navbar.Collapse id="navbarScroll">

                                        <Nav.Link href="#action1" style={{ color: '#FAA81D' }} >Request List</Nav.Link>

                                        <Form className="d-flex" style={{ width: "300px", marginRight: "450px" }} >
                                            <FormControl
                                                type="search"
                                                placeholder="Q   Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            {/* <ApproveModal/>   */}
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
                                        <th>Employee ID</th>
                                        <th>Employee Name</th>
                                        <th>YOP</th>
                                        <th>Percentage</th>
                                        <th>Experience</th>
                                        <th>contact No.</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type='checkbox' name='checkbox' />
                                        </td>
                                        <td>01</td>
                                        <td>#154234653</td>
                                        <td>Aditi</td>
                                        <td>2022</td>
                                        <td>85%</td>
                                        <td>Fresher</td>
                                        <td>1234567890</td>
                                        <td>
                                            {/* <button style={{ color: "#00811A", borderColor: "#00951E1A", backgroundColor: "#00951E1A", borderRadius: "3px" }} >Approve</button>   <button style={{ color: "#CE000E", backgroundColor: "#CE000E1A", borderColor: "#CE000E1A", borderRadius: "3px" }} >Reject</button> */}
                                           <ApproveModal/> 
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

export default RequestPage;
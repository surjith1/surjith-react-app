import React from 'react'
import {Container, Form, FormControl, Navbar } from 'react-bootstrap';
const MainMiddleContent = () => {
  return <>

  <div className="top-fixed">
  <Navbar bg="light" expand="lg">
<Container fluid>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Form className="d-flex">
<FormControl
  type="search"
  placeholder="Search for..."
  className="form-field"
  aria-label="Search"
/>
</Form>
<button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>

                
</Navbar.Collapse>
</Container>
  </Navbar>
  </div>
  </>

  
}

export default MainMiddleContent;
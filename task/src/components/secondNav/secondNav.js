import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  "./secondNav.css"

function SecondNav() {
  return (
    <>
    <Navbar bg="light" expand="lg" id='secondNav'>
      <Container className='container' fluid>
        <Navbar.Brand href="#">Browse Categories</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> What's New</Nav.Link>
            <Nav.Link href="#action2">Trinding</Nav.Link>
           < Nav.Link href="#action2">For You</Nav.Link>
        
            <Nav.Link href="#" disabled>
            Shop Products
            </Nav.Link>
          </Nav>
          <Form 
           className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container1'>
    <img src="https://mediacdn.grabone.co.nz/asset/hoCwTPgtq5" className='image'/>
    </div>
   

    </>
    
  );
}


export default SecondNav;
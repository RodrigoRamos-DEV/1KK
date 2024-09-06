import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';



function NavScrollExample() {
   
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id="menu" href="/home"> Home</Nav.Link>
            <Nav.Link id="menu"  href="/projeto">Projeto</Nav.Link>
            <Nav.Link id="menu"  href="#action2">Apoiadores</Nav.Link>
            <Nav.Link id="menu"  href="#action2">Compre</Nav.Link>
            <Nav.Link id="menu"  href="https://www.instagram.com/apaginade1kk/?ref=badge">Contato</Nav.Link>
          
              
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
 
}

export default NavScrollExample;
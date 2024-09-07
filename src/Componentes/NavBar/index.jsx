import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import Logo from '../../Img/logo.png';



function NavScrollExample() {
   
  return (
    
      
    
    <Navbar expand="lg" className="bg-body-tertiary">
     
      <Container fluid>
        
     
      
            
            <Nav.Link id="menu" href="/home"> Home</Nav.Link>
            <Nav.Link id="menu"  href="/projeto">Projeto</Nav.Link>
            <Nav.Link id="menu"  href="#action2">Apoiadores</Nav.Link>
            <Nav.Link id="menu"  href="#action2">Compre</Nav.Link>
            <Nav.Link id="menu"  href="https://www.instagram.com/apaginade1kk/?ref=badge">Contato</Nav.Link>
          
              
           
          
       
      </Container>
    </Navbar>
    
  );
 
}

export default NavScrollExample;
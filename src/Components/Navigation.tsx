import { Image, Container, Navbar, Nav } from "react-bootstrap";
import './navigation.css'
import { Link } from 'react-scroll';

const Navigation = () => {
    return(
        <Navbar 
            collapseOnSelect 
            expand='sm'
            bg="light" 
            variant="light"
            fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <Image className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/"><Link to="landingSection">Home</Link></Nav.Link>
                        <Nav.Link href="/rice"><Link to="productSection">Product</Link></Nav.Link>
                        <Nav.Link href="/contact-us"><Link to="contactUsSection">Contact Us</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
import { Image, Container, Navbar, Nav } from "react-bootstrap";
import './navigation.css'

const Navigation = () => {
    return(
        <Navbar 
            collapseOnSelect 
            expand='sm'
            fixed="top"
            style={{backgroundColor: "#f7fff5"}}>
            <Container>
                <Navbar.Brand href="/">
                    <Image className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#products">Product</Nav.Link>
                        <Nav.Link href="/#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
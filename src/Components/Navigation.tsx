import { Image, Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return(
        <Navbar 
            collapseOnSelect 
            expand='sm'
            bg="light" 
            variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/rice">Our Rice</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
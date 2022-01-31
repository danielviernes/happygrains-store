import { Button, Col, Container, Image, Row } from "react-bootstrap";
import './LandingSection.css';

const LandingSection = () => {

    return(
        <Container className='landing-section-container'>
            <Row>
                <Col sm={12}><h1>Clean and delicious rice, right at your doorstep!</h1></Col>
                <Col sm={12}><h3>Available in retail and wholesale.</h3></Col>
                <Col sm={12}><h4>Chat with us for availability and serviceable areas.</h4></Col>
                <Col sm={12}><Button className="order-button">Order Now!</Button></Col>
            </Row>
        </Container>
    )

}

export default LandingSection;
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import './landingSection.css';

const LandingSection = () => {

    return(
        <div id="landingSection" className="section">
            <Container>
                <Row>
                    <Col sm={12}><h1>Clean and delicious rice, right at your doorstep!</h1></Col>
                    <Col sm={12}><h3>Available in retail and wholesale.</h3></Col>
                    <Col sm={12}><h4>Chat with us for availability and serviceable areas.</h4></Col>
                    <Col sm={12}><Button className="order-btn" href="https://m.me/happygrainsbocaue" target="_blank">Order Now!</Button></Col>
                </Row>
            </Container>
        </div>
    )

}

export default LandingSection;
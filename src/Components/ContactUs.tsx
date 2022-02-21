import { Col, Container, Navbar, Row } from "react-bootstrap";
import './contactUs.css';
import StoreGoogleMap from "./StoreGoogleMap";

const ContactUs = () => {
    return(
        <div id="contactUsSection" className="section">
            <Container>
                <div className="inner-container">
                    <Row>
                        <Col sm={12}><h1 className="section-heading hg-orange">Contact Us</h1></Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="gmaps-widget">
                            <StoreGoogleMap />
                        </Col>
                        <Col lg={6} className="contact-infos">
                            <div className="info address"><span className="emoji">&#127968;</span>Blk 62 Lot 28, Villa Zaragosa, Turo, Bocaue Bulacan</div>
                            <div className="info mobile"><span className="emoji">&#128222;</span>0992 723 8034</div>
                            <div className="info email"><span className="emoji">&#128231;</span>happygrainsbocaue@gmail.com</div>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactUs;
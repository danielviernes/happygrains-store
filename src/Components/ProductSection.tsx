import { Image, Col, Container, Row, Button } from "react-bootstrap";
import './productSection.css';

const mainProductImage = () => {
    return process.env.PUBLIC_URL + 'assets/sinandomeng.jpg';
}

const ProductSection = () => {
    return(
        <div className="product-section section">
            <Container>
                <Row>
                    <Col sm={12}><h1 className="section-heading hg-green">Our Rice</h1></Col>
                </Row>
                <Row>
                    <Col sm={5}><Image className="main-product-img" src={mainProductImage()}></Image></Col>
                    <Col sm={7}>
                        <Row>
                            <Col sm={12}>
                                <h3 className="product-name">Test Product</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p className="product-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet egestas lorem. Praesent velit magna, porttitor a lorem id, dignissim  faucibus libero. Vestibulum egestas.</p>
                            </Col>
                        </Row>
                        <Row className="product-buttons-row">
                            <Col>
                                <Button className="order-btn">Order Now!</Button>
                            </Col>
                            <Col>
                                <Button className="share-btn">Share</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductSection;
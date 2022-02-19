import { useEffect, useState } from "react";
import { Image, Col, Container, Row, Button, Form } from "react-bootstrap";
import './productSection.css';
import riceInfoList from '../json/rice-info.json';
import Product from "../Model/Product";

const ProductSection = () => {

    var [selectedRice, setSelectedRice] = useState<Product>(riceInfoList[0]);

    function processFullImgPath() {
        return `${process.env.PUBLIC_URL}/assets/product-${selectedRice.imgName}.JPG`;
    }

    return(
        <div id="productSection" className="section">
            <Container>
                <div className="inner-container">
                    <Row>
                        <Col sm={12}><h1 className="section-heading hg-green">Our Rice</h1></Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Select onChange={e => {setSelectedRice(riceInfoList[+e.target.value])}}>
                                {riceInfoList.map((obj, i) => <option value={i}>{obj.name}</option>)}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}><Image className="main-product-img" src={processFullImgPath()}></Image></Col>
                        <Col sm={7}>
                            <Row>
                                <Col sm={12}>
                                    <h3 className="product-name">{selectedRice.name}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <p className="product-info">{selectedRice.summary}</p>
                                </Col>
                            </Row>
                            <Row className="product-buttons-row">
                                <Col>
                                    <Button className="order-btn" href="https://m.me/happygrainsbocaue" target="_blank">Order Now!</Button>
                                </Col>
                                <Col>
                                    <Button className="share-btn" href="#" target="_blank">Share</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ProductSection;
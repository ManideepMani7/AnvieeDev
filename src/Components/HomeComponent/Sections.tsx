import * as React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import img1 from '../../assets/CategoryImgs/FootImpression.jpg'
import img2 from '../../assets/CategoryImgs/custom_milled.webp'

const Sections: React.FunctionComponent = () => {
    return (
        <>
            <section className='pt-5'>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="my-5 my-md-0">
                            <h2 className="display-4 text-dark">Foot Impression Foam Box for Custom-Made Footwear and Insoles</h2>
                            <p className="text-muted mt-3">
                                At <b>Anviee Medi Solutions</b>, we provide high-quality <b>Foot Impression Foam Boxes</b> designed for creating accurate and custom-fit footwear and insoles. Our foam boxes are an essential tool for healthcare professionals, podiatrists, and footwear specialists looking to offer personalized solutions for diabetic and orthopedic patients, as well as anyone seeking the perfect fit.
                            </p>

                            <Form className="mt-4">
                                <Row className="align-items-center">

                                    <Col xs={12} md={3}>
                                        <Button
                                            type="button"
                                            variant="dark"
                                            className="w-100"
                                        >
                                            Order Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <img
                                src={img1}
                                alt="Foot Impression Foam Box"
                                className="img-fluid rounded"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <br />
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img
                                src={img2}
                                alt="Custom Milled Insoles"
                                className="img-fluid rounded"
                            />
                        </Col>
                        <Col md={6} className="my-5 my-md-0">
                            <h2 className="display-4 text-dark">Custom Milled Insoles</h2>
                            <p className="text-muted mt-3">
                                At <b>Anviee Medi Solutions</b>, we provide high-quality <b>Foot Impression Foam Boxes</b> designed for creating accurate and custom-fit footwear and insoles. Our foam boxes are an essential tool for healthcare professionals, podiatrists, and footwear specialists looking to offer personalized solutions for diabetic and orthopedic patients, as well as anyone seeking the perfect fit.
                            </p>

                            <Form className="mt-4">
                                <Row className="align-items-center">

                                    <Col xs={12} md={3}>
                                        <Button
                                            type="button"
                                            variant="dark"
                                            className="w-100"
                                        >
                                            Order Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                    </Row>
                </Container>
            </section>
            <br />
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="my-5 my-md-0">
                            <h2 className="display-4 text-dark">Foot Impression Foam Box for Custom-Made Footwear and Insoles</h2>
                            <p className="text-muted mt-3">
                                At <b>Anviee Medi Solutions</b>, we provide high-quality <b>Foot Impression Foam Boxes</b> designed for creating accurate and custom-fit footwear and insoles. Our foam boxes are an essential tool for healthcare professionals, podiatrists, and footwear specialists looking to offer personalized solutions for diabetic and orthopedic patients, as well as anyone seeking the perfect fit.
                            </p>

                            <Form className="mt-4">
                                <Row className="align-items-center">

                                    <Col xs={12} md={3}>
                                        <Button
                                            type="button"
                                            variant="dark"
                                            className="w-100"
                                        >
                                            Order Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <img
                                src={img1}
                                alt="Foot Impression Foam Box"
                                className="img-fluid rounded"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Sections
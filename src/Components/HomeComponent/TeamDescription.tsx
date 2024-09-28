import * as React from 'react';
import { Card } from 'react-bootstrap';
import Docimg1 from '../../assets/DocImg/DocImg1.jpg'
import Docimg2 from '../../assets/DocImg/DocImg2.jpg'
import Docimg3 from '../../assets/DocImg/DocImg3.jpg'
import Docimg4 from '../../assets/DocImg/DocImg4.jpg'


const TeamDescription: React.FunctionComponent = () => {
    return (
        <>
            <div className="py-4 bg-primary-section mx-0 team-section">
                <h1 className="text-3xl font-bold text-center">Our Team</h1>
                <p className="mt-2 text-muted text-center mb-4">
                    We’re always here to support you and your family with compassionate and comprehensive care. Trust us to be your partner in maintaining and improving your health.
                </p>
                <div className="row mx-auto">
                    <div className='col-md-3'>
                        <Card className="bg-dark text-white border-0">
                            <Card.Img
                                variant="top"
                                src={Docimg1}
                                alt="Shaik"
                                style={{ height: '342px', objectFit: 'cover' }}
                            />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
                                <Card.Title className="h4">Dr. Shaik Ubedullah</Card.Title>
                                <Card.Text>MBBS, MS Ortho</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className='col-md-3'>
                        <Card className="bg-dark text-white border-0">
                            <Card.Img
                                variant="top"
                                src={Docimg2}
                                alt="Greeshma"
                                style={{ height: '342px', objectFit: 'cover' }}
                            />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
                                <Card.Title className="h4">Dr. Greeshma</Card.Title>
                                <Card.Text>MBBS, MS, OBG</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className='col-md-3'>
                        <Card className="bg-dark text-white border-0">
                            <Card.Img
                                variant="top"
                                src={Docimg3}
                                alt="VIJAYA"
                                style={{ height: '342px', objectFit: 'cover' }}
                            />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
                                <Card.Title className="h4">Dr. VIJAYA BHASKAR.S</Card.Title>
                                <Card.Text>REGENERATIVE MEDICNE SPECIALIST</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className='col-md-3'>
                        <Card className="bg-dark text-white border-0">
                            <Card.Img
                                variant="top"
                                src={Docimg4}
                                alt="Devi"
                                style={{ height: '342px', objectFit: 'cover' }}
                            />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
                                <Card.Title className="h4">Dr. K Devi Vara Prasad</Card.Title>
                                <Card.Text>MBBS, MD(Paediatrics)</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamDescription;
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoadingCircles from "../assets/loadingcircles.svg"
const PollingStation = props => {
    const [candidate1URl, changecandidate1URl] = useState(LoadingCircles,)
    const [candidate2URl, changecandidate2URl] = useState(LoadingCircles,)
    const [showresults,changeResultsDisplay] = useState(true);
    return (
        <Container style={{minHeight:"100vh"}}>
            <Row>
                <Col className='justify-content-center  d-flex'>
                    <Container>
                        <Row style={{ marginTop: "5vh", backgroundColor: "#c4c4c4",maxHeight:"40vh"}}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "4vw",
                                }}>
                                <img style={{ height: '20vh', width: "10vw" }} src={candidate1URl}></img>
                            </div>
                        </Row>
                     { showresults? <Row className='justify-content-center d-flex'
                        style={{marginTop:'5vh'}}
                        >
                            <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '2vw',
                            padding: '40px',
                            backgroundColor: '#c4c4c4'
                        }}>
                            3
                        </div>
                        </Row>:null}
                        <Row className='justify-content-center d-flex' style={{
                            marginTop:"2vh"
                        }}>
                            <Button>Vote</Button>

                        </Row>
                    </Container>
                </Col>
                <Col className='justify-content-center d-flex align-items-center'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '2vw',
                        backgroundColor: '#c4c4c4',
                        height:'20vh',
                        alignItems:'center',
                        textAlign:"center"
                    }}>Who would win in smash bros</div>
                </Col>
                <Col className='justify-content-center  d-flex'>
                    <Container>
                        <Row style={{ marginTop: "5vh", backgroundColor: "#c4c4c4",maxHeight:"40vh"}}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "4vw",
                                }}>
                                <img style={{ height: '20vh', width: "10vw" }} src={candidate2URl}></img>
                            </div>
                        </Row>
                     { showresults? <Row className='justify-content-center d-flex'
                        style={{marginTop:'5vh'}}
                        >
                            <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '2vw',
                            padding: '40px',
                            backgroundColor: '#c4c4c4'
                        }}>
                            3
                        </div>
                        </Row>:null}
                        <Row className='justify-content-center d-flex' style={{
                            marginTop:"2vh"
                        }}>
                            <Button>Vote</Button>

                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default PollingStation;

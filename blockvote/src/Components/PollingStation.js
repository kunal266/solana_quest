import React,{useState} from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import LoadingCircles from "../assets/loadingcircles.svg"
const PollingStation = props => {
    const [candidate1URl,changecandidate1URl] = useState(LoadingCircles,)
    return (
        <Container>
            <Row>
                <Col className='justify-content-center d-flex'>
                    <Container>
                        <Row style={{marginTop:"5vh",backgroundColor:"#c4c4c4"}}>
                            <div
                                style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    padding:"3vw",
                                }}>
                                    <img style={{height:'35vh',width:"20vw"}} src={candidate1URl}></img>
                            </div>
                        </Row>
                        <Row><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8vw',
                            padding:'10px',
                            backgroundColor:'#c4c4c4'
                        }}>3</div></Row>
                        <Row></Row>
                    </Container>
                </Col>

            </Row>
        </Container>
    );
};

export default PollingStation;

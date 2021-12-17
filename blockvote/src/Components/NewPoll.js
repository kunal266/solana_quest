import React, { useRef } from 'react';
import { Container, From, Button, Form } from 'react-bootstrap';
const NewPoll = props => {
    const candidateName1 = useRef();
    const candidateName2 = useRef();
    const candidateName1URL = useRef();
    const candidateName2URL = useRef();
    const promptRef = useRef();
    return (
        <Container style={{ marginTop: "10px", minHeight: "100vh" }}>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 1 name</Form.Label>
                    <Form.Control
                        ref={candidateName1}
                        placeholder='Enter Candidate Name'>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 1 Image URL</Form.Label>
                    <Form.Control
                        ref={candidateName1URL}
                        placeholder='Enter Candidate 1 Image URL'>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 2 name</Form.Label>
                    <Form.Control
                        ref={candidateName2}
                        placeholder='Enter Candidate Name'>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 2 Image URL</Form.Label>
                    <Form.Control
                        ref={candidateName2URL}
                        placeholder='Enter Candidate 2 Image URL'>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Promp</Form.Label>
                    <Form.Control
                        ref={promptRef}
                        placeholder='Add Prompt'>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button variant="primary">Submit</Button>
        </Container>
    );
};

export default NewPoll;


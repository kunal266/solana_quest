import React from 'react';
import {Tab} from "bootstrap";
import {Table,Container,Button} from "react-bootstrap";
const Home = props => {
    const promptList = ["Who would win in Smash Bros?",
"Who is the better actor",];
    return (
        <Container style={{minHeight:"100vh"}}>
                <Table style={{margin:"5vh"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>List of Polls</th>
                            <th>Go to Poll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            promptList.map((el,index)=>{
                                return (<tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el}</td>
                                    <td>{" "}
                                    <Button href='/PollingStation'>Go to Polls</Button></td>
                                </tr>);

                            })
                        }
                    </tbody>

                </Table>
        </Container>

    );
};

export default Home;

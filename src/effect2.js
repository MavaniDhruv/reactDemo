import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Effect2() {

    const [dataa, setdataa] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res =>
                res.json()
            )
            .then(item => {
                setdataa(item.results)
                // console.log(item.results);
            })
    })

    return (
        <Container>
            <Row>
                {
                    dataa.map((item) => {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.species}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Effect2
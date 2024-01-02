import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Cards(prop) {
    return (
        <>
            <Container>
                <Row>
                    {prop.data.map((item) => {
                        return (
                            <Col xs={4} className="cards-bg" >
                                <Card className='card-bg1' style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title className='card-tit'>{item.tit}</Card.Title>
                                        <Card.Text className='card-txt'>{item.txt}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Cards;
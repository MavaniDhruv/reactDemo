import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import Head from './head';
import { useDispatch } from 'react-redux';
import { addproduct } from './counter/counterSlice';

function Dummyapi() {

    const [cate, setcate] = useState([]);
    const [prod, setprod] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setcate(res.data);
            })
        axios.get('https://dummyjson.com/products')
            .then((res1) => {
                setprod(res1.data.products);
            })
    }, [])

    const cateProduct = (cateName) => {
            axios.get(`https://dummyjson.com/products/category/${cateName}`)
                .then((res) => {
                    setprod(res.data.products);
                })
    }

    return (
        <div className="dummy-bg">

            <Head/>

            <Container>
                <Row>
                    <Col className='category-bg' sm={3}>
                        <div className="category-title">All Category</div>
                        <table width={258}>
                            {
                                cate.map((item) => {
                                    return (
                                        <tr>
                                            <th className='category' onClick={()=>{cateProduct(item)}}>{item}</th>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            <Col><input className='dummy-serch' type="text" placeholder='Serch for anything' /><button className='dummy-serch-btn'><FaMagnifyingGlass /></button>
                            <Link style={{ textDecoration: 'none', color:'white', }} to={`/cart`}><button className='main-cart'><MdShoppingCart /></button></Link></Col>
                        </Row>
                        <Row>
                            {
                                prod.map((item) => {
                                    return (
                                        <Col>
                                            <Card style={{ width: '18rem', marginBottom:'50px'}} className='dummy-card'>
                                                <Card.Img variant="top" height={200} src={item.thumbnail} />
                                                <Card.Body>
                                                    <Card.Title style={{ fontWeight: '600' }}>{item.title}</Card.Title>
                                                    <Card.Text style={{ height: '100px', color: '#adb5bd' }}>
                                                        {item.description}
                                                    </Card.Text>
                                                    <div style={{ fontWeight: '600', fontSize: '20px' }} >$ {item.price}
                                                        <div className="addcart ms-2"><Link style={{ textDecoration: 'none', color:'white', }} to={`/product/${item.id}`} ><FiMoreVertical /></Link></div>
                                                        <div className="addcart" onClick={()=>dispatch(addproduct(item))}><MdShoppingCart /></div>
                                                    </div>
                                                    <div className="discount">({item.discountPercentage})%off </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dummyapi;
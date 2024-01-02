import React from 'react'
import Head from './head'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Cart() {

  const productt = useSelector((state) => state.counter.cart)

  return (
    <div className="dummy-bg">
      <Head />
      <Container>
        <Row>
          <Col><div className="cart-head mt-3">Your <div className="cart-head cart-head1">CART</div></div></Col>
        </Row>
        <Row className='cart-head-title'>
          <Col xs={6}>CART ITEM</Col>
          <Col className='ms-2'>Price</Col>
          <Col>Quantity</Col>
          <Col className='ms-3'>Total</Col>
        </Row>
        {
          productt.map((product) => {
            return(
              <Row className='cart-list-bg'>
                <Col xs={2}><Image className="cart-thumb" src={product.thumbnail} /></Col>
                <Col xs={4}>
                  <Row>
                    <Col xs={12}><div className="cart-title">{product.title}</div></Col>
                    <Col xs={12}><div className="cart-cate">Brand : {product.brand}</div></Col>
                    <Col xs={12}><div className="cart-cate">Category : {product.category}</div></Col>
                    <Col xs={12}><div className="cart-cate">Stock : {product.stock}</div></Col>
                  </Row>
                </Col>
                <Col xs={2}><div className="cart-price">$ {product.price}</div>
                  <div className="cart-discount">({product.discountPercentage})%off</div>
                </Col>
                <Col className='ms-3'>
                  <button className='cart-qunt-btn'><FaPlus /></button>
                  <div className="cart-qunt">1</div>
                  <button className='cart-qunt-btn1'><FaMinus /></button>
                </Col>
                <Col><div className="cart-price">$ 9999</div></Col>
              </Row>
            )
          })
        }
      </Container>
    </div>
  )
}

export default Cart
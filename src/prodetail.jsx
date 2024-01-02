import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BsStar } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Prodetail() {
  const [product, setproduct] = useState([])
  const [imgg, setimgg] = useState([])
  const params = useParams();

  const [thumb, setthumb] = useState([product.thumbnail]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        setproduct(res.data);
        setimgg(res.data.images);
        setthumb(res.data.thumbnail);
      })
  }, [])
  return (
    <div className="dummy-bg">
      <Container>
        <Row>
          <Col sm={6}>
            <Row>
              <Col sm={12}><Image className='prode-thumb' src={thumb} /></Col>
              {
                imgg.map((item) => {
                  return (
                    <>
                      <Col sm={3}><Image onClick={(a) => { setthumb(a.target.src) }} className='prode-imgs' width={130} height={120} src={item} /></Col>
                    </>
                  )
                })
              }
            </Row>
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={12}><div className="prode-head">Product Details :</div></Col>
              <Col sm={12}><div className="prode-title">{product.title}</div></Col>
              <Col sm={12}><div className="prode-brn">Brand : {product.brand}</div></Col>
              <Col sm={12}><div className="prode-cate">Category : {product.category}</div></Col>
              <Col sm={12}><div className="prode-desc">Description : {product.description}</div></Col>

              <Col sm={12} className='prode-star-bg'>
                <div className="prode-star"><BsStar /></div>
                <div className="prode-star"><BsStar /></div>
                <div className="prode-star"><BsStar /></div>
                <div className="prode-star"><BsStar /></div>
                <div className="prode-star"><BsStar /></div>
                <div className="prode-star-re"><FaPenFancy /> Write a Review</div>
              </Col>

              <Col sm={12}><div className="prode-stock mt-4">Available Stock : {product.stock}</div></Col>

              <Col sm={12} className='prode-brn mt-4'>Quantity :</Col>
              <Col sm={12} className='prode-star-bg'>
                <button className='prode-qnt-btn1'><FaMinus /></button>
                <div className="prode-qnt-dis">0</div>
                <button className='prode-qnt-btn2'><FaPlus /></button>
              </Col>

              <Col sm={12}><div className="prode-pri">Price : $ {product.price}<div className="prode-dis">({product.discountPercentage})%off</div></div></Col>

              <Col sm={12} className='mt-2'>
                <button className='prode-btn-add'>Add To Cart</button>
                <button className='prode-btn-add ms-4'>Buy it Now</button>
              </Col>

              {/* <Col sm={12}><div className="prode-rate">Rating : {product.rating}</div></Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Prodetail;
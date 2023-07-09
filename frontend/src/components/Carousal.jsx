
import React from 'react'
　　　import Carousel from 'react-bootstrap/Carousel';
　　　import feature1 from '../images/football1.avif'
import feature2 from '../images/football2.avif'
import feature3 from '../images/football3.avif'
　　　
　　　export default function App() {
　　　  return (
　　　    <div>
　　　        <section className="slider container mb-3">
　　　        <Carousel>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= {feature1}
　　　          alt="First slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src={feature2}
　　　          alt="Second slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src={feature3}
　　　          alt="Third slide"
　　　        />
　　　      </Carousel.Item>
　　　    </Carousel>
　　　    </section>
</div>
)
}
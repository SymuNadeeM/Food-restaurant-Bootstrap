import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import manone from "../images/man1.jpg";
import './test.css';

const Testmonial = () => {
  return (
    <>
      <section id='testimonial' >
           <div className="mt-4 testimonial-section">
             <div className="container text-center">
               <div className="text-center py-3">
                  <h2>Testimonial</h2>
               </div>
               <Carousel>
      <Carousel.Item className='carousel-items'>
        <img       
          src={manone}
          alt="First slide"
        />
        <Carousel.Caption className='caption_test'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
        <img
        
          src={manone}
          alt="First slide"
        />
        <Carousel.Caption className='caption_test'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
        <img
        
          src={manone}
          alt="First slide"
        />
        <Carousel.Caption className='caption_test'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
             </div>
           </div>
      </section>
    </>
  );
};

export default Testmonial;
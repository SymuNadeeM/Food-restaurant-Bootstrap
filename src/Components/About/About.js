import React from 'react';
import { BsCheck2Square } from 'react-icons/bs';
import img2 from '../images/2abutpart.jpg';
import img1 from '../images/about2.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <section id='about'>
        <div className="about-section wrapper">
            <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                    <div className="card p-5 rounded border-0">
                       <img src={img1} alt="img_nea" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 text-sec">
                          <h2>
                            We price ourselves on making real food the best from the best ingredients
                          </h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus adipisci voluptas laboriosam ipsa dicta quae et asperiores, facilis natus!</p>
                          <button className='main-btn mt-4' >Learn more</button>
                  </div>
                </div>
            </div>
            <div className="container food-types">
                <div className="row align-items-center">
                   <div className="col-lg-5 col-md-12 text-sec mb-lg- mb-5">
                    <h2>We make everything by hand with the best possible ingredients</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti cupiditate quibusdam, enim molestiae suscipit asperiores corrupti debitis quisquam, quis veniam itaque non dolores quas at!</p>
                    <ul className='list-unstyled p-3'>
                      <li> <BsCheck2Square className='checkMark'/> It has survived not only five centuries</li>
                      <li> <BsCheck2Square className='checkMark'/> Letraset sheets containing Lorem</li>
                      <li> <BsCheck2Square className='checkMark'/> Contrary to popular belief,</li>
                      <li> <BsCheck2Square className='checkMark'/> Richard McClintock, a Latin professor</li>
                    </ul>
                    <button className='main-btn mt-4'>Learn More</button>
                   </div>
                   <div className="col-lg-7 col-md-12">
                      <div className="card border-0">
                          <img src={img2} alt="" />
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
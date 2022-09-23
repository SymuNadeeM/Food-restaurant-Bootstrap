import React from 'react';
import exlo2 from '../images/berger.jpg';
import exlo1 from '../images/sandwice.jpg';
import exlo3 from '../images/twist.jpg';
import "./Explor.css";

const Explor = () => {
  return (
    <>
      <section>
        <div className="explore-section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                    <div className="text-content text-center p-5">
                       <h2>Explore Our Food</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum repellat ipsa quibusdam blanditiis dolorum illo, laboriosam recusandae officia sapiente! Illo, veniam. Ab vitae sit eveniet fugiat quam possimus minima!</p>
                    </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                    <div className="card p-2">
                        <img src={exlo1} alt="" className='img-fluid' />
                        <div className="pt-3">
                          <h4>Rainbow Vegetable Sandwich</h4>
                          <p>Time: 15-20 Minutes | Serves: 1</p>
                          <span>$10.50 <del>$11.70</del></span>
                          <button className='mt-4 main-btn' >Order Now</button>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                    <div className="card p-2">
                        <img src={exlo2} alt="" className='img-fluid' />
                        <div className="pt-3">
                          <h4>Vegetarian Burger</h4>
                          <p>Time: 30-40 Minutes | Serves: 1</p>
                          <span>$10.50 <del>$11.70</del></span>
                          <button className='mt-4 main-btn' >Order Now</button>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                    <div className="card p-2">
                        <img src={exlo3} alt="" className='img-fluid' />
                        <div className="pt-3">
                          <h4>Raspberry Stuffed Toast</h4>
                          <p>Time: 10-20 Minutes | Serves: 1</p>
                          <span>$10.50 <del>$11.70</del></span>
                          <button className='mt-4 main-btn' >Order Now</button>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Explor;
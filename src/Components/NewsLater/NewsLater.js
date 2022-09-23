import React from 'react';
import "./News.css";

const NewsLater = () => {
  return (
    <>
      <section id='newslater'>
            <div className="newslet-section">
               <div className="container">
                 <div className="row">
                  <div className="col-sm-12">
                     <div className="text-content text-center pb-4">
                      <h2> Hurry up! Subscribe our newsletter and get 25% <strong>OFF</strong></h2>
                      <p>Limited time offer for this month.No credit card required</p>
                      <form className="newsletter">
                            <div className="row">
                               <div className="col-md-8 col-12">
                                <input className='form-control' type="email" placeholder='Email Address' name='email' />

                               </div>
                               
                                <div className="col-md-4 col-12 submit_button">
                                   <button className='main-btn' type='submit'>Submit</button>
                                </div>
                            </div>
                      </form>
                     </div>
                  </div>
                 </div>
               </div>
            </div>
      </section>
    </>
  );
};

export default NewsLater;
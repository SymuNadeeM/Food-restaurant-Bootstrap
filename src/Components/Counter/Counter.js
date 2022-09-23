import React from 'react';
import CountUp from 'react-countup';
import './counter.css';

const Counter = () => {
  return (
    <>
      <section id='counter'>
            <div className="counter_section">
               <div className="container">
                <div className="row count_sm text-center">
                         <div className="col-md-3  mb-lg-0 mb-md-0 mb-5">
                         <h2>
                           <span><CountUp end={1200}  duration={2.75} />+</span>
                         </h2>
                         <p>SAVING</p>
                         </div>
                         <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                         <h2>
                         <span><CountUp end={4250}  duration={2.75} />+</span>
                         </h2>
                         <p>PHOTOS</p>
                         </div>
                         <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                         <h2>
                         <span><CountUp end={1354}  duration={2.75} />+</span>
                         </h2>
                         <p>ROCKETS</p>
                         </div>
                         <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                         <h2>
                         <span><CountUp end={5300}  duration={2.75} />+</span>
                         </h2>
                         <p>GLOBES</p>
                         </div>
                </div>
               </div>
            </div>
      </section>
    </>
  );
};

export default Counter;
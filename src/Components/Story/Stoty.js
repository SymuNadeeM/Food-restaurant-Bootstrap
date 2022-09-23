import React from 'react';
import './story.css';

const Stoty = () => {
  return (
    <>
      <section is='story'>
            <div className="story-section">
              <div className="container">
                 <div className="row">
                  <div className="col-sm-12">
                      <div className="text-content">
                         <h2>When a mans stomach is full it makes no differece <br/> whether he is rich or poor</h2>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero atque cum odio modi facere voluptates sint voluptatum earum.</p>
                         <button className='main-btn mt-3'>Read More</button>
                      </div>
                  </div>
                 </div>
              </div>
            </div>
      </section>
    </>
  );
};

export default Stoty;
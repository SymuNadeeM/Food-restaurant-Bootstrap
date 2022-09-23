import React from 'react';
import { AiOutlineRight, AiOutlineShoppingCart } from 'react-icons/ai';
import './Banner.css';



const Topbanner = () => {
  return (
    <>
      <section id='banner' >
       <div className="container-fluid px-0 top_banner">
             <div className="container">
              <div className="row">
                 <div className="col-lg-5 col-md-6">
                     <h1>Good food choices are good investments</h1>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, adipisci soluta nisi modi optio repellendus dolore necessitatibus excepturi aliquid dignissimos!</p>
                     <div className="mt-4">
                    
                         <button className="main-btn">Order Now <AiOutlineShoppingCart/></button>
                         <button className="white-btn ms-lg-4 mt-lg-0 mt-4">Order Now <AiOutlineRight/></button>
                      
                     </div>
                 </div>
                 
              </div>
             </div>
       </div>
      </section>
    </>
  );
};

export default Topbanner;
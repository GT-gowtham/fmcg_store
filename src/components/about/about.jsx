import React from 'react';

import './about.css';

import About from "../assets/about.jpeg";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img 
          src={About} 

          
        //   alt="Team" 
          className="about-us-image"
        />
      </div>
      <div className="quote-container">
        <h1 className="quote-title">About Us</h1>
        <p className="quote-text">
          "HI-FI ITPARK- FastMovingConsumerGoods.." 
          <br />
        </p>
        <p className="about-us-description">
        The Fast-Moving Consumer Goods (FMCG) sector is a vital component of the global economy, 
        encompassing products that are sold quickly and at relatively low cost.
         These goods include everyday items such as packaged foods, beverages, toiletries, 
         over-the-counter drugs, and other consumables. FMCG products are characterized by their 
         high turnover, frequent purchases, and short shelf life. The industry is highly 
         competitive, driven by strong brand loyalty, price sensitivity, and widespread 
         distribution networks. Companies in this sector rely on extensive marketing and
          advertising to capture consumer attention and maintain market share. 
          Innovation in product development and packaging plays a crucial
           role in meeting evolving consumer preferences. The FMCG sector also faces 
           challenges such as fluctuating raw material costs, regulatory pressures, 
           and the need for sustainable practices. Despite these challenges, the industry 
           remains resilient, with consistent demand driven by population growth, urbanization, 
           and rising disposable incomes. As consumers increasingly prioritize convenience, 
           health, and sustainability, FMCG companies are adapting to these trends through 
           digital transformation, e-commerce expansion, and the introduction of eco-friendly 
           products. The sector's 
        dynamic nature ensures its continued relevance in the global marketplace.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

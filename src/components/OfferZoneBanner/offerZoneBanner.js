import React from 'react';
import './offerZoneBanner.css';
import { Link } from 'react-router-dom';


const trendingOffers = [
  { id: 1, title: "50% Off on Electronics", description: "Grab the best deals on the latest gadgets!", link: "/electronics" },
  { id: 2, title: "Buy 1 Get 1 Free", description: "Fashionable apparel at unbeatable prices!", link: "/fashion" },
  { id: 3, title: " Discounts on HomeCare Products", description: "Upgrade your home with top deals!", link: "/home-appliances" },
  { id: 4, title: "Flash Sale: Limited Time Offers", description: "Exclusive discounts on top brands!", link: "/flash-sale" },
  { id: 5, title: " Discounts on HomeCare Products", description: "Upgrade your home with top deals!", link: "/home-appliances" },
 
  
];

const OfferZoneBanner = () => {
  return (
    <div >
    
      <h1>Trending Offers</h1>
      <div className="offers-list">
        {trendingOffers.map((offer) => (
          <div key={offer.id} className="offer-item">
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <a href={offer.link} className="shop-now-btn"><Link to="/offerproduct"> Shop Now</Link></a>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferZoneBanner;
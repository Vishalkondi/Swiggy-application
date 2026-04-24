import React from 'react';
import './RestaurentChain.css';

const restaurants = [
  {
    name: "Alakapuri",
    offer: "10% OFF UPTO ₹40",
    rating: 4.4,
    cuisine: "South Indian, Kerala, North Indian",
    location: "Kakkanad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k2why61tsxk9sh0sl68d"
  },
  {
    name: "Galaxy Family Restaurant",
    offer: "FREE ITEM",
    rating: 4.4,
    cuisine: "Kerala, South Indian, Chinese, North Indian",
    location: "Kakkanad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jys7zsopl1sjy2wwxadd"
  },
  {
    name: "Aryaas",
    offer: "",
    rating: 4.4,
    cuisine: "South Indian, North Indian, Chinese",
    location: "Kakkanad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xejp6fugbtzu08vpfqmu"
  },
  {
    name: "Subway",
    offer: "50% OFF UPTO ₹100",
    rating: 3.9,
    cuisine: "Healthy Food, Salad, Snacks",
    location: "Kakkanad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"
  },
  {
    name: "KFC",
    offer: "20% OFF UPTO ₹50",
    rating: 4.1,
    cuisine: "American, Burgers, Biryani, Snacks",
    location: "Kakkanad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
  },
  {
    name: "McDonald's",
    offer: "",
    rating: 4.3,
    cuisine: "Burger, Beverages, Cafe, Desserts",
    location: "Kakkanad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"
  }
];

function RestaurentChain() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='w-75'>
        
        {/* Section Title */}
        <h4 className='fw-bolder'>Top Restaurant Chains in Kochi</h4>

        {/* Cards Container */}
        <div
          style={{ gap: "50px", overflowX: "auto" }}
          className='d-flex align-items-center'
        >
          {restaurants.map((item, index) => (
            <div key={index} className='Hotel-card'>
              
              {/* Image Section */}
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className='Hotel-Card-img'
              >
                <div className='Hotel-color'>
                  {item.offer && (
                    <h4 className='fw-bolder'>{item.offer}</h4>
                  )}
                </div>
              </div>

              {/* Details */}
              <h5 className='mt-3'>{item.name}</h5>

              <div>
                <i
                  style={{ color: "#20963a" }}
                  className="fa-solid fa-star"
                  aria-hidden="true"
                ></i>
                <span className='ms-1'>{item.rating}</span>
              </div>

              <p style={{ fontWeight: "300" }}>
                {item.cuisine} <br />
                {item.location}
              </p>

            </div>
          ))}
        </div>

        <hr style={{ width: "100%", marginTop: "-50px" }} />
      </div>
    </div>
  );
}

export default RestaurentChain;
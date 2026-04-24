import React from 'react';
import './RestaurentOnline.css';

const restaurants = [
  {
    name: "The Good Bowl",
    offer: "40% OFF UPTO ₹80",
    rating: 4.0,
    cuisine: "Biryani, North Indian, Pastas, Punjabi",
    location: "Chittethukara",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a"
  },
  {
    name: "Sweet Truth - Cake",
    offer: "60% OFF UPTO ₹120",
    rating: 3.9,
    cuisine: "Snacks, Bakery, Desserts, Beverages",
    location: "Chittethukara",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a3b48488e3aa9bda13efd8cfcd95284"
  },
  {
    name: "Frozen Bottle",
    offer: "25% OFF UPTO ₹125",
    rating: 4.1,
    cuisine: "Desserts, Beverages, Ice Cream",
    location: "Ernakulam",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fx2mgrbp4ifryi76pgef"
  },
  {
    name: "Faasos",
    offer: "50% OFF UPTO ₹100",
    rating: 3.7,
    cuisine: "Kebabs, Fast Food, Snacks",
    location: "Chittethukara",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348"
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

function RestaurentOnline() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='w-75'>

        {/* Title */}
        <h4 className='fw-bold'>
          Restaurants with online food delivery in Kochi
        </h4>

        {/* Filter Buttons */}
        <div className='buttonsoffiltering' style={{ gap: "10px" }}>
          <button>Filter <i className="fa-solid fa-gears"></i></button>
          <button>Sort by <i className="fa-solid fa-angle-down"></i></button>
          <button>Fast Delivery</button>
          <button>New On Swiggy</button>
          <button>Rating 4.0+</button>
          <button>Pure Veg</button>
          <button>Offers</button>
          <button>₹300 - ₹600</button>
          <button>Less than ₹300</button>
        </div>

        {/* Cards */}
        <div id='Card-section' className='d-flex flex-wrap gap-4 mt-4'>

          {restaurants.map((item, index) => (
            <div key={index} className='Online-card'>

              {/* Image */}
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className='Online-Card-img'
              >
                <div className='Online-color'>
                  {item.offer && (
                    <h4 className='fw-bolder'>{item.offer}</h4>
                  )}
                </div>
              </div>

              {/* Details */}
              <h5 className='mt-3'>{item.name}</h5>

              <div>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#20963a" }}
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

        <hr />
      </div>
    </div>
  );
}

export default RestaurentOnline;
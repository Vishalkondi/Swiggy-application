import React from 'react';
import './BestRes.css';

const cities = [
  "Bangalore", "Pune", "Mumbai", "Delhi",
  "Hyderabad", "Kolkata", "Chennai", "Chandigarh",
  "Ahmedabad", "Jaipur", "Nagpur"
];

const cuisines = [
  "Chinese", "South Indian", "Indian", "Kerala",
  "Korean", "North Indian", "Seafood", "Bengali",
  "Punjabi", "Italian", "Andhra"
];

function BestRest() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
      <div style={{ width: "85%" }}>

        {/* Cities Section */}
        <h4 className='fw-bold'>Best Places to Eat Across Cities</h4>

        <div className='d-flex flex-wrap gap-3 mt-3'>
          {cities.map((city, index) => (
            <button key={index}>
              Best Restaurant in {city}
            </button>
          ))}
          <button>
            Show More <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>

        {/* Cuisine Section */}
        <h4 className='fw-bold mt-5'>Best Cuisines Near Me</h4>

        <div className='d-flex flex-wrap gap-3 mt-3'>
          {cuisines.map((cuisine, index) => (
            <button key={index}>
              {cuisine} Restaurant Near Me
            </button>
          ))}
          <button>
            Show More <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>

        {/* Explore Section */}
        <h4 className='fw-bold mt-5'>
          Explore Every Restaurant Near Me
        </h4>

        <div className='d-flex flex-wrap gap-3 mt-3'>
          <button>Explore Restaurants Near Me</button>
          <button>Explore Top Rated Restaurants Near Me</button>
        </div>

      </div>
    </div>
  );
}

export default BestRest;
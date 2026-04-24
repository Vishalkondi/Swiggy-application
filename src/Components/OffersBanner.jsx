import React from 'react';
import './OfferBanner.css';

import banner1 from '../Photos/Banner1.png';
import banner2 from '../Photos/Banner2.png';
import banner3 from '../Photos/Banner3.png';
import banner4 from '../Photos/Banner4.png';

const banners = [banner1, banner2, banner3, banner4];

const categories = [
  { name: "Pothichoru", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/e20c602ba8ed5d8ec2204e7a7b19d9f6" },
  { name: "Biryani", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" },
  { name: "Burger", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" },
  { name: "Pizza", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" },
  { name: "South Indian", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" },
  { name: "Chinese", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" },
  { name: "North Indian", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png" },
  { name: "Shawarma", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" },
  { name: "Desserts", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667630/PC_Creative%20refresh/Desserts_2.png" },
  { name: "Shakes", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" },
  { name: "Ice Creams", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" }
];

function OffersBanner() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>

      {/* Banner Section */}
      <div className='w-75'>
        <h4 className='fw-bolder'>Best offers for you</h4>

        <div
          id='banner-img'
          className='d-flex align-items-center'
          style={{ overflowX: "auto", gap: "20px" }}
        >
          {banners.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Offer Banner ${index + 1}`}
              width="450"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className='w-75 mt-5'>
        <h4 className='fw-bolder'>What's on your mind today?</h4>

        <div
          className='d-flex align-items-center'
          style={{ overflowX: "auto", gap: "20px" }}
        >
          {categories.map((item, index) => (
            <div key={index} className='text-center'>
              <img
                className='img-fluid'
                width="140"
                src={item.img}
                alt={item.name}
                loading="lazy"
              />
              <p className='mt-2 small'>{item.name}</p>
            </div>
          ))}
        </div>

        <hr />
      </div>
    </div>
  );
}

export default OffersBanner;
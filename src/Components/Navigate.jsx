import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Navigate.css';

function Navigate() {
  return (
    <nav>
      <Row className='w-100 pt-3 pb-2 shadow align-items-center'>

        {/* Left Section */}
        <Col xs={12} md={6}>
          <div
            id='Nav-logo'
            className='d-flex align-items-center justify-content-center justify-content-md-start gap-3'
          >
            <img
              width="55"
              src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"
              alt="Swiggy Logo"
            />

            <p className='mb-0 small'>
              <span className='fw-bold text-decoration-underline'>
                Amalapuram
              </span>{' '}
              10-34, Shankar-matam Veedhi...
            </p>

            <i
              className="fa-solid fa-angle-down"
              style={{ color: "#e78838" }}
              aria-hidden="true"
            ></i>
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={12} md={6}>
          <div
            id='Nav-icons'
            className='d-flex justify-content-around justify-content-md-between align-items-center mt-3 mt-md-0'
          >
            <p className='mb-0'>
              <i className="fa-solid fa-magnifying-glass me-1"></i>
              Search
            </p>

            <p className='mb-0'>
              <i className="fa-solid fa-percent me-1"></i>
              Offers
              <sup style={{ color: "#fda502" }}>New</sup>
            </p>

            <p className='mb-0'>
              <i className="fa-solid fa-bowl-food me-1"></i>
              Help
            </p>

            <p className='mb-0'>
              <i className="fa-regular fa-user me-1"></i>
              Profile
            </p>

            <p className='mb-0'>
              <i className="fa-solid fa-cart-shopping me-1"></i>
              Cart
            </p>
          </div>
        </Col>

      </Row>
    </nav>
  );
}

export default Navigate;
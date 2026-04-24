import React from 'react';
import logo from '../Photos/Logo.png';

function Footer() {
  return (
    <footer className='w-100'>

      {/* App Download Section */}
      <section
        style={{ backgroundColor: "#f1f0f4" }}
        className='d-flex justify-content-center align-items-center py-4'
      >
        <div className='w-75 d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start gap-3'>

          <h3
            style={{ letterSpacing: "-.5px", fontWeight: 900, color: "#41444a" }}
          >
            For better experience, download <br />
            the Swiggy app now
          </h3>

          <div className='d-flex gap-3'>
            <img
              width="180"
              height="60"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Download from Play Store"
              className='img-fluid'
            />
            <img
              width="180"
              height="60"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="Download from App Store"
              className='img-fluid'
            />
          </div>

        </div>
      </section>

      {/* Main Footer */}
      <section
        style={{ backgroundColor: "#02050c" }}
        className='d-flex justify-content-center align-items-center py-5'
      >
        <div className='w-75 row text-white'>

          {/* Logo Section */}
          <div className='col-12 col-md-3 mb-4'>
            <div className='d-flex align-items-center'>
              <img width="30" src={logo} alt="Swiggy Logo" />
              <h3 className='fw-bolder ms-2 mb-0'>Swiggy</h3>
            </div>
            <p className='mt-2 text-secondary'>
              © 2023 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          {/* Company */}
          <div className='col-6 col-md-3 mb-4 text-secondary'>
            <h5 className='text-white'>Company</h5>
            <p>About</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Genie</p>
          </div>

          {/* Contact */}
          <div className='col-6 col-md-3 mb-4 text-secondary'>
            <h5 className='text-white'>Contact Us</h5>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>

            <h5 className='text-white mt-4'>Legal</h5>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>

          {/* Cities */}
          <div className='col-12 col-md-3 text-secondary'>
            <h5 className='text-white'>We deliver to:</h5>
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>

            <button
              className='mt-2'
              style={{
                padding: "10px",
                background: "transparent",
                color: "#9e9e9e",
                border: "1px solid rgba(196, 198, 202, 0.1)",
                borderRadius: "20px"
              }}
            >
              589 cities <i className="ms-2 fa-solid fa-angle-down"></i>
            </button>
          </div>

        </div>
      </section>

    </footer>
  );
}

export default Footer;
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import heroImg from './assets/img/pexels-pixabay-267507.jpg';

const Header = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand-md navbar-light bg-light fixed-top'
        id='navbar-scroll'
      >
        <div className='container'>
          <a href='#' className='navbar-brand'>
            indexter
          </a>
          <button
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarToggle'
          >
            <FaBars />
          </button>
          <div className='collapse navbar-collapse' id='navbarToggle'>
            <ul className='navbar-nav ms-auto my-3 my-md-0 '>
              <li className='nav-item'>
                <a href='#home' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='#about' className='nav-link'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='#services' className='nav-link'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a href='#pricing' className='nav-link'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id='home' className='container'>
        <div className='row min-vh-100'>
          <div className='col-lg-6 d-flex flex-column justify-content-center order-1 order-lg-0'>
            <h1 className='fw-bold pb-4 ' data-aos='fade-up'>
              we offer modern solutions for growing your business
            </h1>
            <h3 className='fs-4 pb-4' data-aos='fade-up' data-aos-delay='200'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              alias, earum a maiores eius unde!
            </h3>
            <div data-aos='fade-up' data-aos-delay='300'>
              <a href='#about' className='btn btn-info btn-lg text-white'>
                Get Started <BsArrowRight className='ms-3' />
              </a>
            </div>
          </div>

          <div className='col-lg-6 d-flex align-self-center '>
            <img
              src={heroImg}
              className='img-fluid heroImg'
              data-aos='fade-left'
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

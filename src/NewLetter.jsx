import React from 'react';
import heroImg1 from './assets/img/pexels-steve-johnson-861414.jpg';
const NewLetter = () => {
  return (
    <div
      className='py-5'
      style={{
        background: `url(${heroImg1})fixed`,
      }}
    >
      <div className='container text-white'>
        <div className='row py-5 d-flex align-items-center '>
          <div className='col-lg-9'>
            <h2 className='fw-bold fs-3 pb-3'>Subscribe To Newletter</h2>
            <p data-aos='zoom-in-down'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              perferendis sapiente dolore accusantium vero aspernatur,
              blanditiis minima nulla? Voluptatibus, totam.
            </p>
          </div>
          <div className='col-lg-3 text-lg-center' data-aos='fade-left'>
            <a
              href=''
              className='btn btn-outline-info rounded-pill text-white'
              data-bs-target='#ourModal'
              data-bs-toggle='modal'
            >
              Subsribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;

import React from 'react';
import { FaFileArchive } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      <section id='services' className='container py-5'>
        <div className='text-center py5'>
          <h2
            className='fw-bolder border-bottom border-info border-3 d-inline-block pb-1'
            data-aos='zoom-in'
          >
            Services
          </h2>
          <p className='fs-5 mt-3' data-aos='zoom-in-up'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolore optio nemo illo!
          </p>
        </div>
        <div className='row pb-5'>
          <div
            className='col-lg-4 col-md-6 mb-4'
            data-aos='fade-up-left'
            data-aos-delay='100'
          >
            <div className='shadow-lg p-5 text-center border-bottom border-4 border-success'>
              <FaFileArchive className='fs-1 text-success  pt-2' />
              <h4 className='fw-bolder fs-3 pb-3'>Wed Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi nostrum aut at rem, recusandae, deserunt numquam vel
                similique obcaecati debitis nisi laudantium officiis culpa?
                Quae.
              </p>
              <a href='#' className='text-success fw-bold text-decoration-none'>
                Read More <FaLongArrowAltRight className='ms-1' />
              </a>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 mb-4'
            data-aos='fade-up-right'
            data-aos-delay='200'
          >
            <div className='shadow-lg p-5 text-center border-bottom border-4 border-danger'>
              <FaFileArchive className='fs-1 text-danger  pt-2' />
              <h4 className='fw-bolder fs-3 pb-3'>Wed Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi nostrum aut at rem, recusandae, deserunt numquam vel
                similique obcaecati debitis nisi laudantium officiis culpa?
                Quae.
              </p>
              <a href='#' className='text-danger fw-bold text-decoration-none'>
                Read More <FaLongArrowAltRight className='ms-1' />
              </a>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 mb-4'
            data-aos='fade-up-left'
            data-aos-delay='300'
          >
            <div className='shadow-lg p-5 text-center border-bottom border-4 border-warning'>
              <FaFileArchive className='fs-1 text-warning  pt-2' />
              <h4 className='fw-bolder fs-3 pb-3'>Wed Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi nostrum aut at rem, recusandae, deserunt numquam vel
                similique obcaecati debitis nisi laudantium officiis culpa?
                Quae.
              </p>
              <a href='#' className='text-warning fw-bold text-decoration-none'>
                Read More <FaLongArrowAltRight className='ms-1' />
              </a>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 mb-4'
            data-aos='fade-up-right'
            data-aos-delay='400'
          >
            <div className='shadow-lg p-5 text-center border-bottom border-4 border-danger'>
              <FaFileArchive className='fs-1 text-danger  pt-2' />
              <h4 className='fw-bolder fs-3 pb-3'>Wed Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi nostrum aut at rem, recusandae, deserunt numquam vel
                similique obcaecati debitis nisi laudantium officiis culpa?
                Quae.
              </p>
              <a href='#' className='text-danger fw-bold text-decoration-none'>
                Read More <FaLongArrowAltRight className='ms-1' />
              </a>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 mb-4'
            data-aos='fade-up-left'
            data-aos-delay='500'
          >
            <div className='shadow-lg p-5 text-center border-bottom border-4 border-info'>
              <FaFileArchive className='fs-1 text-info  pt-2' />
              <h4 className='fw-bolder fs-3 pb-3'>Wed Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi nostrum aut at rem, recusandae, deserunt numquam vel
                similique obcaecati debitis nisi laudantium officiis culpa?
                Quae.
              </p>
              <a href='#' className='text-info fw-bold text-decoration-none'>
                Read More <FaLongArrowAltRight className='ms-1' />
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-4' data-aos='fade-up-right' data-aos-delay='600'>
            <div className='shadow-lg p-5 text-center border-bottom border-4 border-success'>
              <FaFileArchive className='fs-1 text-success  pt-2' />
              <h4 className='fw-bolder fs-3 pb-3'>Wed Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi nostrum aut at rem, recusandae, deserunt numquam vel
                similique obcaecati debitis nisi laudantium officiis culpa?
                Quae.
              </p>
              <a href='#' className='text-success fw-bold text-decoration-none'>
                Read More <FaLongArrowAltRight className='ms-1' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

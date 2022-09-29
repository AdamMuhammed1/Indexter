import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
const Statistics = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 mb-4'>
          <div
            className='d-flex justify-content-around shadow-lg align-items-center p-4 rounded'
            data-aos='fade-up'
            data-aos-delay='10'
          >
            <div>
              <BsEmojiSmile className='text-primary fs-2' />
            </div>
            <div>
              <p className='fs-1 fw-bolder mb-0'>242</p>
              <p className='mb-1'>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 mb-4'>
          <div
            className='d-flex justify-content-around shadow-lg align-items-center p-4 rounded'
            data-aos='fade-up'
            data-aos-delay='150'
          >
            <div>
              <FaTrophy className='text-success fs-2' />
            </div>
            <div>
              <p className='fs-1 fw-bolder mb-0'>243 </p>
              <p className='mb-1'>Awards won</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 mb-4'>
          <div
            className='d-flex justify-content-around shadow-lg align-items-center p-4 rounded'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div>
              <FaFileInvoice className='text-danger fs-2' />
            </div>
            <div>
              <p className='fs-1 fw-bolder mb-0'>244</p>
              <p className='mb-1'>Project Done</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 mb-4'>
          <div
            className='d-flex justify-content-around shadow-lg align-items-center p-4 rounded'
            data-aos='fade-up'
            data-aos-delay='450'
          >
            <div>
              <FaUserFriends className='text-info fs-2' />
            </div>
            <div>
              <p className='fs-1 fw-bolder mb-0'>245</p>
              <p className='mb-1'>Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

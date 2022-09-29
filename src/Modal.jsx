import React from 'react';

const Modal = () => {
  return (
    <div className='modal fade text-dark' id='ourModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              Subscribe To Our Newletter
            </h5>
            <button
              className='btn-close'
              data-bs-dismiss='modal'
              arial-label='close'
            ></button>
          </div>
          <div className='modal-body '>
            <form action=''>
              <div className='mb-3'>
                <label htmlFor='name ' className='col-form-label'>
                  Your Name:
                </label>
                <input type='text' className='form-control' id='name' />
              </div>
              <div className='mb-3'>
                <label htmlFor='email ' className='col-form-label'>
                  Your Email:
                </label>
                <input type='text' className='form-control' id='email' />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              className='btn btn-outline-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button className='btn btn-info text-white'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

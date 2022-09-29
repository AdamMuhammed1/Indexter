import React from 'react';

const Pricing = () => {
  return (
    <>
      <section id='pricing' className='container py-5'>
        <div className='text-center py-5'>
          <h2
            className='fw-bolder border-bottom border-3 d-inline-block border-info pb-1'
            data-aos='fade-down'
          >
            Pricing
          </h2>
          <p className='fs-3 mt-3' data-aos='fade-up'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            possimus!
          </p>
        </div>
        <div className='row pb-5'>
          <div className='col-lg-4 mb-4' data-aos='fade-left'>
            <div className='text-center p-5 shadow-lg'>
              <h4 className='fw-bold py-3'>Free Plan</h4>
              <p className='fs-1 fw-bolder mb-0'>$00</p>
              <p className='text-info fw-bolder'>per month</p>
              <div className='list py-3'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Quamadipiscing proin</li>
                  <li className='list-group-item'>
                    Nulla at volutpat diam uteera
                  </li>
                  <li className='list-group-item'>
                    Massa ultricies mi quis hendrerit
                  </li>
                  <li className='list-group-item text-decoration-line-through'>
                    Nec feugiat nisl pretium
                  </li>
                  <li className='list-group-item text-decoration-line-through'>
                    Pharetra massa massa ultricies
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 mb-4'
            data-aos='fade-right'
            data-aos-delay='150'
          >
            <div className='text-center p-5 shadow-lg border-top border-bottom border-info border-4'>
              <h4 className='fw-bold py-3'>Single Plan</h4>
              <p className='fs-1 fw-bolder mb-0'>$49</p>
              <p className='text-info fw-bolder'>per month</p>
              <div className='list py-3'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Quamadipiscing proin</li>
                  <li className='list-group-item'>
                    Nulla at volutpat diam uteera
                  </li>
                  <li className='list-group-item'>
                    Massa ultricies mi quis hendrerit
                  </li>
                  <li className='list-group-item '>Nec feugiat nisl pretium</li>
                  <li className='list-group-item text-decoration-line-through'>
                    Pharetra massa massa ultricies
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 mb-4'
            data-aos='fade-left'
            data-aos-delay='300'
          >
            <div className='text-center p-5 shadow-lg'>
              <h4 className='fw-bold py-3'>Team Plan</h4>
              <p className='fs-1 fw-bolder mb-0'>$99</p>
              <p className='text-info fw-bolder'>per month</p>
              <div className='list py-3'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Quamadipiscing proin</li>
                  <li className='list-group-item'>
                    Nulla at volutpat diam uteera
                  </li>
                  <li className='list-group-item'>
                    Massa ultricies mi quis hendrerit
                  </li>
                  <li className='list-group-item '>Nec feugiat nisl pretium</li>
                  <li className='list-group-item '>
                    Pharetra massa massa ultricies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

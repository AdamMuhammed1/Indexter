import React from 'react';

const About = () => {
  return (
    <>
      <section id='about' className='bg-light py-5'>
        <div className='container'>
          <div className='text-center py5'>
            <h2
              className='fw-bolder border-bottom border-info border-3 d-inline-block pb-1'
              data-aos='zoom-in'
            >
              About
            </h2>
            <p className='fs-5 mt-3' data-aos='zoom-in-up' data-aos-delay='50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolore optio nemo illo!
            </p>
          </div>
          <div className='col-xl-8 mx-auto mb-5'>
            <div className='accordion'>
              {/* single accordion */}
              <div
                className='accordion-item rounded-3 shadow-sm mb-3'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <h5 className='accordion-header rounded-3 overflow-hidden'>
                  <button
                    className='accordion-button collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                  >
                    Short history about the company
                  </button>
                </h5>
                <div className='accordion-collapse collapse' id='collapseOne'>
                  <div className='accordion-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat beatae magnam velit, eveniet adipisci repellat
                    cumque aut earum libero excepturi facere ipsum doloremque
                    iusto! Quo quod quam at doloribus sit, numquam laborum sunt
                    delectus ea amet tenetur mollitia expedita illum porro cum
                    eaque id dignissimos dolore fugit quidem libero laboriosam.
                  </div>
                </div>
              </div>
              <div
                className='accordion-item rounded-3 shadow-sm mb-3'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <h5 className='accordion-header rounded-3 overflow-hidden'>
                  <button
                    className='accordion-button collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                  >
                    What we have achieved over the years
                  </button>
                </h5>
                <div className='accordion-collapse collapse' id='collapseTwo'>
                  <div className='accordion-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat beatae magnam velit, eveniet adipisci repellat
                    cumque aut earum libero excepturi facere ipsum doloremque
                    iusto! Quo quod quam at doloribus sit, numquam laborum sunt
                    delectus ea amet tenetur mollitia expedita illum porro cum
                    eaque id dignissimos dolore fugit quidem libero laboriosam.
                  </div>
                </div>
              </div>
              <div
                className='accordion-item rounded-3 shadow-sm mb-3'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h5 className='accordion-header rounded-3 overflow-hidden'>
                  <button
                    className='accordion-button collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                  >
                    Why you should choose us?
                  </button>
                </h5>
                <div className='accordion-collapse collapse' id='collapseThree'>
                  <div className='accordion-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat beatae magnam velit, eveniet adipisci repellat
                    cumque aut earum libero excepturi facere ipsum doloremque
                    iusto! Quo quod quam at doloribus sit, numquam laborum sunt
                    delectus ea amet tenetur mollitia expedita illum porro cum
                    eaque id dignissimos dolore fugit quidem libero laboriosam.
                  </div>
                </div>
              </div>
              <div
                className='accordion-item rounded-3 shadow-sm mb-3'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <h5 className='accordion-header rounded-3 overflow-hidden'>
                  <button
                    className='accordion-button collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                  >
                    What makes us special?
                  </button>
                </h5>
                <div className='accordion-collapse collapse' id='collapseFour'>
                  <div className='accordion-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat beatae magnam velit, eveniet adipisci repellat
                    cumque aut earum libero excepturi facere ipsum doloremque
                    iusto! Quo quod quam at doloribus sit, numquam laborum sunt
                    delectus ea amet tenetur mollitia expedita illum porro cum
                    eaque id dignissimos dolore fugit quidem libero laboriosam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

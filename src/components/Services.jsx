import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/link.gif';
import img2 from '../assets/speaker.gif';
import img3 from '../assets/seo.gif';

function Services() {
  return (
    <section className='services-section'>
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading fw-bold">What we will Do For <br/>Your Business</h2>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container mt-5">
        <div className="row g-5">
            <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5">
                    <img src={img1} alt='link' className='img-fluid' width='200px' />
                    <h5 className="my-3 fw-normal">Link Building</h5>
                    <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, vel.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#services" className='icon-span rounded-circle d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 shadow">
                    <img src={img2} alt='marketing' className='img-fluid' width='200px' />
                    <h5 className="my-3 fw-normal">Content Marketing</h5>
                    <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, vel.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#services" className='icon-span rounded-circle d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5">
                    <img src={img3} alt='seo' className='img-fluid' width='200px' />
                    <h5 className="my-3 fw-normal">On Page SEO</h5>
                    <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, vel.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#services" className='icon-span rounded-circle d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services

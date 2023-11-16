import React, {useEffect} from 'react'
import hero from '../assets/hero.mp4'

function Hero() {
  useEffect(()=>{
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  },[]);
  return (
    
    <section className='bg-main bg-color hero-section'>
      <div className="container">
        <div className="row mb-5">
          <div className=" text-center text-lg-start mt-4 mt-lg-0 order-lg-0 order-1 col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-capitalize fw-bolder text-white'>we collect Hight Quality Leads</h1>
            <p className='mt-3 mb-5 para-width text-light-grey'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi enim placeat, similique quisquam porro molestiae error molestias dolor, deleniti ratione quia! Assumenda ipsam maiores, tempore repellendus accusantium voluptate explicabo ducimus omnis </p>
            <div className="text-center w-100 text-md-start">
              <button className='text-capitalize btn btn-primary px-5 py-2' data-bs-toggle="tooltip" data-bs-title="Free Enquiry">Contact Us</button>
            </div>
          </div>

          <div className=" order-lg-1 order-0 col-12 col-md-12 col-lg-6">
            <div className="text-center text-lg-end">
            <video loop muted className='hero-video--section'>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1699899000">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    </section>
  )
}

export default Hero

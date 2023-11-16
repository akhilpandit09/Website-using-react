import React from 'react'
import phone from '../assets/phone.gif'

function DigitalProduct() {
  return (
    <section className=' bg-color more-info-section text-center text-lg-start'>
    <div className="container">
      <div className="row">

      <div className="col-12 col-md-12 col-lg-6 img-section">
            <figure >
                <img src={phone} alt="Digital Product" className='img-fluid'/>
            </figure>
        </div>

        <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center">
          <h1 className='text-capitalize fw-bolder text-white common-heading'>Steps to Build a <br /> successful Digital Product</h1>
          <p className='mt-3 mb-5 para-width text-light-grey'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi enim placeat, similique quisquam porro molestiae error molestias dolor, deleniti ratione quia! Assumenda ipsam maiores, tempore repellendus accusantium voluptate explicabo ducimus omnis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dignissimos?</p>
          <div className="text-center w-100 text-md-start">
            <button className='text-capitalize btn btn-primary px-5 py-2' data-bs-toggle="tooltip" data-bs-title="Free Enquiry">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DigitalProduct

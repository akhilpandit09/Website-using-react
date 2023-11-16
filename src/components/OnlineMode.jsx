import React from 'react'
import phone from '../assets/phone.gif';
// import online from '../assets/online.gif';

function OnlineMode() {
  return (
    <section className="common-section bussiness-section" >
        <div className="container text-center common-title fw-bold">
            <h2 className="common-heading fw-bold">Generating New Customer via<br/>Online Mode</h2>
            <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
            <div className="row g-5">
                <div className="col-xl-6 col-md-12">
                    <div className="d-flex px-3 py-5 shadow">
                        <img src={phone} alt="online mode" className='d-md-block d-none img-fluid mx-3' width='150px'/>
                        <div className='row'>
                        <p className="mb-3 fw-bolder">Social Media Advertising</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione ex suscipit ipsa error fugit tempora in quia sapiente rerum!</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-md-12">
                    <div className="d-flex px-3 py-5 shadow">
                        <img src={phone} alt="online mode" className='d-md-block d-none img-fluid mx-3' width='150px'/>
                        <div className='row'>
                        <p className="mb-3 fw-bolder">Influencer Marketing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione ex suscipit ipsa error fugit tempora in quia sapiente rerum!</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-md-12">
                    <div className="d-flex px-3 py-5 shadow">
                        <img src={phone} alt="online mode" className='d-md-block d-none img-fluid mx-3' width='150px'/>
                        <div className='row'>
                        <p className="mb-3 fw-bolder">Content Marketing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione ex suscipit ipsa error fugit tempora in quia sapiente rerum!</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-md-12">
                    <div className="d-flex px-3 py-5 shadow">
                        <img src={phone} alt="online mode" className='d-md-block d-none img-fluid mx-3' width='150px'/>
                        <div className='row'>
                        <p className="mb-3 fw-bolder">Referral Program</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione ex suscipit ipsa error fugit tempora in quia sapiente rerum!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OnlineMode

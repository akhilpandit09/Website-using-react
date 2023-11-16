import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer class="main-footer-section bg-color ">
    <div class="contact-details">
        <div class="footer-section py-5 text-white">
            <div class="container">
                
                <div class="row">
                    <div class="col-lg-2 col-md-6 col-12 d-flex justify-content-center text-align-center">
                        <div class="footer-links">
                            <h4 class="text-white mt-5 mb-3">About</h4>
                            <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>

                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-12 d-flex justify-content-center text-align-center">
                        <div class="footer-links">
                            <h4 class="text-white mt-5 mb-3">About</h4>
                            <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>

                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-12 d-flex justify-content-center text-align-start">
                        <div class="footer-links">
                            <h4 class="text-white mt-5 mb-3">About</h4>
                            <ul class="text-light-grey list-unstyled d-flex flex-column gap-2">
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>

                            </ul>
                        </div>
                </div>

                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="footer-links">
                            <h4 class="mt-5 mb-3 text-white">Subscribe</h4>
                            <div class="input-group mb-3 w-75">
                                <input type="text" class="form-control col-12" placeholder="Recipient's username"
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span class="input-group-text btn btn-primary" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="container">
            <hr class="container mx-auto text-white"/>
            <div class="row">
                <div class="col-lg-8 col-12 text-white ">
                    Copyright ©2023 All rights reserved. | This template is made with by <span class="bg-theme text-primary"> Akhileshwar pandit</span>
                </div>
                <div class="col-md-4 col-12  ">
                    <div class="d-flex justify-content-center justify-content-lg-end gap-5 mt-lg-0 mt-3">
                        <a href="" target="_blank">
                            <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                        </a>
                        <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer

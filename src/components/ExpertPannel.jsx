import React from "react";
import expert_img from "../assets/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

function ExpertPannel() {
  return (
    <section className="common-section mb-5 pt-5">
      <div className="container text-center common-title fw-bold ">
        <h2 className="common-heading fw-bold ">
          Tips and Tricks From
          <br />
          Our Expert
        </h2>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-12 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <div class="card p-3 shadow expert-section">
                <img
                  src={expert_img}
                  class="card-img-top"
                  alt="expert section image"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small text-grey">
                      <FontAwesomeIcon icon={faBookOpenReader} /> 5000
                    </p>
                    <p className="small text-grey">March 3, 2023</p>
                  </div>
                  <h5 class="card-title mt-3 fw-bold text-capitalize">
                    Card title
                  </h5>
                  <p class="card-text mt-2 mb-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark px-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <div class="card p-3 shadow expert-section">
                <img
                  src={expert_img}
                  class="card-img-top"
                  alt="expert section image"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small text-grey">
                      <FontAwesomeIcon icon={faBookOpenReader} /> 5000
                    </p>
                    <p className="small text-grey">March 3, 2023</p>
                  </div>
                  <h5 class="card-title mt-3 fw-bold text-capitalize">
                    Card title
                  </h5>
                  <p class="card-text mt-2 mb-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark px-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <div class="card p-3 shadow expert-section">
                <img
                  src={expert_img}
                  class="card-img-top"
                  alt="expert section image"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small text-grey">
                      <FontAwesomeIcon icon={faBookOpenReader} /> 5000
                    </p>
                    <p className="small text-grey">March 3, 2023</p>
                  </div>
                  <h5 class="card-title mt-3 fw-bold text-capitalize">
                    Card title
                  </h5>
                  <p class="card-text mt-2 mb-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark px-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-3">
            <div className="d-flex justify-content-center align-items-center">
              <div class="card p-3 shadow expert-section">
                <img
                  src={expert_img}
                  class="card-img-top"
                  alt="expert section image"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small text-grey">
                      <FontAwesomeIcon icon={faBookOpenReader} /> 5000
                    </p>
                    <p className="small text-grey">March 3, 2023</p>
                  </div>
                  <h5 class="card-title mt-3 fw-bold text-capitalize">
                    Card title
                  </h5>
                  <p class="card-text mt-2 mb-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-dark px-2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertPannel;

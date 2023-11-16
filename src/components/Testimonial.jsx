import React from "react";
import profile from "../assets/profile.png";

function Testimonial() {
  return (
    <section className="common-section mb-5 pt-5 bg-color" >
      <div className="container text-center common-title fw-bold ">
        <h2 className="common-heading fw-bold text-white">
          What Client Say
          <br />
          About Us
        </h2>
        <hr className="w-25 mx-auto text-white" />
      </div>

      {/* carousel */}

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
              <div className="row g-5">
                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
              <div className="row g-5">
                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3 card-section">
                      <img src={profile} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">
                          Akhileshwar Pandit
                        </h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary mt-3 d-flex justify-content-center "
                        >
                          More Info...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonial;

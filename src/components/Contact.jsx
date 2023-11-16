import React from "react";
import Common from "./Common.jsx";

function Contact() {
  return (
    <section className="common-section contact-section pt-5 mb-2 bg-color" >
      <div className="custom-shape-divider-top-1699982691">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Common />

      <div className="container">
        <div className="form-section text-white mx-auto">
          <form>
            <div classNameName="mb-3">
              <div classNameName="row">
                <div classNameName="col-lg-6 col-12">
                  <label for="exampleInputFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFirstName"
                    aria-describedby="userFirstNameHelp"
                    placeholder="First Name"
                  />
                </div>

                <div classNameName="col-lg-6 col-12">
                  <label for="exampleInputLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputLastName"
                    aria-describedby="userLastNameHelp"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name@gmail.com"
              />
              <div id="emailHelp" className="form-text text-white">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label text-capitalize"
              >
                textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Agree with terms and condition
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

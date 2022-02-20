import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginImg from "/public/images/home/login_img.webp";
const login = () => {
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="  text-black my-3 p-3"
              //   style={{ borderRadius: "25px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <h3 className="text-center   fw-bold mb-5 mx-1 mx-md-4 mt-3 p-2">
                      Login to Influencer
                    </h3>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 me-2">
                      <button type="button" className="btn btn-primary btn-lg">
                        Google
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg ms-2"
                      >
                        Facebook
                      </button>
                    </div>

                    <div className="divider mb-3  ">Or</div>

                    <form className="mx-1 mx-md-4">
                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div> */}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div> */}
                      {/* 
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in
                          <a href="">Terms of service</a>
                        </label>
                      </div> */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          Login
                        </button>
                      </div>
                      <div className="">
                        <p className="text-center text-muted mt-3 mb-0">
                          Are You a new user?
                          <Link href="/signup">
                            <a className="fw-bold text-body mx-2">
                              <u>Sign Up here</u>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1  ">
                    <Image
                      src={LoginImg}
                      className="img-fluid"
                      alt="login_image"
                      width={450}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;

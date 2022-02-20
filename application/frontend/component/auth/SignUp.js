import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

import Link from "next/link";
import Image from "next/image";
import SignupImg from "../../public/images/home/sign_in.png.png";
const Signup = () => {
  // form validation
  // const validationSchema = Yup.object().shape({
  //   title: Yup.string().required("Title is required"),
  //   firstName: Yup.string().required("First Name is required"),
  //   lastName: Yup.string().required("Last name is required"),
  //   dob: Yup.string()
  //     .required("Date of Birth is required")
  //     .matches(
  //       /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
  //       "Date of Birth must be a valid date in the format YYYY-MM-DD"
  //     ),
  //   email: Yup.string().required("Email is required").email("Email is invalid"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Password is required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Passwords must match")
  //     .required("Confirm Password is required"),
  //   acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  // });
  // const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
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
                    <h3 className="text-center fw-bold  mb-5 mx-1 mx-md-4 mt-3 p-2">
                      Sign up to Influencer
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

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mx-1 mx-md-4"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            {...register("Name", {
                              required: true,
                              maxLength: 80,
                            })}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            {...register("Email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div> */}

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

                      {/* <div className="form-check d-flex justify-content-center mb-5">
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
                          I agree all statements in{" "}
                          <a href="">Terms of service</a>
                        </label>
                      </div> */}
                      {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          <input className="btn btn-primary" type="submit" />
                        </button>
                      </div> */}
                      <div className="d-flex justify-content-center mx-2 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          Create Account
                        </button>
                      </div>
                      <div className="">
                        <p className="text-center text-muted mt-3 mb-0">
                          Have already an account?
                          <Link href="/login">
                            <a className="fw-bold text-body mx-2">
                              <u>Login here</u>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <Image
                      src={SignupImg}
                      className="img-fluid"
                      alt="Signup image"
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

export default Signup;

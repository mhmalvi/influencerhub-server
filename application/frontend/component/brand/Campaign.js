import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSolid } from "@fortawesome/free-solid-svg-icons";
const Campaign = () => {
  return (
    <section className="container-fluid  mt-5 py-3   ">
      <section className=" container    row my-5  align-items-center   bg-light">
        <h5 className="fs-5 fw-bolder my-3">Create Campaign</h5>
        <section className="  col-sm-5   card">
          {/* 1st part */}
          <div className="  my-4 pb-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Type Your Campaign Name"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Type Your Campaign Description with necessary information."
                rows="3"
              ></textarea>
            </div>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />

              <label className="input-group-text" htmlFor="inputGroupFile02">
                <FontAwesomeIcon icon="fa-solid fa-upload" />
              </label>
            </div>
          </div>
        </section>
        <section className="col-sm-7 p-2 mt-5">
          {/* 2nd part */}
          <div>
            <h1>mahmud hasan</h1>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Campaign;

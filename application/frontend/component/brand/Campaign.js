import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSolid } from "@fortawesome/free-solid-svg-icons";
const Campaign = () => {
  return (
    <section className="container   mt-5 py-3   p-3 m-3">
      <section className=" container    row my-5     bg-light p-3 m-3 ">
        <h5 className="fs-5 fw-bolder my-3">Create Campaign</h5>
        <section className="col-sm-5 card    ">
          {/* 1st part */}
          <div className="  my-4 pb-2 m-2 p-2">
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
            <div className="mb-3">
              <label htmlFor="inputGroupFile01" className="form-label">
                Campaign Catagory
              </label>
              <select
                id="inputGroupFile02"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Campaign Catagory</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputGroupFile01" className="form-label">
                Promotion Type
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Select Promotion Type"
              />
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
              </datalist>
              {/*  <input type="text" list="data" onChange={this._onChange} />              
              <datalist id="data">
                {this.state.data.map((item, key) => (
                  <option key={key} value={item.displayValue} />
                ))}
              </datalist> */}
            </div>
            <div className="mb-3">
              <label htmlFor="inputGroupFile01" className="form-label">
                Campaign Expired Date
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Expired date"
              />
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
              </datalist>
              {/*  <input type="text" list="data" onChange={this._onChange} />              
              <datalist id="data">
                {this.state.data.map((item, key) => (
                  <option key={key} value={item.displayValue} />
                ))}
              </datalist> */}
            </div>
          </div>
        </section>
        <section className="col-md-7     ">
          {/* 2nd part */}
          <section className="card   ">
            <section className="d-flex  my-3 pb-2 m-2 p-2">
              <div className="form-check form-check-inline">
                <button className="btn btn-primary btn-lg fw-bold" disabled>
                  Facebook
                </button>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="facebook"
                  id="facebook1"
                  value="1k-5k"
                  autocomplete="off"
                  onClick={() => alert("1k-5k")}
                />
                <label className="btn btn-outline-primary  " for="facebook1">
                  1k-5k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="facebook"
                  id="facebook2"
                  value="5k-10k"
                  autocomplete="off"
                  onClick={() => alert("5k-10k")}
                />
                <label className="btn btn-outline-primary" for="facebook2">
                  5k-10k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="facebook"
                  id="facebook3"
                  autocomplete="off"
                  value="10k-50k"
                  onClick={() => alert("10k-50k")}
                />
                <label className="btn btn-outline-primary" for="facebook3">
                  10k-50k
                </label>
              </div>
            </section>
            <section className="d-flex  my-3 pb-2 m-2 p-2">
              <div className="form-check form-check-inline">
                <button className="btn btn-primary btn-lg   fw-bold" disabled>
                  Tiktok
                </button>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="tiktok"
                  id="tiktok1"
                  value="1k-5k"
                  autocomplete="off"
                  onClick={() => alert("1k-5k")}
                />
                <label className="btn btn-outline-primary  " for="tiktok1">
                  1k-5k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="tiktok"
                  id="tiktok2"
                  value="5k-10k"
                  autocomplete="off"
                  onClick={() => alert("5k-10k")}
                />
                <label className="btn btn-outline-primary" for="tiktok2">
                  5k-10k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="tiktok"
                  id="tiktok3"
                  autocomplete="off"
                  value="10k-50k"
                  onClick={() => alert("10k-50k")}
                />
                <label className="btn btn-outline-primary" for="tiktok3">
                  10k-50k
                </label>
              </div>
            </section>
            <section className="d-flex  my-3 pb-2 m-2 p-2">
              <div className="form-check form-check-inline">
                <button className="btn btn-primary btn-lg fw-bold" disabled>
                  Instagram
                </button>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="instagram"
                  id="instagram1"
                  value="1k-5k"
                  autocomplete="off"
                  onClick={() => alert("1k-5k")}
                />
                <label className="btn btn-outline-primary  " for="instagram1">
                  1k-5k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="instagram"
                  id="instagram2"
                  value="5k-10k"
                  autocomplete="off"
                  onClick={() => alert("5k-10k")}
                />
                <label className="btn btn-outline-primary" for="instagram2">
                  5k-10k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="instagram"
                  id="instagram3"
                  autocomplete="off"
                  value="10k-50k"
                  onClick={() => alert("10k-50k")}
                />
                <label className="btn btn-outline-primary" for="instagram3">
                  10k-50k
                </label>
              </div>
            </section>
            <section className="d-flex  my-3 pb-2 m-2 p-2">
              <div className="form-check form-check-inline">
                <button className="btn btn-primary btn-lg fw-bold" disabled>
                  Youtube
                </button>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="youtube"
                  id="youtube1"
                  value="1k-5k"
                  autocomplete="off"
                  onClick={() => alert("1k-5k")}
                />
                <label className="btn btn-outline-primary  " for="youtube1">
                  1k-5k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="youtube"
                  id="youtube2"
                  value="5k-10k"
                  autocomplete="off"
                  onClick={() => alert("5k-10k")}
                />
                <label className="btn btn-outline-primary" for="youtube2">
                  5k-10k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="youtube"
                  id="youtube3"
                  autocomplete="off"
                  value="10k-50k"
                  onClick={() => alert("10k-50k")}
                />
                <label className="btn btn-outline-primary" for="youtube3">
                  10k-50k
                </label>
              </div>
            </section>
            <section className="d-flex  my-3 pb-2 m-2 p-2">
              <div className="form-check form-check-inline">
                <button className="btn btn-primary btn-lg fw-bold" disabled>
                  Livestream
                </button>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="livestrem"
                  id="livestrem1"
                  value="1k-5k"
                  autocomplete="off"
                  onClick={() => alert("1k-5k")}
                />
                <label className="btn btn-outline-primary  " for="livestrem1">
                  1k-5k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="livestrem"
                  id="livestrem2"
                  value="5k-10k"
                  autocomplete="off"
                  onClick={() => alert("5k-10k")}
                />
                <label className="btn btn-outline-primary" for="livestrem2">
                  5k-10k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="livestrem"
                  id="livestrem3"
                  autocomplete="off"
                  value="10k-50k"
                  onClick={() => alert("10k-50k")}
                />
                <label className="btn btn-outline-primary" for="livestrem3">
                  10k-50k
                </label>
              </div>
            </section>
            <section className="d-flex  my-3 pb-2 m-2 p-2">
              <div className="form-check form-check-inline">
                <button className="btn btn-primary btn-lg fw-bold" disabled>
                  Twitter
                </button>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="twitter"
                  id="twitter1"
                  value="1k-5k"
                  autocomplete="off"
                  onClick={() => alert("1k-5k")}
                />
                <label className="btn btn-outline-primary  " for="twitter1">
                  1k-5k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="twitter"
                  id="twitter2"
                  value="5k-10k"
                  autocomplete="off"
                  onClick={() => alert("5k-10k")}
                />
                <label className="btn btn-outline-primary" for="twitter2">
                  5k-10k
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="twitter"
                  id="twitter3"
                  autocomplete="off"
                  value="10k-50k"
                  onClick={() => alert("10k-50k")}
                />
                <label className="btn btn-outline-primary" for="twitter3">
                  10k-50k
                </label>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Campaign;

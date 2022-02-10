import Image from "next/image";
import React from "react";
import LogoImg from "../../public/images/home/image.png";

const Navbar = () => {
  return (
    <nav className="bg-header navbar navbar-expand-lg navbar-light  ">
      <section className="container-fluid">
        <a className="navbar-brand p-3" href="#">
          <Image
            src={LogoImg}
            width="250px"
            height="50px"
            alt="Picture of the author"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown fs-6  fw-bolder">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                id="creatorsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CREATORS
              </a>
              <ul className="dropdown-menu" aria-labelledby="creatorsDropdown">
                <li>
                  <a className="fs-6  fw-bolder dropdown-item" href="#">
                    ACTION
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="fs-6  fw-bolder dropdown-item" href="#">
                    WORK
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown fs-6  fw-bolder">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                id="brandDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BRAND
              </a>
              <ul className="dropdown-menu" aria-labelledby="brandDropdown">
                <li>
                  <a className="fs-6  fw-bolder dropdown-item" href="#">
                    ACTION
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="fs-6  fw-bolder dropdown-item" href="#">
                    WORK
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item  ">
              <a
                className="nav-link active fs-6  fw-bolder"
                aria-current="page"
                href="#"
              >
                CAMPAIGNS
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className="nav-link active fs-6  fw-bolder"
                aria-current="page"
                href="#"
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className="nav-link active fs-6  fw-bolder"
                aria-current="page"
                href="#"
              >
                CONTACT
              </a>
            </li>
          </ul>

          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <ul className="ms-auto  navbar-nav   mb-2 mb-lg-0">
            <li className="nav-item  ">
              <a
                className="nav-link active fs-6  fw-bolder"
                aria-current="page"
                href="#"
              >
                LOGIN
              </a>
            </li>
            <li className="nav-item  ">
              <a
                className="nav-link active fs-6  fw-bolder"
                aria-current="page"
                href="#"
              >
                SIGNUP
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import LogoImg from "../../public/images/home/influencer_bg_remover.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  // user authentication
  const { data: session } = useSession();
  console.log(useSession());
  return (
    <>
      <nav
        className={`fixed-top  header-bg navbar navbar-expand-lg navbar-light  ${
          !show && " shadow-lg  rounded bg-light  nav-scroll"
        }`}
        id="navbar-scroll"
      >
        <section className="container-fluid">
          <Link href="http://localhost:3000/">
            <a className="navbar-brand p-2" href="http://localhost:3000/">
              <Image
                src={LogoImg}
                width="250px"
                height="50px"
                alt="Picture of the author"
              />
            </a>
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-link">
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="creatorsDropdown"
                >
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
                <Link href="campaign">
                  <a
                    className="nav-link active fs-6  fw-bolder"
                    aria-current="page"
                  >
                    CAMPAIGNS
                  </a>
                </Link>
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
              {session ? (
                // <li>{session.user?.email}</li>
                // start
                <>
                  <li className="nav-item dropdown fs-6  fw-bolder">
                    <a
                      className="nav-link active dropdown-toggle"
                      href="#"
                      id="creatorsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <Image
                        alt="The guitarist in the concert."
                        src="https://quadque.tech/wp-content/uploads/2020/03/image1-home2.png"
                        width={25}
                        height={25}
                        layout="responsive"
                      /> */}
                      <img
                        src={session.user?.image}
                        width="25px"
                        height="25px"
                        className="rounded-circle"
                        alt="Picture of the author"
                      />
                    </a>

                    <ul
                      className="dropdown-menu   nav-style "
                      aria-labelledby="creatorsDropdown"
                      style={{ marginLeft: "-174px" }}
                    >
                      <li>
                        <a className="fs-6  fw-bolder dropdown-item  " href="#">
                          Profile
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Dashboard
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Manage Requests
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Post a Request
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Refer & Get up to $100
                        </a>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Become a Seller
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Settings
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Billing NEW
                        </a>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          English
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          $ USD
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Help & support
                        </a>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <a
                          className="fs-6  fw-bolder dropdown-item"
                          href="#"
                          onClick={signOut}
                        >
                          Logout
                        </a>
                      </li>

                      {/* <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          WORK
                        </a>
                      </li> */}
                    </ul>
                  </li>
                </>
              ) : (
                // end
                <>
                  <li className="nav-item  ">
                    <Link href="/login">
                      <a
                        className="nav-link active fs-6  fw-bolder"
                        aria-current="page"
                        href="#"
                      >
                        LOGIN
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link href="/signup">
                      <a
                        className="nav-link active fs-6  fw-bolder"
                        aria-current="page"
                        href="#"
                      >
                        SIGNUP
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>
      </nav>

      {/* {$(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
          $("#navbar-scroll").css("position", "fixed");
          $("#navbar-scroll").css("top", 0);
        } else {
          $("#navbar-scroll").css("position", "");
          $("#navbar-scroll").css("top", "-100%");
        }
      })} */}
    </>
  );
};

export default Navbar;

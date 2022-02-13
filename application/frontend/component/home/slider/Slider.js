import React from "react";
import Image from "next/image";
import HeaderHomeImage from "../../../public/images/home/narrators-influencer-marketing-platform.png";
import { motion } from "framer-motion";
function Slider() {
  return (
    <section className="header-bg   text-white ">
      <div className="container my-5 ">
        <div className="row ">
          <section className="col-sm-5 my-4 py-2 ">
            <div className="my-4 py-2">
              <h1
                className="my-4 py-2 p-3 fs-1 my-5   fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                The platform that connects brands with influencers
              </h1>
              <p className="my-4 py-2 p-3 fs-5 fw-bolder">
                The best way to create, manage and measure your campaigns with
                influencers
              </p>

              <div>
                {/* <motion.button
                  className="ms-2 my-4 py-2 p-3 fs-5 fw-bolder text-warning"
                  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }}
                  whileTap={{ scale: 0.7 }}
                >
                  I`M A Brand
                </motion.button> */}
                <div className="d-flex">
                  <button className="btn btn-bg-color text-white  ms-2 my-4 py-2 p-3 fs-4 fw-bolder  ml-5">
                    I`M BRAND
                  </button>
                  <button className="btn btn-bg-color text-white  ms-2 my-4 py-2 p-3 fs-4 fw-bolder  ml-5">
                    INFLUENCER
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="col-sm-7 p-2 mt-5">
            <Image src={HeaderHomeImage} alt="Picture of the author" />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Slider;

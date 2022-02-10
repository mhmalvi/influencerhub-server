import React from "react";
import Image from "next/image";

import HeaderHomeImage from "../../../public/images/home/header_home_img.png";
import { motion } from "framer-motion";
function Slider() {
  return (
    <section className="bg-header text-white ">
      <div className="container  ">
        <div className="row ">
          <section className="col-sm-7 my-4 py-2 ">
            <div className="my-4 py-2">
              <h1 className="my-4 py-2 p-3 fs-1  fw-bolder  ">
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
                <button className="ms-2 my-4 py-2 p-3 fs-5 fw-bolder  ">
                  <span> I`M A Brand</span>
                </button>
              </div>
            </div>
          </section>
          <section className="col-sm-5  ">
            <Image
              src={HeaderHomeImage}
              width={350}
              height={700}
              alt="Picture of the author"
              style={{ marginBottom: "-1.5em" }}
              className=" ms-auto mb-0 pb-0"
            />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Slider;

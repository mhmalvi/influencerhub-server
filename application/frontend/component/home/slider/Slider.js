import React, { useRef } from "react";
import Image from "next/image";
import HeaderHomeImage from "../../../public/images/home/narrators-influencer-marketing-platform.png";
import { motion, useAnimationFrame, useSpring } from "framer-motion";
function Slider() {
  //framer motion
  const ref = useRef(null);
  // animation rotation setup
  // useAnimationFrame((t) => {
  //   const rotate = Math.sin(t / 10000) * 200;
  //   const y = (1 + Math.sin(t / 1000)) * -50;
  //   ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  // });
  return (
    <motion.div
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 3,
        type: "spring",
        stiffness: 100,
        scale: 1.5,
      }}
      className="header-bg "
    >
      <div className="container   mt-5 py-3  ">
        <div className="row my-5 align-items-center ">
          <section className="col-sm-5 my-4 py-2 ">
            {/* egg animation added start */}
            {/* <motion.div className="circle m-auto mt-5 " ref={ref}></motion.div> */}
            {/* egg animation added end */}
            {/* <motion.div
              className="circle m-auto "
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              ref={ref}
            /> */}
            <div className="my-4 pb-2">
              <h1 className="my-4 py-2 p-3 fs-1    fw-bolder  ">
                The platform that connects brands with influencers
              </h1>
              <p className="my-4 py-2 p-3 fs-5 fw-bolder">
                The best way to create, manage and measure your campaigns with
                influencers
              </p>

              <div
                // initial={{ y: -60 }}
                // animate={{ y: 20 }}
                // transition={{
                //   duration: 2,
                //   ease: "easeInOut",
                //   times: [0, 0.2, 0.5, 0.8, 1],
                //   repeat: Infinity,
                //   repeatDelay: 1,
                // }}
                className="d-flex"
              >
                <button className="btn btn-bg-color   text-white  ms-2 my-4 py-2 p-3 fs-4 fw-bolder  ml-5">
                  I`M BRAND
                </button>
                <button className="btn btn-bg-color   text-white  ms-2 my-4 py-2 p-3 fs-4 fw-bolder  ml-5">
                  INFLUENCER
                </button>
              </div>
            </div>
          </section>
          <section className="col-sm-7 p-2 mt-5">
            <Image src={HeaderHomeImage} alt="Picture of the author" />
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Slider;

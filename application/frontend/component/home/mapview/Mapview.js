import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MapviewImage from "../../../public/images/home/map-view.png";
function Mapview() {
  return (
    <section className="container">
      <div className="row">
        <section className="col-5 ">
          <div className="my-4 py-2">
            <Image src={MapviewImage} alt="Picture of the author" />
          </div>
        </section>
        <section className="col-7 ">
          <div className="text-center my-4 py-2">
            <h1
              className="my-4 py-2 p-3 fs-1 my-5   fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
            >
              The platform that connects brands with influencers.
            </h1>
            <p className="py-2 p-3 fs-5 fw-bolder">
              People trust people. Streamline your influencer marketing
              campaigns with Narrators’ dual-sided platform fueled by a database
              of 500K influencers. Headquartered in Singapore, the Narrators
              award-winning influencer marketing platform operates in several
              markets across the region including Malaysia, Indonesia,
              Philippines, South Korea, Hong Kong and Thailand to name a few.
            </p>

            <button
              style={{ backgroundColor: "#42f32a" }}
              className="btn  text-white  ms-2 my-4 py-2 p-3 fs-4 fw-bolder  ml-5"
            >
              REQUEST A DEMO
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Mapview;

import Image from "next/image";
import React from "react";
import { Roll } from "react-reveal";
import OverViewImage1 from "../../../../public/images/home/overview-image-1.png";
function HomeOverview1() {
  return (
    <section>
      {/* <Roll left>
        <h3 className="text-center p-3   fs-3  my-6  fw-bolder ">
          Make the most of your influencer marketing program with
        </h3>
      </Roll> */}
      <section
        // initial={{ opacity: 0, x: 180, z: 180 }}
        // animate={{ opacity: 1, x: 0, z: 0 }}
        // transition={{ duration: 3 }}
        className="container my-3"
      >
        <div className="row align-items-center">
          <section className="col-md-4  col-sm-12">
            {/* <Roll left>
              <div className="my-4 py-2">
                <Image src={OverViewImage1} alt="Picture of the author" />
              </div>
            </Roll> */}
            {/* <video
              width="450"
              height="420"
              autoPlay
              muted
              src="https://streamable.com/e/9z9u93?autoplay=1"
            ></video> */}

            {/* <video width="450" height="420" autoPlay muted>
              <source
                src="https://streamable.com/e/9z9u93?autoplay=1"
                type="video/mp4"
              />
            </video> */}
            <div className="my-4 py-2">
              <video
                width=" 360px"
                height="480px"
                autoPlay
                muted
                src={"/videos/overviews_video.mp4"}
              />
            </div>
          </section>
          <section className="col-md-8 col-sm-12">
            {/* <Roll right> */}
            <div className="  my-4 py-2">
              <h3
                className="my-4 py-2   fs-2   fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                The platform that connects brands with influencers.
              </h3>
              <p className="py-2 fw-bolder">
                People trust people. Streamline your influencer marketing
                campaigns with Narrators’ dual-sided platform fueled by a
                database of 500K influencers. Headquartered in Singapore, the
                Narrators award-winning influencer marketing platform operates
                in several markets across the region.
              </p>
            </div>
            {/* </Roll> */}
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeOverview1;

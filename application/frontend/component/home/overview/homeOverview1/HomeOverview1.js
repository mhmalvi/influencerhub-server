import Image from "next/image";
import React from "react";
import OverViewImage1 from "../../../../public/images/home/overview-image-1.png";
function HomeOverview1() {
  return (
    <section className="header-bg text-white">
      <h1 className="text-center p-3   fs-1  my-6  fw-bolder ">
        Make the most of your influencer marketing program with
      </h1>
      <section className="container my-5">
        <div className="row align-items-center">
          <section className="col-5 ">
            <div className="my-4 py-2">
              <Image src={OverViewImage1} alt="Picture of the author" />
            </div>
          </section>
          <section className="col-7 ">
            <div className="  my-4 py-2">
              <h1
                className="my-4 py-2   fs-3 my-6  fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                The platform that connects brands with influencers.
              </h1>
              <p className="py-2 p-1  fw-bolder">
                People trust people. Streamline your influencer marketing
                campaigns with Narrators’ dual-sided platform fueled by a
                database of 500K influencers. Headquartered in Singapore, the
                Narrators award-winning influencer marketing platform operates
                in several markets across the region.
              </p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeOverview1;

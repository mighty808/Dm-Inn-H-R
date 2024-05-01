import { useEffect } from "react";
import img1 from "../exploreImg/2508.jpg";
import img2 from "../exploreImg/2506.jpg";
import img3 from "../exploreImg/2511.jpg";
import img4 from "../exploreImg/2512.jpg";
import img5 from "../exploreImg/2514.jpg";
import img6 from "../exploreImg/2515.jpg";
import img7 from "../exploreImg/2518.jpg";
import img8 from "../exploreImg/2520.jpg";
import img9 from "../exploreImg/2524.jpg";
import img10 from "../exploreImg/park.jpg";
import img11 from "../exploreImg/pool.jpg";
import img12 from "../exploreImg/render-master-bedroom.jpg";
import img13 from "../exploreImg/Sample0.jpg";
import img14 from "../exploreImg/Sample1.jpg";
import img15 from "../exploreImg/sample2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";

const Explore = () => {
  const swiperImages = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 3, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
  ];

  const swiperImages1 = [
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 14, image: img14 },
    { id: 15, image: img15 },
  ];
  const [showMore, setShowMore] = useState(false);
  const [slides, setSlides] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        // Execute code for small screens
        setSlides(1);
        // Execute code for large screens
      } else {
        setSlides(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-[85%] m-auto px-2 my-4">
      <h1 className="text-center font-bold bg-white text-gray-600 text-2xl md:text-3xl py-4">
        Explore..
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={slides}
        grid-rows="3"
        navigation
        pagination={{ clickable: true, type: "none" }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {swiperImages.map((swiperImage) => (
          <SwiperSlide
            className="w-[30%]  h-[32] bg-background md:h-62 md:w-[100%] rounded-md "
            key={swiperImage.id}
          >
            <img
              src={swiperImage.image}
              alt=""
              className="w-full h-60 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  m-auto py-4">
          {swiperImages1.map((swiperImage) => (
            <div
              className="md:h-[32] bg-background  rounded-md transition-opacity opacity-100  shadow-sm shadow-[black]"
              key={swiperImage.id}
            >
              <img
                src={swiperImage.image}
                alt=""
                className="w-full h-60 object-fit rounded-md shadow-lg shadow-black"
              />
            </div>
          ))}
        </div>
      )}

      <div className="w-full my-1 flex items-center justify-center m-auto py-4 border border-background">
        <button
          type=""
          onClick={() => setShowMore((prev) => !prev)}
          className="bg-primary py-1 px-2 text-text  md:w-[8vw] transition-opacity"
        >
          {showMore ? "Show less" : "View more"}
        </button>
      </div>
    </section>
  );
};

export default Explore;

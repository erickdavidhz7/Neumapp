import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import TestimonialsData from "../../data/testimonial.json";

export default function TestimonialCard() {
  return (
    <article className="w-[90%] mx-auto">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        className="w-full rounded-lg"
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          512: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {TestimonialsData.map((testimony) => (
          <SwiperSlide key={testimony.id}>
            <div className="relative mt-12 lg:mt-24">
              <img
                src={testimony.image}
                alt={testimony.person}
                className="absolute left-1/2 -top-10 lg:-top-20 -translate-x-1/2 h-28 w-28 lg:h-40 lg:w-40 rounded-full object-cover border-[0.2rem] border-white shadow-xl"
              />
              <div className="text-[#181818] rounded-2xl bg-[#ffffff] py-4 px-3 lg:py-8 lg:px-6">
                <h2 className="text-lg lg:text-2xl text-center font-bold mt-14">
                  {testimony.person}
                </h2>
                <p className="text-base text-[#2a2a2a] text-center mt-4">
                  {testimony.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

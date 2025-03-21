'use client';
import { default as React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const quotes = [
  "Using AI doesn't make you the best... You have to learn to take the best out of it. Coursiv helps you do that, perfectly!",
  "The interactive nature of the courses kept me engaged, making learning less like a chore and more like an enjoyable journey",
  "Whether you're a beginner or an expert, Coursiv provides excellent resources to help you achieve your goals"
];

export default function Quote() {
  return (
    <section className="relative mx-auto w-full max-w-[1040px] px-4 pt-[64px] pb-2 lg:pt-[80px] lg:pb-[100px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="max-md:!pb-10 mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="mb-8 flex flex-col items-center sm:mb-12 lg:mb-16">
              <h2 className="text-center text-[20px] font-mono italic leading-[44px] tracking-[-0.7px] lg:text-[28px]">
                "{quote}"
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

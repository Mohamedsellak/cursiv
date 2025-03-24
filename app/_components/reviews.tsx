'use client';

import React from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Review {
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    text: "Currently going through the AI courses and feeling much more confident catching up to the advancements in AI over the past few years. The material is engaging, easy to grasp, and practical.",
    author: "@drkchau"
  },
  {
    text: "Learning how AI can enhance my work efficiency through Coursiv has been a big advantage! The step-by-step guidance makes it easy to learn about AI.",
    author: "@Carla_fr"
  },
  {
    text: "At first, I thought only students or branding and marketing managers would grasp AI concepts. I was completely mistaken! This course does an excellent job of simplifying every step.",
    author: "@chris97"
  },
  {
    text: "I have been working in the field of AI for a few years now, but I still learned a lot from this course. The course is well-structured and easy to follow.",
    author: "@johndoe"
  },
  {
    text: "The interactive exercises and real-world examples made learning AI concepts much more engaging and practical.",
    author: "@sarah_tech"
  },
  {
    text: "This course helped me understand AI in a way that I never thought possible. Highly recommended!",
    author: "@mike_dev"
  }
];

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-[#FF9900]" />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-4 lg:px-12">
        <button className="review-prev hidden lg:block absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
          <FaChevronLeft className="text-[#4B4A72]" size={20} />
        </button>
        <button className="review-next hidden lg:block absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
          <FaChevronRight className="text-[#4B4A72]" size={20} />
        </button>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.review-prev',
            nextEl: '.review-next',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-300',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#5653FE]',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              pagination: false,
            }
          }}
          loop={true}
          className="pb-12 lg:pb-0"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full flex-col rounded-[16px] border border-[#D3D3D3] p-10 transition-all hover:shadow-lg">
                <Stars />
                <p className="mt-8 text-[18px] leading-[26px] tracking-[-0.2px] flex-grow">
                  {review.text}
                </p>
                <p className="mt-4 text-[18px] font-medium leading-[26px] tracking-[-0.2px] text-[#4B4A72]">
                  {review.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

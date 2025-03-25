'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function Stories() {
  return (
    <>
      <h3 className="px-10 text-center text-[28px] font-medium leading-[32px] tracking-[-1px] lg:px-0 lg:text-[40px] lg:leading-[56px]">
        See how Coursiv changes lives
      </h3>
      <div className="mt-10">
        <div className="relative max-sm:pb-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="max-md:!pb-10 mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]"
          >
            <SwiperSlide>
              <div className="relative mt-8 flex flex-col rounded-[16px] border border-[#D3D3D3] p-10">
                <Image 
                  alt="Shahe K."
                  src="/assets/images/avatar.png"
                  width={64}
                  height={64}
                  className="absolute -top-8 left-[70px] -translate-x-1/2 transform rounded-full"
                />
                <p className="mt-6 text-[18px] leading-[26px] tracking-[-0.2px]">
                  I have been searching for AI lessons to help me reach my career objectives. I decided to invest in Coursiv, and I have no regrets about that choice. Coursiv offers prompts and a step-by-step teaching approach that motivates and rewards the learning experience.
                </p>
                <p className="mt-4 text-[18px] font-medium leading-[26px] tracking-[-0.2px]">Shahe K.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mt-8 flex flex-col rounded-[16px] border border-[#D3D3D3] p-10">
                <Image 
                  alt="Regina Brown"
                  src="/assets/images/avatar2.png"
                  width={64}
                  height={64}
                  className="absolute -top-8 left-[70px] -translate-x-1/2 transform rounded-full"
                />
                <p className="mt-6 text-[18px] leading-[26px] tracking-[-0.2px]">
                  As someone knowledgeable in AI, I sought to enhance my understanding of using AI for income sources. Coursiv simplified this journey with its clear and easy follow courses. I gained a lot of knowledge, and Coursiv brought attention to several key points that I had previously missed.
                </p>
                <p className="mt-4 text-[18px] font-medium leading-[26px] tracking-[-0.2px]">Regina Brown</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mt-8 flex flex-col rounded-[16px] border border-[#D3D3D3] p-10">
                <Image 
                  alt="Corey Rein"
                  src="/assets/images/avatar3.png"
                  width={64}
                  height={64}
                  className="absolute -top-8 left-[70px] -translate-x-1/2 transform rounded-full"
                />
                <p className="mt-6 text-[18px] leading-[26px] tracking-[-0.2px]">
                  I gained valuable insights and practical skills that I can apply in my own&nbsp;work. The course promotes interactive learning, enabling you to practice what you&apos;ve learned through hands-on activities.
                </p>
                <p className="mt-4 text-[18px] font-medium leading-[26px] tracking-[-0.2px]">Corey Rein</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

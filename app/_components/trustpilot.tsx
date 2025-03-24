import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function Trustpilot() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-6 px-4 lg:flex-row lg:gap-2 lg:gap-x-4 py-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm">
      <div className="order-2 flex w-full flex-col gap-8 px-5 lg:order-1 lg:gap-y-12 lg:px-8 lg:pt-10">
        <h3 className="max-w-[650px] text-center text-[28px] font-bold leading-[1.2] tracking-tight text-gray-900 lg:text-left lg:text-6xl lg:leading-[1.1]">
          Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">300,000+</span> learners around the world
        </h3>
        <div className="mx-auto flex items-center gap-x-3 leading-[26px] tracking-[-0.02px] lg:mx-0 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/80 transition-all duration-300">
          <p className="text-lg font-medium text-gray-700">More than 16,000+</p>
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar 
                key={i} 
                className="text-[#219653] drop-shadow-sm transform hover:scale-110 transition-transform duration-200" 
                size={28} 
              />
            ))}
          </div>
          <p className="text-lg font-medium text-gray-700">on Trustpilot</p>
        </div>
      </div>
      <div className="order-1 flex w-full justify-center lg:order-2 lg:justify-end">
        <img 
          alt="Portraits of people learning AI with Coursiv"
          loading="lazy"
          width="530"
          height="256"
          decoding="async"
          data-nimg="1"
          className="relative h-auto w-full max-w-[530px]"
          src="/assets/images/banner.png"
        />
      </div>
    </div>
  )
}

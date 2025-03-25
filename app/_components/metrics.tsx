import Image from 'next/image'
import React from 'react'

export default function metrics() {
  return (
    <div className="mx-auto w-full max-w-[1280px] mt-16 lg:mt-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-[28px] font-medium leading-[56px] tracking-[-1px] lg:text-[48px]">
          Coursiv in action
        </h2>
        <p className="mt-2 max-w-[580px] px-4 text-center text-[16px] leading-[28px] tracking-[-0.2px] opacity-80 lg:mt-6 lg:px-0 lg:text-[20px]">
          See how Coursiv empowers learners: our success in numbers
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1200px] justify-between gap-x-[2px] lg:mt-16 lg:gap-x-6">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-[28px] font-medium lg:text-[64px]">614k+</p>
          <p className="text-[14px] lg:text-[20px]">614,431</p>
          <p className="text-center text-[14px] font-medium leading-[20px] lg:text-[24px]">Users learned new skills</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-[28px] font-medium lg:text-[64px]">4,335k+</p>
          <p className="text-[14px] lg:text-[20px]">4,335,585</p>
          <p className="text-center text-[14px] font-medium leading-[20px] lg:text-[24px]">Minutes of content consumed</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-[28px] font-medium lg:text-[64px]">65k+</p>
          <p className="text-[14px] lg:text-[20px]">65,095</p>
          <p className="text-center text-[14px] font-medium leading-[20px] lg:text-[24px]">AI prompts written</p>
        </div>
      </div>
      <div className="mt-2">
        <Image 
          src="/assets/images/metrics-map.png" 
          className="h-auto w-full" 
          alt="Metrics Map"
        />
      </div>
    </div>
  )
}

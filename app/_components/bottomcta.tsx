import React from 'react'

export default function BottomCta() {
  return (
    <div className="mt-20 w-full rounded-[24px] border border-[#E2E5E9] px-[9px] py-2 shadow-[0px_4px_4px_0px_rgba(20,21,26,0.05)]">
      <div 
        className="rounded-[16px] border border-[#D3D3D3]" 
        style={{
          backgroundImage: "url('/_next/static/media/bg.c50e9da8.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-y-[24px] gap-x-10 px-2 lg:flex-row">
          <div className="order-2 flex w-full flex-col items-center px-10 pt-10 pb-8 lg:order-1 lg:block lg:py-[70px] lg:px-0">
            <h2 className="text-center text-[28px] font-medium leading-[32px] tracking-[-1px] lg:text-left lg:text-[48px] lg:leading-[56px]">
              Start your AI journey with Coursiv today!
            </h2>
            <p className="mt-2 max-w-[638px] text-center text-[16px] leading-[24px] tracking-[-0.2px] opacity-80 lg:mt-6 lg:text-left lg:text-[20px] lg:leading-[28px]">
              Learn today, take control of your future, and grow your income with new digital skills and AI
            </p>
            <button className="mt-10 flex cursor-pointer items-center justify-center rounded-[24px] bg-[#5653FE] px-[69px] py-[12px] text-base font-semibold leading-[24px] text-white lg:px-6">
              <p className="ml-1 text-base font-medium">Start Now</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="hidden h-6 w-6 lg:block">
                <path fill="#fff" d="M16.375 12.065c0 .232-.082.43-.267.608l-5.332 5.216a.753.753 0 0 1-.553.225.786.786 0 0 1-.8-.793c0-.219.096-.417.24-.567l4.812-4.69-4.813-4.689a.824.824 0 0 1-.24-.574c0-.445.356-.786.8-.786.22 0 .404.075.554.225l5.332 5.216a.83.83 0 0 1 .267.609Z" />
              </svg>
            </button>
          </div>
          <div className="order-1 mt-4 flex w-full justify-center lg:order-2 lg:mt-0 lg:mr-24 lg:justify-end">
            <img 
              src="/assets/images/phone-screen.png" 
              alt="Sample Coursiv lerning path in-app screenshot" 
              className="h-auto w-full max-w-[313px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

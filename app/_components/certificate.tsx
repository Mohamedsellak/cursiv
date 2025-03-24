import React from 'react'

export default function Certificate() {
  return (
    <div className="mb-20 mt-20 w-full rounded-[24px] border border-[#E2E5E9] px-[9px] py-2 shadow-[0px_4px_4px_0px_rgba(20,21,26,0.05)] lg:mb-40 lg:mt-[100px]">
      <div 
        className="rounded-[16px] border border-[#D3D3D3] lg:px-[100px]" 
        style={{
          backgroundImage: "url('/assets/images/bg.hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-y-[24px] gap-x-10 py-[50px] px-2 lg:flex-row lg:py-[100px]">
          <div className="order-2 w-full px-4 lg:order-1 lg:px-0">
            <h2 className="text-center text-[28px] font-medium leading-[32px] tracking-[-1px] lg:text-left lg:text-[48px] lg:leading-[56px]">
              Earn a certificate that proves your AI skills
            </h2>
            <p className="mt-2 hidden max-w-[638px] text-[16px] leading-[24px] tracking-[-0.2px] opacity-80 lg:mt-6 lg:block">
              Complete your AI course and receive a certificate to highlight your expertise. It's proof of the valuable skills you've gained to tackle challenges, achieve your goals, and move forward in your career or personal projects.
            </p>
            <p className="mt-2 max-w-[638px] text-center text-[16px] leading-[24px] tracking-[-0.2px] opacity-80 lg:hidden">
              Complete your AI course and receive a certificate to highlight your expertise.
            </p>
            <button className="cursor-pointer items-center justify-center rounded-[24px] bg-[#5653FE] px-[24px] py-[12px] text-base font-semibold leading-[24px] text-white mx-auto mt-10 flex lg:mx-0 lg:mt-8">
              <p className="ml-1 text-base font-medium">Get Certificate Today</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="h-6 w-6">
                <path fill="#fff" d="M16.375 12.065c0 .232-.082.43-.267.608l-5.332 5.216a.753.753 0 0 1-.553.225.786.786 0 0 1-.8-.793c0-.219.096-.417.24-.567l4.812-4.69-4.813-4.689a.824.824 0 0 1-.24-.574c0-.445.356-.786.8-.786.22 0 .404.075.554.225l5.332 5.216a.83.83 0 0 1 .267.609Z" />
              </svg>
            </button>
          </div>
          <div className="order-1 flex w-full justify-center lg:order-2 lg:justify-end">
            <img 
              src="/assets/images/certificate.png" 
              alt="Certificate of completion an AI course by Coursiv" 
              className="h-auto w-full max-w-[495px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

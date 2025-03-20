import React from 'react'

export default function Benefits() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 gap-x-[100px] rounded-[24px] border-[#E2E5E9] px-4 py-[62px] lg:flex-row lg:border lg:px-10 lg:py-20 lg:shadow-[0px_4px_4px_0px_rgba(20,21,26,0.05)]">
      <div className="order-2 w-full lg:order-1">
        <h2 className="text-[28px] font-medium leading-[56px] tracking-[-1px] lg:text-[48px]">
          Why people love Coursiv
        </h2>
        <p className="mt-2 text-[20px] leading-[28px] tracking-[-0.2px] opacity-80 lg:mt-6">
          Thousands of users trust Coursiv to learn AI. Get the tools, skills, and confidence to grow in your career.
        </p>
        <div className="mt-10 flex flex-col gap-y-[24px]">
          <div className="flex gap-x-[24px]">
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                <g clipPath="url(#1_svg__a)">
                  <path stroke="#5653FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82" d="M19.875 22c1.449 0 2.625-1.254 2.625-2.8 0-1.547-1.176-2.8-2.625-2.8 0-1.546-1.176-2.8-2.625-2.8M4.125 22C2.676 22 1.5 20.746 1.5 19.2c0-1.547 1.176-2.8 2.625-2.8 0-1.546 1.176-2.8 2.625-2.8m3.15 1.05v5.25m4.2-5.25v2.1M9.55 7V5.635c0-1.54.642-2.865 1.588-3.983C11.505 1.217 11.69 1 12 1c.31 0 .493.217.862.652.945 1.118 1.588 2.443 1.588 3.982V7c0 1.125 0 1.444.68 1.937.544.35 1.07.688 1.07 1.365 0 .823-.35 1.198-1.117 1.198H8.917c-.766 0-1.117-.375-1.117-1.197 0-.678.526-1.016 1.071-1.366.68-.492.68-.812.68-1.937Z"></path>
                </g>
                <defs>
                  <clipPath id="1_svg__a">
                    <path fill="#fff" d="M.5 0h24v24H.5z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-medium leading-[28px] tracking-[-0.2px]">Quick and easy to follow:</h3>
              <p className="text-wrap max-w-[450px] text-[18px] leading-[24px] tracking-[-0.2px] opacity-80">Learn AI in just 15 minutes a day—perfect for any age or experience level.</p>
            </div>
          </div>
          <div className="flex gap-x-[24px]">
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                <g stroke="#5653FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#2_svg__a)">
                  <path d="M15.798 15.267v1.547c0 2.917 0 4.375-.967 5.281-.966.906-2.523.906-5.633.906-3.111 0-4.668 0-5.633-.906-.967-.905-.967-2.365-.967-5.28v-5.304c0-2.917 0-4.376.967-5.282.64-.6 1.482-.766 2.333-.811m3.3 14.283h.01"></path>
                  <path d="M15.8 2.65c-2.318-1.3-3.713-1.551-5.5-1.65-.712.129-.937.386-1.1 1.1v6.6c-.006 1.005.217 1.382 1.1 1.65 2.394.383 3.541.73 5.364 1.586.086.04.187.042.274.005 1.759-.755 2.895-1.177 4.2-1.423.766-.143 1.719-.154 2.098-.834.135-.238.18-.547.163-.984V2.1c-.224-.708-.465-.947-1.1-1.1-1.931.107-3.1.38-5.5 1.65Zm0 0v8.8"></path>
                </g>
                <defs>
                  <clipPath id="2_svg__a">
                    <path fill="#fff" d="M.5 0h24v24H.5z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-medium leading-[28px] tracking-[-0.2px]">Multiple learning formats:</h3>
              <p className="text-wrap max-w-[450px] text-[18px] leading-[24px] tracking-[-0.2px] opacity-80">Choose from audio lessons, step-by-step guides, and interactive courses to suit your style.</p>
            </div>
          </div>
          <div className="flex gap-x-[24px]">
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                <path fill="#5653FE" stroke="#5653FE" strokeWidth="0.8" d="M15.773 8v1.625h-4.637c-.82 0-1.606.343-2.185.952a3.337 3.337 0 0 0-.906 2.299v3.25c0 .862.326 1.689.906 2.298.58.61 1.366.952 2.185.952h7.728c.82 0 1.606-.342 2.185-.952.58-.61.905-1.436.905-2.298v-3.25a3.38 3.38 0 0 0-.414-1.625 3.174 3.174 0 0 0-1.13-1.19V8.276c1.8.67 3.09 2.476 3.09 4.598v3.25a5.006 5.006 0 0 1-1.358 3.448A4.524 4.524 0 0 1 18.864 21h-7.728a4.524 4.524 0 0 1-3.278-1.428A5.006 5.006 0 0 1 6.5 16.124v-3.248c0-1.293.488-2.534 1.358-3.448A4.524 4.524 0 0 1 11.136 8h4.637Z"></path>
                <path fill="#5653FE" stroke="#5653FE" strokeWidth="0.8" d="M9.227 15v-1.625h4.637c.82 0 1.606-.342 2.185-.952.58-.61.905-1.436.905-2.298v-3.25c0-.862-.325-1.689-.905-2.298a3.016 3.016 0 0 0-2.185-.952H6.136c-.82 0-1.606.342-2.185.952a3.337 3.337 0 0 0-.906 2.298v3.25c0 .57.143 1.13.415 1.625.27.494.661.904 1.13 1.19v1.784a4.67 4.67 0 0 1-2.24-1.783 5.05 5.05 0 0 1-.85-2.816v-3.25c0-1.293.488-2.533 1.358-3.447A4.524 4.524 0 0 1 6.136 2h7.728c1.23 0 2.409.514 3.278 1.428A5.005 5.005 0 0 1 18.5 6.875v3.25a5.005 5.005 0 0 1-1.358 3.447A4.524 4.524 0 0 1 13.864 15H9.227Z"></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-medium leading-[28px] tracking-[-0.2px]">Accessible anytime, anywhere:</h3>
              <p className="text-wrap max-w-[450px] text-[18px] leading-[24px] tracking-[-0.2px] opacity-80">Our app is available on both the App Store and Play Market for learning on the go.</p>
            </div>
          </div>
          <div className="flex gap-x-[24px]">
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                <path fill="#5653FE" d="M20.512 23.01a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path fill="#5653FE" d="M18.5 3H7.33a3 3 0 1 0 0 2H18.5a3 3 0 0 1 0 6h-3.17a3 3 0 0 0-5.64 0H6.5a5 5 0 0 0 0 10h6v3l4-4-4-4v3h-6a3 3 0 0 1 0-6h3.2a3 3 0 0 0 5.63 0h3.17a5 5 0 1 0 0-10Z"></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-medium leading-[28px] tracking-[-0.2px]">Practical and actionable:</h3>
              <p className="text-wrap max-w-[450px] text-[18px] leading-[24px] tracking-[-0.2px] opacity-80">Gain hands-on experience with our AI tools which you can apply immediately to increase income-potential.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2">
        <img 
          alt="Screenshot of Coursiv app for mobile" 
          loading="lazy" 
          width="443" 
          height="555" 
          decoding="async" 
          data-nimg="1" 
          className="h-auto min-h-[360px] w-full max-w-[443px] md:mx-auto" 
          style={{ color: 'transparent' }} 
          srcSet="/assets/images/phone.png" 
          src="/assets/images/phone.png"
        />
      </div>
    </div>
  )
}

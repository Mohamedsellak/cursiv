import React from 'react'
import Image from 'next/image'

export default function Challenge() {
  const bgStyle = {
    backgroundImage: "url('/assets/images/bg.challenge.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }

  const challengeDays = Array.from({ length: 8 }, (_, i) => ({
    day: i + 1,
    image: `/assets/images/challenges/${i + 1}.png`
  }))

  return (
    <main className="border border-[#E2E5E9] shadow-[0px_4px_4px_0px_rgba(20,21,26,0.05)] rounded-[24px] px-[9px] py-2 mt-16">
      <div className="rounded-[16px] px-4 py-4 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:py-[106px] lg:px-[147px] border border-[#D3D3D3]" style={bgStyle}>
        <div className="lg:w-[960px]">
          <h2 className="mb-[8px] text-[24px] font-medium leading-[32px] sm:text-[34px] sm:leading-[44px]">Learn new AI every day in our 28-day Challenge</h2>
          <p className="mb-[16px] text-[14px] leading-[21px] sm:mb-[24px] sm:text-[18px] sm:leading-[28px]">Don’t let your goals overwhelm you. Learn AI skills tailored to your needs and everyday tasks.</p>
          <div style={{ opacity: 1 }}>
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="mb-[18px] flex w-full items-center justify-between border-b-[1px] border-[#5653FE] border-opacity-40 pb-[24px]">
                  <h4 className="font-bold sm:text-[24px] sm:leading-[32px]">AI Mastery</h4>
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap gap-[12px] sm:gap-[16px]">
                    {challengeDays.map(({ day, image }) => (
                      <div key={day} className="relative flex flex-col items-center gap-[4px] sm:gap-[8px]">
                        <Image
                          alt="Challenge icon"
                          loading="lazy"
                          width={96}
                          height={96}
                          className="h-[72px] w-[72px] overflow-hidden rounded-t-[8px] object-cover object-center sm:h-[96px] sm:w-[96px]"
                          style={{ color: 'transparent' }}
                          sizes="(max-width: 640px) 72px, 96px"
                          src={image}
                        />
                        <div className={`absolute left-0 top-[72px] h-[1px] bg-white opacity-40 sm:top-[96px] ${day === 8 ? 'w-full' : 'w-[calc(100%+12px)] sm:w-[calc(100%+16px)]'}`}></div>
                        <p className="text-xs leading-[21px] sm:text-sm">Day {day}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative flex flex-wrap gap-[8px] pt-[32px] sm:pt-[40px]">
                  <button className="flex items-center justify-center whitespace-nowrap rounded-[25px] px-[16px] py-[8px] text-sm font-normal leading-[21px] border border-[rgba(0,0,0,0)] bg-white flex items-center gap-[2px] !py-[4px]" aria-label="select Challenge">
                    <span className="flex h-[16px] w-[24px] items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M5.57812 12.1621C5.23633 12.1621 4.9834 12.0186 4.74414 11.7246L1.20312 7.29492C1.03223 7.08301 0.957031 6.88477 0.957031 6.67969C0.957031 6.20801 1.30566 5.86621 1.78418 5.86621C2.08496 5.86621 2.29004 5.97559 2.48828 6.24219L5.55078 10.1729L11.4912 0.739258C11.6963 0.417969 11.8945 0.301758 12.2295 0.301758C12.708 0.301758 13.0361 0.629883 13.0361 1.10156C13.0361 1.28613 12.9814 1.47754 12.8379 1.69629L6.41211 11.7178C6.21387 12.0117 5.94043 12.1621 5.57812 12.1621Z" fill="#282674"></path>
                      </svg>
                    </span>
                    AI Skills
                  </button>
                  <button className="flex items-center justify-center whitespace-nowrap rounded-[25px] px-[16px] py-[8px] text-sm font-normal leading-[21px] border border-[rgba(0,0,0,0)] bg-white flex items-center gap-[2px] !py-[4px]" aria-label="select Challenge">
                    <span className="flex h-[16px] w-[24px] items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M5.57812 12.1621C5.23633 12.1621 4.9834 12.0186 4.74414 11.7246L1.20312 7.29492C1.03223 7.08301 0.957031 6.88477 0.957031 6.67969C0.957031 6.20801 1.30566 5.86621 1.78418 5.86621C2.08496 5.86621 2.29004 5.97559 2.48828 6.24219L5.55078 10.1729L11.4912 0.739258C11.6963 0.417969 11.8945 0.301758 12.2295 0.301758C12.708 0.301758 13.0361 0.629883 13.0361 1.10156C13.0361 1.28613 12.9814 1.47754 12.8379 1.69629L6.41211 11.7178C6.21387 12.0117 5.94043 12.1621 5.57812 12.1621Z" fill="#282674"></path>
                      </svg>
                    </span>
                    Business Growth
                  </button>
                  <button className="flex items-center justify-center whitespace-nowrap rounded-[25px] px-[16px] py-[8px] text-sm font-normal leading-[21px] border border-[rgba(0,0,0,0)] bg-white flex items-center gap-[2px] !py-[4px]" aria-label="select Challenge">
                    <span className="flex h-[16px] w-[24px] items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M5.57812 12.1621C5.23633 12.1621 4.9834 12.0186 4.74414 11.7246L1.20312 7.29492C1.03223 7.08301 0.957031 6.88477 0.957031 6.67969C0.957031 6.20801 1.30566 5.86621 1.78418 5.86621C2.08496 5.86621 2.29004 5.97559 2.48828 6.24219L5.55078 10.1729L11.4912 0.739258C11.6963 0.417969 11.8945 0.301758 12.2295 0.301758C12.708 0.301758 13.0361 0.629883 13.0361 1.10156C13.0361 1.28613 12.9814 1.47754 12.8379 1.69629L6.41211 11.7178C6.21387 12.0117 5.94043 12.1621 5.57812 12.1621Z" fill="#282674"></path>
                      </svg>
                    </span>
                    Boost Productivity
                  </button>
                  <button className="flex items-center justify-center whitespace-nowrap rounded-[25px] px-[16px] py-[8px] text-sm font-normal leading-[21px] border border-[rgba(0,0,0,0)] bg-white flex items-center gap-[2px] !py-[4px]" aria-label="select Challenge">
                    <span className="flex h-[16px] w-[24px] items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M5.57812 12.1621C5.23633 12.1621 4.9834 12.0186 4.74414 11.7246L1.20312 7.29492C1.03223 7.08301 0.957031 6.88477 0.957031 6.67969C0.957031 6.20801 1.30566 5.86621 1.78418 5.86621C2.08496 5.86621 2.29004 5.97559 2.48828 6.24219L5.55078 10.1729L11.4912 0.739258C11.6963 0.417969 11.8945 0.301758 12.2295 0.301758C12.708 0.301758 13.0361 0.629883 13.0361 1.10156C13.0361 1.28613 12.9814 1.47754 12.8379 1.69629L6.41211 11.7178C6.21387 12.0117 5.94043 12.1621 5.57812 12.1621Z" fill="#282674"></path>
                      </svg>
                    </span>
                    Save Time
                  </button>
                  <button className="flex items-center justify-center whitespace-nowrap rounded-[25px] px-[16px] py-[8px] text-sm font-normal leading-[21px] border border-[rgba(0,0,0,0)] bg-white flex items-center gap-[2px] !py-[4px]" aria-label="select Challenge">
                    <span className="flex h-[16px] w-[24px] items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M5.57812 12.1621C5.23633 12.1621 4.9834 12.0186 4.74414 11.7246L1.20312 7.29492C1.03223 7.08301 0.957031 6.88477 0.957031 6.67969C0.957031 6.20801 1.30566 5.86621 1.78418 5.86621C2.08496 5.86621 2.29004 5.97559 2.48828 6.24219L5.55078 10.1729L11.4912 0.739258C11.6963 0.417969 11.8945 0.301758 12.2295 0.301758C12.708 0.301758 13.0361 0.629883 13.0361 1.10156C13.0361 1.28613 12.9814 1.47754 12.8379 1.69629L6.41211 11.7178C6.21387 12.0117 5.94043 12.1621 5.57812 12.1621Z" fill="#282674"></path>
                      </svg>
                    </span>
                    Advance Career
                  </button>
                </div>
                <p className="capitalize">Join our Challenge</p>
                <button aria-label="Get started with challenge" className="flex cursor-pointer items-center justify-center rounded-[24px] bg-[#5653FE] px-[24px] py-[12px] text-base font-semibold leading-[24px] text-white mt-[40px] !w-auto !rounded-[25px] px-[42px] py-3 sm:mx-auto sm:mt-[32px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full" id="hero">
      <div className="w-full px-2 pt-4 pb-2">
        <div 
          className="relative w-full rounded-[16px] border border-[#D3D3D3] pb-[36px] pt-4 lg:pb-[80px]" 
          style={{ 
            backgroundImage: "url('/assets/images/bg.hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <header className="relative flex h-[72px] w-full items-center justify-between px-[50px] mx-auto max-w-[1280px] max-sm:h-[48px] max-sm:px-[16px]" id="navbar">
            {/* Desktop Nav */}
            <div className="contents max-sm:hidden">
              <div className="relative z-10 flex items-center gap-[40px]">
                <Image
                  alt="Coursiv logo"
                  width={85}
                  height={25}
                  src="/logo.svg"
                  priority
                />
                <Link className="text-base font-normal leading-[24px]" href="/en">
                  Home
                </Link>
                <Link className="text-base font-normal leading-[24px]" href="https://blog.coursiv.io?utm_source=website_landing">
                  Blog
                </Link>
              </div>
              <div className="relative z-10 flex items-center gap-[16px]">
                <Link 
                  href="" 
                  target="_blank" 
                  className="flex h-[32px] items-center px-[24px] py-[12px] text-sm font-medium text-[#24234C]"
                >
                  <span className="flex h-[32px] items-center justify-center rounded-[24px] border border-[#E3E3E3] py-[12px] px-[16px]">
                    Login
                  </span>
                </Link>
                <button 
                  aria-label="Start Now" 
                  className="flex cursor-pointer items-center justify-center rounded-[24px] bg-[#5653FE] px-[24px] py-[12px] text-base font-semibold leading-[24px] text-white h-[32px] text-sm font-medium"
                >
                  Start Now
                </button>
              </div>
            </div>

            {/* Mobile Nav */}
            <div className="contents sm:hidden">
              <div className="relative z-10 flex w-full justify-center">
                <Image
                  alt="Coursiv logo"
                  width={85}
                  height={25}
                  src="/logo.svg"
                  priority
                />
                <button className="absolute right-0" aria-label="Open sidebar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none">
                    <path fill="#24234C" d="M2 5.333C2 4.597 2.56 4 3.25 4h17.5c.69 0 1.25.597 1.25 1.333 0 .737-.56 1.334-1.25 1.334H3.25C2.56 6.667 2 6.07 2 5.333ZM2 12c0-.736.56-1.333 1.25-1.333h17.5c.69 0 1.25.597 1.25 1.333s-.56 1.333-1.25 1.333H3.25C2.56 13.333 2 12.736 2 12Zm0 6.667c0-.737.56-1.334 1.25-1.334h17.5c.69 0 1.25.597 1.25 1.334 0 .736-.56 1.333-1.25 1.333H3.25C2.56 20 2 19.403 2 18.667Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <div className="flex flex-col justify-center gap-x-6 px-0 sm:px-4 lg:flex-row mt-8">
            <div className="flex flex-col items-center lg:block">
              <div className="mt-10 flex max-h-[28px] w-fit items-center gap-1 rounded-full border border-[#E2E5E9] bg-[#EEF] p-1 text-[14px] font-medium text-[#5653FE] lg:mt-[85px]">
                <div className="rounded-full bg-white px-2">AI</div>
                <p className="text-[#5653FE]">Coursiv</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" className="h-4 w-4">
                  <path fill="#5653FE" d="M10.783 7.333 7.207 3.757l.942-.943L13.335 8l-5.186 5.185-.942-.943 3.576-3.576H2.668V7.333h8.115Z"></path>
                </svg>
              </div>
              <h1 className="mt-8 px-14 text-center text-[40px] font-medium leading-[36px] lg:px-0 lg:text-left lg:text-[64px] lg:leading-[64px]">
                Become the <br className="hidden lg:block" /> Master of AI
              </h1>
              <p className="mt-4 max-w-[270px] text-center text-[16px] opacity-80 lg:mt-6 lg:max-w-none lg:text-left lg:text-[20px]">
                Learn how AI can increase your income and improve your life
              </p>
              <button className="flex cursor-pointer items-center justify-center rounded-[24px] bg-[#5653FE] px-[24px] py-[12px] text-base font-semibold leading-[24px] text-white mt-8 flex items-center justify-center px-[60px] lg:px-[24px]">
                <p className="ml-1 text-base font-medium">Start Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="hidden h-6 w-6 lg:block">
                  <path fill="#fff" d="M16.375 12.065c0 .232-.082.43-.267.608l-5.332 5.216a.753.753 0 0 1-.553.225.786.786 0 0 1-.8-.793c0-.219.096-.417.24-.567l4.812-4.69-4.813-4.689a.824.824 0 0 1-.24-.574c0-.445.356-.786.8-.786.22 0 .404.075.554.225l5.332 5.216a.83.83 0 0 1 .267.609Z"></path>
                </svg>
              </button>
              <div className="mt-8 flex items-center gap-[6px] px-[12px] py-[6px]">
                <div className="flex">
                  <div className="ml-[-12px]">
                    <Image
                      alt="coursiv user"
                      width={70}
                      height={70}
                      className="h-[28px] w-[28px] rounded-full"
                      src="/assets/images/avatar.png"
                      priority
                    />
                  </div>
                  <div className="ml-[-12px]">
                    <Image
                      alt="coursiv user"
                      width={70}
                      height={70}
                      className="h-[28px] w-[28px] rounded-full"
                      src="/assets/images/avatar2.png"
                      priority
                    />
                  </div>
                  <div className="ml-[-12px]">
                    <Image
                      alt="coursiv user"
                      width={70}
                      height={70}
                      className="h-[28px] w-[28px] rounded-full"
                      src="/assets/images/avatar3.png"
                      priority
                    />
                  </div>
                  <div className="ml-[-12px]">
                    <Image
                      alt="coursiv user"
                      width={70}
                      height={70}
                      className="h-[28px] w-[28px] rounded-full"
                      src="/assets/images/avatar4.png"
                      priority
                    />
                  </div>
                  <div className="ml-[-12px]">
                    <Image
                      alt="coursiv user"
                      width={70}
                      height={70}
                      className="h-[28px] w-[28px] rounded-full"
                      src="/assets/images/avatar5.png"
                      priority
                    />
                  </div>
                </div>
                <p className="text-[12px] font-medium leading-[21px] text-[#24234C] lg:text-[14px] sm:text-sm">
                  More than 602,281+ people joined
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:block">
              <Image
                alt="coursiv user"
                width={500}
                height={500}
                src="/assets/images/hero.png"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
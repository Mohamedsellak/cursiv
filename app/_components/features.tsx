"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepsRef.current.map((step, index) => {
      if (!step) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index + 1);
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(step);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-0">
      <div className="flex flex-col items-start justify-center pb-10 lg:items-center lg:pb-20">
        <h2 className="text-[28px] font-medium leading-[32px] tracking-[-1px] lg:text-[48px] lg:leading-[56px]">
          How Coursiv works
        </h2>
        <p className="mt-2 max-w-[580px] text-left text-[16px] leading-[24px] tracking-[-0.2px] opacity-80 lg:mt-6 lg:text-center lg:text-[20px] lg:leading-[28px]">
          Learn at your own pace and discover how AI and digital tools can help you grow
        </p>
      </div>
      
      {/* Mobile View */}
      <div className="flex flex-col gap-8 lg:hidden">
        <div className="flex w-full flex-col gap-8">
          <div className="w-full max-w-[588px]">
            <h3 className="text-[20px] font-medium leading-[32px] tracking-[-0.3px]">
              Step 1: Get your personal learning plan
            </h3>
            <p className="mt-2 text-[16px] leading-[24px] tracking-[-0.2px] opacity-80">
              You begin by defining your unique goals and needs. From there, a personalized learning plan is created to help you focus on the most relevant skills and tools, ensuring you stay on track and motivated.
            </p>
          </div>
          <div>
            <Image
              alt="Step 1: Get your personal learning plan"
              width={669}
              height={760}
              className="h-auto w-full max-w-[440px] object-cover"
              src="/assets/images/features-1.png"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="w-full max-w-[588px]">
            <h3 className="text-[20px] font-medium leading-[32px] tracking-[-0.3px]">
              Step 2: Learn the skills you need
            </h3>
            <p className="mt-2 text-[16px] leading-[24px] tracking-[-0.2px] opacity-80">
              Our easy-to-follow lessons will guide you through practical, hands-on learning. You’ll master the AI tools and other skills that fit your goals, making learning simple and efficient—without overwhelming you.
            </p>
          </div>
          <div>
            <Image
              alt="Step 2: Learn the skills you need"
              width={669}
              height={760}
              className="h-auto w-full max-w-[440px] object-cover"
              src="/assets/images/features-2.png"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="w-full max-w-[588px]">
            <h3 className="text-[20px] font-medium leading-[32px] tracking-[-0.3px]">
              Step 3: Master AI for your goals
            </h3>
            <p className="mt-2 text-[16px] leading-[24px] tracking-[-0.2px] opacity-80">
              Once you’ve learned the basics, you’ll dive deeper into applying AI to achieve your personal and professional objectives. With each skill mastered, you’ll gain the confidence to use AI to boost your productivity, income, and success.
            </p>
          </div>
          <div>
            <Image
              alt="Step 3: Master AI for your goals"
              width={669}
              height={760}
              className="h-auto w-full max-w-[440px] object-cover"
              src="/assets/images/features-3.png"
            />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="flex hidden w-full max-w-[1280px] justify-between px-4 lg:flex lg:gap-x-[120px]">
        <div className="flex flex-col gap-y-[260px]">
          {[1, 2, 3].map((step, index) => (
            <div 
              key={step} 
              ref={(el: HTMLDivElement | null) => {
                stepsRef.current[index] = el;
              }}
              className="w-full"
            >
              <div 
                className="h-[322px] w-full max-w-[588px] rounded-[16px] border border-[#D3D3D3] p-10 shadow-[0px_4px_4px_0px_rgba(20,21,26,0.05)] transition-opacity duration-300" 
                style={{ opacity: activeStep === step ? 1 : 0.3 }}
              >
                <h2 className="text-[24px] font-medium leading-[32px] tracking-[-0.3px]">
                  Step {step}: {step === 1 ? 'Get your personal learning plan' : step === 2 ? 'Learn the skills you need' : 'Master AI for your goals'}
                </h2>
                <p className="mt-4 text-[18px] leading-[24px] tracking-[-0.2px] opacity-80">
                  {step === 1 ? 'You begin by defining your unique goals and needs. From there, a personalized learning plan is created to help you focus on the most relevant skills and tools, ensuring you stay on track and motivated.' : step === 2 ? 'Our easy-to-follow lessons will guide you through practical, hands-on learning. You’ll master the AI tools and other skills that fit your goals, making learning simple and efficient—without overwhelming you.' : 'Once you’ve learned the basics, you’ll dive deeper into applying AI to achieve your personal and professional objectives. With each skill mastered, you’ll gain the confidence to use AI to boost your productivity, income, and success.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sticky top-1/4 h-fit w-[440px]">
          <div className="relative h-[760px]">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="absolute inset-0 transition-opacity duration-300"
                style={{ opacity: activeStep === step ? 1 : 0 }}
              >
                <Image
                  alt={`Step ${step} preview`}
                  width={669}
                  height={760}
                  className="h-auto w-full object-cover"
                  src={`/assets/images/features-${step}.png`}
                  priority={step === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { RiMoneyDollarCircleLine, RiBuilding2Line, RiMegaphoneLine, RiCheckboxCircleLine, RiFileTextLine, RiHandCoinLine } from 'react-icons/ri'
import 'swiper/css'

const iconStyles = {
  income: { icon: "text-orange-500", bg: "bg-orange-50" },
  business: { icon: "text-blue-500", bg: "bg-blue-50" },
  marketing: { icon: "text-purple-500", bg: "bg-purple-50" },
  productivity: { icon: "text-green-500", bg: "bg-green-50" },
  content: { icon: "text-pink-500", bg: "bg-pink-50" },
  affiliate: { icon: "text-indigo-500", bg: "bg-indigo-50" },
}

const getIcon = (name: string) => {
  const styles = iconStyles[name as keyof typeof iconStyles]
  const iconProps = { 
    className: `${styles.icon} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 ease-out group-hover:scale-110`, 
  }
  switch (name) {
    case 'income': return <RiMoneyDollarCircleLine {...iconProps} />
    case 'business': return <RiBuilding2Line {...iconProps} />
    case 'marketing': return <RiMegaphoneLine {...iconProps} />
    case 'productivity': return <RiCheckboxCircleLine {...iconProps} />
    case 'content': return <RiFileTextLine {...iconProps} />
    case 'affiliate': return <RiHandCoinLine {...iconProps} />
    default: return null
  }
}

const slides = [
  {
    id: 0,
    title: "AI income",
    description: "Learn to use AI tools to create new income streams and grow your earnings online",
    icon: "income"
  },
  {
    id: 1,
    title: "AI-powered business",
    description: "Use tools to automate workflows, analyze data, and make smarter decisions that save time and money",
    icon: "business"
  },
  {
    id: 2,
    title: "AI marketing",
    description: "Learn how to increase sales with AI-driven tools for ads, social media, and more...",
    icon: "marketing"
  },
  {
    id: 3,
    title: "AI productivity",
    description: "Simplify your daily tasks with AI tools that save time and increase efficiency",
    icon: "productivity"
  },
  {
    id: 4,
    title: "AI Content Creation",
    description: "Quickly produce high-quality content for blogs, websites, and social media with AI",
    icon: "content"
  },
  {
    id: 5,
    title: "AI affiliate marketing",
    description: "Use AI to find products, automate promotions, and increase affiliate earnings easily",
    icon: "affiliate"
  }
]

export default function Path() {
  const swiperRef = useRef<any>();

  return (
    <div className="w-full py-8 sm:py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <span className="text-sm sm:text-base font-semibold text-indigo-600 mb-2 sm:mb-3 block">
            Your AI Journey Starts Here
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Choose Your Path to Success
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover powerful AI tools and strategies that will transform your digital journey. 
            Select the path that matches your goals and start building your future today.
          </p>
        </div>

        <div className="relative px-2 sm:px-4 md:px-10">
          <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
              aria-label="Previous slide"
            >
              <BsArrowLeftCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={12}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}
          >
            {slides.map((slide) => {
              const styles = iconStyles[slide.icon as keyof typeof iconStyles]
              return (
                <SwiperSlide key={slide.id}>
                  <div className="group bg-gradient-to-b from-white to-gray-50/50 rounded-xl p-4 sm:p-6 
                    shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full
                    hover:-translate-y-1 cursor-pointer">
                    <div className={`${styles.bg} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center 
                      justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(slide.icon)}
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl mb-3 group-hover:text-gray-900 
                      transition-colors duration-300">{slide.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{slide.description}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
              aria-label="Next slide"
            >
              <BsArrowRightCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

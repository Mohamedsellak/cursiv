import React from 'react'
import { FaHome, FaBlog, FaHeadset } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'
import { MdPrivacyTip, MdSubscriptions } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex w-full max-w-[1280px] flex-col items-center justify-center" id="footer">
      <div className="flex w-full flex-col gap-[12px] px-4 pt-[36px] lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Image 
            alt="Coursiv logo" 
            loading="lazy" 
            width="85" 
            height="25" 
            decoding="async" 
            data-nimg="1" 
            style={{ color: 'transparent' }} 
            src="/logo.svg" 
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="flex items-start gap-4 sm:gap-8">
            <a href="https://apps.apple.com/kz/app/coursiv/id6478281150" target="_blank" rel="noopener noreferrer">
              <Image 
                alt="download coursiv from app store" 
                loading="lazy" 
                width="136" 
                height="39" 
                decoding="async" 
                data-nimg="1" 
                className="h-[39px] w-auto" 
                style={{ color: 'transparent' }}
                src="/assets/images/app-store.png" 
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=io.zimran.coursiv" target="_blank" rel="noopener noreferrer">
              <Image 
                alt="download coursiv from google play" 
                loading="lazy" 
                width="136" 
                height="39" 
                decoding="async" 
                data-nimg="1" 
                className="h-[39px] w-auto" 
                style={{ color: 'transparent' }}
                src="/assets/images/google-play.png" 
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[12px] py-[36px] px-[30px] lg:px-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-start gap-8">
          <div className="flex w-[160px] flex-col gap-[8px]">
            <h5 className="mb-2 text-lg font-bold leading-[30px]">Coursiv</h5>
            <ul className="contents text-sm leading-[21px]">
              <li>
                <a href="/" className="hover:underline flex items-center gap-2" target="_blank">
                  <FaHome className="text-lg" /> Home
                </a>
              </li>
              <li>
                <a href="https://blog.coursiv.io?utm_source=website_landing" className="hover:underline flex items-center gap-2" target="_blank">
                  <FaBlog className="text-lg" /> Blog
                </a>
              </li>
              <li>
                <a href="https://support.coursiv.io/en/support/home?utm_source=homepage&amp;utm_medium=link&amp;utm_campaign=registration_Homepage" className="hover:underline flex items-center gap-2" target="_blank">
                  <FaHeadset className="text-lg" /> Support center
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[160px] flex-col gap-[8px]">
            <h5 className="mb-2 text-lg font-bold leading-[24px]">Legal</h5>
            <ul className="contents text-sm leading-[30px]">
              <li>
                <a target="_blank" href="https://legal.coursiv.io/privacy" className="hover:underline flex items-center gap-2">
                  <MdPrivacyTip className="text-lg" /> Privacy policy
                </a>
              </li>
              <li>
                <a target="_blank" href="https://legal.coursiv.io/terms" className="hover:underline flex items-center gap-2">
                  <HiDocumentText className="text-lg" /> Terms and conditions
                </a>
              </li>
              <li>
                <a target="_blank" href="https://legal.coursiv.io/subscription" className="hover:underline flex items-center gap-2">
                  <MdSubscriptions className="text-lg" /> Subscription terms
                </a>
              </li>
              <li>
                <a href="#" className="cky-banner-element hover:underline flex items-center gap-2">
                  <IoMdLock className="text-lg" /> e-Privacy Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-[8px] lg:items-start">
            <h5 className="mb-2 hidden text-lg font-bold leading-[24px] lg:block">Disclaimer</h5>
            <p className="max-w-[580px] text-center text-sm leading-[30px] opacity-70 lg:text-left lg:opacity-100">Coursiv as an educational platform does not provide any financial or career advice. Please consult with your financial or career advisor first before making any career decisions. There is no any bias towards or against any stocks or companies mentioned in this page.</p>
          </div>
        </div>
      </div>
      <div className="w-full px-3">
        <div className="flex w-full items-center justify-center border-t-[2px] border-[#E2E5E9] py-6 lg:border-t-0">
          <p className="text-center text-sm font-medium leading-[30px] text-[#0D112666]">Coursiv. All right reserved. © 2024. Coursiv Limited. Limassol, Cyprus</p>
        </div>
      </div>
    </footer>
  )
}

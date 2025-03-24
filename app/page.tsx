import Hero from "./_components/hero";
import Quote from "./_components/quote";
import Benefits from "./_components/benefits";
import Path from "./_components/path";
import CTA from "./_components/cta";
import Features from "./_components/features";
import Metrics from "./_components/metrics";
import Certificate from "./_components/certificate";
import Stories from "./_components/stories";
import Challenge from "./_components/challenge";
import Faq from "./_components/faq";
import Trustpilot from "./_components/trustpilot";
import Reviews from "./_components/reviews";
import BottomCta from "./_components/bottomcta";
import Footer from "./_components/footer";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center text-[#24234C] bg-white">
      <Hero/>
      <Quote/>
      <Benefits/>
      <Path/>
      <CTA/>  
      <Features/>
      <Metrics/>
      <Certificate/>
      <Stories/>
      <Challenge />
      <Faq />
      <Trustpilot/>
      <Reviews/>
      <BottomCta/>
      <Footer/>
    </div>  
  );
}

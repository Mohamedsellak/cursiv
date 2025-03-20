import Hero from "./_components/hero";
import Quote from "./_components/quote";
import Benefits from "./_components/benefits";
import Path from "./_components/path";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center text-[#24234C] bg-white">
      <Hero/>
      <Quote/>
      <Benefits/>
      <Path/>
    </div>
  );
}

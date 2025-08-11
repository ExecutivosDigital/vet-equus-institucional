import CardEndOffer from "@/common/component/element/CardEndOffer";
import Faq from "@/common/module/Faq/Faq";
import Feature from "@/common/module/Feature/Feature";
import Hero from "@/common/module/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
      <Hero />
      <Feature />
      {/* <Solution /> */}
      {/* <Testimonials />  */}
      {/* <HowItsWork /> */}
      {/* <Introduction /> */}
      {/* <Experience/> */}
      {/* <ProFeature /> */}
      {/* <Pricing /> */}
      <Faq />
      <CardEndOffer />
    </div>
  );
}

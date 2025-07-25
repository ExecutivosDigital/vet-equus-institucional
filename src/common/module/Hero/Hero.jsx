"use client";
import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
import { RiArrowRightLine } from "react-icons/ri";
import Ratings from "./components/Ratings";
import SliderTechLeader from "./components/SliderTechLeader";

const FusionApp = dynamic(() => import("./components/FusionApp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start px-5 lg:px-10  w-full mt-20 overflow-hidden ">
      <div className="w-full gap-5 flex lg:flex-row flex-col justify-center mt-5">
        <div className="w-full  z-[9] flex-col justify-evenly py-5 h-auto flex bg-[url('/static/hero-bg.png')] bg-cover bg-no-repeat bg-center rounded-2xl px-5">
          <div className="w-full flex justify-start  ">
            <div className="bg-white text-primary rounded-full px-1 py-1 flex gap-1 items-center">
              <div className="bg-primary rounded-full px-2">
                <h1 className="text-white">Novo</h1>
              </div>
              <h1 className="">Faça parte do Vetequus</h1>
              <div className="pr-3">
                <RiArrowRightLine size={20} className="" />
              </div>
            </div>
          </div>
          <div className="w-full mt-5 ">
            <HeroText
              texts="A Clínica Equina na palma da sua mão, em Segundos"
              className="text-white  leading-[0.95em] "
            />
          </div>
          <H1
            delay={0.2}
            className="mt-5 w-full lg:!w-[80%] justify-start !text-lg text-start"
            title="Controle fichas, agendamentos, estoques, finanças e diagnósticos com inteligência artificial. Tudo o que o veterinário equino precisa, em um só lugar."
            textColor="white"
          />
          <div className="w-full relative gap-5 flex justify-start items-center">
            <button className="border transition duration-300 hover:border-primary hover:bg-white hover:text-primary border-white rounded-md px-2 py-1 text-white font-semibold text-sm">
              O que é o Vetequus?
            </button>
            <button className="border flex items-center gap-2 transition duration-300 hover:border-white hover:bg-primary bg-white hover:text-white border-primary rounded-md px-2 py-1 text-primary font-semibold text-sm">
              Testar Vetequus agora <BsArrowRight />
            </button>
          </div>
          <div className="w-full">
            <Ratings />
          </div>
        </div>

        <div className="basis-[70%] flex w-full relative  justify-center items-center">
          <div className="w-full  h-[600px] overflow-hidden px-5 py-5 relative rounded-2xl">
            {/* <FusionApp /> */}
            <div className="absolute inset-0 w-full z-[-9]">
              <Image
                className="w-full h-[600px] "
                src="/static/hero-right.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>
    </div>
  );
}

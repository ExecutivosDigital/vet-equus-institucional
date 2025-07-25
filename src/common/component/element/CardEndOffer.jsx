"use client";
import { useMobile } from "@/common/hooks/useMobile";
import clsx from "clsx";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import ComponentTransition from "./ComponentTransition";
import H1 from "./H1";
import Image from "./Image";

export default function CardEndOffer({ className }) {
  const isMobile = useMobile();
  return (
    <ComponentTransition
      className={clsx(
        className,
        `h-auto max-w-[1500px] flex flex-col py-10 px-5 lg:px-10  w-full  overflow-hidden `
      )}
    >
      <div className="w-full relative bg-gradient-to-b from-primary to-[#283620] rounded-3xl border-[1px] border-[#262626] z-[9]  items-start h-[700px] lg:h-[500px] overflow-hidden lg:flex-row flex-col flex justify-center ">
        <div className="lg:w-[150%] gap-5 px-4 lg:px-10 py-20 flex flex-col justify-start items-start">
          <H1
            className="!items-start !w-full !justify-start text-2xl lg:!text-4xl  font-semibold text-start "
            title="Teste agora no Lançamento Oficial e Tenha Benefícios"
            textColor="white"
          />
          <H1
            className=" !justify-start !text-base text-start lg:w-[90%]"
            title="Cadastre-se agora e tenha benefícios durante o lançamento beta.
            Teste os principais recursos da LegisDados antes de todo mundo e receba atualizações exclusivas."
            textColor="white"
          />
          <div className="w-full relative gap-5 flex justify-start items-center">
            <button className="bg-white text-primary w-max border border-transparent hover:border-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-transparent hover:text-white transition duration-300">
              <span>Testar LegisDados Agora</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
        <motion.div
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="flex w-full z-[9] overflow-hidden justify-end items-start relative lg:top-[60px] left-[30px] lg:left-[190px]"
        >
          <Image
            className="w-full lg:w-[90%] h-auto object-cover"
            src="/static/phone-3.png"
            alt="Fusion"
            height={2000}
            width={750}
            quality={100}
            priority
          />
        </motion.div>
        <motion.div
          initial={{
            y: 250,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="hidden lg:flex w-full overflow-hidden  justify-end items-start relative lg:top-[150px] left-[30px] lg:left-[90px]"
        >
          <Image
            className="w-full lg:w-[90%] h-auto object-cover"
            src="/static/phone-4.png"
            alt="Fusion"
            height={2000}
            width={750}
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </ComponentTransition>
  );
}

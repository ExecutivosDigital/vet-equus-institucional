import Accordian from "@/common/component/element/Accordian";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import { PricingFaqitem } from "@/common/constant/Faq";

export default function Faq() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText
            // icon={<FaStarOfLife size={20} className="" />}
            title="Perguntas e Respostas"
          />
          <H1
            title="Perguntas Frequentes"
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <div className="w-full lg:px-32">
            <Accordian Content={PricingFaqitem} />
          </div>
        </div>
      </div>
    </div>
  );
}

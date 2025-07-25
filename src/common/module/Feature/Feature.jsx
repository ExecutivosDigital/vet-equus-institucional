import CardIcon from "@/common/component/element/CardIcon";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import { HowItsWorkItem } from "@/common/constant/HowItsWorkItem";
import CardVariantBig from "./components/CardVariantBig";

export default function Feature() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText
            // icon={<FaStarOfLife size={20} className="" />}
            title="Inovação na Política"
          />
          <H1
            title="Descubra o Impacto da nossa Inteligência Artificial"
            className="!text-2xl lg:!text-5xl w-full lg:w-[50%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <H1
            title="Crie sua conta em menos de 3 minutos e tenha acesso completo"
            className="!text-sm lg:!text-base w-full !mt-5 !text-center justify-center items-center text-primary"
            textColor="primary"
          />
          <div className="w-full">
            {/* <Card item={FeaturesItem} /> */}
            <CardVariantBig />
            <CardIcon item={HowItsWorkItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

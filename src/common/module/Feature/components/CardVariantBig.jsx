import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

export default function CardVariantBig() {
  return (
    <div className="flex flex-col h-auto w-full gap-10 py-5 justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-primary to-[#283620] to-90% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-white w-10 h-10 flex items-center justify-center p-1 rounded-xl">
              <Image
                src="/logo/icon.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full m-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full mb-4 text-white">
            <h1 className="text-4xl font-semibold">
              Reconhece algum desses problemas na sua rotina?
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Dificuldade para organizar laudos e relatórios.</li>
              <li>Muito tempo perdido em burocracias.</li>
              <li>Informações importantes se perdem no dia a dia.</li>
              <li>Gestão financeira pouco prática.</li>
            </ul>
          </div>
          <div className="w-full h-full top-[210px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/static/phone-1.png"
              alt="Image"
              height={2000}
              width={750}
              quality={100}
              priority
            />
          </div>
        </ComponentTransition>

        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-primary to-[#283620] to-90% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-white w-10 h-10 flex items-center justify-center p-1 rounded-xl">
              <Image
                src="/logo/icon.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full m-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full mb-4 text-white">
            <h1 className="text-4xl font-semibold">
              A Equinology resolve isso para você.
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Fale e a IA cria laudos e relatórios em segundos.</li>
              <li>Históricos e dados organizados e acessíveis.</li>
              <li>
                Dados no celular: organize, decida e atue mais rápido e seguro,
                mesmo no campo.
              </li>
            </ul>
          </div>
          <div className="w-full h-full top-[210px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/static/phone-2.png"
              alt="Image"
              height={2000}
              width={750}
              quality={100}
              priority
            />
          </div>
        </ComponentTransition>
      </div>

      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col items-center gap-5 p-10 bg-[url('/static/inside.png')] bg-cover bg-no-repeat bg-center bg-opacity-10 to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full h-full flex flex-col gap-5">
          <div className=" w-full gap-2 flex justify-start relative">
            <div className="bg-[#283620] w-10 flex items-center justify-center h-10 p-1 rounded-xl">
              <Image
                src="/logo/icon-white.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full m-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Tecnologia exclusiva para veterinários de equinos.
            </h1>
            <div className="w-full">
              <ul className="mt-4 space-y-4">
                <li>✅ Acesse e gerencie seus dados com segurança.</li>
                <li>✅ Sua gestão do haras em um só lugar.</li>
                <li>✅ Sua voz vira laudos. Seus dados, relatórios</li>
                <li>✅ Seu aliado na rotina do campo.</li>
                <li>
                  ✅ Mais confiança, menos papel. Sua profissão é elevada,
                  focada no que realmente importa.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative flex justify-center items-center">
          <Image
            className="w-full h-full object-cover "
            src="/static/tablet-2.png"
            alt="Image"
            height={1500}
            width={1500}
            priority
          />
        </div>
      </ComponentTransition>
      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-gradient-to-r from-primary to-[#283620] to-90% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full h-[375px] flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-white w-10 h-10 flex items-center justify-center p-1 rounded-xl">
              <Image
                src="/logo/icon.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full m-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-evenly text-white">
            <h1 className="text-4xl font-semibold">
              Equinology Tecnologia Exclusiva
            </h1>
            <p className="text-lg leading-loose">
              A Equinology nasceu para o campo - simples, rápido e inteligente,
              como o dia a dia do veterinário de equinos exige.
            </p>
            <button className="bg-white text-primary w-max border border-transparent hover:border-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-transparent hover:text-white transition duration-300">
              <span>Testar Equinology Agora</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full h-[375px] relative flex justify-center items-center">
          <Image
            className="max-h-full object-cover "
            src="/static/macbook-2.png"
            alt="Image"
            height={600}
            width={600}
            priority
          />
        </div>
      </ComponentTransition>
    </div>
  );
}

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
          <div className="w-full text-white">
            <h1 className="text-4xl font-semibold">
              Gerenciar pacientes e rotina equina ainda é um desafio
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Planilhas confusas e anotações espalhadas</li>
              <li>Dificuldade para acessar o histórico clínico do animal</li>
              <li>Falta de controle financeiro real do consultório</li>
            </ul>
          </div>
          <div className="w-full h-full top-[200px] relative flex justify-center items-center">
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
          <div className="w-full text-white">
            <h1 className="text-4xl font-semibold">
              Com a Equinology, você faz tudo com agilidade e clareza
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Converse com uma IA treinada em medicina equina</li>
              <li>Gere fichas clínicas completas com poucos cliques</li>
              <li>
                Controle financeiro detalhado por cliente, atendimento e período
              </li>
            </ul>
          </div>
          <div className="w-full h-full top-[200px] relative flex justify-center items-center">
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
              Para Quem Vive a Rotina do Campo e da Clínica Equina
            </h1>
            <div className="w-full">
              <ul className="mt-4 space-y-4">
                <li>✅ Veterinários autônomos em campo ou clínicas</li>
                <li>✅ Clínicas especializadas em equinos</li>
                <li>✅ Escritórios de advocacia com foco público</li>
                <li>✅ Haras e centros de reprodução</li>
                <li>
                  ✅ Profissionais que buscam eficiência, organização e
                  inteligência de dados
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
              Equinology única no mercado.
            </h1>
            <p className="text-lg leading-loose">
              Enquanto outros sistemas são genéricos, nós criamos um ecossistema
              inteligente 100% voltado para equinos.
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

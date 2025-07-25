import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import { FaDigitalOcean } from "react-icons/fa";

export default function CardVariantBig() {
  return (
    <div className="flex flex-col h-auto w-full gap-10 py-5 justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Hoje, acessar dados legislativos é um caos.
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Sistemas confusos, antigos e zero integração com inteligência
              </li>
              <li>
                Para achar uma informação básica, você perde tempo e paciência
              </li>
              <li>
                Não tem ninguém que possa te auxiliar, ajudar ou tirar dúvidas
              </li>
            </ul>
          </div>
          <div className="w-full h-full top-[200px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/FUSION.png"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </ComponentTransition>

        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Com a LegisDados, você consulta tudo em segundos.
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Converse com IA treinada com dados legislativos.</li>
              <li>
                Descubra tramitações, proposições e outros de forma
                simplificada.
              </li>
              <li>
                Tudo sem depender de advogados ou horas de pesquisa manual.
              </li>
            </ul>
          </div>
          <div className="w-full h-full top-[100px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/chart-stat.svg"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </ComponentTransition>
      </div>

      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Feita para quem vive da política:
            </h1>
            <ul className=" space-y-2">
              <li>✅ Assessores parlamentares que precisam de agilidade</li>
              <li>✅ Deputados que querem decisões mais informadas</li>
              <li>✅ Escritórios de advocacia com foco público</li>
              <li>
                ✅ Empresas e lobistas em busca de contratos com prefeituras
              </li>
              <li>✅ Cidadãos interessados em transparência legislativa</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full  relative flex justify-center items-center">
          {/* <Image
            className="w-full h-auto object-cover "
            src="/chart-stat-2.svg"
            alt="Image"
            height={400}
            width={400}
            priority
          /> */}
          <Image
            className="w-full h-auto object-cover "
            src="/chart-sales.svg"
            alt="Image"
            height={400}
            width={400}
            priority
          />
        </div>
      </ComponentTransition>
      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              LegisAI não tem concorrentes diretos.
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Enquanto outros oferecem serviço humano, nós oferecemos
              inteligência artificial legislativa 24/7. 🔎 Pesquisa legislativa
              em linguagem natural
            </p>
          </div>
        </div>
        <div className="w-full h-full  relative flex justify-center items-center">
          <Image
            className="w-full h-auto object-cover "
            src="/chart-stat-2.svg"
            alt="Image"
            height={400}
            width={400}
            priority
          />
        </div>
      </ComponentTransition>
    </div>
  );
}

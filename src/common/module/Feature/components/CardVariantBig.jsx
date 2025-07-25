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
                src="/logo/camara.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full m-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full text-white">
            <h1 className="text-4xl font-semibold">
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
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-[url('/static/inside.png')] bg-cover bg-no-repeat bg-center bg-opacity-10 to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#283620] w-10 flex items-center justify-center h-10 p-1 rounded-xl">
              <Image
                src="/logo/icon.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full m-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Feita para quem vive da política:
            </h1>
            <ul className="mt-4 space-y-4">
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
          <Image
            className="w-full h-auto object-cover "
            src="/static/tablet-1.png"
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
              LegisAI não tem concorrentes diretos.
            </h1>
            <p className="text-lg leading-loose">
              Enquanto outros oferecem serviço humano, nós oferecemos
              inteligência artificial legislativa 24/7. 🔎 Pesquisa legislativa
              em linguagem natural
            </p>
            <button className="bg-white text-primary w-max border border-transparent hover:border-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-transparent hover:text-white transition duration-300">
              <span>Testar LegisDados Agora</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full h-full relative flex justify-center items-center">
          <Image
            className="w-full h-auto object-cover "
            src="/static/macbook-1.png"
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

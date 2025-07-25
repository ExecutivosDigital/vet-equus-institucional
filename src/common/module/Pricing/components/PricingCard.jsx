"use client";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import clsx from "clsx";
import { useState } from "react";
import { CiCircleCheck, CiCircleMinus } from "react-icons/ci";

export default function PricingCard({ item }) {
  const [Price, setPrice] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center py-10">
        <div className="w-auto px-2 py-2 bg-primary/30  rounded-full flex gap-2  overflow-hidden">
          <button
            onClick={() => setPrice(true)}
            className={clsx(
              Price === true && "bg-primary !text-[#F2F2F2]",
              ` text-black  font-medium px-4 py-1 rounded-full transition-all duration-300`
            )}
          >
            <h1>Anual</h1>
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-5 w-full">
        {item.map((items, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            className={clsx(items.className, `flex flex-col p-10  `)}
          >
            <h1>{items.plan}</h1>
            {Price === true ? (
              <h1 className="text-3xl py-5">
                {items.yearly} /<span className="!text-2xl">mês</span>{" "}
              </h1>
            ) : (
              <h1 className="text-3xl py-5">
                {items.price} /<span className="!text-2xl">mês</span>{" "}
              </h1>
            )}
            {items.features.map((item, index) => (
              <div key={index} className="w-full py-2 flex items-center gap-2">
                {item.active && (
                  <CiCircleCheck size={30} className={`text-primary`} />
                )}
                {!item.active && (
                  <CiCircleMinus size={30} className="text-red-500" />
                )}
                <h1>{item.name}</h1>
              </div>
            ))}

            <div className="w-full py-5">
              <ButtonSpot
                title="Escolher"
                className={`${index === 2 ? `bg-black` : `bg-white`} !py-3`}
              />
            </div>
          </ComponentTransition>
        ))}
      </div>
    </div>
  );
}

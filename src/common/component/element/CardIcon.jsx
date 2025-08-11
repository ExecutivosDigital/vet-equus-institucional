import clsx from "clsx";
import ComponentTransition from "./ComponentTransition";

export default function CardIcon({ item }) {
  return (
    <div className="flex lg:flex-row flex-wrap w-full gap-5 justify-center items-center">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            items.className,
            ` flex flex-col justify-evenly border-primary gap-5 p-4 2xl:p-10 bg-white rounded-3xl border overflow-hidden`
          )}
        >
          <div className="w-full flex  gap-1">
            {items.icon && (
              <div className="bg-primary h-10 min-h-10 min-w-10 max-w-10 max-h-10 flex items-center justify-center w-10 p-2 rounded-xl">
                {items.icon}
              </div>
            )}
            <h1 className="text-3xl text-[#181818]  font-semibold pb-4">
              {items.title}
            </h1>
          </div>
          <p className="text-sm text-primary">{items.desc}</p>
        </ComponentTransition>
      ))}
    </div>
  );
}

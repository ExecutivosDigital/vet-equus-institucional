import clsx from "clsx";
import ComponentTransition from "./ComponentTransition";

export default function SectionText({ icon, title, className = "" }) {
  return (
    <ComponentTransition
      className={clsx(
        className,
        `w-auto px-2 rounded-full flex justify-center text-sm font-medium bg-primary text-white gap-2 items-center py-1 mb-2`
      )}
    >
      {icon}
      <h1>{title}</h1>
    </ComponentTransition>
  );
}

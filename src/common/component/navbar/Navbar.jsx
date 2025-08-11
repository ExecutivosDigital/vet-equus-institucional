"use client";
import { NavigationItem } from "@/common/constant/NavigationItem";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonViewAll from "../element/ButtonViewAll";
import H1Hover from "../element/H1Hover";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll
          ? "backdrop-blur-sm bg-[#f6f5f2e3] border-[#bebebd69]"
          : " bg-transparent border-transparent",
        `w-full transition-all duration-300 mx-auto  border-b-[1px]  max-w-[1500px]   py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex w-full z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-center gap-2"
          >
            <Image
              src="/logo/logo.png"
              alt=""
              width={1000}
              height={400}
              quality={100}
              className="h-14 w-max object-contain"
            />
          </Link>
        </div>
        <div className="lg:flex hidden relative justify-center gap-10 items-center w-full">
          {NavigationItem.map((item, index) => (
            <H1Hover
              key={index}
              href={item.src}
              title={item.title}
              item={item.src}
              pathname={pathname}
            />
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden  w-full items-end justify-end">
          <Link href="#" className=" flex justify-end">
            <ButtonViewAll
              title="Cadastrar"
              className="hover:!bg-zinc-200 hover:outline-primary text-zinc-200 hover:text-primary transition-colors duration-300 overflow-hidden !bg-primary outline outline-1 outline-zinc-200 w-auto !py-2"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://pbs.twimg.com/profile_images/1617579246565888001/xfn8I0yo_400x400.jpg"
              alt="Profile Photo of Zmusaddique"
              height={175}
              width={175}
              quality={95}
              priority={true}
              className="object-cover rounded-full border-[.35rem] border-white shadow-xl "
            />
          </motion.div>
          <motion.span
            className="text-5xl bottom-0 right-0 absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.1,
              stiffness: 125,
              damping: 10,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="text-size-2xl mt-4 mb-10 font-medium !leading-[1.5] sm:text-size-4xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Hi, I'm{" "}
        <span className="text-bold backdrop-blur-sm">Muhammed Musaddique</span>,
        an ML-Engineer / Data Scientist.
        <br /> I build products that people love using!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className="group flex gap-2 bg-gray-950 text-white items-center px-7 py-3 rounded-full outline-none hover:bg-gray-950 focus:scale-110  hover:scale-110 active:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="group flex gap-2 bg-gray-50 text-gray-950 items-center px-7 py-3 rounded-full outline-none focus:scale-110 hover:bg-gray-50 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://drive.google.com/file/d/1wDuEPUz1hUP-Xz0u4zCYtGM_el_IqaSU/view?usp=sharing?dl=1"
          download={"Musaddique_MLE_Resume.pdf"}
          target="_blank"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="flex gap-2 bg-white text-gray-700 items-center p-4 rounded-full text-[1.15rem] focus:scale-[1.15] hover:bg-gray-50 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/muhammed-musaddique-k/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="flex gap-2 bg-white text-gray-700 items-center p-4 rounded-full text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:bg-gray-50 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/zmusaddique"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}

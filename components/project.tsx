"use client";

import { projectsData } from "@/lib/data";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 pl-4 relative  hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pb-4">
          <div className="pt-4 pb-7 py-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem] justify-between">
            <h3 className="text-2xl semi-bold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto h-full">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.9] text-xs text-white px-2 py-1 tracking-wider rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={projectUrl}
            target="_blank"
            className="group/link max-w-[44%] sm:ml-10 sm:mb-4 sm:mt-10 sm:max-w-[24%] sm:group-even:ml-[20rem] flex gap-2 py-1 px-2 rounded-md outline-none focus:scale-110 hover:bg-gray-50 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          >
            Check it out!
            <RiExternalLinkLine className="opacity-70 transition-all group-hover/link:translate-x-1 group-hover/link  :-translate-y-1" />
          </a>
        </div>

        <Image
          src={imageUrl}
          alt="Photo of the Project"
          quality={90}
          className="
            absolute hidden sm:block top-8 transition -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            group-even:right-[initial]
            group-even:-left-40
            
            group-hover:scale-[1.05]
            group-hover:-translate-x-3
            group-hover:translate-y-2
            group-hover:-rotate-2
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-2
            group-even:group-hover:rotate-2"
          placeholder="blur"
        />
      </section>
    </motion.div>
  );
}

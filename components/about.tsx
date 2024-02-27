"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-prose text-center leading-1 sm:leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.275 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-8">
        Driven by a passion to craft technological solutions that make a real
        difference, I'm a computer science student with a strong focus on{" "}
        <span className="font-medium">AI and NLP</span>. Currently pursuing my
        Bachelor of Engineering, I'm proficient in Python and actively seeking
        opportunities to apply my skills in projects using{" "}
        <span className="font-medium">LLMs </span>and various data science
        techniques.
      </p>
      <p className="mb-10">
        My passion lies in taking complex problems and chopping them down into
        solvable pieces, using data and a dash of creativity to craft elegant
        solutions. I'm a firm believer in understanding the "why" behind the
        "how," always curious about the inner workings of things, whether it's
        code, cameras, or the latest anime plot twist.
      </p>
      <p>
        <span className="italic">When coding takes a break,</span> you'll find
        me capturing the world through photography and videography, or unwinding
        with a captivating anime series. Feel free to reach out if you're
        looking for someone who can code, problem-solve, and share a good laugh
        along the way!
      </p>
    </motion.section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-24 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -my-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:musaddique092@gmail.com">
          musaddique092@gmail.com
        </a>{" "}
        or via the form below:
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          name="senderEmail"
          required
          className="h-14 p-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          name="message"
          required
          placeholder="Your message"
          className="h-52 my-3 p-4 borderBlackn dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

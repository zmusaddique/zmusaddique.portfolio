import React from "react";
import { BsSubstack } from "react-icons/bs";
import {
  FaHashnode,
  FaInstagram,
  FaKaggle,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    url: "https://twitter.com/zmusaddique_",
    icon: <FaXTwitter />,
  },
  {
    url: "https://www.kaggle.com/zmusaddique",
    icon: <FaKaggle />,
  },
  {
    url: "https://zmusaddique.hashnode.dev/",
    icon: <FaHashnode />,
  },
  {
    url: "https://www.youtube.com/@zmusaddique",
    icon: <FaYoutube />,
  },
  {
    url: "https://www.instagram.com/zmusaddique/",
    icon: <FaInstagram />,
  },
  {
    url: "https://zmusaddique.substack.com/",
    icon: <BsSubstack />,
  },
  {
    url: "https://www.youtube.com/@matical_ai",
    icon: <FaYoutube />,
  },
] as const;

export default function Socials() {
  return (
      <ul className="sm:max-w-[80%] flex flex-row items-center justify-between gap-2 sm:gap-4 text-lg font-sm mb-8">
        {socials.map((social, index) => (
          <React.Fragment key={index}>
            <a
              className="bg-white text-gray-700 p-2 sm:p-4 rounded-full text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:bg-gray-50 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={social.url}
              target="_blank"
            >
              {social.icon}
            </a>
          </React.Fragment>
        ))}
      </ul>
  );
}

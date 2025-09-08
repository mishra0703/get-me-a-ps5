import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Linkedin02Icon,
  MailAtSign01Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center backdrop-blur-[2px] h-auto px-4 py-3">
        {/* Credit */}
        <div className="credit w-full sm:w-1/3 flex justify-center sm:justify-start text-center sm:text-left mb-2 sm:mb-0">
          <span className="hidden sm:inline">
            &copy; Get me a PS5 | Prem Mishra
          </span>
          <span className="sm:hidden">&copy; Prem Mishra</span>
        </div>

        {/* Quick Links (Hidden on small) */}
        <div className="quick-links w-1/3 hidden sm:flex justify-center">
          <ul className="flex gap-5">
            <li className="hover:cursor-pointer hover:underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href={"/"}>Privacy</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href={"/"}>Terms</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="social-links w-full sm:w-1/3 flex justify-center sm:justify-end gap-5 items-center">
          <a
            href="https://github.com/mishra0703"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HugeiconsIcon
              className="hover:scale-130 hover:cursor-pointer transition-all duration-300 ease-in-out"
              icon={GithubIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/prem-mishra-6b42122a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HugeiconsIcon
              className="hover:scale-130 hover:cursor-pointer transition-all duration-300 ease-in-out"
              icon={Linkedin02Icon}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

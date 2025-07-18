"use client";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black-gradient py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#6B7280]">
        <p>© {year} All Rights Reserved.</p>

        <p className="mt-2 md:mt-0">
          Made by <span className="text-white">♡</span>{" "}
          <a
            href="#"
            className="underline hover:text-white transition-colors duration-300"
          >
            RooBan
          </a>
        </p>

        <a
          href="roopavanan1009@gmail.com"
          className="mt-2 md:mt-0 underline hover:text-white transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </footer>
  );
};

export default Footer;

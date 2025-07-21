import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
    <Link href="/resume/rooban_bio.pdf" target="_blank" download>
      <button
        type="button"
        className=" font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#6B7280]  hover:scale-110 hover:bg-black duration-300"
      >
        <Image
          src="/resume.svg"
          width={24}
          height={24}
          alt="resume"
          className="object-contain animate-pulse"
        />
        <span className="lg:block hidden text-white">Download Resume</span>
      </button>
    </Link>
  );
};

export default ResumeButton;

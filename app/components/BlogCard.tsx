"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "@/app/utils/motion";

type BlogCardProps = {
  index: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  tags?: { name: string; color: string }[];
};

const BlogCard = ({
  index,
  title,
  description,
  image,
  slug,
  date,
  tags = [],
}: BlogCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#6b728036] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Image */}
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <Link
              href={`/blog/${slug}`}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/web.webp"
                width={24}
                height={24}
                alt="read blog"
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-secondary text-[13px] mb-1">{date}</p>

          <h3 className="text-white font-bold text-[22px]">{title}</h3>

          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${title}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

export default BlogCard;
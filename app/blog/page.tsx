"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";
import BlogCard from "@/app/components/BlogCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blogs = [
  {
    slug: "animation-securityflaw",
    title:
      "Front-End Animation Security: The Hidden Timing Leak",
    description:
      "Motion design makes interfaces feel alive — but careless implementation can expose user behavior, states, and sensitive UI logic.",
    date: "March 2026",
    image: "/blog/securityflaw.png",
    tags: [
      { name: "security", color: "text-red-400" },
      { name: "frontend", color: "text-blue-400" },
    ],
  },
  {
    slug: "frontend-roadmap",
    title: "Frontend Developer Roadmap 2026",
    description:
      "A practical roadmap to become a modern frontend developer using React, Next.js and modern tools.",
    date: "February 2026",
    image: "/blog/frontend.png",
    tags: [
      { name: "career", color: "text-green-400" },
      { name: "react", color: "text-blue-400" },
    ],
  },
  {
    slug: "seo-aeo",
    title: "SEO & AEO for Developers",
    description:
      "How developers can build SEO-friendly websites that rank in search engines and AI answer engines.",
    date: "January 2026",
    image: "/blog/seo.png",
    tags: [
      { name: "seo", color: "text-yellow-400" },
      { name: "aeo", color: "text-purple-400" },
    ],
  },
];


export default function BlogPage() {
  const router = useRouter();

  return (
    <section className="bg-primary min-h-screen padding pt-52">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary mb-8">
          <button
            onClick={() => router.back()}
            className="hover:text-white transition"
          >
            ← Back
          </button>

          <span>/</span>

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <span>/</span>

          <span className="text-white">Blog</span>
        </div>

        {/* Section Header */}
        <motion.div variants={textVariant()}>
          <p className="sectionSubText">Insights</p>
          <h2 className="styles.sectionHeadText">Blogs.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
        >
          Thoughts on web development, frontend engineering, SEO, security,
          and technology.
        </motion.p>

        {/* Blog Cards */}
        <div className="mt-20 flex flex-wrap gap-10">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.slug} index={index} {...blog} />
          ))}
        </div>

      </div>
    </section>
  );
}
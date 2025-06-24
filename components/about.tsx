"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a frontend developer, I'm passionate about building{" "}
        <span className="font-medium">
          clean, responsive, and user-friendly
        </span>{" "}
        web applications that drive real impact. Over time, I’ve sharpened my
        skills and now specialize in{" "}
        <span className="font-medium">React and TypeScript</span>, which form
        the core of my development toolkit.{" "}
        <span className="italic">My approach to development</span> is centered
        around writing <span className="underline">maintainable</span> and
        scalable code that delivers a seamless user experience. I am always
        eager to learn new tools and best practices that help enhance{" "}
        <span className="font-medium">
          performance, accessibility, and code quality
        </span>
        .
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}

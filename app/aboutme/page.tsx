"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-12 ">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl items-center"
      >
        {/* Image Section */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center "
        >
          <Image
            src="/image/pfp.png"
            alt="Subhash"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg "
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-lg leading-relaxed text-slate-300 "
        >
          <h1 className="text-4xl font-bold mb-6" style={{ color: "#1CE3D8" }}>
            About Me
          </h1>
          <p className="mb-4">
            Hi, I’m{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              Subhash
            </span>
            , a 3rd-year{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              B.Tech, Information Technology
            </span>{" "}
            student at{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              Sri Sairam Institute of Technology
            </span>{" "}
            with a passion for{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              Full Stack Development
            </span>
            .
          </p>
          <p className="mb-4">
            I build web applications using{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              Next.js
            </span>{" "}
            on the frontend and{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              MongoDB
            </span>{" "}
            with{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              Prisma
            </span>{" "}
            on the backend. I love working across the entire stack — from
            designing smooth and responsive UIs to creating reliable APIs and
            managing databases.
          </p>
          <p className="mb-4">
            I believe in writing{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              clean, scalable, and maintainable code
            </span>
            , and I’m always learning new technologies to improve my projects.
          </p>
          <p>
            My long-term goal is to become a{" "}
            <span className="font-semibold" style={{ color: "#1CE3D8" }}>
              skilled software engineer
            </span>{" "}
            who can design impactful solutions for real-world problems, while
            contributing to open source and continuously growing as a developer.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;

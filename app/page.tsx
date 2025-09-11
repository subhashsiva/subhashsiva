"use client";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  const HandleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="relative w-screen h-screen text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video/bgvid.mp4" // your video path
      />

      {/* Overlay to darken video for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 pt-10 md:pt-25"
      >
        {/* Floating Image */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-lg h-96 flex-row items-center justify-between gap-4 "
        >
          <Image
            src="/image/pfp.png"
            alt="pfp page"
            height={400}
            width={400}
            className="hover:scale-105 transition-transform duration-300 ml-12 md:"
          />
        </motion.div>

        {/* Floating Text */}
        {/* Floating Text */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-lg h-96 flex flex-col items-center justify-center pl-6 md:pl-12 mt-9"
        >
          <div className="">
            <p className="text-xl text-gray-300 drop-shadow-md">HI! THERE</p>
            <h2
              className="font-bold text-5xl md:text-6xl pt-2"
              style={{
                color: "#1CE3D8",
              }}
            >
              I AM SUBHASH
            </h2>
            <p
              className="text-2xl pt-3"
              style={{
                color: "#FFFFFF",
                textShadow: "0 0 5px #FFFFFF, 0 0 10px #1CE3D8",
              }}
            >
              I AM A FULL STACK DEVELOPER
            </p>
            <div className="flex justify-center pt-6">
              <Button
                className="bg-[#1CE3D8] text-black px-24 py-5 text-xl font-semibold rounded-2xl shadow-inner shadow-[#1CE3D8]/50 
    hover:bg-[#1CE3D8] 
    hover:shadow-[0_8px_30px_rgba(28,227,216,0.7),0_-8px_30px_rgba(28,227,216,0.3)] 
    hover:scale-105 transition-all duration-300"
                onClick={HandleClick}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <div className="relative z-10 flex gap-6 justify-center mt-6 text-3xl pt-25">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="#1CE3D8" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#1CE3D8" />
        </a>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp color="#1CE3D8" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub color="#1CE3D8" />
        </a>
      </div>
    </div>
  );
};

export default Homepage;

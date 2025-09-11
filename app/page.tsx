"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Homepage = () => {
  const router = useRouter();

  const HandleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-black w-full min-h-screen">
      <div className=" text-white flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10 md:pt-25 ">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-lg h-96 bg-black flex-row items-center justify-between gap-4"
          >
            <Image
              src="/image/pfp.png"
              alt="pfp page"
              height={500}
              width={500}
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-lg h-96 bg-black flex flex-col mr-22 md: items-center justify-center pl-25 pt-15 mt-9"
          >
            <p className="flex pt-15 ">HI! THERE</p>
            <h2 className="font-bold text-4xl text-green-500 pt-2">
              I AM SUBHASH
            </h2>
            <p className="text-2xl pt-3">I AM A FULL STACK DEVELOPER</p>
            <div className="flex pt-6">
              <Button
                className="bg-green-500 text-black px-20 py-7 text-xl"
                onClick={HandleClick}
              >
                contact me
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex space-x-6 mt-30 pb-20 ">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-500 text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-500 text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-300 text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;

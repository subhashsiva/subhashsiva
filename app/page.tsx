"use client";
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
    <div className="bg-black w-screen h-screen text-white ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10 md:pt-37">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
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
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-lg h-96 bg-black flex-row items-center justify-center pl-25 pt-15 mt-9 md:"
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
    </div>
  );
};

export default Homepage;

"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function PrinterSetup() {
  const images = ["/NSLaser.avif", "/Envy.avif", "/Deskjet.avif"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-screen w-full">
      <div className="mt-14 mx-14 flex gap-4">
        <div className="flex flex-col gap-3 px-4 py-2 w-3/5 text-base font-light">
            <h2 className="text-4xl font-extrabold">
                We're here to help you set up your HP printer
            </h2>
            <p className="text-lg font-light">
                Let's connect your printer to a Wi-Fi or wired network or to a computer using a USB cable, but first, we need to know your printer model.
            </p>
          
            
        </div>
        <div className="w-2/5">
          <Image
            src="/PrinterSetup/Printer_Setup_Landing.webp"
            className="rounded-xl"
            alt="logo"
            height={300}
            width={500}
          ></Image>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-3 lg:pt-5 px-4 lg:h-2/3 bg-[#F7F7F7]">
        <div className="flex flex-col items-center justify-center w-full h-1/2 lg:w-1/2 lg:h-full ">
          <form className="w-3/4 text-base" action="">

            <div className="flex gap-2">
                <input type="checkbox" id="setup" />
                <label htmlFor="setup">Unpack, Setup New Printer</label>
            </div>

            <div className="flex gap-2">
                <input type="checkbox" id="troubleshoot" />
                <label htmlFor="troubleshoot">Trouleshoot Printer Issues</label>
            </div>

          </form>
          <div className="px-4 lg:px-0">
            <p className="text-base lg:text-lg mt-3 mb-2 pt-4">
              Enter your serial number, product number or product name
            </p>
            <div>
              <form action="">
                <input
                  type="text"
                  placeholder="Example: HP DeskJet 2632 All-in-One printer"
                  className="h-12 w-[90%] border-1 rounded-full px-4 py-2 border-black/20 outline-[#4343d8]"
                ></input>
              </form>
            </div>
            <a href="https://globaltecheye.com/blogs/printer/hp-smart-install.php">
              <button
                type="submit"
                className="flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-6 lg:mt-4"
              >
                Submit
              </button>
            </a>
          </div>
        </div>
        <div className="flex gap-2 items-center w-full h-2/5 lg:w-1/2 lg:h-full">
          <div className=" border-black/20 m-5 overflow-hidden w-full h-full flex items-center justify-center">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" relative flex gap-6"
            >
              <Image
                src={images[index]}
                height={450}
                width={550}
                alt={`printer-${index}`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrinterSetup;

"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function InstallHPSmart() {

    const slider = ["/slider-1.webp", "/slider-2.webp"];
    const [sliderIndex, setSliderIndex] = useState(0);

     useEffect(() => {
        const interval = setInterval(() => {
          setSliderIndex((prev) => (prev + 1) % slider.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, [slider.length]);

  return (
    <div>
      <div className="h-[360px] w-full bg-[#f7f7f7]">
        <div className="h-full w-full flex">
          <div className="w-2/5 flex justify-center ">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/hp-smart-app-icon.png"
                alt="logo"
                className="rounded-xl"
                height={80}
                width={80}
              ></Image>
              <h3 className="pt-4 text-3xl">HP Smart</h3>
              <div className="mt-6 text-xl font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white">
                <Link href="#" className="w-75">
                  Install Now
                </Link>
              </div>
              <div className="pt-4 text-lg">
                <p>Connects seamlessly with your HP printer</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex justify-center py-2">
            <Image
              src="/InstallHPSmart/hp-smart.webp"
              className="rounded-xl"
              alt="logo"
              height={300}
              width={750}
            ></Image>
          </div>
        </div>

        <div className="mt-14 mx-14 flex gap-4">
          <div className="px-4 py-2 w-3/5 text-base font-light">
            <p className="">
              Print, scan, and share files by using HP Smart with your HP
              Printer. HP Smart makes it easy to get started and keeps you going
              with features like Print Anywhere or Mobile Fax!{" "}
              <span className="font-semibold">
                {" "}
                NOTE: Disconnect from a Virtual Private Network (VPN) connection
                before downloading.
              </span>
            </p>
            <ul className="list-disc list-inside ">
              <li className="">
                Start with a hassle-free set up, then print, scan, copy, and
                share files directly from your computer to your friends,
                co-workers, or a linked cloud account{" "}
              </li>
              <li>
                Manage or print to your printer using any network connection
              </li>
              <li>
                Order supplies, get support, and manage your HP account straight
                from the app
              </li>
              <li>
                Create high-quality scans by importing existing files or
                scanning from your printer, and improve them by cropping the
                file, adding filters and text, or adjusting saturation,
                contrast, and brightness
              </li>
              <li>
                It’s easy to send secure faxes from the app with Mobile Fax
              </li>
              <li>
                Be more productive with customizable one-touch Shortcuts
                (formally Smart Tasks)
              </li>
              <li>
                Access hundreds of printable crafts, cards, and learning
                activities for free with Printables! Get involved and get your
                family creating together!
              </li>
            </ul>
            Some HP Smart features require a network connection and an HP
            account for full functionality. Certain features/software are
            available in English language only. <p></p>
          </div>
          <div className="w-2/5">
            <Image
              src="/InstallHPSmart/app-home-page.webp"
              className="rounded-xl"
              alt="logo"
              height={300}
              width={500}
            ></Image>
          </div>
        </div>

        <div className="flex flex-col mt-14 items-center gap-6 h-auto lg:h-screen w-full px-4">
          <h2 className="text-2xl lg:text-4xl text-[#080880] font-semibold pt-5">
            We provide solutions for
          </h2>

          <div className="text-base lg:text-lg font-extralight">
            Storage | Software Download | Installation Issues | Network
            Connectivity Related Issues
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center h-3/4 w-full lg:w-320 mt-2 px-4 gap-4">
            <div className="flex flex-col items-center h-[90%] px-8 py-2">
              <Image
                src="/InstallHPSmart/Support for Laptop.png"
                className="rounded-lg"
                height={250}
                width={300}
                alt="windows-11"
              ></Image>
              <h4 className=" text-2xl font-medium h-20 px-2 pt-4">
                Get Instant Support for Laptop & Desktop
              </h4>
              <p className=" text-base font-extralight py-1 px-2 h-30">
                If elite, premium, pavilions or any other HP desktop is not
                working properly due to an error then connect to one of our
                technicians at customer service number.
              </p>
              <Link href="https://globaltecheye.com/blogs/printer/hp-smart-install.php">
                <button className="flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-6 lg:mt-2">
                  Call Technician
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center h-[90%] px-8 py-2">
              <Image
                src="/InstallHPSmart/Support for the Driver.png"
                className="rounded-lg"
                height={250}
                width={300}
                alt="windows-11"
              ></Image>
              <h4 className="text-2xl font-medium h-20 px-2 pt-4">
                Support for the Driver Download & Installation
              </h4>
              <p className="text-base font-extralight py-1 px-2 h-30">
                Finding and then installing the drivers for laptops, desktops,
                and printers is a task that requires a lot of attention and
                time. But our support services can make it so easy.
              </p>
              <Link href="/Troubleshoot">
                <button className="flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-6 lg:mt-2">
                  Fix/Scan Print
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
            <div className="items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                <motion.div
                    key={sliderIndex}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full h-full"
                    >
                <Image
                    src={slider[sliderIndex]}
                    height={100}
                    width={1000}
                    alt={`slider-${sliderIndex}`}
                    className="object-cover rounded-md"
                />
                </motion.div>
                </AnimatePresence>
            </div>
        </div>

        <div className=" bg-black/80 h-20 text-white flex items-center justify-center font-light text-sm mt-6">
          <p>
            ©{new Date().getFullYear()} HP Go Wireless Setup. The information
            contained herein is subject to change without notice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InstallHPSmart;

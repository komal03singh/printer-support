"use client";
import Image from "next/image";
import { VscDesktopDownload } from "react-icons/vsc";
import { GrDocumentTime } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { RiChatSmile2Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

export default function Home() {
  const images = ["/NSLaser.avif", "/Envy.avif", "/Deskjet.avif"];
  const slider = ["/slider-1.webp", "/slider-2.webp"];

  const [index, setIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  // Auto-change index every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % slider.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <main>
      <div className="h-auto w-full">
        <div className="lg:relative h-screen w-full">
          <div className="lg:relative w-full lg:w-[88%] h-full text-white flex flex-col lg:flex-row lg:h-3/4 lg:mt-6 lg:mx-20">
            <div className="flex flex-col gap-4 relative lg:absolute lg:left-0 lg:top-0 bg-[#3871F2] w-full h-full lg:[clip-path:polygon(70%_0,60%_70%,60%_100%,0_100%,0_0)] lg:z-10 ">
              <div className="flex flex-col lg:flex-row justify-center ml-4 lg:ml-12 gap-3 lg:gap-6 lg:w-1/2 mt-6 lg:mt-12">
                <Image
                  src="/hp-icon.png"
                  alt="logo"
                  width={100}
                  height={100}
                ></Image>
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl px-2 lg:text-4xl font-semibold">
                    Exclusive Printer Support
                  </h1>
                  <p className="text-base px-2 lg:text-xl font-extralight pt-2">
                    Call now to speak directly with a live HP+ support expert.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:hidden">
                <Image
                  src="/hero-image.webp"
                  alt="logo"
                  height={340}
                  width={350}
                ></Image>
              </div>
            </div>
            <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-0 w-2/5 lg:h-full">
              <Image
                className="object-cover -z-10"
                src="/hero-image.webp"
                alt="logo"
                fill={true}
              ></Image>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center absolute bottom-1 left-2 lg:bottom-45 lg:left-32 w-[96%] h-[22%] lg:w-[54%] lg:h-[34%] bg-white lg:z-50 rounded-lg">
            <div className="h-3/4 flex flex-col justify-center items-center">
              <ul className="flex flex-col gap-2 px-4 text-xs lg:text-base list-disc mx-2 lg:mx-8">
                <li>
                  Experience Fast and Complimentary Support from Our Experts.
                  We&apos;re here to help!
                </li>
                <li>
                  Our priority is to take care of you. Call us to resolve
                  questions about HP+ and receive assistance with printer setup.
                </li>
              </ul>
              <Link href="/Troubleshoot">
                <p className="px-4 text-xs lg:text-base text-blue-400 flex justify-center items-center gap-1 mt-3 lg:mt-6">
                  Visit the FAQ page for help. Troubleshooting, and additional
                  information
                  <span className="text-xs">
                    <SlArrowRight />
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex gap-16 flex-row justify-center items-center h-1/4 w-full rounded-t-2xl">
            <div className="p-2 flex flex-col items-center gap-2 hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <VscDesktopDownload className="text-5xl text-[#080880]" />
              <a
                href="/InstallHPSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-base font-light hover:text-blue-400"
              >
                Download Drivers
              </a>
            </div>
            <div className="p-2  flex flex-col items-center gap-2 hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <GrDocumentTime className="text-5xl text-[#080880]" />
              <a
                href="https://globaltecheye.com/blogs/printer/check-warranty.php"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-base font-light hover:text-blue-400"
              >
                Check Warranty Status
              </a>
            </div>
            <div className="p-2 flex flex-col items-center hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <BiSupport className="text-6xl text-[#080880]" />
              <a
                href="/InstallHPSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-base font-light hover:text-blue-400"
              >
                Contact Us
              </a>
            </div>
            <div className="p-2 flex flex-col items-center hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <RiChatSmile2Fill className="text-6xl text-[#080880]" />
              <a
                href="/InstallHPSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-base font-light hover:text-blue-400"
              >
                Diagnose and Fix
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 h-screen w-full">
          <h3 className="text-2xl lg:text-5xl font-semibold text-[#080880] text-center pt-10">
            How to set up your printer?
          </h3>
          <div className="flex flex-col lg:flex-row h-3/4 w-full">
            <div className="flex justify-center items-center w-full h-1/2 lg:h-full lg:w-1/2">
              <Image
                className="lg:rounded-2xl"
                src="/Printer_feature.avif"
                alt="printer"
                height={400}
                width={600}
              ></Image>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center h-1/2 w-full lg:h-full lg:w-1/2">
              <div className="lg:h-1/2 h-[90%] w-full mx-6 border-l-3 border-[#080880] px-6 py-3 my-3 lg:my-0">
                <h3 className="text-base lg:text-xl font-light">
                  Access Printer Setup to walk through the process of
                  installation, configuration, and registration of your printer.
                </h3>
                <Link href="/PrinterSetup">
                  <button className="flex items-center gap-2 text-base lg:text-lg font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-4">
                    Printer Setup{" "}
                    <span className="text-sm">
                      <SlArrowRight />
                    </span>
                  </button>
                </Link>
                <div className=" mt-5 lg:mt-10">
                  <p className="text-base lg:text-xl font-medium">
                    Want more Support?
                  </p>
                  <Link href="/PrinterSetup">
                    <p className="text-[#080880] underline">
                      Get instant support here
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center items-center h-1/5 w-full mb-3 px-2 py-4 bg-blue-100">

            <div className="w-1/4 h-full p-2 flex flex-col justify-center items-center gap-1 hover:cursor-pointer">
              <VscDesktopDownload className="h-2/5 w-full text-2xl text-[#080880]" />
              <a
                href="https://globaltecheye.com/blogs/printer/hp-smart-install.php"
                target="_blank"
                rel="noopener noreferrer"
                className="h-3/5 py-1 px-2 text-base font-light hover:text-blue-400"
              >
                Download Drivers
              </a>
            </div>

            <div className="p-2 w-1/4 h-full flex flex-col items-center gap-2 hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <GrDocumentTime className="h-2/5 w-full text-2xl text-[#080880]" />
                <p className="h-3/5 py-1 px-2 text-base font-light">Check Warranty </p>
            </div>

            <div className="w-1/4 h-full p-2 flex flex-col items-center hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <BiSupport className="h-2/5 w-full text-2xl text-[#080880]" />
              <p className="h-3/5 py-1 px-2 text-base font-light">Contact Us</p>
            </div>
            <div className="w-1/4 h-full flex flex-col items-center hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer">
              <RiChatSmile2Fill className="h-2/5 w-full text-xl text-[#080880]" />
              <p className="h-3/5 py-1 px-2 text-base font-light">Diagnose and Fix</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 h-auto lg:h-screen w-full px-4 mt-10 lg:mt-0">
          <h2 className="text-2xl lg:text-5xl text-[#080880] font-semibold pt-5">
            We provide solutions for
          </h2>

          <div className="text-base lg:text-xl font-extralight">
            Storage | Software Download | Installation Issues | Network
            Connectivity Related Issues
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center h-3/4 w-full lg:w-320 mt-2 px-4 gap-6">
            <div className="flex flex-col items-center h-[90%] px-4 py-2">
              <Image
                className="h-34"
                src="/window-11.png"
                height={200}
                width={300}
                alt="windows-11"
              ></Image>
              <h4 className=" text-2xl font-medium h-20 px-2">
                Get Instant Support for Laptop & Desktop
              </h4>
              <p className=" text-base font-extralight py-1 px-2 h-30">
                If elite, premium, pavilions or any other HP desktop is not
                working properly due to an error then connect to one of our
                technicians at customer service number.
              </p>
              <Link  href="/InstallHPSmart">
                <button className="flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-6 lg:mt-2">
                  Install HP Smart
                </button>
              </Link>
              
            </div>
            <div className="flex flex-col items-center h-[90%] px-4 py-2">
              <Image
                className="h-34"
                src="/scan-print-fix.png"
                height={250}
                width={300}
                alt="windows-11"
              ></Image>
              <h4 className="flex items-center text-2xl font-medium h-20 px-2">
                How to print, scan and fax
              </h4>
              <p className="text-base font-extralight py-1 px-2 h-30">
                Click Print Scan Fax for instructions on how to print, scan and
                fax with your HP Printer using Windows or Mac OS.
              </p>
              <Link href="Troubleshoot">
                <button className="flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-2">
                  Fix Scan/Print
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center h-[90%] w-full px-4 py-2">
              <Image
                className="h-34"
                src="/printer-offline.png"
                height={250}
                width={300}
                alt="windows-11"
              ></Image>
              <h4 className=" text-2xl font-medium h-20 px-2">
                Printer offline or print job stuck in queue?
              </h4>
              <p className=" text-base font-extralight py-1 h-30">
                Use this Windows automated tool to diagnose and fix printer
                problems such as printer offline and print jobs stuck in queue.
              </p>
              <Link href="https://globaltecheye.com/blogs/printer/https://globaltecheye.com/blogs/printer/find-printer.php">
                <button className="flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white mt-2">
                  Fix your Printer
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center relative h-screen w-full">
          <div className="flex flex-col lg:flex-row pt-3 lg:pt-5 px-4 lg:h-2/3 bg-[#F7F7F7]">
            <div className="flex flex-col items-center w-full h-1/2 lg:w-1/2 lg:h-full ">
              <div className="flex gap-2 mt-8 px-8">
                <Image
                  src="/find-printer-icon.svg"
                  height={150}
                  width={150}
                  alt="find printer icon"
                ></Image>
                <h2 className="text-xl lg:text-4xl text-[#080880] font-extralight">
                  Identify your printer for manuals and specific product
                  information
                </h2>
              </div>
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
          
          <div className="absolute bottom-0 lg:bottom-3 h-15 w-4/5 lg:h-1/4 lg:w-3/5 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={sliderIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                <Image
                  src={slider[sliderIndex]}
                  height={100}
                  width={900}
                  alt={`slider-${sliderIndex}`}
                  className="object-cover rounded-md"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

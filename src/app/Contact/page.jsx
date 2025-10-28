import React from "react";
import Image from "next/image"

function Contact() {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-4">
      <div className="pt-2 text-center">
        <h2 className="text-[#080880] text-xl lg:text-3xl font-extrabold">Contact Form</h2>
        <p className="font-semi-bold text-base lg:text-lg">Have a query? Send it to us</p>
      </div>

      <div className="w-4/5 flex flex-col lg:flex-row mx-8">
        <div className="lg:w-1/2">
            <Image
            src="/contact.svg"
            alt="Printer Driver Installation Error"
            height={300}
            width={500}
            ></Image>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <form
            className="text-sm lg:text-base border-l-2 border-blue-900 flex flex-col gap-3 px-3 lg:px-8 py-6 w-full "
            action=""
          >
            <div className="flex gap-1 lg:gap-3 items-center">
              <label htmlFor="name">Name</label>
              <input
                className="border-1 border-black/50 px-3 py-2 rounded-2xl w-3/4 outline-[#608adf]/70"
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="flex gap-1 lg:gap-3 items-center">
              <label htmlFor="email">E-mail</label>
              <input
                className="border-1 border-black/50 px-3 py-2 rounded-2xl w-3/4 outline-[#608adf]/70"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="setup" />
              <label htmlFor="setup">Unpack, Setup New Printer</label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" id="troubleshoot" />
              <label htmlFor="troubleshoot">Trouleshoot Printer Issues</label>
            </div>
            <div className="flex gap-1 lg:gap-3">
              <label htmlFor="query">Enter your query</label>
              <textarea
                className="border-1 border-black/50 px-3 py-2 rounded-2xl outline-[#608adf]/70 w-3/4"
                name=""
                id="query"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="bg-black/80 hover:bg-[#0a2b6b] text-white px-5 py-3 rounded-full text-center font-medium transition"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

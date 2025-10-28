"use client";
import Link from "next/link";
import Image from "next/image";

export default function DriverInstallation() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#0a2b6b] to-[#004aad] py-10 px-4 lg:px-0 text-center text-white">
        <div className="flex justify-center items-center gap-2 lg:gap-4">
            <Image src="/hp-icon.png" alt="logo" width={50} height={50}></Image>
            <h1 className="text-2xl lg:text-3xl md:text-4xl font-bold mb-3">
            Driver Installation Failed
            </h1>
        </div>
        <p className="max-w-2xl mx-auto text-gray-200 mt-4">
          The printer driver installation was unsuccessful. It could be due to a
          missing or corrupted file, connectivity issue, or your system blocking
          the driver setup.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/error.jpg"
            alt="Printer Driver Installation Error"
            height={300}
            width={500}
            className="rounded-2xl shadow-lg max-h-[400px] object-cover"
          ></Image>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Possible Reasons
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Driver file is missing or corrupted.</li>
            <li>USB or Wi-Fi printer connection is unstable.</li>
          </ul>

          {/* Support Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Need Help?
            </h3>
            <p className="text-gray-700 mb-3">
              Our support team can guide you through the printer driver setup
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+18556637755"
                className="bg-black/80 hover:bg-[#0a2b6b] text-white px-5 py-3 rounded-full text-center font-medium transition"
              >
                Call Support: +91-956-643-7330
              </a>
              <Link
                href="/Contact"
                className="bg-[#004aad] hover:bg-[#0a2b6b] text-white px-5 py-3 rounded-full text-center font-medium transition"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-black/80 text-white border-t">
        <p>
          © {new Date().getFullYear()} DRIVER_INSTALL_404  !ERROR
        </p>
      </footer>
    </main>
  );
}

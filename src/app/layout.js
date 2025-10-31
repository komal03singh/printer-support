import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata = {
  title: "Printer Drivers Support",
  description: "Printer Support",
};

export default function RootLayout({ children }) {
  return (
    <html name="viewport" content="width=device-width, initial-scale=1" lang="en">
      <body
        className={`${mulish.variable}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

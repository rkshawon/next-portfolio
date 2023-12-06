import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rk Shawon",
  description: "Portfolio of Rk Shawon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="flex flex-col items-center">{children}</div>
        <div className="bg-black h-20 mt-40 flex items-center justify-center text-white">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rk Shawon | All Rights Reserved
          </p>
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ReduxProvider from "@/components/redux/ReduxProvider";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAGDESIGN",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
            <Navbar />
            {children}
            <Footer/>
        </body>
      </ReduxProvider>
    </html>
  );
}

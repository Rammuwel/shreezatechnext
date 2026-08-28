import { Inter, Manrope, Plus_Jakarta_Sans, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import AosInit from "../components/AosInit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: "shreezatech | %s",
    default: "shreezatech | home",
  },
  description: "Shreezatech provides top-tier digital transformation and consulting IT solutions for enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${plusJakartaSans.variable} ${montserrat.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden w-full">
        <AosInit />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

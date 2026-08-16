import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AosInit from "../components/AosInit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
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
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="flex flex-col min-h-screen">
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

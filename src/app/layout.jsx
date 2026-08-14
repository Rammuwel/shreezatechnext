import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AosInit from "../components/AosInit";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "SHREEZATECH | Consulting and Software Solutions",
  description: "Shreezatech provides top-tier digital transformation and consulting IT solutions for enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plusJakartaSans.variable}`}>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito_Sans, Syne} from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STEM.do",
  description: "Website for stem careers in Dominican Republic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${syne.variable}`}>
        <NavBar />
        <div style={{ marginTop: "15px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}

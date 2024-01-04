import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Phantom Firm",
  description: "We bring your brand closer to the People.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}

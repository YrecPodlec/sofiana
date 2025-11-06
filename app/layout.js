import "./globals.css";
import {Footer, Navbar} from "@/app/widgets";

export const metadata = {
  title: "Sofiana ПОРТФОЛИО",
  description: "Портфолио Софьи Алябьевой",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Kauban - Builder Floors in Gurugram",
  description: "Kauban Developers provide luxurious builder floors in Gurugram.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

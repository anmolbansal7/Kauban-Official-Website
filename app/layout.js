import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
	title: "Kauban - Builder Floors in Gurugram",
	description:
		"Kauban Developers specializes in builder floors that are inviting spaces fostering community and comfort.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<NextTopLoader color="#d39f75" />
				<Navbar />
				{children}
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}

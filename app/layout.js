import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Head from "next/head";
import Whatsapp from "@/core/components/WhatsApp";

export const metadata = {
	title: "Kauban - Builder Floors in Gurugram",
	description:
		"Kauban Developers specializes in builder floors that are inviting spaces fostering community and comfort.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>Kauban - Builder Floors in Gurugram</title>
				<meta
					name="description"
					content="Kauban Developers specializes in builder floors that are inviting spaces fostering community and comfort."
					key="desc"
				/>
				<meta
					property="og:title"
					content="Kauban - Builder Floors in Gurugram"
				/>
				<meta
					property="og:description"
					content="Kauban Developers specializes in builder floors that are inviting spaces fostering community and comfort."
				/>
				<meta
					property="og:image"
					content="https://i.ibb.co/GtzJFXF/Instagram-post-1.png"
				/>
			</Head>
			<body>
				<NextTopLoader color="#d39f75" />
				<Navbar />
				{children}
				<Whatsapp />
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}

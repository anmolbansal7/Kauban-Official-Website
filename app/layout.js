import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";

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
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}

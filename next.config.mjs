/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
	basePath: "/kauban-website",
	output: "export",
	reactStrictMode: true,
	...withVideos(),
};

export default nextConfig;

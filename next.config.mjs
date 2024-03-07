/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
	basePath: "/kauban-website",
	output: "export",
	...withVideos(),
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
	basePath: "/kauban-website",
	output: "export",
	distDir: "out",
	...withVideos(),
};

export default nextConfig;

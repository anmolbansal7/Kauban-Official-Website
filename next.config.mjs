/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
	basePath: "/kauban-website",
	...withVideos(),
};

export default nextConfig;

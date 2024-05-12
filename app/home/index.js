import ImageHeader from "@/core/components/ImageHeader";
import About from "./components/About";
import End from "./components/End";
import Info from "./components/Info";
import Projects from "./components/Projects";
import ImageFooter from "@/core/components/ImageFooter";

const Home = () => {
	return (
		<main>
			<ImageHeader
				type="landing"
				image_url="/assets/sample.png"
			></ImageHeader>
			<Info />
			<About />
			<Projects />
			<End />
			<ImageFooter image_url="/assets/sample.png" />
		</main>
	);
};

export default Home;

import About from "./components/About";
import End from "./components/End";
import Info from "./components/Info";
import Projects from "./components/Projects";
import styles from "./styles.module.css";
import ImageFooter from "@/core/components/ImageFooter";
import Image from "next/image";

const Home = () => {
	return (
		<main>
			<div className={styles.image_container}>
				<Image
					className={styles.image}
					alt="Project"
					src="/assets/info_image.png"
					fill={true}
					priority
				/>
				<div className={styles.mouse} />
			</div>
			<Info />
			<About />
			<Projects />
			<End />
			<ImageFooter image_url="/assets/info_image.png" />
		</main>
	);
};

export default Home;

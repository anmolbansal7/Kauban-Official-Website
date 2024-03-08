import About from "./components/About";
import End from "./components/End";
import Info from "./components/Info";
import Projects from "./components/Projects";
import styles from "./styles.module.css";
import ImageFooter from "@/core/components/ImageFooter";

const Home = () => {
	return (
		<main>
			<div className={styles.video_container}>
				<div className={styles.mouse} />
				<video
					src={require("/public/videos/video.mp4")}
					autoPlay
					muted
					loop
					className={styles.video}
				/>
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

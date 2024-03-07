import Image from "next/image";
import About from "./components/About";
import End from "./components/End";
import Info from "./components/Info";
import Projects from "./components/Projects";
import styles from "./styles.module.css";
import ImageFooter from "@/core/components/ImageFooter";

const Home = () => {
	return (
		<main>
			{/* <div className={styles.video_container}>
				<div className={styles.mouse} />
				<video
					src={require("/public/videos/video.mp4")}
					autoPlay
					muted
					loop
					className={styles.video}
				/>
			</div> */}

			<div className={styles.landing}>
				<div className={styles.content}>
					Where Dreams Unfold <br /> and Memories Begin
				</div>
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

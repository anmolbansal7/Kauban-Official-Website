import Image from "next/image";
import About from "./components/About";
import End from "./components/End";
import Info from "./components/Info";
import Projects from "./components/Projects";
import styles from "./styles.module.css";

const Home = () => {
	return (
		<main>
			<div className={styles.landing}>
				<div className={styles.logo}>
					<Image
						alt="Kauban"
						src="/assets/kauban_white.png"
						width={174}
						height={68}
						priority
					></Image>
				</div>
				<div className={styles.content}>
					Where Dreams Unfold <br /> and Memories Begin
				</div>
				<div className={styles.mouse} />
			</div>
			<Info />
			<About />
			<Projects />
			<End />
			<div className="end_image"></div>
		</main>
	);
};

export default Home;

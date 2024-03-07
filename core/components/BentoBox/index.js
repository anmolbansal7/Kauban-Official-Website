import Image from "next/image";
import styles from "./styles.module.css";

const BentoBox = ({ size = "small" }) => {
	return (
		<div className={`${styles.bento_box} ${styles[size]}`}>
			<h3>Design with AI Magic</h3>
			<p>
				Unlock your creativity and bring ideas to life with AI powered
				design utilities.
			</p>
			<Image
				alt="fjj"
				src="/assets/three/globe.png"
				width={200}
				height={200}
			></Image>
		</div>
	);
};

export default BentoBox;

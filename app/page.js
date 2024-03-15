import styles from "./styles.module.css";

import KaubanLogoSvg from "../public/kaubanfull.svg";
import Image from "next/image";

export default function Page() {
	return (
		<main className={styles.container}>
			<Image
				src={KaubanLogoSvg}
				priority
				alt="Kauban Logo"
				width={400}
				height={400}
			/>
			Website Coming Soon
		</main>
	);
}

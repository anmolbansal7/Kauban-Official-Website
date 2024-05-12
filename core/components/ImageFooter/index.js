import Image from "next/image";
import styles from "./styles.module.css";

const ImageFooter = ({ image_url = "" }) => {
	return (
		<div className={styles.image_footer}>
			<Image
				className="custom-img"
				alt=""
				src={image_url}
				fill={true}
				priority
			></Image>
		</div>
	);
};

export default ImageFooter;

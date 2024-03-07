import styles from "./styles.module.css";

const ImageFooter = ({ image_url = "" }) => {
	return (
		<div
			className={styles.image_footer}
			style={{
				backgroundImage: `url(${image_url})`,
			}}
		></div>
	);
};

export default ImageFooter;

import styles from "./styles.module.css";

const ImageHeader = ({
	image_url = "",
	heading = "",
	project = false,
	project_info = {},
}) => {
	const { description = "", status = "" } = project_info || {};

	return (
		<div
			className={`${styles.top_image} ${
				project ? styles.top_image_responsive : ""
			}`}
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${image_url})`,
			}}
		>
			<span>
				{heading}
				{project ? <div className={styles.tag}>{status}</div> : null}
			</span>
			<span className={styles.description}>{description}</span>
		</div>
	);
};

export default ImageHeader;

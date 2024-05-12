import Link from "next/link";
import styles from "./styles.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const typeClassMap = {
	project: styles.top_image_responsive,
	landing: styles.landing,
	// Add more mappings as needed
};

const ImageHeader = ({
	type = "",
	image_url = "",
	heading = "",
	info = {},
}) => {
	const { description = "", status = "" } = info || {};

	return (
		<div
			className={`${styles.top_image} ${typeClassMap[type] || ""}`}
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${image_url})`,
			}}
		>
			<div className={styles.content}>
				{type === "project" ? (
					<Link
						href="/projects"
						title="Go to Projects"
						className={styles.back_button}
					>
						<IoMdArrowRoundBack size={24} />
					</Link>
				) : null}
				<span>
					{heading}
					{type === "project" ? (
						<div className={styles.tag}>{status}</div>
					) : null}
				</span>
				<span className={styles.description}>{description}</span>
			</div>
		</div>
	);
};

export default ImageHeader;

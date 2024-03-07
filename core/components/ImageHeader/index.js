import Link from "next/link";
import styles from "./styles.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

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
			<div className={styles.content}>
				{project ? (
					<Link href="/projects" title="Go to Projects">
						<IoMdArrowRoundBack size={24} />
					</Link>
				) : null}
				<span>
					{heading}
					{project ? (
						<div className={styles.tag}>{status}</div>
					) : null}
				</span>
				<span className={styles.description}>{description}</span>
			</div>
		</div>
	);
};

export default ImageHeader;

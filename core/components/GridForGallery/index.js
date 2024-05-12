import Image from "next/image";
import styles from "./styles.module.css";

const GridForGallery = ({
	heading = "",
	sub_heading = "",
	description = "",
	array = "",
	heading_image = "",
}) => {
	return (
		<div className={styles.grid_container}>
			<div
				className={styles.grid_item}
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${heading_image})`,
				}}
			>
				<p className={styles.heading}>{heading}</p>
				<p className={styles.sub_heading}>
					{sub_heading.toUpperCase()}
				</p>
				<p className={styles.description}>{description}</p>
			</div>
			{array.map((item, index) => (
				<div key={index} className={styles.grid_item}>
					<Image
						className="custom-img"
						alt={`Gallery Item ${index}`}
						src={item}
						fill={true}
						priority
					></Image>
				</div>
			))}
		</div>
	);
};

export default GridForGallery;

import styles from "./styles.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../Button";
import Image from "next/image";
import Tag from "../Tag";

const ProjectCard = ({ project = {} }) => {
	const {
		id = "",
		image = "",
		label = "",
		description = "",
		status = "",
		tags = [],
		bhk = "",
		size = "",
		price = "",
		price_hidden = false,
	} = project;

	return (
		<div className={styles.card}>
			<div className={styles.status}>{status.toUpperCase()}</div>
			<Image
				alt="Project Card"
				src={image}
				width={500}
				height={320}
				priority
			></Image>

			<div className={styles.info}>
				<div>
					<div className={styles.label}>{label}</div>
					<div className={styles.description}>{description}</div>
					<ul className={styles.information}>
						<li>{bhk}</li>
						<li>{size}</li>
						<li className={styles.price}>
							Prices From: {price_hidden ? "On Request" : price}
						</li>
					</ul>
					<Tag content={tags}></Tag>
				</div>

				<Button
					type="hollow"
					label="View Details"
					icon={MdOutlineArrowOutward}
					href={`/projects/${id}`}
				></Button>
			</div>
		</div>
	);
};

export default ProjectCard;

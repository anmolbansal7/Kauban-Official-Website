import Link from "next/link";
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
		tags = [],
	} = project;
	const link_url = "project/" + id;
	return (
		<div className={styles.card}>
			<Image
				alt="Project Card"
				src={image}
				width={280}
				height={300}
				priority
			></Image>

			<div className={styles.info}>
				<div>
					<div className={styles.label}>{label}</div>
					<div className={styles.description}>{description}</div>
					<Tag content={tags}></Tag>
				</div>

				<Button
					type="hollow"
					label="View Details"
					icon={MdOutlineArrowOutward}
					href={link_url}
				></Button>
			</div>
		</div>
	);
};

export default ProjectCard;

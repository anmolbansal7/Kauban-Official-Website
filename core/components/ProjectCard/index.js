import styles from "./styles.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import Tag from "../Tag";

import { MdBed, MdCottage } from "react-icons/md";
import Link from "next/link";

const ProjectCard = ({ project = {} }) => {
	const {
		id = "",
		image = "",
		label = "",
		description = "",
		status = "",
		tags = [],
		number_of_tags = 3,
		plot_size = "",
		configuration = "",
	} = project;

	const modified_tags = tags.slice(0, number_of_tags);

	return (
		<Link
			href={`/projects/${id}`}
			className={styles.card}
			title="Click to View Details"
		>
			<div className={styles.status}>{status.toUpperCase()}</div>
			<div className={styles.image_container}>
				<Image
					className="custom-img"
					alt="Project"
					src={image}
					fill={true}
					priority
				></Image>
			</div>

			<div className={styles.info}>
				<div>
					<div className={styles.label}>
						{label}{" "}
						<MdOutlineArrowOutward style={{ color: "#4f4f4f" }} />
					</div>

					<div className={styles.description}>{description}</div>
					<ul className={styles.information}>
						<li>
							<MdBed size={18} style={{ marginRight: "4px" }} />
							{configuration}
						</li>
						<li>
							<MdCottage
								size={18}
								style={{ marginRight: "4px" }}
							/>
							{plot_size}
						</li>
					</ul>
					<Tag content={modified_tags}></Tag>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;

import styles from "./styles.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../Button";
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
		bhk = "",
		size = "",
		price = "",
		price_hidden = false,
	} = project;

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
							{bhk}
						</li>
						<li>
							<MdCottage
								size={18}
								style={{ marginRight: "4px" }}
							/>
							{size}
						</li>
						<li className={styles.price}>
							Prices From: {price_hidden ? "On Request" : price}
						</li>
					</ul>
					<Tag content={tags}></Tag>
				</div>

				{/* <Button
					type="fill"
					// label="View Details"
					icon={MdOutlineArrowOutward}
					href={`/projects/${id}`}
				></Button> */}
			</div>
		</Link>
	);
};

export default ProjectCard;

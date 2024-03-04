import RESIDENCES from "@/core/constants/residences";
import styles from "./styles.module.css";
import ProjectCard from "@/core/components/ProjectCard";

const Page = () => {
	return (
		<main>
			<div className={styles.top_image}>Projects</div>
			<div className={styles.card_container}>
				{RESIDENCES.length == "0" ? (
					<div>No Projects Found</div>
				) : (
					RESIDENCES.map((project) => {
						return (
							<ProjectCard project={project} key={project?.id} />
						);
					})
				)}
			</div>
		</main>
	);
};

export default Page;

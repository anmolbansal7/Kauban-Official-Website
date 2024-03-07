import RESIDENCES from "@/core/constants/residences";
import styles from "./styles.module.css";
import ProjectCard from "@/core/components/ProjectCard";
import ImageHeader from "@/core/components/ImageHeader";
import ImageFooter from "@/core/components/ImageFooter";

const Page = () => {
	return (
		<main>
			<ImageHeader
				image_url="/assets/info_image.png"
				heading="Projects"
			></ImageHeader>
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
			<ImageFooter image_url="/assets/info_image.png" />
		</main>
	);
};

export default Page;

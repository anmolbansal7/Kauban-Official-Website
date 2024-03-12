import RESIDENCES_CONTENT from "@/constants/residences";
import ImageHeader from "@/core/components/ImageHeader";

import styles from "./styles.module.css";
import { notFound } from "next/navigation";
import BentoBox from "@/core/components/BentoBox";
import ImageFooter from "@/core/components/ImageFooter";

const Page = ({ params = {} }) => {
	const id = params?.id;

	const residence = RESIDENCES_CONTENT.find(
		(residence) => String(residence.id) === id
	);

	const { label = "", description = "", status = "" } = residence || {};

	const project_info = {
		status,
		description,
	};
	if (!residence) {
		return notFound();
	}

	return (
		<main>
			<ImageHeader
				type="project"
				image_url="/assets/sample.png"
				heading={label}
				info={project_info}
			></ImageHeader>
			<div className={styles.container}>
				<div className={styles.bento_container}>
					<BentoBox size="small" />
					<BentoBox size="medium" />
					<BentoBox size="small" />

					<BentoBox size="medium" />
					<BentoBox size="medium" />

					<BentoBox size="small" />
					<BentoBox size="medium" />
					<BentoBox size="small" />
				</div>
			</div>
			<ImageFooter image_url="/assets/sample.png" />
		</main>
	);
};

export default Page;

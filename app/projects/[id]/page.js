import RESIDENCES from "@/core/constants/residences";
import ImageHeader from "@/core/components/ImageHeader";

import styles from "./styles.module.css";
import { notFound } from "next/navigation";
import Bento from "@/core/components/Bento";
import BentoBox from "@/core/components/BentoBox";
import ImageFooter from "@/core/components/ImageFooter";

const Page = ({ params = {} }) => {
	const id = params?.id;

	const residence = RESIDENCES.find(
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
		<div>
			<ImageHeader
				image_url="/assets/info_image.png"
				heading={label}
				project={true}
				project_info={project_info}
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

					{/* <Bento type="location"></Bento>
					<Bento type="size"></Bento>
					<Bento type="bhk"></Bento> */}
				</div>
			</div>
			<ImageFooter image_url="/assets/info_image.png" />
		</div>
	);
};

export default Page;

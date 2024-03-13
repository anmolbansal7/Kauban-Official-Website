import RESIDENCES_CONTENT from "@/constants/residences";
import ImageHeader from "@/core/components/ImageHeader";

import styles from "./styles.module.css";
import { notFound } from "next/navigation";
import ImageFooter from "@/core/components/ImageFooter";
import GridForList from "@/core/components/GridForList";
import GridForGallery from "@/core/components/GridForGallery";
import GridForImportant from "@/core/components/GridForImportant";

const Page = ({ params = {} }) => {
	const id = params?.id;

	const residence = RESIDENCES_CONTENT.find(
		(residence) => String(residence.id) === id
	);

	const {
		image = "",
		image_gallery = [],
		heading_image = "",
		label = "",
		description = "",
		status = "",
		tags = [],
		number_of_tags = "",
		plot_size = "",
		configuration = "",
		area = "",
		possession = "",
		detailed_description = "",
		highlights = [],
	} = residence || {};

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
				image_url={image}
				heading={label}
				info={project_info}
			></ImageHeader>

			<div className={styles.container}>
				<div className={styles.detailed}>
					&quot;{detailed_description}&quot;
				</div>

				<GridForImportant
					plot_size={plot_size}
					configuration={configuration}
					area={area}
					possession={possession}
				/>

				<GridForList heading="Key Features" array={tags} />

				<GridForGallery
					heading={label}
					sub_heading="Photo Gallery"
					description={description}
					array={image_gallery}
					heading_image={heading_image || image}
				/>

				<GridForList heading="Major Highlights" array={highlights} />
			</div>

			<ImageFooter image_url={image} />
		</main>
	);
};

export default Page;

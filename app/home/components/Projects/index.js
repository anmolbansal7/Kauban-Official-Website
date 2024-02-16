import Button from "@/core/components/Button";
import styles from "./styles.module.css";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import RESIDENCES from "@/core/constants/residences";

const Projects = () => {
	return (
		<div className={styles.projects}>
			<div className={styles.project_head}>
				<div className={styles.project_head_left}>
					<div className={styles.projects_heading}>
						Our Premium Residences
					</div>
					<div className={styles.projects_sub}>
						Get to know us at Kauban. Our journey is rooted in
						turning houses into homes and stories into cherished
						memories.
					</div>
				</div>
				<div className={styles.project_head_right}>
					<Button
						type="hollow"
						label="Explore More"
						icon={MdOutlineArrowOutward}
						href="/residences"
					></Button>
				</div>
			</div>

			<div className={styles.cards}>
				{RESIDENCES.slice(0, 3).map((item) => {
					return (
						<Link
							href={item?.link}
							className={styles.card}
							key={item?.label}
						>
							<div
								className={styles.card_image}
								style={{
									backgroundImage: `url(${item?.image})`,
								}}
							/>

							<div className={styles.card_label}>
								{item?.label}
								<MdOutlineArrowOutward style={{color:"#4f4f4f"}} />
							</div>

							<div className={styles.card_description}>
								{item?.description}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;

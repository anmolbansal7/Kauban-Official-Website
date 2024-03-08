import ABOUT_CONTENT from "@/core/constants/about";
import styles from "./styles.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about_heading}>
				Experience the Kauban difference. Choose luxury redefined.
			</div>

			<div className={styles.cards}>
				{ABOUT_CONTENT.map((item) => {
					const Icon = item?.icon;
					return (
						<div className={styles.card} key={item.heading}>
							<Icon style={{ fontSize: "24px" }} />
							<h1>{item?.heading}</h1>
							<p>{item?.content}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;

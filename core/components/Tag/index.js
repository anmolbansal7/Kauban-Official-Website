import styles from "./styles.module.css";

const Tag = ({ content = [] }) => {
	return (
		<div className={styles.tag_container}>
			{content.map((item) => {
				return (
					<div key={item} className={styles.tag}>
						{item}
					</div>
				);
			})}
		</div>
	);
};

export default Tag;

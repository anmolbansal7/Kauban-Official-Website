import styles from "./styles.module.css";

const Tag = ({ content = [] }) => {
	const colors = [
        "#ced1ed", "#f8f2e7", "#cfeaed", "#ddebc0", "#fbd1a6", "#f8aea8", "#bdbdbd",
	];

	let colorIndex = 0;
	const getNextColor = () => {
		const color = colors[colorIndex];
		colorIndex = (colorIndex + 1) % colors.length;
		return color;
	};
	return (
		<div className={styles.tag_container}>
			{content.map((item) => {
				return (
					<div
						key={item}
						className={styles.tag}
						style={{ backgroundColor: getNextColor() }}
					>
						{item}
					</div>
				);
			})}
		</div>
	);
};

export default Tag;

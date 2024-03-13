import styles from "./styles.module.css";

const GridForImportant = ({
	plot_size = "",
	configuration = "",
	area = "",
	possession = "",
}) => {
	return (
		<div className={styles.grid_container}>
			<div className={`${styles.grid_item} ${styles.plot_size}`}>
				<span className={styles.title_upper}>PLOT SIZE</span>
				<span className={styles.heading}>{plot_size}</span>
				<span className={styles.title_lower}></span>
			</div>
			<div className={`${styles.grid_item} ${styles.configuration}`}>
				<span className={styles.title_upper}>CONFIGURATION</span>
				<span className={styles.heading}>{configuration}</span>
				<span className={styles.title_lower}></span>
			</div>
			<div className={`${styles.grid_item} ${styles.area}`}>
				<span className={styles.title_upper}>LOCATION</span>
				<span className={styles.heading}>{area}</span>
				<span className={styles.title_lower}></span>
			</div>
			<div className={`${styles.grid_item} ${styles.possession}`}>
				<span className={styles.title_upper}>POSSESSION</span>
				<span className={styles.heading}>{possession}</span>
				<span className={styles.title_lower}></span>
			</div>
		</div>
	);
};

export default GridForImportant;

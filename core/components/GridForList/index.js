import React from "react";
import styles from "./styles.module.css";

const GridForList = ({ heading = "", array = "" }) => {
	return (
		<div className={styles.container}>
			<p className={styles.grid_heading}>{heading}</p>
			<div className={styles.grid_container}>
				{array.map((item, index) => (
					<div key={index} className={styles.grid_item}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default GridForList;

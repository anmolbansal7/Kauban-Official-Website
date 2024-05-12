import styles from "./styles.module.css";

const Info = () => {
	return (
		<div className={styles.info}>
			<div className={styles.info_header}>
				<span className={styles.info_header_main}>
					KAUBAN
					<br />
					<p className={styles.info_header_main_p}>
						Building your Companion
					</p>
				</span>
				<span className={styles.info_header_sub}>
					Introducing Kauban, where companionship meets quality
					living. Specializing in
					<span className="emphasized">builder floors,</span>we create
					inviting spaces that foster community and comfort.
				</span>
			</div>

			<div className={styles.info_image} />
		</div>
	);
};

export default Info;

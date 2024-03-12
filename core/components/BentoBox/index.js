import styles from "./styles.module.css";

const BentoBox = ({ size = "small" }) => {
	return (
		<div className={`${styles.bento_box} ${styles[size]}`}>
			<h3>Heading</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
	);
};

export default BentoBox;

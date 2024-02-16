import styles from "./styles.module.css";
import { height, background, mountAnim } from "./anim";
import { motion } from "framer-motion";

const Stair = ({ index }) => {
	return (
		<motion.div
			variants={height}
			{...mountAnim}
			custom={4 - index}
			className={styles.stair}
		></motion.div>
	);
};

const Background = () => {
	return (
		<motion.div
			variants={background}
			{...mountAnim}
			className={styles.background}
		></motion.div>
	);
};

const Stairs = () => {
	return (
		<div className={styles.stairs}>
			{[...Array(5)].map((_, index) => {
				return <Stair key={index} index={index} />;
			})}
			<Background />
		</div>
	);
};

export default Stairs;

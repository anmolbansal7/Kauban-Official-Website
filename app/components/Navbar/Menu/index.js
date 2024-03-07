import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { opacity, slideLeft, mountAnim } from "@/core/components/Stairs/anim";

const Menu = ({ closeMenu }) => {
	return (
		<div>
			<div className={styles.header}>
				<motion.svg
					variants={slideLeft}
					{...mountAnim}
					onClick={() => {
						closeMenu();
					}}
					width="68"
					height="68"
					viewBox="0 0 68 68"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1.5 1.5L67 67" stroke="white" />

					<path d="M66.5 1L0.999997 66.5" stroke="white" />
				</motion.svg>
			</div>
		</div>
	);
};

export default Menu;

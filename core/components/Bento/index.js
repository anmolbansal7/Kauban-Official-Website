import React from "react";
import BentoBox from "../BentoBox";
import styles from "./styles.module.css";

const TYPES = {
	location: {
		className: "location",
	},
	size: {
		className: "size",
	},
	bhk: {
		className: "bhk",
	},
};

const Bento = ({ type = "" }) => {
	const typeConfig = TYPES[type] || {};
	const typeClass = styles[typeConfig.className] || "";

	return (
		<div className={`${styles.bento_box} ${typeClass}`}>Bento - {type}</div>
	);
};

export default Bento;

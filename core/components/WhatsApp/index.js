"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { WHATSAPP_DETAILS } from "@/constants";

const Whatsapp = () => {
	const { phoneNumber = "", message = "" } = WHATSAPP_DETAILS || {};

	const handleClick = () => {
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<button
			role="presentation"
			className={styles.whatsappButton}
			onClick={handleClick}
		>
			<Image
				width={60}
				height={60}
				src="/assets/whatsapp_logo.webp"
				alt="WhatsApp"
				className={styles.whatsappIcon}
			/>
		</button>
	);
};

export default Whatsapp;

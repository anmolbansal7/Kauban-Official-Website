"use client";
import { NAVBAR_LINKS } from "@/core/constants";
import styles from "./styles.module.css";
import Link from "next/link";
import Button from "@/core/components/Button";
import Image from "next/image";
import { TbHomeHand } from "react-icons/tb";
// import { useState } from "react";
// import ResponsiveNav from "./ResponsiveNav";
// import { isMobile } from "react-device-detect";
// import { AnimatePresence } from "framer-motion";
// import Stairs from "@/core/components/Stairs";
// import Menu from "./Menu";

const Navbar = () => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  
	// if (isMobile) {
	// 	return (
	// 		<div>
	// 			<ResponsiveNav
	// 				openMenu={() => {
	// 					setMenuIsOpen(true);
	// 				}}
	// 			></ResponsiveNav>
	// 			<AnimatePresence mode="wait">
	// 				{menuIsOpen && (
	// 					<>
	// 						<Stairs />
	// 						<Menu
	// 							closeMenu={() => {
	// 								setMenuIsOpen(false);
	// 							}}
	// 						/>
	// 					</>
	// 				)}
	// 			</AnimatePresence>
	// 		</div>
	// 	);
	// }

	return (
		<nav className={styles.navbar}>
			<Link href="/" className={styles.logo}>
				<Image
					alt="Kauban"
					src="/assets/kauban_white.png"
					width={174}
					height={68}
					priority
				></Image>
			</Link>

			<div className={styles.links}>
				{NAVBAR_LINKS.map((link) => {
					return (
						<Link href={link.href} key={link.key}>
							{link.label}
						</Link>
					);
				})}
			</div>

			<Button
				type="filled"
				label="Go to Latest Project"
				icon={TbHomeHand}
			></Button>
		</nav>
	);
};

export default Navbar;

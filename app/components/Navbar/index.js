"use client";
import { NAVBAR_LINKS } from "@/core/constants";
import styles from "./styles.module.css";
import Link from "next/link";
import Button from "@/core/components/Button";
import Image from "next/image";
import { TbHomeHand } from "react-icons/tb";
import RESIDENCES from "@/core/constants/residences";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		open
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	}, [open]);

	const latestProjectId = RESIDENCES[RESIDENCES.length - 1].id;

	if (open) {
		return (
			<Menu setOpen={setOpen} latestProjectId={latestProjectId}></Menu>
		);
	}

	return (
		<nav className={styles.navbar}>
			<Link href="/" className={styles.logo}>
				<Image
					alt="Kauban"
					src="/assets/kauban_white.png"
					width={174}
					height={68}
					priority
					className={styles.logo_image}
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

			<div className={styles.navbar_button}>
				<Button
					type="filled"
					label="Go to Latest Project"
					icon={TbHomeHand}
					href={`/projects/${latestProjectId}`}
				></Button>
			</div>

			<div className={styles.hamburger_menu}>
				<button
					onClick={() => {
						setOpen(true);
					}}
				>
					<CiMenuFries size={32} color="white" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

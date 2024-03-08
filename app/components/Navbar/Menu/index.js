import styles from "./styles.module.css";
import Link from "next/link";
import { NAVBAR_LINKS } from "@/constants";
import Button from "@/core/components/Button";
import { IoClose } from "react-icons/io5";
import { TbHomeHand } from "react-icons/tb";

const Menu = ({ setOpen = () => {}, latestProjectId = "" }) => {
	return (
		<div className={styles.menu}>
			<button
				className={styles.close_button}
				onClick={() => {
					setOpen(false);
				}}
			>
				<IoClose size={32} />
			</button>

			<div className={styles.links}>
				{NAVBAR_LINKS.map((link) => {
					return (
						<Link
							href={link.href}
							key={link.key}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					);
				})}
				<div onClick={() => setOpen(false)}>
					<Button
						type="filled"
						label="Go to Latest Project"
						icon={TbHomeHand}
						href={`/projects/${latestProjectId}`}
					></Button>
				</div>
			</div>
		</div>
	);
};

export default Menu;

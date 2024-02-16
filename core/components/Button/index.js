import Link from "next/link";
import styles from "./styles.module.css";

const Button = ({ type = "filled", label = "", icon = "", href = "" }) => {
	const Icon = icon;

	return (
		<Link href={href}>
			<button
				className={`${styles.button} ${
					type === "hollow"
						? styles.button_hollow
						: styles.button_filled
				}`}
			>
				{label}
				{icon && (
					<Icon style={{ fontSize: "18px", marginLeft: "2px" }} />
				)}
			</button>
		</Link>
	);
};

export default Button;

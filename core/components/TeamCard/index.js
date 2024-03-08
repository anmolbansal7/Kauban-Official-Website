import Image from "next/image";
import styles from "./styles.module.css";

const TeamCard = ({ team_member = {} }) => {
	const {
		name = "",
		image_url = "",
		designation = "",
		info = "",
	} = team_member;
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					alt="Team"
					src={image_url}
					width={220}
					height={280}
					priority
					className="image_hover"
				></Image>
			</div>
			<div className={styles.card_info}>
				<div className={styles.name}>{name}</div>
				<div className={styles.designation}>{designation}</div>
				<div className={styles.info}>{info}</div>
			</div>
		</div>
	);
};

export default TeamCard;

import TeamCard from "@/core/components/TeamCard";
import TEAM_INFO from "@/constants/team";
import ImageHeader from "@/core/components/ImageHeader";
import ImageFooter from "@/core/components/ImageFooter";

import styles from "./styles.module.css";

const Page = () => {
	return (
		<main>
			<ImageHeader
				image_url="/assets/story.jpg"
				heading="Our Story"
			></ImageHeader>
			<div className={styles.about_info}>
				<p>
					Since our inception in
					<span className={styles.large_emphasized}>2020,</span>
					Kauban has dedicated itself to crafting homes embodying the
					essence of companionship. Each builder floor reflects
					<span className={styles.large_emphasized}>
						thoughtful design,
					</span>
					<span className={styles.large_emphasized}>
						functional layouts,
					</span>
					and a
					<span className={styles.large_emphasized}>
						welcoming atmosphere,
					</span>
					ensuring residents feel connected and supported.
				</p>

				<p>
					Our commitment to fostering togetherness extends beyond
					physical spaces. We strive to create a welcoming atmosphere
					that{" "}
					<span className="emphasized">
						fosters a deep connection between residents and their
						homes.
					</span>
				</p>

				<p>
					At Kauban, our mission is to redefine the concept of home,
					transforming it into a sanctuary
					<span className="emphasized">
						where companionship flourishes and memories are created.
					</span>
				</p>

				<p>
					Experience the warmth of companionship with Kauban Homes,
					<span className="emphasized">
						where you are not just buying a house, but gaining a
						trusted companion.
					</span>
				</p>

				<p className={styles.emphasized}>Welcome home to Kauban.</p>
			</div>

			<div className={styles.team}>
				<p className={styles.heading}>Leadership</p>
				<div className={styles.card_container}>
					{TEAM_INFO.map((team_member) => (
						<TeamCard
							key={team_member.name}
							team_member={team_member}
						></TeamCard>
					))}
				</div>
			</div>
			<ImageFooter image_url="/assets/story.jpg" />
		</main>
	);
};

export default Page;

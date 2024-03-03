import TeamCard from "@/core/components/TeamCard";
import styles from "./styles.module.css";
import TEAM from "@/core/constants/team";

const Page = () => {
	return (
    <main className={styles.about}>
      <div className={styles.top_image}>
        Our Story
      </div>
			<div className={styles.about_info}>
				<p>
					Since our inception in
					<span className={styles.about_emphasized}>2020</span>,
					Kauban has dedicated itself to crafting homes embodying the
					essence of companionship. Each builder floor reflects
					<span className={styles.about_emphasized}>
						thoughtful design,
					</span>
					<span className={styles.about_emphasized}>
						functional layouts,
					</span>
					and a
					<span className={styles.about_emphasized}>
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
					transforming it into a sanctuary{" "}
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

				<h4>Welcome home to Kauban.</h4>
			</div>

			<div className={styles.team}>
        <h2>Leadership</h2>
        <div className={styles.card_container}>
          {TEAM.map((team_member) => (
            <TeamCard key={team_member.name} team_member={team_member}></TeamCard>
        ))}
				
        </div>
        
      </div>
      <div className="end_image"></div>
		</main>
	);
};

export default Page;

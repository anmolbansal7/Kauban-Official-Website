import styles from "./styles.module.css";

const End = () => {
	return (
		<div className={styles.end}>
			<div className={styles.end_left}>
				<div className={styles.end_left_image}></div>
			</div>

			<div className={styles.end_right}>
				At
				<span className="emphasized">
					Kauban Homes,
				</span>
				we uphold the virtues of excellence in everything we do. From our sustainable practices to
				our innovative designs, we strive to exceed expectations and
				<span className="emphasized">
					set new standards of &#39;at home living&#39;.
				</span>
				<br/><br/>
				Just as the sound of a bell, rings out when a persimmon is
				struck, our homes resonate with
				<span className="emphasized">
					timeless beauty and tranquility.
				</span>
				Experience the serenity of Kauban living, where every moment is
				infused with harmony and grace.
				<br /><br />
				Welcome to Kauban, where your search for the perfect home ends and a 
				<span className="emphasized">new chapter of fulfillment begins.</span>
				Embrace the beauty of the
				present moment and discover the essence of true contentment in a
				<span className="emphasized">
					Kauban home.
				</span>
			</div>
		</div>
	);
};

export default End;

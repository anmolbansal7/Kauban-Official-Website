import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { NAVBAR_LINKS, SOCIAL_LINKS } from "@/core/constants";

import { CiLocationArrow1, CiLocationOn } from "react-icons/ci";

const LinkSection = ({ heading, links }) => (
	<div className={styles.links_section}>
		<div className={styles.links_heading}>{heading}</div>
		{links.map((link) => (
			<Link href={link.href} key={link.key}>
				{link.label}
			</Link>
		))}
	</div>
);

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footer_main}>
				<div className={styles.details}>
					<Image
						src="/assets/kauban_black.png"
						width={223}
						height={90}
						alt="logo"
					/>

					<span className={styles.about}>
						Unlock the door to your dreams: crafting homes where
						every chapter counts, and lifelong memories blossom.
					</span>

					<span className={styles.contact}>
						<span>
							<CiLocationArrow1
								style={{ marginRight: "4px", fontSize: "18px" }}
							/>
							<a href="mailto:kaubandevelopers@gmail.com">
								kaubandevelopers@gmail.com
							</a>
						</span>
						<span>
							<CiLocationOn
								style={{ marginRight: "4px", fontSize: "18px" }}
							/>{" "}
							Gurugram, Haryana, India
						</span>
					</span>
				</div>

				<div className={styles.links}>
					<LinkSection heading="Menu" links={NAVBAR_LINKS} />
					<LinkSection heading="Social" links={SOCIAL_LINKS} />
				</div>
			</div>

			<div className={styles.registered}>@{year} Kauban Developers</div>
		</footer>
	);
};

export default Footer;

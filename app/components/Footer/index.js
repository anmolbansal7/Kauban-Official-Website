import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { NAVBAR_LINKS, SOCIAL_LINKS } from "@/core/constants";

const FooterLinkSection = ({ heading, links }) => (
  <div className={styles.links_section}>
    <div className={styles.heading}>{heading}</div>
    {links.map((link) => (
      <Link href={link.href} key={link.key}>
        {link.label}
      </Link>
    ))}
  </div>
);

const SocialLinkSection = ({ heading, links }) => (
  <div className={styles.links_section}>
    <div className={styles.heading}>{heading}</div>
    {links.map((link) => (
      <a href={link.href} key={link.key}>
        {link.label}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main}>
        <div className={styles.details}>
          <span className={styles.logo}>
            <Image src="/navlogo.png" width={48} height={48} alt="logo" />
            KAUBAN
          </span>
          <span className={styles.about}>
            Unlock the door to your dreams: crafting homes where every chapter
            counts, and lifelong memories blossom.
          </span>
          <span className={styles.contact}>
            kaubandevelopers@gmail.com
            <br /> <br />
            Gurugram, Haryana, India
          </span>
        </div>
        <div className={styles.links}>
          <FooterLinkSection heading="Menu" links={NAVBAR_LINKS} />
          <SocialLinkSection heading="Social" links={SOCIAL_LINKS} />
        </div>
      </div>
      <div className={styles.registered}>@{year} Kauban Developers</div>
    </footer>
  );
};

export default Footer;

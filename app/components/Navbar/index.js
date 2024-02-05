import { NAVBAR_LINKS } from '@/core/constants';
import styles from './styles.module.css';
import Link from "next/link";
import Button from '@/core/components/Button';
import Image from 'next/image';

const Navbar = () => {
  return (
      <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image alt='Kauban' src="/navlogo.png" width={48} height={52}></Image>
        KAUBAN
          </Link>
          
          <div className={styles.links}>
              {NAVBAR_LINKS.map((link) => {
              return (
                  <Link href={link.href} key={link.key}>{link.label}</Link>
              )
          })}
          </div>
          
          <Button type='filled' label="Contact Us"></Button>
    </nav>
  )
}

export default Navbar;

import Image from "next/image";
import style from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/" title="Vinit Gundeti">
        <Image
          src="/assets/images/logo.gif"
          width={50}
          height={50}
          alt="Picture of the author"
          className={style.headerImage}
        />
      </Link>
      <nav>
        <ul className={style.navList}>
          <li>
            <a className={style.links} title="About Me">About Me</a>
          </li>
          <li>
            <a className={style.links} title="My Work">My Work</a>
          </li>
          <li>
            <a className={style.links} title="My Skills">My Skills</a>
          </li>
          <li>
            <a className={style.links} title="Testimonials">Testimonials</a>
          </li>
          <li>
            <a className={style.links} title="Contact Me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

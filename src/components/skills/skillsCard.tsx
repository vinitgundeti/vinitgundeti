import Image from "next/image";
import style from "./skills.module.css";
export default function SkillsCard({ name, img }) {
  return (
    <li className={style.skillsCard}>
      <Image src={img} className={style.skillLogo} alt={name} width={60} height={60} />
      <span className={style.skillName}>{name}</span>
    </li>
  );
}

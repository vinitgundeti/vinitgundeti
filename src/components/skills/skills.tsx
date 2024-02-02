import { skillsData } from "@/config/constants";
import style from "./skills.module.css";
import SkillsCard from "./skillsCard";

export default function Skills() {
  return (
    <div className={`wrapper ${style.skillsSection}`}>
      <h2 className='section-title'>My Skills</h2>
      <ul className={style.skillsContainer}>
        {skillsData.map((skills) => (
          <SkillsCard key={skills.name} name={skills.name} img={skills.img} />
        ))}
      </ul>
    </div>
  );
}

import { workExperienceData } from "@/utils/constants";
import style from "./workExperience.module.css";
import WorkExperienceCard from "./workExperienceCard";
export default function WorkExperience() {
  return (
    <div className={`wrapper ${style.workExperienceSection}`}>
      <h2 className='section-title'>Work Experience</h2>
      <div className={style.cardWrap}>
        {workExperienceData.map((item, index) => (
          <WorkExperienceCard item={item} key={item.company} isRightCard={index%2 === 0}/>
        ))}
      </div>
    </div>
  );
}

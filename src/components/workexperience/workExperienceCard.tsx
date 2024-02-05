import ClockIcon from "@/icons/clockIcon";
import style from "./workExperience.module.css";

export default function WorkExperienceCard({ item, isRightCard }) {
  return (
    <div className={`${style.card} ${isRightCard ? style.rightCard : style.leftCard}`}>
      <div className={`${style.yearTextWrap} ${isRightCard ? style.rightYearTextWrap : style.leftYearTextWrap}`}>
        <span className={style.yearText} style={{color: item.bgColor}}>{item.year}</span>
      </div>
      {/* <div>O</div> */}
      <div className={style.iconWrap} style={{backgroundColor: item.bgColor}}>
        <ClockIcon/>
      </div>
      <div className={style.mainCard}>
        <div className={style.companyWrap}>
          <h3 className={style.companyName} style={{backgroundColor: item.bgColor}}>{item.company}</h3>
          <span className={style.pointer} style={isRightCard ? {borderRightColor: item.bgColor} : {borderLeftColor: item.bgColor}}></span>
        </div>
          <ul className={style.summaryList}>
            {item.description.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
      </div>
    </div>
  );
}

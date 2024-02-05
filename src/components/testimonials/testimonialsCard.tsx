import Image from "next/image";
import style from "./testimonials.module.css";
export default function TestimonialsCard({ name, img, designation, feedback }) {
  return (
    <li className={style.card}>
      <div className={style.cardUpper}>
        <Image
          src={img}
          className={style.img}
          alt={name}
          width={80}
          height={80}
        />
        <div className={style.mainInfo}>
          <h3 className={style.name}>{name}</h3>
          <span className={style.designation}>{designation}</span>
        </div>
      </div>
      <p dangerouslySetInnerHTML={{__html: feedback.replace(/\n/g, '<br><br>')}} className={style.feedback}></p>
    </li>
  );
}

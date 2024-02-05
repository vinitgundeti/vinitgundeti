import { testimonialsData } from "@/config/constants";
import style from "./testimonials.module.css";
import TestimonialsCard from "./testimonialsCard";

export default function Testimonials() {
  return (
    <div className={`wrapper ${style.section}`}>
      <h2 className="section-title">Testimonials</h2>
      <ul>
        {testimonialsData.map((testimonials) => (
          <TestimonialsCard
            key={testimonials.name}
            name={testimonials.name}
            img={testimonials.img}
            designation={testimonials.designation}
            feedback={testimonials.feedback}
          />
        ))}
      </ul>
    </div>
  );
}

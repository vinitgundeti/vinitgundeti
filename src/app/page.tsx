import Image from "next/image";
import Header from "../components/header/header";
import style from "./page.module.css";
import Banner from "@/components/banner/banner";
import Skills from "@/components/skills/skills";
import WorkExperience from "@/components/workexperience/workExperience";
import Testimonials from "@/components/testimonials/testimonials";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <div className={style.mainWrapper}>
        <Header />
      </div>
      <div id={style.main}>
        <Banner />
        <Skills />
        <WorkExperience/>
        <Testimonials/>
      </div>
      <Footer/>
    </main>
  );
}

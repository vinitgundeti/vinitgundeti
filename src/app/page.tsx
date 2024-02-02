import Image from "next/image";
import Header from "../components/header/header";
import style from "./page.module.css";
import Banner from "@/components/banner/banner";
import Skills from "@/components/skills/skills";
import WorkExperience from "@/components/workexperience/workExperience";

export default function Home() {
  return (
    <main>
      <div className={style.mainWrapper}>
        <Header />
      </div>
      <div>
        <Banner />
        <Skills />
        <WorkExperience/>
      </div>
    </main>
  );
}

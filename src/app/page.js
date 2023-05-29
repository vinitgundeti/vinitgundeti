import Image from "next/image";
import Header from "../components/header/header";
import style from './page.module.css'
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    <main>
      <div className={style.wrapper}>
        <Header />
        <Banner/>
      </div>
    </main>
  );
}

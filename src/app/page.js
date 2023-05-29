import Image from "next/image";
import Header from "./components/header/header";
import style from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={style.wrapper}>
        <Header />
      </div>
    </main>
  );
}

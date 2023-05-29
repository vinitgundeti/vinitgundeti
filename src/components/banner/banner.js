import Image from "next/image";
import style from "./banner.module.css";
export default function Banner() {
  return (
    <div className={style.banner}>
      <Image
        src="/assets/images/banner-image.jpeg"
        width={250}
        height={250}
        alt="Picture of the author"
        className={style.bannerImage}
      />
      <div className={style.bannerContent}>
        <h1 className={style.bannerTitle}>VINIT GUNDETI</h1>
        <p className={style.bannerDescription}>
          With a strong command over both React Native and React.js, I am
          dedicated to crafting exceptional web and mobile applications. I
          thrive on transforming complex concepts into elegant, user-friendly
          interfaces while ensuring optimal performance and scalability.
        </p>
      </div>
    </div>
  );
}

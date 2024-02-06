import React from "react";
import style from "./footer.module.css";
import Link from "next/link";
import { socialMediaLinks } from "@/config/constants";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerWrapper}>
        <h2>VINIT GUNDETI</h2>
        <div>
          {socialMediaLinks.map((item, index) => (
            <a key={item.alt} title={item.alt}>
                <img src={item.img} alt={item.alt}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

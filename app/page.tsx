import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className={`${styles["heading-display"]} mb-10 text-4xl md:text-7xl`}>
        Koranime 🫰✨
      </h1>
      <div className="flex">
        <a
          href="https://www.instagram.com/koranimeapp/"
          className={`flex mb-5`}
          target="_blank"
        >
          <Image
            className="mr-3"
            src="/icon-instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          ></Image>
          <span className={`${styles["social-title"]}`}>@koranimeapp</span>
        </a>
      </div>
      <div className="">
        <a
          href="https://www.youtube.com/channel/UCHmkWFkykpiCF-rHodwogXA"
          className={`flex`}
          target="_blank"
        >
          <Image
            className="mr-3"
            src="/icon-youtube.svg"
            alt="Youtube"
            width={24}
            height={24}
          ></Image>
          <span className={`${styles["social-title"]}`}>@koranime</span>
        </a>
      </div>
    </main>
  );
}

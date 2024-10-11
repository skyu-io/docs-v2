import styles from "../styles/Hero.module.css";
import SearchInput from "./Search";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="max-w-[920px] flex flex-col items-center gap-5">
        <h1 className="sm:text-[44px] text-4xl font-semibold">
          SkyU Technical Documentation
        </h1>
        <p className="max-w-[640px]">
          Let's get started! Think of us as your go-to DevOps platform for
          architecting your product. We're here to empower your DevOps teams to
          easily manage and self-service your cloud environments and
          infrastructure.
        </p>
        <SearchInput />
      </div>
    </section>
  );
}

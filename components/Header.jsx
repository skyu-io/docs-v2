import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="bg-primary">
      <nav className="flex justify-between items-center min-h-16 container">
        <Link href="/">
          <Image
            src="/logo/SkyUWhite.svg"
            width={100}
            height={32}
            alt="logo"
            className="min-h-8 object-contain"
          />
        </Link>
        <ul className={styles.navLinks}>
          <li className="font-medium text-sm sm:block hidden">
            <Link href="/">Home</Link>
          </li>
          <li className={`text-sm ${currentPath === "/" ? "font-normal" : "font-medium"}`}>
            <Link href="/docs">Documentation</Link>
          </li>
          <li className="sm:ml-2 ml-0">
            <Link href="https://github.com/skyu-io/docs-v2">
              <Image
                src={"/assets/images/github-logo.svg"}
                width={24}
                height={24}
                alt="github-logo"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

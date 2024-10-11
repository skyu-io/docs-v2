import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – SkyU Documentation",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.skyu.io" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={`https://www.docs.skyu.io/placeholder.png`}
        />
        <meta property="og:title" content={frontMatter.title || "SkyU"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "SkyU: The Next Generation Internal Developer Platform"
          }
        />        
        <meta
          name="twitter:image"
          content={`https://www.docs.skyu.io/placeholder.png`}
        />
      </>
    );
  },
  logo: (
    <>
      <svg
        width="100"
        height="32"
        viewBox="0 0 251 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.1088 28.3917L85.1077 28.3914C85.0016 28.3636 84.8961 28.3362 84.7915 28.3089C83.1942 27.8925 81.7842 27.525 80.7369 26.9594C80.193 26.6656 79.7947 26.3416 79.532 25.972C79.2772 25.6134 79.1221 25.1735 79.1221 24.5889C79.1221 23.5757 79.5432 22.6988 80.3432 22.0589C81.1554 21.4093 82.4045 20.971 84.0849 20.971C86.6459 20.971 88.4643 21.8797 89.9091 23.5215L90.3882 24.066L90.9485 23.6054L92.6544 22.2029L93.2464 21.7161L92.7469 21.1347C90.7588 18.821 87.5625 17.4674 84.0849 17.4674C78.9125 17.4674 75.3608 20.6567 75.3608 24.6289C75.3608 27.0565 76.4772 28.65 78.0911 29.7218C79.6469 30.7549 81.6727 31.3099 83.545 31.7678C83.681 31.803 83.8159 31.8377 83.9496 31.872C85.5351 32.2796 86.9573 32.6452 88.0267 33.2151C88.593 33.5168 89.0115 33.8526 89.2888 34.2389C89.558 34.6141 89.7222 35.0755 89.7222 35.6888C89.7222 36.7806 89.2859 37.8027 88.4054 38.5621C87.52 39.3256 86.1308 39.8677 84.1643 39.8677C81.2563 39.8677 78.8135 38.3614 77.3914 36.4093L76.9272 35.772L76.3139 36.2676L74.5286 37.7102L73.9758 38.1569L74.3922 38.7329C76.3646 41.4615 79.9279 43.4114 84.1246 43.4114C87.2601 43.4114 89.607 42.4366 91.176 40.9522C92.7387 39.4738 93.4835 37.5315 93.4835 35.6888C93.4835 33.1769 92.3232 31.5624 90.663 30.482C89.0656 29.4424 86.9874 28.8858 85.1088 28.3917ZM119.638 42.6229L119.863 42.9305H120.244H122.902H124.379L123.507 41.738L113.92 28.6198L122.85 19.2559L124.058 17.9883H122.307H119.411H119.089L118.867 18.2215L106.672 31.0467V12.5272V11.7772H105.922H103.701H102.951V12.5272V42.1805V42.9305H103.701H105.922H106.672V42.1805V35.9093L111.241 31.125L119.638 42.6229ZM136.951 52.6936L136.478 53.75H137.635H140.095H140.583L140.781 53.3034L155.936 19.0417L156.402 17.9883H155.25H152.79H152.299L152.102 18.4391L144.277 36.4266L140.438 28.1794L135.895 18.4218L135.694 17.9883H135.215H132.676H131.495L131.998 19.0573L142.245 40.8657L136.951 52.6936ZM175.869 43.4114C179.209 43.4114 182.038 42.0293 183.927 39.865V42.1805V42.9305H184.677H186.898H187.648V42.1805V18.7383V17.9883H186.898H184.637H183.887V18.7383V31.882C183.887 36.3969 180.454 39.7876 176.028 39.7876C173.578 39.7876 171.716 38.9955 170.464 37.6685C169.206 36.3358 168.487 34.3824 168.487 31.9221V18.7383V17.9883H167.737H165.436H164.686V18.7383V31.882C164.686 35.3735 165.712 38.2725 167.673 40.3023C169.637 42.3353 172.456 43.4114 175.869 43.4114ZM212.286 42.1805V42.9305H213.036H215.297H216.047V42.1805V18.7383V17.9883H215.297H213.036H212.286V18.7383V42.1805ZM195.272 40.6177C195.272 41.3479 195.519 42.0329 196.007 42.5401C196.498 43.0513 197.186 43.3312 197.966 43.3312C198.745 43.3312 199.433 43.0513 199.924 42.5401C200.412 42.0329 200.66 41.3479 200.66 40.6177C200.66 39.886 200.411 39.2067 199.917 38.7076C199.421 38.2067 198.734 37.9443 197.966 37.9443C196.454 37.9443 195.272 39.0681 195.272 40.6177ZM211.493 10.9235C211.493 11.6536 211.74 12.3387 212.228 12.8459C212.719 13.357 213.407 13.637 214.187 13.637C214.966 13.637 215.654 13.357 216.145 12.8459C216.633 12.3387 216.881 11.6536 216.881 10.9235C216.881 10.1918 216.632 9.51241 216.138 9.01331C215.642 8.5125 214.955 8.25 214.187 8.25C212.675 8.25 211.493 9.37389 211.493 10.9235ZM236.94 43.4114C244.023 43.4114 249.75 37.7021 249.75 30.4795C249.75 23.2184 244.024 17.5075 236.94 17.5075C229.814 17.5075 224.129 23.22 224.129 30.4795C224.129 37.7004 229.815 43.4114 236.94 43.4114ZM236.94 39.7876C231.904 39.7876 227.93 35.6603 227.93 30.4795C227.93 25.2565 231.906 21.1313 236.94 21.1313C241.932 21.1313 245.909 25.2545 245.909 30.4795C245.909 35.6624 241.934 39.7876 236.94 39.7876Z"
          fill="#11172C"
          stroke="#11172C"
          strokeWidth="1.5"
        />
        <rect width="64" height="64" rx="8" fill="#1695F1" />
        <path
          d="M18.2222 34.6667V29.3333H23.5555"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M38.6666 49.3333L18.2222 29.3333"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M49.3333 43.5555V48.8889H44"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M49.3334 48.8889L39.1019 38.8495L25.7778 25.7778"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M28.889 40H19.3786C14.5667 40 10.6667 36.1221 10.6667 31.3375C10.6667 26.5529 14.573 22.4557 19.3786 22.6751C20.3767 22.721 21.3643 22.9425 22.2952 23.3123C23.5223 23.7992 24.6549 24.545 25.5858 25.4873"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M22.2222 23.2288C23.871 18.2553 28.5794 14.6667 34.1299 14.6667C41.0534 14.6667 46.6666 20.2514 46.6666 27.1397C46.6666 27.279 46.6645 27.4162 46.6583 27.5555"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M46.4783 27.6121C46.7441 27.5744 47.0183 27.5555 47.2946 27.5555C50.6294 27.5555 53.3334 30.2422 53.3334 33.5555C53.3334 36.8688 50.6294 39.5555 47.2946 39.5555H39.5557"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>

      {/* <span style={{ marginLeft: '0.4rem', fontWeight: 400 }}>
               Documentation
            </span> */}
    </>
  ),
  project: {
    link: "https://github.com/skyu-io/docs-v2",
  },
  docsRepositoryBase: "https://github.com/skyu-io/docs-v2/tree/main",
  darkMode: false,
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://insighture.com" target="_blank">
          Insighture
        </a>
        . All rights reserved
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
  },
  nextThemes: {
    defaultTheme: "light",
  },
  // ... other theme options
};

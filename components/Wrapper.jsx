import Head from "next/head";
import Header from "./Header";


const Wrapper = ({ children }) => {
  return (
    <>
      <Head>
        <title>SkyU Console - SkyU Documentation</title>
        <link rel="shortcut icon" href={'/favicon/favicon.ico'} />
        <meta
          name="description"
          content="Documentation with a custom home page"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Wrapper;

// pages/_app.js
import { GoogleAnalytics } from "nextjs-google-analytics";
import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], })

const App = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </main>
  );
};

export default App;
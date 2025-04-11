// pages/_app.js
import { GoogleAnalytics } from "nextjs-google-analytics";
import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], })

const App = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <GoogleAnalytics 
        trackPageViews 
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} 
        gtagUrl={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} 
      />
      <Component {...pageProps} />
    </main>
  );
};

export default App;
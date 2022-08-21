import "../styles/globals.css";
import { usePanelbear } from "@panelbear/panelbear-nextjs";

function MyApp({ Component, pageProps }) {
  usePanelbear("5UtkDqevHXu");
  return <Component {...pageProps} />;
}

export default MyApp;

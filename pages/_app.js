import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-yellow-500 font-semibold">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;

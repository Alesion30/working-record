import { VFC } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

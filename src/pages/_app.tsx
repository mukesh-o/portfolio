import { AppProps } from "next/app";

import "../global.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

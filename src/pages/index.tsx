import React from "react";
import Head from "next/head";

import About from "../components/About";
import Header from "../components/Header";
import Home from "../components/Home";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Root(): JSX.Element {
  const [changeHeaderColor, setChangeHeaderColor] =
    React.useState<boolean>(false);

  function onScroll() {
    if (window.pageYOffset !== undefined) {
      setChangeHeaderColor(Boolean(window.pageYOffset > 20));
    }
  }

  return (
    <div
      onWheel={onScroll}
      onMouseMove={onScroll}
      className="bg-primary font-whitrabt text-light-gray"
    >
      <Head>
        <title>Mukesh Sharma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Freelance web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header changeHeaderColor={changeHeaderColor} />
      <div className="px-20 xs:px-10">
        <Home />
        <Work />
        <About />
        <Contact />
      </div>
    </div>
  );
}

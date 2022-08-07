import React from "react";

import TerminalFrame from "../TerminalFrame";
import GithubIcon from "../Icons/Github";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";

export default function Home() {
  return (
    <section className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat h-max flex flex-col min-h-screen">
      <div className="flex px-10 py-6 md:py-20 justify-between">
        <TerminalFrame>
          <React.Fragment>
            <p className="text-5xl">Mukesh Sharma</p>
            <p className="mt-2">{`> Full stack web developer`}</p>
            <ul className="ml-3">
              <li>{`> JS/TS`}</li>
              <ul className="ml-3">
                <li>{`> Node`}</li>
                <li>{`> Next`}</li>
                <li>{`> React`}</li>
                <li>{`> React Native`}</li>
                <li>{`> Vue`}</li>
              </ul>
              <li>{`> DB`}</li>
              <ul className="ml-3">
                <li>{`> PostgreSQL`}</li>
                <li>{`> MySQL`}</li>
                <li>{`> MongoDB`}</li>
                <li>{`> Redis`}</li>
              </ul>
              <li>{`> Infracture`}</li>
              <ul className="ml-3">
                <li>{`> Docker`}</li>
                <li>{`> AWS`}</li>
                <li>{`> Linux (Ubuntu/Debian)`}</li>
              </ul>
            </ul>
          </React.Fragment>
        </TerminalFrame>
      </div>

      <div className="flex flex-col items-center justify-center pt-6">
        <div className="flex w-40 justify-between mb-4">
          <div className="hover:bg-gray p-1 rounded-3xl cursor-pointer">
            <GithubIcon />
          </div>
          <div className="hover:bg-gray p-1 rounded-md cursor-pointer">
            <LinkedInIcon />
          </div>
          <div className="hover:bg-gray p-1 rounded-3xl cursor-pointer">
            <TwitterIcon />
          </div>
        </div>
        <hr className="w-[200px] h-1 bg-green" />
      </div>
    </section>
  );
}

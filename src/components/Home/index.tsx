import React from "react";

import GithubIcon from "../Icons/Github";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";

const Home: React.FC = () => {
  return (
    <section className="pt-20">
      <div className="flex my-20 px-80 justify-between">
        <div>
          <div className="flex w-40 justify-between">
            <GithubIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <div>
            <p className="text-4xl font-bold mt-6">Mukesh Sharma</p>
            <p className="mt-2">Full stack web developer</p>
            <button className="mt-5 px-5 py-1 border-2 rounded-full border-secondary">
              My Work
            </button>
          </div>
        </div>
        <div>Image</div>
      </div>
    </section>
  );
};

export default Home;

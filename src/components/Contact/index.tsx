import React from "react";

import GithubIcon from "../Icons/Github";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";

export default function Contact(): JSX.Element {
  const [emailForm, setEmailForm] = React.useState<{
    subject: string;
    description: string;
  }>({ subject: "", description: "" });

  function onFormInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log("asdasd", e.target.name, e.target.name);
    setEmailForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    window.open(
      `mailto:hello@mukesh.tech?subject=${emailForm.subject}&body=${emailForm.description}`,
      "_blank"
    );
  }

  return (
    <section id="contact" className="min-h-[100vh] py-[25%] md:py-[20%]">
      <p className="text-5xl">Contact</p>
      <p className="text-lg">Got something exciting for me to work on ?</p>
      <div className="grid grid-cols-1 gap-6 justify-items-center py-[8%] px-[5%]">
        <input
          className="w-full py-2 px-4 text-xl rounded"
          name="subject"
          type="text"
          placeholder="What is it?"
          value={emailForm.subject}
          onChange={onFormInputChange}
        />
        <textarea
          className="w-full py-2 px-4 text-xl rounded"
          name="description"
          rows={6}
          placeholder="Tell me more about it."
          value={emailForm.description}
          onChange={onFormInputChange}
        />
        <button
          onClick={onSubmit}
          className="w-full bg-code-green rounded text-gray text-xl font-semibold py-2"
        >
          Send
        </button>
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
        <hr className="w-[200px] h-1 bg-code-green" />
      </div>
    </section>
  );
}

export default function About(): JSX.Element {
  return (
    <section id="about" className="min-h-[100vh] py-[25%] md:py-[20%]">
      <p className="text-5xl">About me</p>
      <div className="flex my-10 p-10 bg-gray rounded-xl md:block sm:block xs:block">
        <div className="w-full flex justify-center">
          <img
            alt=""
            className="w-[200px] h-[200px] rounded-full"
            src="images/self-img.jpeg"
          />
        </div>
        <div className="px-16 md:px-0 md:pt-10 sm:px-0 sm:pt-10 xs:px-0 xs:pt-10">
          <p className="text-2xl pb-4">Hey there, welcome.</p>
          <p className="text-xl pb-2">
            I&apos;m a freelancer, full stack web developer. Mainly been using
            Typescript/Javascript but I also work with PHP and goLang.
          </p>
          <p className="text-xl pb-2">
            In past 4-5 years I&apos;ve worked on finTech, edTech and healthTech
            products.
          </p>
          <br />
          <p className="text-xl pb-2">
            My experties are in following tech/tools
          </p>
          <p className="text-xl pb-2">
            {`Typescript/Javascript =>`}{" "}
            <span className="text-code-green">
              React, Node and React native
            </span>
            <br />
            {`Databases =>`}{" "}
            <span className="text-code-green">Postgres, MySQL and MongoDB</span>{" "}
            <br />
            {`Machines =>`}{" "}
            <span className="text-code-green">Linux and Docker</span> <br />
            {`Cloud =>`} <span className="text-code-green">AWS and Azure</span>{" "}
            <br />
            {`Other tools/libraries =>`}{" "}
            <span className="text-code-green">GraphQL</span>
          </p>
        </div>
      </div>
    </section>
  );
}

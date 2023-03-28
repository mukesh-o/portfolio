export default function Home(): JSX.Element {
  return (
    <section
      id="home"
      className="min-h-[100vh] py-[30%] md:min-h-[60vh] md:py-[40%] sm:min-h-[50vh] sm:py-[50%] xs:min-h-[50vh] xs:py-[50%]"
    >
      <p className="text-8xl md:text-6xl sm:text-4xl xs:text-4xl">
        Hi, <br />
        I'm <span className="text-code-green">Mukesh</span>, <br />
        web developer
      </p>
      <p className="text-xl mt-4">
        Full stack engineer | Javascript/Typescript Expert
      </p>
    </section>
  );
}

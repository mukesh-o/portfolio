import { COMPANIES_WORKED_AT } from "../../constants";
import Card from "./Card";

export default function Work(): JSX.Element {
  return (
    <section id="work" className="min-h-[100vh] py-[25%] md:py-[20%]">
      <p className="text-5xl">My Work</p>
      <div className="grid grid-cols-2 gap-4 pt-10 cardMd:grid-cols-1 md:grid-cols-1">
        {COMPANIES_WORKED_AT.map((company, idx) => {
          return <Card key={idx} {...company} />;
        })}
      </div>
    </section>
  );
}

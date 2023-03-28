interface IProps {
  changeHeaderColor: boolean;
}

export default function Header({ changeHeaderColor }: IProps): JSX.Element {
  return (
    <header
      className={`py-8 grid grid-cols-2 items-center fixed px-20 w-[100%] md:hidden sm:hidden xs:hidden ${
        changeHeaderColor && "bg-gray"
      }`}
    >
      <div className="">
        <a
          href="#home"
          className={`text-light-gray text-5xl cursor-pointer ${
            changeHeaderColor && "text-code-green"
          }`}
        >
          Mukesh
        </a>
      </div>

      <div className="grid grid-cols-4 gap-1 text-xl">
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}

interface IProps {
  children?: JSX.Element;
}

export default function TerminalFrame({
  children,
}: IProps): JSX.Element {
  const topBtnClasses =
    "pl-[6px] pb-[2.5px] pr-[7px] rounded-xl text-white mr-2 cursor-pointer";

  return (
    <div className={`w-full md:w-[40%]`}>
      <div className="p-2 px-4 bg-gray rounded-t-lg">
        <span className={`bg-red ${topBtnClasses}`}>x</span>
        <span className={`bg-yellow ${topBtnClasses}`}>–</span>
        <span className={`bg-green ${topBtnClasses}`}>□</span>
      </div>
      <div className="blur-bg font-whitrabt blur-bg text-code-green border-gray border-2 rounded-t-0 rounded-b-lg p-2 pb-6">
        {children}
      </div>
    </div>
  );
}

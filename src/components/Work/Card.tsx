interface IProps {
  imgSrc: string;
  title: string;
  description: string;
  linkToProduct: string;
}

export default function Card({
  imgSrc,
  title,
  description,
  linkToProduct,
}: IProps): JSX.Element {
  function onClick() {
    window.open(linkToProduct, "_blank");
  }

  return (
    <div
      className="rounded flex bg-gray cursor-pointer sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1"
      onClick={onClick}
    >
      <img
        alt=""
        className="h-[200px] w-[200px] sm:w-full xs:w-full sm:h-[350px] xs:h-[250px] rounded-tl rounded-bl sm:rounded-bl-none xs:rounded-bl-none xs:rounded-tr sm:rounded-tr"
        src={imgSrc}
      />
      <div className="p-5">
        <p className="text-xl font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

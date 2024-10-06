interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="w-full bg-black text-white font-bold py-2 px-4 hover:bg-slate-500 transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;

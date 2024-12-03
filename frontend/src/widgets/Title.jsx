/* eslint-disable react/prop-types */

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <div className="flex gap-2 items-center">
        <div className="h-8 bg-red-500 rounded w-4"></div>
        <p className=" text-red-500 text-xs font-semibold">{text1}</p>
      </div>
      <p className="text3xl font-semibold">{text2}</p>
    </div>
  );
};

export default Title;

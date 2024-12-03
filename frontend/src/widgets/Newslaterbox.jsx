const NewslatterBox = () => {
  const onsubmithandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className=" text-xs font-medium text-white">Subsribe Now</p>
      <p className="text-xs text-white">Get 10% off your first order</p>

      <form onSubmit={onsubmithandler} className="flex">
        <input
          type="email"
          className="w-full sm:flex-1 outline-none rounded-l text-[8px] bg-black/50 border border-white px-2 py-1"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-white text-black text-[8px] px-2 py-2 rounded-r"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewslatterBox;

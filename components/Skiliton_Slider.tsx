const Skiliton_Slider = () => {
  let array = Array.from({ length: 20 });

  return (
    <div className="sm:w-[95%] max-sm:w-full max-sm:px-2 mx-auto my-5">
      <div className="flex h-72 flex-wrap flex-col justify-center w-full gap-5 overflow-x-auto">
        {array.map((arr, i) => (
          <div
            key={i}
            className="w-56 h-56 relative group bg-gray-500 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default Skiliton_Slider;

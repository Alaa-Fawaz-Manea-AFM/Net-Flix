const Skiliton = () => {
  let array = Array.from({ length: 20 });

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-wrap gap-5 justify-center">
        {array.map((arr, i) => (
          <div
            key={i}
            className="w-11/12 ssm:w-56 h-56 bg-gray-500 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
export default Skiliton;

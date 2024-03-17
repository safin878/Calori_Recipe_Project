const Cooking = ({ item, index }) => {
  const { recipe_name, preparing_time, calories } = item;
  return (
    <div className="grid grid-cols-12 space-y-4 bg-[#28282808] p-4 text-xs">
      <div className="mt-6">{index + 1}</div>
      <h3 className="col-span-4 mt-4 pr-1 ">{recipe_name}</h3>
      <h3 className="col-span-3">{preparing_time}</h3>
      <h3 className="col-span-4 ">{calories}</h3>
    </div>
  );
};

export default Cooking;

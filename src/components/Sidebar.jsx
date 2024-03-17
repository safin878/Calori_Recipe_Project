import SideBarInfo from "./SideBarInfo";

const Sidebar = ({ dish }) => {
  return (
    <div className="border-[#8787872A] border-2 rounded-xl m-4">
      <div className="p-4">
        <h1 className="text-2xl text-center font-semibold">
          Want to cook: 0{dish.length}
        </h1>
        <hr className="my-4" />
        <div className="grid grid-cols-12">
          <div className=""></div>
          <h3 className="col-span-4">Name</h3>
          <h3 className="col-span-2">Time</h3>
          <h3 className="col-span-2">Calories</h3>
          <div className="col-span-3"></div>
        </div>
      </div>
      {dish.map((item, index) => (
        <SideBarInfo
          index={index}
          key={item.recipe_id}
          item={item}
        ></SideBarInfo>
      ))}
    </div>
  );
};

export default Sidebar;

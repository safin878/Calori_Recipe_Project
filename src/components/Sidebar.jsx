import { useState } from "react";
import Cooking from "./Cooking";
import SideBarInfo from "./SideBarInfo";

const Sidebar = ({ dish, handleDelete, cooking, time, calorie }) => {
  // const item = cooking.map((item) => setTime(item));

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
          handleDelete={handleDelete}
          index={index}
          key={item.recipe_id}
          item={item}
        ></SideBarInfo>
      ))}
      <div className="mt-4">
        <h1 className="text-2xl text-center font-semibold">
          Currently cooking: 0{cooking.length}
        </h1>
        <hr className="m-4 " />
        <div className="grid grid-cols-12">
          <div className=""></div>
          <h3 className="col-span-4 pl-3">Name</h3>
          <h3 className="col-span-3">Time</h3>
          <h3 className="col-span-3 ">Calories</h3>
        </div>
        <div className="my-4">
          {cooking.map((item, index) => (
            <Cooking index={index} key={item.recipe_id} item={item}></Cooking>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 space-y-4  p-4 text-xs mb-4">
        <h3 className="col-span-5 mt-4 pr-1"></h3>
        {/* {cooking.map((cook) => console.log(cook.preparing_time))} */}
        <h3 className="col-span-3 pr-1">Total Time = {time} minutes</h3>
        <h3 className="col-span-4 pr-1">Total Calories = {calorie} calories</h3>
      </div>
    </div>
  );
};

export default Sidebar;

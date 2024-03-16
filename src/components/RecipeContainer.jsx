import Card from "./Cards";
import Sidebar from "./Sidebar";

const RecipeContainer = () => {
  return (
    <div className="mx-auto container grid grid-cols-1 lg:grid-cols-3">
      <div className="md:col-span-2 grid  md:grid-cols-2 gap-5 md:p-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default RecipeContainer;

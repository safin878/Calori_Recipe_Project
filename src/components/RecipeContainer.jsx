import { useState } from "react";
import Card from "./Cards";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const RecipeContainer = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./items.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="mx-auto container grid grid-cols-1 lg:grid-cols-3">
      <div className="md:col-span-2 grid  md:grid-cols-2 gap-5 md:p-4">
        {cards.map((item) => {
          return <Card key={item.recipe_id} item={item}></Card>;
        })}
      </div>
      <div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default RecipeContainer;

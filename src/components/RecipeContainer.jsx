import { useState } from "react";
import Card from "./Cards";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { toast } from "react-toastify";

const RecipeContainer = () => {
  const [cards, setCards] = useState([]);
  const [dish, setDish] = useState([]);
  useEffect(() => {
    fetch("./items.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  const handleCardClick = (d) => {
    const isExist = dish.find((item) => item.recipe_id === d.recipe_id);
    if (!isExist) {
      setDish([...dish, d]);
    } else {
      toast.warn("This recipe have already added.");
    }
  };
  return (
    <div className="mx-auto container grid grid-cols-1 lg:grid-cols-3">
      <div className="md:col-span-2 grid  md:grid-cols-2 gap-5 md:p-4">
        {cards.map((item) => {
          return (
            <Card
              handleCardClick={handleCardClick}
              key={item.recipe_id}
              item={item}
            ></Card>
          );
        })}
      </div>
      <div>
        <Sidebar dish={dish}></Sidebar>
      </div>
    </div>
  );
};

export default RecipeContainer;

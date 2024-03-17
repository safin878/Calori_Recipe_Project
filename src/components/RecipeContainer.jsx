import { useState } from "react";
import Card from "./Cards";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { toast } from "react-toastify";

const RecipeContainer = () => {
  const [cards, setCards] = useState([]);
  const [dish, setDish] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [time, setTime] = useState(0);
  const [calorie, setCalorie] = useState(0);

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
      toast.warn("This recipe is already exist.");
    }
  };
  const timeCount = (item) => {
    cards.map((i) => {
      if (i.recipe_id === item) {
        const { preparing_time } = i;
        const thing2 = preparing_time.slice(0, 2);
        const thingNumber = parseInt(thing2);

        const t = time + thingNumber;
        setTime(t);
      }
    });
  };

  const caloriesCount = (item) => {
    cards.map((i) => {
      if (i.recipe_id === item) {
        const { calories } = i;
        const thing = calories.slice(0, 3);
        const thingNumber = parseInt(thing);

        const c = calorie + thingNumber;
        setCalorie(c);
      }
    });
  };
  const handleDelete = (id) => {
    const newDish = dish.filter((item) => item.recipe_id !== id);
    setDish(newDish);
    cards.map((item) => {
      if (item.recipe_id === id) {
        setCooking([...cooking, item]);
      }
    });
    timeCount(id);
    caloriesCount(id);
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
        <Sidebar
          calorie={calorie}
          time={time}
          cooking={cooking}
          dish={dish}
          handleDelete={handleDelete}
        ></Sidebar>
      </div>
    </div>
  );
};

export default RecipeContainer;

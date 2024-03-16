const Card = ({ item }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <div className="card w-full bg-base-100 border-[#8787872A] border-2">
      <figure className="px-10 pt-10">
        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl">{recipe_name}</h2>
        <p className="font-fira text-[#878787]">{short_description}</p>
        <hr className="my-4" />
        <h3 className="text-xl">Ingredients: {ingredients.length}</h3>
        <ul className="font-fira text-[#878787]">
          {ingredients.map((item, index) => (
            <li className="list-disc ml-4" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="md:flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <img src="./clock.svg" alt="" />
            <h4>{preparing_time}</h4>
          </div>
          <div className="flex items-center gap-2">
            <img src="./calorie.svg" alt="" />
            <h4>{calories}</h4>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-primary-color border-none rounded-full">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

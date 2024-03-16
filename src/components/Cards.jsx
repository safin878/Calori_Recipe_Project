const Card = ({ item }) => {
  const { recipe_image } = item;
  return (
    <div className="card w-full bg-base-100 border-[#8787872A] border-2">
      <figure className="px-10 pt-10">
        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl">Spaghetti Bolognese</h2>
        <p className="font-fira text-[#878787]">
          Classic Italian pasta dish with savory meat sauce.
        </p>
        <hr className="my-4" />
        <h3 className="text-xl">Ingredients: 6</h3>
        <ul className="font-fira text-[#878787]">
          <li>500g ground beef 1</li>
          <li>1 onion, chopped 2</li>
        </ul>
        <hr className="my-4" />
        <div className="md:flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <img src="./clock.svg" alt="" />
            <h4>30 Minutes</h4>
          </div>
          <div className="flex items-center gap-2">
            <img src="./calorie.svg" alt="" />
            <h4>30 Minutes</h4>
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

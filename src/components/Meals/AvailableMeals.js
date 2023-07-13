import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Butter Masala",
    description:
      " Indian rich and creamy dish",
    //   " Rich and creamy dish of paneer (Indian cottage cheese) in a tomato, butter and cashew sauce.  ",
    price: 22.9
  },
  {
    id: "m2",
    name: "Chicken Butter Masala",
    description:
      "Popular Indian creamy dish",
    //   "Popular Indian dish of grilled chicken simmered in a smooth, silky and creamy onion tomato and cashew gravy.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Butter Naan",
    description:
      "Traditional Indian flatbread",
    //   "Traditional Indian flatbread made with flour, yeast, salt, sugar, and yogurt",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Jeera Rice",
    description: "Rice cooked with cumin seeds",
    // description: "Rice cooked with cumin seeds & ghee or butter.",
    price: 18.99,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

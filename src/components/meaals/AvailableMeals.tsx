import React, { useEffect, useState } from "react";
import { MealsService } from "../../services/MealsService";
import Card from "../common/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals: React.FC = () => {
  const [meals, setMeals] = useState([] as any);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    MealsService.getAllAvailableMeals().then((res) => {
      console.log(res);

      if(res.statusText === "OK") {
        const responseData = res.data;
        const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
      } else {
        setIsLoading(false);
        return <section className={classes.mealsError}>
          <p>Something went wrong!</p>
        </section>
      }
      
    });
  }, []);

  if (isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal: any) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

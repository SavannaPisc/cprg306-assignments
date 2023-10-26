"use client";

import { useState } from "react";
import { useEffect } from "react";


// Fetching function with ingredient as parameter
async function fetchMealIdeas({ ingredient }) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(response.error);
    }
}

export default function MealIdeas({ ingredient }) {
    // State variable
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas({  }) {
            try {
                const data = await fetchMealIdeas({ ingredient });
                setMeals(data.meals);
            } catch (error) {
                console.error(error);
            }
    }
        // Destructure the data and rename
        // const { idMeal: id, strMeal: name, strMealThumb: image } = data.meals[0];

        // this.setMeals({ 
        //     meals: data.map((meal) => (   
        //         <MEAL 
        //         key = {meal.idMeal} 
        //         name = {meal.strMeal}
        //         image = {meal.strMealThumb} />
        //     ))});
    

    // useEffect hook calling fetchMeals when ingredient changes
    useEffect(() => {
        loadMealIdeas({ ingredient });
    } , []);

    return (
        <div>
            <h1 className = "text-center p-2 mt-4 text-3xl font-bold items-right">Meal Ideas</h1>
            <li>
                {meals.map((meal) => (
                    <meal
                    mealName = {meal.strMeal}
                    key = {meal.idMeal}/>
                ))}
            </li>
        </div>
    );
}

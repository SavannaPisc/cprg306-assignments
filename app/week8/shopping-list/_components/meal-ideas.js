"use client";

import { useState } from "react";
import { useEffect } from "react";


// Fetching function with ingredient as parameter
async function fetchMealIdeas({ ingredient }) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(response.error);
    }
}

export default function MealIdeas({ ingredient }) {
    // State variable
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas({ ingredient }) {
        try {
            const data = await fetchMealIdeas({ ingredient });
            setMeals(data.meals);
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect hook calling fetchMeals when ingredient changes
    useEffect(() => {
        loadMealIdeas({ ingredient });
    } , [ingredient]);

    return (
        <div className = "flex flex-col text-center">
            <h1 className = "mt-14 text-3xl font-bold mb-10">Meal Ideas</h1>
            <ul className = "mr-6">
                {meals && meals.map((meal) => (
                    <li key = {meal.idMeal}>{meal.strMeal}</li>
                    ))}

            </ul>

        </div>
    );
}

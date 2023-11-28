"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    // Create state variables with usestate
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Handling form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload

        // Item object using state variables
        const newItem = {
            name,
            quantity,
            category,
        };

        // Log item to console
        console.log(newItem);

        onAddItem({ name, quantity, category } )

        // Reset state variables
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    // Handling input changes
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    

    return(
        <main className = "flex flex-col mb-4 items-center">
            <div className = "mt-8 p-8 bg-slate-800 rounded-md">
                <header>
                    <h1 className = "text-2xl text-white font-bold m-4">Add new item to shopping list</h1>
                </header>
                <form onSubmit = {handleSubmit}  className = "text-black flex flex-col w-96">
                    <input required type = "text" placeholder = "Item name" onChange = {handleNameChange} value = {name} className = "m-4 rounded-sm"/>
                    <input type = "number" placeholder = "Quantity" min = "1" max = "99" onChange = {handleQuantityChange} value = {quantity} className = "m-4 rounded-sm"/>
                    <select onChange = {handleCategoryChange} value = {category} className = "m-4 rounded-sm"> 
                        <option value = "produce">Produce</option>
                        <option value = "dairy">Dairy</option>
                        <option value = "bakery">Bakery</option>
                        <option value = "meat">Meat</option>
                        <option value = "frozen foods">Frozen Foods</option>
                        <option value = "canned goods">Canned Goods</option>
                        <option value = "dry goods">Dry Goods</option>
                        <option value = "beverages">Beverages</option>
                        <option value = "snacks">Snacks</option>
                        <option value = "household">Household</option>
                        <option value = "other">Other</option>
                    </select>
                    <button type = "submit" className = "bg-sky-500 rounded-md m-4 text-white hover:bg-sky-700">Add item</button>
                </form>
            </div>
        </main>
    );
}
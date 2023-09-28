"use client";
k
import { useState } from "react";

export default function NewItem() {
    // Create state variables with usestate
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

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

        //Alert with current variable values
        alert(`Item name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        // Reset state variables
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

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
        <main className = "flex min-h-screen flex-col items-center justify-between p-12">
            <form onSubmit = {handleSubmit}  className = "text-black flex flex-col w-96 bg-slate-800 rounded-md">
                <input required type = "text" placeholder = "Item name" onChange = {handleNameChange} value = {name} className = "m-4"/>
                <input type = "number" placeholder = "Quantity" min = "1" max = "99" onChange = {handleQuantityChange} value = {quantity} className = "m-4"/>
                <select onChange = {handleCategoryChange} value = {category} className = "m-4"> 
                    <option value ="produce">Produce</option>
                    <option value ="dairy">Dairy</option>
                    <option value ="bakery">Bakery</option>
                    <option value ="meat">Meat</option>
                    <option value ="frozen foods">Frozen Foods</option>
                    <option value ="canned goods">Canned Goods</option>
                    <option value ="dry goods">Dry Goods</option>
                    <option value ="beverages">Beverages</option>
                    <option value ="snacks">Snacks</option>
                    <option value ="household">Household</option>
                    <option value ="other">Other</option>
                </select>
                <button type = "submit" className = "bg-sky-500 rounded-md m-4 text-white hover:bg-sky-700">Add item</button>
            </form>
        </main>
    );
}
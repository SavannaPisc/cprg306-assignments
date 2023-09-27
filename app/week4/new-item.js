"use client";

import { useState } from "react";

export default function NewItem() {
    // Create state variables with usestate
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload

        // Item object using state variables
        const item = {
            name,
            quantity,
            category,
        };

        // Log item to console
        console.log(item);

        //Alert with current variable values
        alert((item));

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
        <form onSubmit = {handleSubmit} className = "text-black flex flex-col justify-content-center w-96">
            <input required type = "text" placeholder = "Item name" value = {name} onChange = {handleNameChange} className = "m-4"/>
            <input type = "number" placeholder = "Quantity" min = "1" max = "99" value = {quantity} onChange = {handleQuantityChange} className = "m-4"/>
            <select value = {category} onChange = {handleCategoryChange} className = "m-4"> 
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
            <button type = "submit" className = "bg-slate-500 rounded-md m-4">Add item</button>
        </form>
        
    );
}
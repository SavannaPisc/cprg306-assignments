"use client";

import Item from "./item";
import { useState } from "react";


export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    // Convert itemsData to array of Item objects
    let itemsArray = items

    // Sort items by name or category depending on sortBy state variable
    if (sortBy === "name") {
        itemsArray = itemsArray.sort((a, b) => a.name.localeCompare(b.name));
    } 
    else if (sortBy === "category") {
        itemsArray = itemsArray.sort((a, b) => a.category.localeCompare(b.category));
    }

    return ( 
        <div className = "flex flex-col float-left">
            <div className = "rounded-md">
                <button id = "name" value = "name" onClick = {(e) => setSortBy(e.target.value)} className = "bg-sky-500 p-4 focus:bg-sky-300 m-8 w-60 rounded-sm ">Sort by name</button>
                <button id = "category" value = "category" onClick = {(e) => setSortBy(e.target.value)} className = "bg-sky-500 p-4 focus:bg-sky-300 m-4 w-60 rounded-sm">Sort by category</button>

            </div>

            <div>
                {itemsArray.map((item) => (
                    <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        key={item.id}
                        onSelect={onItemSelect} // Pass onItemSelect prop to Item component
                    />
                ))}
            </div> 
 
        </div>
    );
}
"use client";

import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    // Convert itemsData to array of Item objects
    let items = itemsData.map((item) => ({
        ...item,
        item: new Item(item.name, item.quantity, item.category)
    }));
 
    // Sort items by name or category depending on sortBy state variable
    if (sortBy === "name") {
        items = items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        items = items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return ( 
        <>
            <h1 className = "text-center p-2 m-4 text-xl font-bold items-center">My Shopping List</h1>
            <div className = "flex flex-items-center justify-center w-full rounded-md">
                <button id = "name" value = "name" onClick = {(e) => setSortBy(e.target.value)} class = "bg-sky-500 p-4 focus:bg-sky-300 m-8 w-40 rounded-sm">Sort by name</button>
                <button id = "category" value = "category" onClick = {(e) => setSortBy(e.target.value)} class = "bg-sky-500 p-4 focus:bg-sky-300 m-8 w-40 rounded-sm">Sort by category</button>

            </div>

            <div>
                {items.map((item) => (
                    <Item
                    name = {item.name}
                    quantity = {item.quantity}
                    category = {item.category}
                    key = {item.id}/>
                ))}
            </div> 
 
        </>
    );
}
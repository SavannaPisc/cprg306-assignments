"use client";

import NewItem from './_components/new-item.js';
import ItemList from './_components/item-list.js';
import itemsData from './_data/items.json';
import MealIdeas from './_components/meal-ideas.js'
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    // State variable with data from items.json into item objects
    const [items, setItems] = useState(
        itemsData.map((item) => ({
        ...item,
        item: new NewItem(item.name, item.quantity, item.category)
    })));
    const [selectedItemName, setSelectedItemName] = useState("");
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    // Event handler that adds a new item to items
    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }

    // Event handler that extracts the name of the selected item
    function handleItemSelect(name) {
        const cleanName = name.trim().split(/[\s,]+/);
        console.log(cleanName);
        setSelectedItemName(cleanName[0]);
    }

    return (
        <main>
            {user ? (
                <div>            
                    <h1 className = "text-center p-2 mt-4 text-3xl font-bold items-center">My Shopping List</h1>
                    <NewItem onAddItem = {handleAddItem} />
                    <ItemList items = {items} onItemSelect = {handleItemSelect} />
                    <MealIdeas ingredient = {selectedItemName} />
                </div>
                ) : (
                    <p>You must be logged in to view this page.</p>
            )}

        </main>
    );
}
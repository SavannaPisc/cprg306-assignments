"use client";

import NewItem from './_components/new-item.js';
import ItemList from './_components/item-list.js';
import MealIdeas from './_components/meal-ideas.js'
import { addNewItem, getShoppingList } from '../_services/shopping-list-service.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    // State variable set as an empty array to hold the items
    const [items, setItems] = useState([]);
    // State variables to set the selected item name
    const [selectedItemName, setSelectedItemName] = useState("");
    // State variable to keep track of the user
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    // Event handler that adds a new item to items
    async function handleAddItem(item) {
        // Waits for addItems to add the new item to the database before adding it to the page
        const newItem = await addNewItem(user.uid, item);
        // Sets the state variable to include the new item
        setItems((prevItems) => [...prevItems, {...item, id: newItem.id}]);
    }

    // Event handler that extracts the name of the selected item
    function handleItemSelect(name) {
        // Splits the name into an array of words on spaces and commas
        const cleanName = name.trim().split(/[\s,]+/);
        console.log(cleanName);
        // Takes the first element of the array and sets it as the selected item name
        setSelectedItemName(cleanName[0]);
    }

    useEffect(() => {
        if(user){
            getShoppingList(user.uid, setItems);
        }
    }, [user]);

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
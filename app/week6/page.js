"use client";

import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {
    // State variable with data from items.json into item objects
    const [items, setItems] = useState(
        itemsData.map((item) => ({
        ...item,
        item: new NewItem(item.name, item.quantity, item.category)
    })));

    // Event handler that adds a new item to items
    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }

    return (
        <main>
            <h1 className = "text-center p-2 mt-4 text-3xl font-bold items-center">My Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
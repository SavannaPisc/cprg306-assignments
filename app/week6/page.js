"use client";

import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from '.items.json';
import { useState } from 'react';

export default function Page() {
    // State variable with data from items.json into item objects
    const [items, setItems] = useState(
        itemsData.map((item) => ({
        ...item,
        item: new Item(item.name, item.quantity, item.category)
    })));

    // Event handler that adds a new item to items
    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }

    return (
        <main>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
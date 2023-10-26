export default function Item({name, quantity, category, onSelect}) {
    return (
        <main>
            <ul className = "text-center p-2 m-4 bg-sky-700 rounded-md hover:bg-sky-800 focus:bg-sky-900" onClick = { onSelect }>
                <li className = "text-xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </main>
    );
}
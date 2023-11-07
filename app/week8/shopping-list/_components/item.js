export default function Item({name, quantity, category, onSelect}) {
    return (
        <main>
            <ul className="text-center p-2 ml-8 m-4 bg-sky-700 rounded-md hover:bg-sky-800 w-80 cursor-pointer" onClick={() => onSelect(name)}>
                <li className="text-xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </main>
    );
}
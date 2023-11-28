export default function Item({name, quantity, category}) {
    return (
        <main>
            <ul className = "text-center text-white p-2 m-4 bg-sky-700 rounded-md">
                <li className = "text-xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </main>
    );
}
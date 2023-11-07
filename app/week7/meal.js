export default function Meal({name, onSelect}) {
    return (
        <main>
            <ul className = "text-center p-2 ml-8 m-4 bg-sky-700 rounded-md w-80" onClick = { onSelect }>
                <li className = "text-xl font-bold">{name}</li>
            </ul>
        </main>
    );
}
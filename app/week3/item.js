export default function Item({name, quantity, category}) {
    return (
    <ul>
        <li>Item Name: {name}</li>
        <li>Item Quantity: {quantity}</li>
        <li>Item Category: {category}</li>
        <li>_</li>
    </ul>
    );
}
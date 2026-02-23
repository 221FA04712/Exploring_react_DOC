const products = [
  { id: 1, title: "Apple" },
  { id: 2, title: "Garlic" },
  { id: 3, title: "Cabbage" },
];

function ShoppingList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
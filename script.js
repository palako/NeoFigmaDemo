function populateTable() {
  const tableBody = document.querySelector('#content table tbody');
  const items = [
    { name: 'Tent', description: 'Waterproof 4-person tent', price: '$299.99', stock: '25' },
    { name: 'Sleeping Bag', description: 'Warm and cozy', price: '$89.99', stock: '15' },
    // Add more items here
  ];
  for (let i = 0; i < 10; i++) {
    const item = items[i % items.length];
    const row = `<tr>
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.price}</td>
      <td>${item.stock}</td>
    </tr>`;
    tableBody.innerHTML += row;
  }
}
document.addEventListener('DOMContentLoaded', populateTable);
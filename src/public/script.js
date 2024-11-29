const itemList = document.getElementById("itemList");
const addItemForm = document.getElementById("addItemForm");

const fetchItems = async () => {
  const response = await fetch("/api/items");
  const items = await response.json();
  renderItems(items);
};

const renderItems = (items) => {
  itemList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.description}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteItem(item.id);
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  });
};

const addItem = async (name, description) => {
  await fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description }),
  });
  fetchItems();
};

const deleteItem = async (id) => {
  await fetch(`/api/items/${id}`, { method: "DELETE" });
  fetchItems();
};

addItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("itemName").value;
  const description = document.getElementById("itemDescription").value;
  addItem(name, description);
  addItemForm.reset();
});

// Fetch items on page load
fetchItems();


const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", addItem);

itemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

function addItem() {
  const text = itemInput.value.trim();
  if (text) {
    const li = document.createElement("li");
    li.style.marginBottom = "8px";
    li.style.padding = "8px";
    // li.style.listStyleType = "disc";
    li.style.backgroundColor = "green";
    li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;
    itemList.appendChild(li);
    itemInput.value = "";

    // Add delete functionality
    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });
  }
}

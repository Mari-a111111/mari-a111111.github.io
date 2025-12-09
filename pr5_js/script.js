const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && this.value.trim() !== "") {
    addTask(this.value.trim());
    this.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${text}</span>
    <button class="delete-btn">×</button>
  `;

  
  const checkbox = li.querySelector(".task-checkbox");
checkbox.addEventListener("change", function() {
  if (this.checked) {
    li.classList.add("completed");   // ← перекреслення + сірий + чекбокс зникає
  }
});

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  list.prepend(li);
}
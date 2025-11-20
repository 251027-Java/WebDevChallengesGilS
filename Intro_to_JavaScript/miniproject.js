const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // 1) checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 2) span for text
  const span = document.createElement("span");
  span.textContent = " " + taskText;

  // 3) when checkbox changes, toggle done
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  // put checkbox + text into li
  li.appendChild(checkbox);
  li.appendChild(span);

  list.appendChild(li);
  input.value = "";
});

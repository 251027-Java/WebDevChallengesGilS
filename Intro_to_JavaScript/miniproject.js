const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  // task text
  const span = document.createElement("span");
  span.textContent = " " + taskText + " ";

  // remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    li.remove(); // deletes this task
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  list.appendChild(li);
  input.value = "";
});

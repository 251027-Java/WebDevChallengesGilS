console.log("Hello from the external script!");

function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

function mult() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let ans = n1 * n2;

  document.getElementById("result").textContent = "Result: " + ans;
}


function div() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let ans = n1 / n2;

  document.getElementById("result").textContent = "Result: " + ans;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("multBtn").addEventListener("click", mult);
document.getElementById("divBtn").addEventListener("click", div);
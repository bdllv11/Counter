let count = document.getElementById("count");
let btn5 = document.getElementById("btn5");
let btn10 = document.getElementById("btn10");
let btn15 = document.getElementById("btn15");
let btn20 = document.getElementById("btn20");
let btn25 = document.getElementById("btn25");
let btn30 = document.getElementById("btn30");
let btn35 = document.getElementById("btn35");
let btnReset = document.getElementById("btnReset");

let currentCount = 0;

btn5.addEventListener("click", function() {
  currentCount += 5;
  count.textContent = currentCount;
});

btn10.addEventListener("click", function() {
  currentCount += 10;
  count.textContent = currentCount;
});

btn15.addEventListener("click", function() {
  currentCount += 15;
  count.textContent = currentCount;
});

btn20.addEventListener("click", function() {
  currentCount += 20;
  count.textContent = currentCount;
});

btn25.addEventListener("click", function() {
  currentCount += 25;
  count.textContent = currentCount;
});

btn30.addEventListener("click", function() {
  currentCount += 30;
  count.textContent = currentCount;
});

btn35.addEventListener("click", function() {
  currentCount += 35;
  count.textContent = currentCount;
});

btnReset.addEventListener("click", function() {
  currentCount = 0;
  count.textContent = currentCount;
});

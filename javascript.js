const total = document.getElementById("total-counter");
const remain = document.getElementById("remaining-counter");
const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

const updateCounter = () => {
  total.innerText = textarea.value.length;
  remain.innerText = textarea.getAttribute("maxlength") - textarea.value.length;
};

updateCounter();

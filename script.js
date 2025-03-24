document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  const button = e.target;
  const parentDiv = button.closest(".card");
  const divToChange = parentDiv.querySelector(".card-body");
  divToChange.classList.toggle("show");

  if (button.innerText === "Expand") {
    button.innerText = "Collapse";
  } else {
    button.innerText = "Expand";
  }
});

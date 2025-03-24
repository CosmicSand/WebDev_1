document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  const button = e.target;
  if (button.innerText === "Expand") {
    button.innerText = "Collapse";
    const divToSet = button.closest("div").nextElementSibling;
    divToSet.classList.add("show");
  } else {
    button.innerText = "Expand";
    const divToReplace = button.closest("div").nextElementSibling;
    divToReplace.classList.remove("show");
  }
});

let btnOpen = document.querySelector(".btn-Open");
let btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", () => {
  let modal = document.querySelector(".modal-container");
  modal.classList.add("modal-visible");
});

btnClose.addEventListener("click", () => {
  let modal = document.querySelector(".modal-container");
  modal.classList.remove("modal-visible");
});

const items = document.querySelectorAll(".entertainment-plans-item");
const cards = document.querySelectorAll(".entertainment-plans-card");

items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const plan = item.getAttribute("data-plan");

    cards.forEach((card) => {
      card.classList.remove("active-card");
      if (card.id === plan) {
        card.classList.add("active-card");
      }
    });
  });
});

const menuBtn = document.querySelector(".side-menu i");
const mobileMenu = document.querySelector(".mobile-side-menu");

// Toggle menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

const items = document.querySelectorAll(".entertainment-plans-item");
const cards = document.querySelectorAll(".entertainment-plans-card");

const mobileDetails = {
  starter: document.getElementById("mobile-starter"),
  "starter-plus": document.getElementById("mobile-starter-plus"),
  superstar: document.getElementById("mobile-superstar"),
  blast: document.getElementById("mobile-blast"),
  storm: document.getElementById("mobile-storm"),
};

// Copy desktop card HTML into mobile containers
cards.forEach((card) => {
  const id = card.id;
  mobileDetails[id].innerHTML = card.innerHTML;
});

// --------------------------
// ⭐ DEFAULT OPEN FIRST PLAN
// --------------------------
function setDefault() {
  const firstItem = items[0]; // first item in list
  const firstPlan = firstItem.getAttribute("data-plan");

  // Desktop default
  firstItem.classList.add("active");
  document.getElementById(firstPlan).classList.add("active-card");

  // Mobile default
  document.getElementById("mobile-" + firstPlan).classList.add("active");
}

// Call default setup
setDefault();

// --------------------------
// ⭐ CLICK HANDLER
// --------------------------
items.forEach((item) => {
  item.addEventListener("click", function () {
    const plan = item.getAttribute("data-plan");

    // Desktop behavior
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    cards.forEach((card) => {
      card.classList.remove("active-card");
      if (card.id === plan) card.classList.add("active-card");
    });

    // MOBILE behavior
    Object.values(mobileDetails).forEach((box) =>
      box.classList.remove("active")
    );

    document.getElementById("mobile-" + plan).classList.add("active");
  });
});

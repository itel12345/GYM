  function toggleDropdown() {
    const menu = document.getElementById("dropdown-content");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase().trim();

  searchItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

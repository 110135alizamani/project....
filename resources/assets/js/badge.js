const badge = document.getElementById("cart-badge");
const buttons = document.querySelectorAll(".add-to-cart");
let count = 0;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    badge.textContent = count;
  });
});

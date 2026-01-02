// 🎯 تغییر قلب توخالی ↔ قلب توپر برای دکمه‌های علاقه‌مندی
document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll(".icon-btn.heart");
  
    hearts.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("liked")) {
          btn.classList.remove("liked");
          btn.innerHTML = "&#9825;"; // قلب توخالی
        } else {
          btn.classList.add("liked");
          btn.innerHTML = "&#9829;"; // قلب توپر
        }
      });
    });
  });
  
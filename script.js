document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stop form from submitting for real

      alert("Thank you! Your combi has been listed successfully 🚐");

      form.reset(); // clears the form
    });
  }
});
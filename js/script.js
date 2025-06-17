document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
      burger.classList.toggle("toggle");
    });
  }

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function () {
      alert("Grazie! Il tuo messaggio è stato inviato.");
    });
  }
});

 
<form action="https://formspree.io/f/mabcxyz" method="POST" id="contact-form">
  <!-- i tuoi campi qui -->
</form>


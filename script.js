/* =========================================================
   BIRTHDAY ACADEMIC WEBSITE
   JavaScript interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- CURRENT YEAR ---------------- */
  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  /* ---------------- MOBILE NAVIGATION ---------------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  /* ---------------- LITERATURE REVIEW ----------------
     Clicking an achievement expands/reveals its hidden
     content on the SAME PAGE.
  */
  document.querySelectorAll("[data-reveal-card]").forEach((card) => {
    const button = card.querySelector(".achievement-button");

    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  /* ---------------- FUTURE RESEARCH ----------------
     Tap 1 -> message 2
     Tap 2 -> hidden message
     Tap after reveal -> reset
  */
  const research = document.querySelector("[data-research]");

  if (research) {
    const researchBox = research.querySelector(".research-box");

    researchBox.addEventListener("click", () => {
      let step = Number(research.dataset.step || 1);

      if (step < 3) {
        step += 1;
      } else {
        step = 1;
      }

      research.dataset.step = String(step);
    });
  }
});

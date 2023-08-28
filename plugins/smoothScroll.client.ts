export default defineNuxtPlugin(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const href = anchor.getAttribute("href");
      if (href) {
        const selector = document.querySelector(href);
        if (selector) {
          selector.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
});

const coll = document.getElementsByClassName("collapsible");

let i;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("show");
});

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("minus");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const navLink = document.querySelectorAll(".nav__link");

// Add event listener to the window's scroll event
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section and check if it is in the viewport
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // If the section is in the viewport, add a CSS class to highlight the corresponding navigation link
      const sectionId = section.getAttribute("id");
      navLink.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${sectionId}`
        );
      });
    }
  });
});

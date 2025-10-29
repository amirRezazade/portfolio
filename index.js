const sections = document.querySelectorAll(".nav-control");
const navLinks = document.querySelectorAll("#nav-menu li a");

let app = document.getElementById("app");
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter.typeString("دانشجوی رشته مهندسی کامپیوتر").pauseFor(2000).deleteAll().typeString("توسعه‌ دهنده‌ی فرانت‌ اند").pauseFor(2000).deleteAll().typeString('<strong class="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text font-extrabold text-transparent">عاشق دنیای  برنامه نویسی</strong>').pauseFor(2500).start();

window.addEventListener("scroll", activateNavLink);
window.addEventListener("load", () => {
  document.querySelector("#loader").classList.add("opacity-0", "invisible");
  document.body.classList.remove("max-h-screen");
  setTimeout(() => {
    document.querySelector("#loader").remove();
  }, 3000);
  activateNavLink();
});

function activateNavLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav-item-active");
    if (link.classList.contains(current)) {
      link.classList.add("nav-item-active");
    }
  });
}

// Initialize Lenis for smooth scroll
const lenis = new Lenis({
  autoRaf: true,
});

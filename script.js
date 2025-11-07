window.addEventListener("scroll", () => {
  const name = document.getElementById("name");
  const scrollY = window.scrollY;

  name.style.transform = `translateY(${scrollY * 0.2}px)`;
  name.style.opacity = 1 - scrollY / 400;
});

const sections = document.querySelectorAll(".section");

sections.forEach((sec) => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.6s ease-out";
});

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

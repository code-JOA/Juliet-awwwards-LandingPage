var typed = new Typed(".auto-type", {
  strings: [
    "Hi",
    "Hello",
    "Ciao",
    "Ola",
    "Aloha",
    "Ahoj",
    "Konichiwa",
    "G'Day",
    "Marhaba",
    "Hey",
    "Yasuo",
    "Bonjour",
    "Whatsup",
    "Howdy",
    "Shalom",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function changeBackground() {
  if (window.scrollY > window.innerHeight / 2) {
    document.body.classList.add("bg-color");
  } else {
    document.body.classList.remove("bg-color");
  }
}
window.addEventListener("scroll", changeBackground);

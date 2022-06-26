const footer = document.querySelector(".footer");
const dt = new Date;

console.log(footer)

footer.insertAdjacentHTML("beforeend", `${dt.getFullYear()}`)
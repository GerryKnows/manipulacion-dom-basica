const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const pid = document.getElementById ("pid");

console.log("chupame el nie");

h1.innerHTML = "CHUPAME <br> EL <br> NIE";

// console.log (h1.getAttribute ('class') );
// h1.setAttribute('class', 'cacahuate' );

h1.classList.add("cacahuate");
h1.classList.remove("mani");

input.value = "pastel de chocolate";

const img = document.createElement("img");
img.setAttribute(
  "Src",
  "https://th.bing.com/th/id/R.64a1ad0376f5bafb17e1c7a659c21337?rik=P3HiILLHn6XLIg&riu=http%3a%2f%2fcdn2.cocinadelirante.com%2fsites%2fdefault%2ffiles%2fimages%2f2017%2f07%2fpasteldechocolateconnaranja2.jpg&ehk=0MJ1Xv9Kd6xc3GkaARxvHXPPhg46M3qUWjfyPv5cUTU%3d&risl=&pid=ImgRaw&r=0"
);

console.log(img);

pid.appendChild(img);

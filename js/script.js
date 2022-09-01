// Scroll Ke Section
function clickFunction(get) {
  let destination = document.getElementById(get);
  destination.scrollIntoView({ behavior: "smooth" });
}

//Ubah warna Menu Responsive ketika hover
document.getElementById("drop").onmouseover = function () {
  let span = document.getElementsByTagName("span");
  for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = "white";
  }
};
document.getElementById("drop").onmouseout = function () {
  let span = document.getElementsByTagName("span");
  for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = "black";
  }
};

//memanggil Menu responsive
document.getElementById("drop").onclick = function () {
  let elem = document.querySelector("#responsive");
  elem.classList.toggle("flex");
};
//Gallery
const java = [
  "assets/works/java1.png",
  "assets/works/java2.png",
  "assets/works/java3.png",
  "assets/works/java4.png",
  "assets/works/java5.png",
  "assets/works/java6.png",
];
const php = [
  "assets/works/phpbootstrap1.png",
  "assets/works/phpbootstrap2.png",
  "assets/works/phpbootstrap3.png",
  "assets/works/phpbootstrap4.png",
  "assets/works/phpbootstrap5.png",
  "assets/works/phpbootstrap6.png",
];
const cIgniter = [
  "assets/works/Cibootsrap1.png",
  "assets/works/Cibootsrap2.png",
  "assets/works/Cibootsrap3.png",
  "assets/works/Cibootsrap4.png",
  "assets/works/Cibootsrap5.png",
];
//Open Gallery
function Galery(e) {
  const loc = document.getElementById("slide");
  const img = document.getElementById("image");
  loc.style.display = "flex";
  loc.scrollIntoView({ behavior: "smooth" });
  let arr = e;
  if (e == "java") {
    img.src = java[0];
    img.classList.toggle("java");
    img.classList.remove("php");
    img.classList.remove("cIgniter");
  } else if (e == "php") {
    img.src = php[0];
    img.classList.toggle("php");
    img.classList.remove("cIgniter");
    img.classList.remove("java");
  } else {
    img.src = cIgniter[0];
    img.classList.toggle("cIgniter");
    img.classList.remove("php");
    img.classList.remove("java");
  }
}
//Close Galery
document.getElementById("close").onclick = function () {
  document.getElementById("slide").style.display = "none";
  document.getElementById("works").scrollIntoView({ behavior: "smooth" });
};
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//change image
let i = 0;
next.onclick = function () {
  target = document.getElementById("image");
  if (target.classList.contains("java")) {
    i++;
    if (i == java.length) {
      i = 0;
    }
    target.src = java[i];
    // target.src = java[i++];
  } else if (target.classList.contains("php")) {
    i++;
    if (i == php.length) {
      i = 0;
    }
    target.src = php[i];
  } else {
    i++;
    if (i == cIgniter.length) {
      i = 0;
    }
    target.src = cIgniter[i];
  }
};
prev.onclick = function () {
  target = document.getElementById("image");
  if (target.classList.contains("java")) {
    if (i == 0) {
      i = java.length;
    }
    i--;
    target.src = java[i];
    // target.src = java[i++];
  } else if (target.classList.contains("php")) {
    if (i == 0) {
      i = php.length;
    }
    i--;
    target.src = php[i];
  } else {
    if (i == 0) {
      i = cIgniter.length;
    }
    i--;
    target.src = cIgniter[i];
  }
};

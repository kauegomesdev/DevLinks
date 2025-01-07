function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-new3.png")
  } else {
    img.setAttribute("src", "./assets/avatar-new1.png")
  }
}

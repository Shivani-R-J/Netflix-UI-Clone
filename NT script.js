const content = document.getElementById("content");
const title = document.getElementById("row-title");

let myList = [];

/* ACTIVE MENU */
function setActive(element) {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  element.classList.add("active");
}

/* FADE */
function applyFade() {
  content.classList.remove("fade");
  void content.offsetWidth;
  content.classList.add("fade");
}

/* TV SHOWS */
function showTV() {
  title.innerText = "TV Shows";
  content.innerHTML = `
    ${createCard("tv1.jpg")}
    ${createCard("tv2.jpg")}
    ${createCard("tv3.jpg")}
    ${createCard("movie6.jpg")}
    ${createCard("movie8.jpg")}
    ${createCard("movie3.jpg")}
  `;
  applyFade();
}

/* MOVIES */
function showMovies() {
  title.innerText = "Movies";
  content.innerHTML = `
    ${createCard("movie1.jpg")}
    ${createCard("movie2.jpg")}
    ${createCard("movie3.jpg")}
    ${createCard("movie4.jpg")}
    ${createCard("movie5.jpg")}
    ${createCard("movie6.jpg")}
    ${createCard("movie7.jpg")}
    ${createCard("movie8.jpg")}
  `;
  applyFade();
}

/* RECENT */
function showRecent() {
  title.innerText = "Recently Added";
  content.innerHTML = `
    ${createCard("movie7.jpg")}
    ${createCard("tv3.jpg")}
    ${createCard("movie4.jpg")}
  `;
  applyFade();
}

/* MY LIST */
function showList() {
  title.innerText = "My List";
  content.innerHTML = "";

  if (myList.length === 0) {
    content.innerHTML = "<p>No items added.</p>";
    return;
  }

  myList.forEach(movie => {
    content.innerHTML += `<img src="images/${movie}" class="poster">`;
  });

  applyFade();
}

/* ADD TO LIST */
function addToList(movie) {
  if (!myList.includes(movie)) {
    myList.push(movie);
    alert("Added to My List!");
  }
}

/* CARD TEMPLATE */
function createCard(img) {
  return `
    <div class="card">
      <img src="images/${img}" class="poster">
      <button onclick="addToList('${img}')">＋ My List</button>
    </div>
  `;
}

/* SEARCH */
function searchMovies() {
  const input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".poster").forEach(poster => {
    poster.style.display = poster.src.toLowerCase().includes(input)
      ? "block"
      : "none";
  });
}

/* NAVBAR SCROLL */
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").style.background =
    window.scrollY > 100 ? "#111" : "transparent";
});

/* DEFAULT LOAD */
showTV();


const restaurantList = [
  {
    name: "정갈한 한정식집",
    category: "한식",
    desc: "예식장에서 도보 3분, 어르신들이 좋아하시는 깔끔한 한상 차림",
    link: "https://kko.to/example1"
  },
  {
    name: "이탈리안 팩토리",
    category: "양식",
    desc: "주차가 편리하고 파스타와 화덕 피자가 맛있는 곳",
    link: "https://kko.to/example2"
  },
  {
    name: "카페 다정",
    category: "카페",
    desc: "웨딩식 후 여유롭게 즐길 수 있는 디저트와 커피",
    link: "https://kko.to/example3"
  }
];

const openButton = document.getElementById("open-restaurants");
const closeButton = document.getElementById("close-sheet");
const dimmed = document.getElementById("dimmed");
const bottomSheet = document.getElementById("bottom-sheet");
const restaurantContainer = document.getElementById("restaurant-list");
const copyButton = document.getElementById("copy-account");

function toggleSheet(show) {
  bottomSheet.classList.toggle("show", show);
  dimmed.classList.toggle("show", show);
}

function renderRestaurants() {
  restaurantContainer.innerHTML = restaurantList
    .map(
      (restaurant) => `
        <article class="restaurant-card">
          <h4>${restaurant.name}</h4>
          <p class="restaurant-category">${restaurant.category}</p>
          <p>${restaurant.desc}</p>
          <a href="${restaurant.link}" target="_blank" rel="noreferrer noopener">카카오맵에서 보기</a>
        </article>
      `
    )
    .join("");
}

function copyAccount() {
  const accountText = "국민은행 123456-78-901234 김신랑";
  navigator.clipboard.writeText(accountText).then(() => {
    alert("계좌번호가 복사되었습니다.");
  });
}

openButton.addEventListener("click", () => toggleSheet(true));
closeButton.addEventListener("click", () => toggleSheet(false));
dimmed.addEventListener("click", () => toggleSheet(false));
copyButton.addEventListener("click", copyAccount);

renderRestaurants();

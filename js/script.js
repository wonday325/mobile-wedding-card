const restaurantList = [
  {
    name: "칠성시장 불고기",
    category: "불고기/구이",
    desc: "대구를 대표하는 칠성시장의 신선한 불고기와 모둠구이",
    link: "https://map.kakao.com/?q=대구%20칠성시장",
    lat: 35.8783,
    lng: 128.5989
  },
  {
    name: "대구 막창골목",
    category: "막창/곱창",
    desc: "싱싱한 막창과 곱창을 즐길 수 있는 대구의 명소",
    link: "https://map.kakao.com/?q=대구%20막창골목",
    lat: 35.8464,
    lng: 128.5680
  },
  {
    name: "약로 국밥거리",
    category: "국밥",
    desc: "대구 최고의 국밥 골목, 돼지국밥과 소머리국밥",
    link: "https://map.kakao.com/?q=대구%20약로",
    lat: 35.8738,
    lng: 128.5897
  },
  {
    name: "동인동 야시장",
    category: "야시장",
    desc: "저녁부터 시작되는 대구의 대표 야시장, 다양한 음식",
    link: "https://map.kakao.com/?q=대구%20동인동%20야시장",
    lat: 35.8827,
    lng: 128.5961
  },
  {
    name: "대구 짬뽕골목",
    category: "짬뽕",
    desc: "매콤한 맛이 일품인 대구식 짬뽕 전문거리",
    link: "https://map.kakao.com/?q=대구%20짬뽕골목",
    lat: 35.8770,
    lng: 128.5920
  },
  {
    name: "서문시장 음식광장",
    category: "한식",
    desc: "100년 전통의 서문시장에서 즐기는 대구 음식",
    link: "https://map.kakao.com/?q=대구%20서문시장",
    lat: 35.8853,
    lng: 128.5870
  },
  {
    name: "침산동 우육탕거리",
    category: "우육탕",
    desc: "대구만의 특별한 음식, 우육탕(우육면)의 명소",
    link: "https://map.kakao.com/?q=대구%20침산동%20우육탕",
    lat: 35.9120,
    lng: 128.6300
  },
  {
    name: "범어네거리",
    category: "한식/양식",
    desc: "대학가의 감성있는 맛집들이 모여있는 거리",
    link: "https://map.kakao.com/?q=대구%20범어네거리",
    lat: 35.8660,
    lng: 128.6370
  },
  {
    name: "오동동 음식거리",
    category: "한식",
    desc: "전통 한식과 현지 음식이 함께하는 거리",
    link: "https://map.kakao.com/?q=대구%20오동동",
    lat: 35.8780,
    lng: 128.6200
  },
  {
    name: "반월당 카페거리",
    category: "카페/디저트",
    desc: "감성적인 카페와 디저트 숍이 많은 특별한 거리",
    link: "https://map.kakao.com/?q=대구%20반월당",
    lat: 35.8770,
    lng: 128.6100
  },
  {
    name: "평리골목 닭꼬치",
    category: "닭꼬치",
    desc: "대구의 숨은 맛집, 신선한 닭꼬치 전문점",
    link: "https://map.kakao.com/?q=대구%20평리골목",
    lat: 35.8710,
    lng: 128.5750
  },
  {
    name: "수성못 음식점",
    category: "한식/양식",
    desc: "아름다운 수성못 주변의 감성있는 식당들",
    link: "https://map.kakao.com/?q=대구%20수성못",
    lat: 35.8520,
    lng: 128.6520
  },
  {
    name: "대구 돼지국밥",
    category: "국밥",
    desc: "정성스럽게 끓인 돼지국밥, 대구 아침 문화의 중심",
    link: "https://map.kakao.com/?q=대구%20돼지국밥",
    lat: 35.8750,
    lng: 128.5900
  },
  {
    name: "종로거리 음식점",
    category: "한식/일식",
    desc: "오래된 전통과 새로운 트렌드가 만나는 거리",
    link: "https://map.kakao.com/?q=대구%20종로거리",
    lat: 35.8800,
    lng: 128.5880
  },
  {
    name: "이월드 레스토랑 거리",
    category: "양식/한식",
    desc: "동궁동의 멋진 야경을 보며 식사할 수 있는 곳",
    link: "https://map.kakao.com/?q=대구%20이월드%20레스토랑",
    lat: 35.8850,
    lng: 128.6450
  },
  {
    name: "중앙로데오거리 카페",
    category: "카페/스낵",
    desc: "젊은이들이 즐겨 찾는 트렌디한 카페거리",
    link: "https://map.kakao.com/?q=대구%20중앙로데오",
    lat: 35.8730,
    lng: 128.5950
  },
  {
    name: "청라언덕 프렌치 식당",
    category: "양식",
    desc: "아름다운 언덕에서 즐기는 감성있는 양식",
    link: "https://map.kakao.com/?q=대구%20청라언덕",
    lat: 35.8640,
    lng: 128.5920
  },
  {
    name: "참과나무 음식점",
    category: "한식",
    desc: "정갈한 한정식과 건강한 음식을 제공하는 식당",
    link: "https://map.kakao.com/?q=대구%20한정식",
    lat: 35.8900,
    lng: 128.6100
  },
  {
    name: "육덕시장 먹자거리",
    category: "한식",
    desc: "대구의 또다른 맛, 육덕시장의 알찬 먹자거리",
    link: "https://map.kakao.com/?q=대구%20육덕시장",
    lat: 35.8940,
    lng: 128.5850
  },
  {
    name: "동성로 젊음의거리",
    category: "한식/양식/카페",
    desc: "다양한 음식과 문화를 즐길 수 있는 동성로",
    link: "https://map.kakao.com/?q=대구%20동성로",
    lat: 35.8760,
    lng: 128.5980
  }
];

// 예식장 좌표 (대구 동구 동촌로 316, M스타하우스웨딩&컨벤션)
const venueCoords = {
  lat: 35.8875,
  lng: 128.6298,
  name: "M스타하우스웨딩&컨벤션",
  address: "대구 동구 동촌로 316"
};

const openButton = document.getElementById("open-restaurants");
const closeButton = document.getElementById("close-sheet");
const dimmed = document.getElementById("dimmed");
const bottomSheet = document.getElementById("bottom-sheet");
const restaurantContainer = document.getElementById("restaurant-list");
const copyButton = document.getElementById("copy-account");
const naverMapBtn = document.getElementById("naver-map");
const kakaoMapBtn = document.getElementById("kakao-map");
const tmapBtn = document.getElementById("tmap-map");

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

function openNaverMap() {
  const appUrl = `nmap://navigate?lat=${venueCoords.lat}&lng=${venueCoords.lng}&name=${encodeURIComponent(venueCoords.name)}`;
  const webUrl = `https://map.naver.com/p/search/${encodeURIComponent(venueCoords.name)}/address`;
  
  // 앱이 설치되어 있는지 확인하기 위해 앱 링크 시도
  const timer = setTimeout(() => {
    window.location.href = webUrl;
  }, 1000);
  
  window.location.href = appUrl;
  setTimeout(() => clearTimeout(timer), 100);
}

function openKakaoMap() {
  const appUrl = `kakaomap://look?p=${venueCoords.lat},${venueCoords.lng}`;
  const webUrl = `https://map.kakao.com/link/map/${encodeURIComponent(venueCoords.name)},${venueCoords.lat},${venueCoords.lng}`;
  
  const timer = setTimeout(() => {
    window.location.href = webUrl;
  }, 1000);
  
  window.location.href = appUrl;
  setTimeout(() => clearTimeout(timer), 100);
}

function openTmap() {
  const appUrl = `tmap://search?name=${encodeURIComponent(venueCoords.name)}&lon=${venueCoords.lng}&lat=${venueCoords.lat}`;
  const webUrl = `https://map.tmap.co.kr/map/search/${encodeURIComponent(venueCoords.name)}`;
  
  const timer = setTimeout(() => {
    window.location.href = webUrl;
  }, 1000);
  
  window.location.href = appUrl;
  setTimeout(() => clearTimeout(timer), 100);
}

openButton.addEventListener("click", () => toggleSheet(true));
closeButton.addEventListener("click", () => toggleSheet(false));
dimmed.addEventListener("click", () => toggleSheet(false));
copyButton.addEventListener("click", copyAccount);
naverMapBtn.addEventListener("click", openNaverMap);
kakaoMapBtn.addEventListener("click", openKakaoMap);
tmapBtn.addEventListener("click", openTmap);

renderRestaurants();

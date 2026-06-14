const restaurantList = [
  // 한식 5
  { name: "서문시장 한식당", category: "한식", desc: "전통 한식을 맛볼 수 있는 서문시장 내 인기식당", link: "https://map.kakao.com/?q=서문시장%20한식" },
  { name: "오동동 칼국수", category: "한식", desc: "속을 풀어주는 칼칼한 국물의 칼국수 전문점", link: "https://map.kakao.com/?q=오동동%20칼국수" },
  { name: "동인동 찜갈비", category: "한식", desc: "달큰한 양념의 찜갈비로 유명한 식당", link: "https://map.kakao.com/?q=동인동%20찜갈비" },
  { name: "평리국밥", category: "한식", desc: "든든한 한 끼, 지역 주민들이 추천하는 국밥집", link: "https://map.kakao.com/?q=평리%20국밥" },
  { name: "참과나무 한정식", category: "한식", desc: "정갈한 한정식 코스", link: "https://map.kakao.com/?q=참과나무%20한정식" },
  // 중식 5
  { name: "중화반점", category: "중식", desc: "현지식 중화요리 전문점", link: "https://map.kakao.com/?q=중화반점" },
  { name: "복성루", category: "중식", desc: "정통 중국식으로 유명한 동네 맛집", link: "https://map.kakao.com/?q=복성루" },
  { name: "중화요리 대성", category: "중식", desc: "짬뽕과 탕수육이 인기", link: "https://map.kakao.com/?q=대성%20중화요리" },
  { name: "하오팅", category: "중식", desc: "퓨전 중식과 정통 면요리", link: "https://map.kakao.com/?q=하오팅" },
  { name: "천향", category: "중식", desc: "중식 코스와 식사류 균형 좋은 집", link: "https://map.kakao.com/?q=천향" },
  // 양식 5
  { name: "청라언덕 비스트로", category: "양식", desc: "감성적인 분위기의 프렌치 비스트로", link: "https://map.kakao.com/?q=청라언덕%20비스트로" },
  { name: "수성못 레스토랑", category: "양식", desc: "수성못 전망과 함께하는 유럽식 요리", link: "https://map.kakao.com/?q=수성못%20레스토랑" },
  { name: "이월드 바다뷰 레스토랑", category: "양식", desc: "야경이 예쁜 양식 레스토랑", link: "https://map.kakao.com/?q=이월드%20레스토랑" },
  { name: "파스타하우스", category: "양식", desc: "수제 파스타와 화덕피자가 인기", link: "https://map.kakao.com/?q=파스타하우스" },
  { name: "브루클린 스테이크", category: "양식", desc: "스테이크와 와인으로 유명한 곳", link: "https://map.kakao.com/?q=브루클린%20스테이크" },
  // 디저트 5
  { name: "반월당 카페거리 카페A", category: "디저트", desc: "감성 카페와 디저트가 모여있는 거리", link: "https://map.kakao.com/?q=반월당%20카페" },
  { name: "달콤베이커리", category: "디저트", desc: "수제 케이크와 페이스트리가 맛있는 베이커리", link: "https://map.kakao.com/?q=달콤베이커리" },
  { name: "아이스크림 공방", category: "디저트", desc: "특별한 수제 아이스크림", link: "https://map.kakao.com/?q=아이스크림%20공방" },
  { name: "테이블 디저트", category: "디저트", desc: "감성 디저트 플레이팅으로 유명한 카페", link: "https://map.kakao.com/?q=테이블%20디저트" },
  { name: "디저트 라운지", category: "디저트", desc: "다양한 디저트와 티가 있는 라운지", link: "https://map.kakao.com/?q=디저트%20라운지" }
];

// 예식장 정보 (사용자 제공 주소/링크)
const venue = {
  name: "예식장",
  address: "대구 동구 방촌동 1113-320",
  googleShort: "https://maps.app.goo.gl/yEg86E1DB93yxu959",
  naverShort: "https://naver.me/GQ1liHfC"
};

const openButton = document.getElementById("open-restaurants");
const closeButton = document.getElementById("close-sheet");
const dimmed = document.getElementById("dimmed");
const bottomSheet = document.getElementById("bottom-sheet");
const restaurantContainer = document.getElementById("restaurant-list");
const copyButtons = document.querySelectorAll(".copy-btn");
const naverMapBtn = document.getElementById("naver-map");
const kakaoMapBtn = document.getElementById("kakao-map");
const tmapBtn = document.getElementById("tmap-map");

function toggleSheet(show) {
  bottomSheet.classList.toggle("show", show);
  dimmed.classList.toggle("show", show);
}

function renderRestaurants(category) {
  const filtered = restaurantList.filter((r) => r.category === category);
  restaurantContainer.innerHTML = filtered
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

// 탭 이벤트 바인딩
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.category;
    renderRestaurants(cat);
  });
});

function copyAccount(accountText) {
  navigator.clipboard.writeText(accountText).then(() => {
    alert("계좌번호가 복사되었습니다.");
  });
}

function openNaverMap() {
  // 시도: 앱 스킴 -> 네이버 단축링크(웹)
  const appUrl = `nmap://search?query=${encodeURIComponent(venue.address)}`;
  const webUrl = venue.naverShort || `https://map.naver.com/v5/search/${encodeURIComponent(venue.address)}`;

  const timer = setTimeout(() => (window.location.href = webUrl), 1000);
  window.location.href = appUrl;
  setTimeout(() => clearTimeout(timer), 1500);
}

function openKakaoMap() {
  // 카카오맵 앱 시도, 웹은 검색 링크로 폴백
  const appUrl = `kakaomap://search?q=${encodeURIComponent(venue.address)}`;
  const webUrl = `https://map.kakao.com/link/search/${encodeURIComponent(venue.address)}`;

  const timer = setTimeout(() => (window.location.href = webUrl), 1000);
  window.location.href = appUrl;
  setTimeout(() => clearTimeout(timer), 1500);
}

function openTmap() {
  // TMap 앱 시도 (일부 기기에서 동작), 웹 폴백은 TMap 검색 페이지
  const appUrl = `tmap://search?name=${encodeURIComponent(venue.address)}`;
  const webUrl = `https://map.tmap.co.kr/search?query=${encodeURIComponent(venue.address)}`;

  const timer = setTimeout(() => (window.location.href = webUrl), 1000);
  window.location.href = appUrl;
  setTimeout(() => clearTimeout(timer), 1500);
}

openButton.addEventListener("click", () => toggleSheet(true));
closeButton.addEventListener("click", () => toggleSheet(false));
dimmed.addEventListener("click", () => toggleSheet(false));
copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const accountText = btn.dataset.account;
    copyAccount(accountText);
  });
});
naverMapBtn.addEventListener("click", openNaverMap);
kakaoMapBtn.addEventListener("click", openKakaoMap);
tmapBtn.addEventListener("click", openTmap);

// 초기: 한식 탭 선택
renderRestaurants("한식");

// 임베드 iframe 및 단축 링크 업데이트
const mapIframe = document.getElementById("map-iframe");
const googleLink = document.getElementById("google-map-link");
const naverShort = document.getElementById("naver-short-link");
if (mapIframe) {
  const q = encodeURIComponent(venue.address);
  // 임베드 가능한 형식으로 변경: output=embed 사용
  mapIframe.src = `https://www.google.com/maps?q=${q}&output=embed`;
}
if (googleLink) googleLink.href = venue.googleShort || googleLink.href;
if (naverShort) naverShort.href = venue.naverShort || naverShort.href;

// ----------------------
// Background YouTube music player
// ----------------------
const bgMusicBtn = document.getElementById("bg-music-btn");
const ytPlayerContainerId = "yt-player"; // div id where YT iframe will be created
let ytPlayer = null;
let ytApiReady = false;
const ytVideoId = "SAHWUw81FEY"; // user-selected YouTube video id
const ytStartSec = 12; // start time from link

function loadYouTubeAPI() {
  if (window.YT) {
    ytApiReady = true;
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = function () {
      ytApiReady = true;
      resolve();
    };
  });
}

function createPlayer() {
  if (!ytApiReady) return;
  if (ytPlayer) return;
  ytPlayer = new YT.Player(ytPlayerContainerId, {
    height: "0",
    width: "0",
    videoId: ytVideoId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      start: ytStartSec,
      mute: 0,
      loop: 1,
      playlist: ytVideoId
    },
    events: {
      onReady: function (event) {
        // nothing — play will be triggered by user action
      },
      onStateChange: function (e) {
        // keep loop if ended
        if (e.data === YT.PlayerState.ENDED) {
          ytPlayer.playVideo();
        }
      }
    }
  });
}

async function toggleBgMusic() {
  if (!ytPlayer) {
    await loadYouTubeAPI();
    createPlayer();
    // small delay to ensure player initializes
    setTimeout(() => {
      if (ytPlayer && ytPlayer.playVideo) {
        ytPlayer.playVideo();
        bgMusicBtn.classList.add("playing");
        bgMusicBtn.textContent = "⏸ 음악 일시정지";
      }
    }, 300);
    return;
  }

  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
    bgMusicBtn.classList.remove("playing");
    bgMusicBtn.textContent = "▶ 음악 재생";
  } else {
    ytPlayer.playVideo();
    bgMusicBtn.classList.add("playing");
    bgMusicBtn.textContent = "⏸ 음악 일시정지";
  }
}

if (bgMusicBtn) {
  bgMusicBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleBgMusic();
  });
}

let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

//網頁初始化
function init() {
  const ticketCardArea = document.querySelector('.ticketCardArea');
  let result = "";
  data.forEach(function (item, index) {
    let content =
      `<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src=${item.imgUrl}
          alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
      </div>
    </div>
        </li>`
    result += content;
  });
  ticketCardArea.innerHTML = result;
};
init();

//地區篩選器邏輯
const regionSearch = document.querySelector(".regionSearch");
const ticketCardArea = document.querySelector(".ticketCardArea");
const resultNum = document.querySelector(".resultNum");
regionSearch.addEventListener("change", function (e) {
  let result = "";
  let resultArr = [];
  data.forEach(function (item, index) {
    if (e.target.value == "全部地區") {
      result += `<li class="ticketCard">
      <div class="ticketCard-img">
        <a href="#">
          <img src=${item.imgUrl}
            alt="">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
            <a href="#" class="ticketCard-name">${item.name}</a>
          </h3>
          <p class="ticketCard-description">
            ${item.description}
          </p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
          </p>
          <p class="ticketCard-price">
            TWD <span id="ticketCard-price">$${item.price}</span>
          </p>
        </div>
      </div>
          </li>`;
      resultArr.push(result);
    };
    if (e.target.value == item.area) {
      result += `<li class="ticketCard">
      <div class="ticketCard-img">
        <a href="#">
          <img src=${item.imgUrl}
            alt="">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
            <a href="#" class="ticketCard-name">${item.name}</a>
          </h3>
          <p class="ticketCard-description">
            ${item.description}
          </p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
          </p>
          <p class="ticketCard-price">
            TWD <span id="ticketCard-price">$${item.price}</span>
          </p>
        </div>
      </div>
          </li>`;
      resultArr.push(result);
    }
  })
  resultNum.textContent = `本次搜尋共 ${resultArr.length} 筆資料`
  ticketCardArea.innerHTML = result;
})

//表單輸入新增資料
const ticketName = document.querySelector(".ticketName");
const ticketImgUrl = document.querySelector(".ticketImgUrl");
const ticketRegion = document.querySelector(".ticketRegion");
const ticketDescription = document.querySelector(".ticketDescription");
const ticketNum = document.querySelector(".ticketNum");
const ticketPrice = document.querySelector(".ticketPrice");
const ticketRate = document.querySelector(".ticketRate");
const addTicket = document.querySelector(".addTicket-btn");
 
addTicket.addEventListener("click", function (e) {
  let obj = {};
  obj.id = data.length;
  obj.name = ticketName.value.trim();
  obj.imgUrl = ticketImgUrl.value.trim();
  obj.area = ticketRegion.value;
  obj.description = ticketDescription.value.trim();
  obj.group = ticketNum.value;
  obj.price = ticketPrice.value;
  obj.rate = ticketRate.value;
  data.push(obj);

  init();

  ticketName.value = "";
  ticketImgUrl.value = "";
  ticketRegion.value = "";
  ticketDescription.value = "";
  ticketNum.value = "";
  ticketPrice.value = "";
  ticketRate.value = "";
})


"use strict";

var data = [{
  "id": 0,
  "name": "肥宅心碎賞櫻3日",
  "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
  "area": "高雄",
  "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
  "group": 87,
  "price": 1400,
  "rate": 10
}, {
  "id": 1,
  "name": "貓空纜車雙程票",
  "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台北",
  "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
  "group": 99,
  "price": 240,
  "rate": 2
}, {
  "id": 2,
  "name": "台中谷關溫泉會1日",
  "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台中",
  "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
  "group": 20,
  "price": 1765,
  "rate": 7
}]; //網頁初始化

function init() {
  var ticketCardArea = document.querySelector('.ticketCardArea');
  var result = "";
  data.forEach(function (item, index) {
    var content = "<li class=\"ticketCard\">\n    <div class=\"ticketCard-img\">\n      <a href=\"#\">\n        <img src=".concat(item.imgUrl, "\n          alt=\"\">\n      </a>\n      <div class=\"ticketCard-region\">").concat(item.area, "</div>\n      <div class=\"ticketCard-rank\">").concat(item.rate, "</div>\n    </div>\n    <div class=\"ticketCard-content\">\n      <div>\n        <h3>\n          <a href=\"#\" class=\"ticketCard-name\">").concat(item.name, "</a>\n        </h3>\n        <p class=\"ticketCard-description\">\n          ").concat(item.description, "\n        </p>\n      </div>\n      <div class=\"ticketCard-info\">\n        <p class=\"ticketCard-num\">\n          <span><i class=\"fas fa-exclamation-circle\"></i></span>\n          \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(item.group, " </span> \u7D44\n        </p>\n        <p class=\"ticketCard-price\">\n          TWD <span id=\"ticketCard-price\">$").concat(item.price, "</span>\n        </p>\n      </div>\n    </div>\n        </li>");
    result += content;
  });
  ticketCardArea.innerHTML = result;
}

;
init(); //地區篩選器邏輯

var regionSearch = document.querySelector(".regionSearch");
var ticketCardArea = document.querySelector(".ticketCardArea");
var resultNum = document.querySelector(".resultNum");
regionSearch.addEventListener("change", function (e) {
  var result = "";
  var resultArr = [];
  data.forEach(function (item, index) {
    if (e.target.value == "全部地區") {
      result += "<li class=\"ticketCard\">\n      <div class=\"ticketCard-img\">\n        <a href=\"#\">\n          <img src=".concat(item.imgUrl, "\n            alt=\"\">\n        </a>\n        <div class=\"ticketCard-region\">").concat(item.area, "</div>\n        <div class=\"ticketCard-rank\">").concat(item.rate, "</div>\n      </div>\n      <div class=\"ticketCard-content\">\n        <div>\n          <h3>\n            <a href=\"#\" class=\"ticketCard-name\">").concat(item.name, "</a>\n          </h3>\n          <p class=\"ticketCard-description\">\n            ").concat(item.description, "\n          </p>\n        </div>\n        <div class=\"ticketCard-info\">\n          <p class=\"ticketCard-num\">\n            <span><i class=\"fas fa-exclamation-circle\"></i></span>\n            \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(item.group, " </span> \u7D44\n          </p>\n          <p class=\"ticketCard-price\">\n            TWD <span id=\"ticketCard-price\">$").concat(item.price, "</span>\n          </p>\n        </div>\n      </div>\n          </li>");
      resultArr.push(result);
    }

    ;

    if (e.target.value == item.area) {
      result += "<li class=\"ticketCard\">\n      <div class=\"ticketCard-img\">\n        <a href=\"#\">\n          <img src=".concat(item.imgUrl, "\n            alt=\"\">\n        </a>\n        <div class=\"ticketCard-region\">").concat(item.area, "</div>\n        <div class=\"ticketCard-rank\">").concat(item.rate, "</div>\n      </div>\n      <div class=\"ticketCard-content\">\n        <div>\n          <h3>\n            <a href=\"#\" class=\"ticketCard-name\">").concat(item.name, "</a>\n          </h3>\n          <p class=\"ticketCard-description\">\n            ").concat(item.description, "\n          </p>\n        </div>\n        <div class=\"ticketCard-info\">\n          <p class=\"ticketCard-num\">\n            <span><i class=\"fas fa-exclamation-circle\"></i></span>\n            \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(item.group, " </span> \u7D44\n          </p>\n          <p class=\"ticketCard-price\">\n            TWD <span id=\"ticketCard-price\">$").concat(item.price, "</span>\n          </p>\n        </div>\n      </div>\n          </li>");
      resultArr.push(result);
    }
  });
  resultNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171 ".concat(resultArr.length, " \u7B46\u8CC7\u6599");
  ticketCardArea.innerHTML = result;
}); //表單輸入新增資料

var ticketName = document.querySelector(".ticketName");
var ticketImgUrl = document.querySelector(".ticketImgUrl");
var ticketRegion = document.querySelector(".ticketRegion");
var ticketDescription = document.querySelector(".ticketDescription");
var ticketNum = document.querySelector(".ticketNum");
var ticketPrice = document.querySelector(".ticketPrice");
var ticketRate = document.querySelector(".ticketRate");
var addTicket = document.querySelector(".addTicket-btn");
addTicket.addEventListener("click", function (e) {
  var obj = {};
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
});
//# sourceMappingURL=all.js.map

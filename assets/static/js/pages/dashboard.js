/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./public/assets/static/js/pages/dashboard.js ***!
  \****************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var optionsAlumniBergabung = {
  annotations: {
    position: "back"
  },
  dataLabels: {
    enabled: false
  },
  chart: {
    type: "bar",
    height: 300
  },
  fill: {
    opacity: 1
  },
  plotOptions: {},
  series: [{
    name: "bergabung",
    data: [500, 500, 1000, 1000, 3000, 5000, 10000, 17000, 20000, 20000, 25000, 30000]
  }],
  colors: "#435ebe",
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
};
var optionsProfileVisit = {
  annotations: {
    position: "back"
  },
  dataLabels: {
    enabled: false
  },
  chart: {
    type: "bar",
    height: 300
  },
  fill: {
    opacity: 1
  },
  plotOptions: {},
  series: [{
    name: "sales",
    data: [9, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20]
  }],
  colors: "#435ebe",
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
};
var optionsVisitorsProfile = {
  series: [70, 30],
  labels: ["Male", "Female"],
  colors: ["#435ebe", "#55c6e8"],
  chart: {
    type: "donut",
    width: "100%",
    height: "350px"
  },
  legend: {
    position: "bottom"
  },
  plotOptions: {
    pie: {
      donut: {
        size: "30%"
      }
    }
  }
};
var optionsEurope = {
  series: [{
    name: "series1",
    data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
  }],
  chart: {
    height: 80,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: ["#5350e9"],
  stroke: {
    width: 2
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  show: false,
  yaxis: {
    labels: {
      show: false
    }
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
var optionsAmerica = _objectSpread(_objectSpread({}, optionsEurope), {}, {
  colors: ["#008b75"]
});
var optionsIndia = _objectSpread(_objectSpread({}, optionsEurope), {}, {
  colors: ["#ffc434"]
});
var optionsIndonesia = _objectSpread(_objectSpread({}, optionsEurope), {}, {
  colors: ["#dc3545"]
});
var chartAlumniBergabung = new ApexCharts(document.querySelector("#chart-alumni-baru-bergabung"), optionsAlumniBergabung);
var chartProfileVisit = new ApexCharts(document.querySelector("#chart-profile-visit"), optionsProfileVisit);
var chartVisitorsProfile = new ApexCharts(document.getElementById("chart-visitors-profile"), optionsVisitorsProfile);
var chartEurope = new ApexCharts(document.querySelector("#chart-europe"), optionsEurope);
var chartAmerica = new ApexCharts(document.querySelector("#chart-america"), optionsAmerica);
var chartIndia = new ApexCharts(document.querySelector("#chart-india"), optionsIndia);
var chartIndonesia = new ApexCharts(document.querySelector("#chart-indonesia"), optionsIndonesia);
chartIndonesia.render();
chartAmerica.render();
chartIndia.render();
chartEurope.render();
chartProfileVisit.render();
chartVisitorsProfile.render();
chartAlumniBergabung.render();
/******/ })()
;
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./views/Home.tsx":
/*!************************!*\
  !*** ./views/Home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Item */ "./components/Item.tsx");
/* harmony import */ var _components_SortButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SortButton */ "./components/SortButton.tsx");
/* harmony import */ var _components_Welcome1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Welcome1 */ "./components/Welcome1.tsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.tsx");
/* harmony import */ var _assets_css_home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/css/home.scss */ "./assets/css/home.scss");
/* harmony import */ var _assets_css_home_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_home_scss__WEBPACK_IMPORTED_MODULE_5__);






function Home(props) {
  console.log(props);
  const showItems = [];
  let itemList = [];

  if (props.reverse) {
    itemList = props.itemDatas.router.query.itemList.reverse();
  } else {
    itemList = props.itemDatas.router.query.itemList;
  }

  itemList.map(function (item, index = 2) {
    if (props.page * 10 <= index && index <= props.page * 10 + 9) {
      showItems.push(item);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Welcome1__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SortButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    reverse: props.reverse,
    handleReverse: props.handleReverse
  }), showItems.map((itemData, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
    itemData: itemData,
    key: index
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    itemN: itemList.length,
    handleChange: props.handlePage,
    currentPage: props.page
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.2059e52180b865f22704.hot-update.js.map
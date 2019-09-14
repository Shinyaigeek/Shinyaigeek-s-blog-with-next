webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Home */ "./views/Home.tsx");






function HomePage(props) {
  const [page, handlePage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [reverse, handleReverse] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const itemList = props.router.query.itemList;
  const [items, handleItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(itemList);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u3057\u306B\u3083\u3044\u306E\u5B66\u7FD2\u5E33"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "\u3057\u306B\u3083\u3044\u306E\u30D6\u30ED\u30B0\u3002\u4E3B\u306B\u6280\u8853\u306E\u3053\u3068\u306B\u3064\u3044\u3066\u8A9E\u308A\u307E\u3059\u3002Node.js\u304C\u597D\u304D"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "\u3057\u306B\u3083\u3044"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https//www.shinyaigeek.com"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "\u3057\u306B\u3083\u3044\u306E\u5B66\u7FD2\u5E33"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: "\u3057\u306B\u3083\u3044\u306E\u30D6\u30ED\u30B0\u3002\u4E3B\u306B\u6280\u8853\u306E\u3053\u3068\u306B\u3064\u3044\u3066\u8A9E\u308A\u307E\u3059\u3002Node.js\u304C\u597D\u304D"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: "/static/icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@Shinyaigeek"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/icon.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Home__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    itemDatas: items,
    handleItems: handleItems,
    page: page,
    handlePage: handlePage,
    reverse: reverse,
    handleReverse: handleReverse
  }, props)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage)));

/***/ })

})
//# sourceMappingURL=index.js.62c89e73a62647c9728f.hot-update.js.map
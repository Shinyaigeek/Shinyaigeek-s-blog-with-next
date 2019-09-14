webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var _views_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Post */ "./views/Post.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_5__);







function ensure(argument, message = "This value was promised to always be there") {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

const fixHtml = handleShareFlag => flag => {
  const doc = ensure(document.querySelector("html"));

  if (doc) {
    if (flag) {
      doc.style.overflow = "hidden";
    } else {
      doc.style.overflow = "visible";
    }

    return handleShareFlag(flag);
  }
};

function PostPage(props) {
  const [shareFlag, handleShareFlag] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u3057\u306B\u3083\u3044\u306E\u5B66\u7FD2\u5E33\uFF5C", props.router.query.postInfo.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.router.query.postInfo.description
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
    content: "しにゃいの学習帳｜" + props.router.query.postInfo.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.router.query.postInfo.description
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
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contactFlag: props.contactFlag,
    handleContactFlag: props.handleContactFlag,
    shareFlag: shareFlag,
    handleShareFlag: fixHtml(handleShareFlag),
    router: props.router
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(PostPage)));

/***/ })

})
//# sourceMappingURL=post.js.b34bfdd617990a2c7c28.hot-update.js.map
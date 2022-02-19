/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/db/index.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/db/index.css ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.dbItemIcon {\r\n\t--length: 10rem;\r\n\twidth: var(--length);\r\n\theight: var(--length);\r\n\tmargin: 0.8em;\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n\tbackground-color: rgba(0,0,0,0.25);\r\n\tfont-weight: bold;\r\n\ttext-shadow: 0.1rem 0.1rem 0.2rem #000;\r\n\t-webkit-animation: fade-in var(--time-state) linear;\r\n\t        animation: fade-in var(--time-state) linear;\r\n\tposition: relative\r\n}\r\n\r\nbutton.dbItemIcon.ArmorVisor {\r\n\t\tbackground-size: 130%;\r\n\t\tbackground-position: center 60%;\r\n\t}\r\n\r\nbutton.dbItemIcon::before {\r\n\t\tdisplay: block;\r\n\t\tcontent: \"\";\r\n\t\t--padding: -0.5em;\r\n\t\ttop: var(--padding);\r\n\t\tleft: var(--padding);\r\n\t\tright: var(--padding);\r\n\t\tbottom: var(--padding);\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t\tposition: absolute;\r\n\t\tborder-width: 0.18em;\r\n\t\tborder-style: solid;\r\n\t\t-o-border-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\thsla(var(--theme-interact-hsl), 1),\r\n\t\t\thsla(var(--theme-interact-hsl), 1) 7%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 8%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 12%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 13%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 87%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 88%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 92%,\r\n\t\t\tvar(--rarity) 93%,\r\n\t\t\tvar(--rarity)\r\n\t\t) 1 100%;\r\n\t\t   border-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\thsla(var(--theme-interact-hsl), 1),\r\n\t\t\thsla(var(--theme-interact-hsl), 1) 7%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 8%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 12%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 13%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 87%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 88%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 92%,\r\n\t\t\tvar(--rarity) 93%,\r\n\t\t\tvar(--rarity)\r\n\t\t) 1 100%;\r\n\t\tborder-image-slice: 1;\r\n\t\topacity: 0.4;\r\n\t\ttransition: opacity var(--time-state) linear,\r\n\t\t\tborder-width var(--time-active) linear;\r\n\t}\r\n\r\nbutton.dbItemIcon::after {\r\n\t\tdisplay: block;\r\n\t\tcontent: \"\";\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n\t}\r\n\r\nbutton.dbItemIcon>span {\r\n\t\twidth: 100%;\r\n\t\topacity: 1;\r\n\t\ttransition: opacity var(--time-active) linear;\r\n\t\tfont-size: 0.9em;\r\n\t\tmargin-bottom: 0.25em;\r\n\t}\r\n\r\nbutton.dbItemIcon:hover {\r\n    background-color: rgba(255,255,255,1);\r\n\t\tcolor: #000;\r\n\t\ttext-shadow: 0 0 1rem #fff, 0 0 0.5rem #fff\r\n\t}\r\n\r\nbutton.dbItemIcon:hover::before {\r\n\t\t\tborder-width: 0.25em;\r\n\t\t}\r\n\r\nbutton.dbItemIcon:hover>span {\r\n\t\topacity: 1;\r\n\t}\r\n\r\nbutton.dbItemIcon:hover::before, button.dbItemIcon:focus::before {\r\n\t\topacity: 1;\r\n\t}\r\n\r\nbutton.dbItemIcon.invert-hover:hover {\r\n\t\tfilter: invert(1);\r\n\t\tbackground-color: #000;\r\n\t\tcolor: #fff;\r\n\t\ttext-shadow: 0 0 1rem #000, 0 0 0.5rem #000\r\n\t}\r\n\r\nbutton.dbItemIcon.invert-hover:hover::before {\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\r\nbutton.dbItemIcon .item-type-icon {\r\n\t\tposition: absolute;\r\n\t\t--typeLength: 2.3rem;\r\n\t\twidth: var(--typeLength);\r\n\t\theight: var(--typeLength);\r\n\t\ttop: -0.1rem;\r\n\t\tright: 0.5rem;\r\n\t\t-webkit-mask-size: contain;\r\n\t\t        mask-size: contain;\r\n\t\t-webkit-mask-repeat: no-repeat;\r\n\t\t        mask-repeat: no-repeat;\r\n\t\t-webkit-mask-position: center center;\r\n\t\t        mask-position: center center;\r\n\t\tbackground-size: contain;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center center;\r\n\t\toverflow: hidden;\r\n\t\tborder-radius: 0.1rem\r\n\t}\r\n\r\nbutton.dbItemIcon .item-type-icon.WeaponCoating {\r\n\t\t\ttransform: rotate(-30deg);\r\n\t\t\tbackground-color: rgb(128,128,128);\r\n\t\t}\r\n\r\nbutton.dbItemIcon .item-type-icon.ArmorCoating {\r\n\t\t\ttop: 0.3rem;\r\n\t\t\tright: 0.1rem;\r\n\t\t\t--typeLength: 1.7rem;\r\n\t\t}\r\n\r\nbutton.dbItemIcon .season-icon {\r\n\t\t--seasonLength: 1rem;\r\n\t\twidth: var(--seasonLength);\r\n\t\theight: var(--seasonLength);\r\n\t\tposition: absolute;\r\n\t\ttop: 0.2rem;\r\n\t\tleft: 0.2rem;\r\n\t\topacity: 1;\r\n\t\tbackground-color: #808080;\r\n\t\t-webkit-mask-size: contain;\r\n\t\t        mask-size: contain;\r\n\t\t-webkit-mask-repeat: no-repeat;\r\n\t\t        mask-repeat: no-repeat;\r\n\t\t-webkit-mask-position: center center;\r\n\t\t        mask-position: center center;\r\n\t\tbackground-size: contain;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center center;\r\n\t}\r\n\r\n.dbItemPanel_clickout {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0,0,0,0.5);\r\n\tcursor: pointer;\r\n\t-webkit-animation: fade-in var(--time-active) linear;\r\n\t        animation: fade-in var(--time-active) linear;\r\n}\r\n\r\n.dbItemPanel_wrapper {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\theight: 100vh;\r\n\tmax-width: 80vw;\r\n\twidth: 50em;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbackground-color: #141c27;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\tbox-shadow: -1rem 0 1rem #000;\r\n\t-webkit-animation: slide-in-right var(--time-active) linear;\r\n\t        animation: slide-in-right var(--time-active) linear;\r\n\tz-index: 99\r\n}\r\n\r\n.dbItemPanel_wrapper::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n\t\tleft: 0;\r\n    right: 0;\r\n\t\tbottom: 0;\r\n\t\tz-index: -1;\r\n    display: block;\r\n\t\tpointer-events: none;\r\n\t\tbackground: radial-gradient(circle at 0%, transparent 20%, #0f161f 60%);\r\n\t\t-webkit-mask: var(--noise), radial-gradient(circle at 0%, transparent 30%, #000 75%);\r\n\t\t        mask: var(--noise), radial-gradient(circle at 0%, transparent 30%, #000 75%);\r\n\t}\r\n\r\n.dbItemPanel_wrapper::after {\r\n\t\tcontent: \"\";\r\n\t\tposition: fixed;\r\n\t\theight: 5em;\r\n\t\twidth: 100%;\r\n\t\tbottom: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: block;\r\n\t\tpointer-events: none;\r\n\t\tbackground: linear-gradient(transparent, #0f161f 60%);\r\n\t\t-webkit-mask: var(--noise), linear-gradient(transparent, #000 80%);\r\n\t\t        mask: var(--noise), linear-gradient(transparent, #000 80%);\r\n\t}\r\n\r\n.dbItemPanel_wrapper .item-info_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: left;\r\n\t\tpadding: 0 1em;\r\n\t\tmargin-bottom: 1em\r\n\t}\r\n\r\n.dbItemPanel_wrapper .item-info_wrapper .attribute {\r\n\t\t\tfont-size: 0.8em;\r\n\t\t\tfont-weight: normal;\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper .item-info_wrapper .item-badges {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: left;\r\n\t\t\talign-items: center;\r\n\t\t\tfont-size: 0.9em;\r\n\t\t\tgap: 1em;\r\n\t\t\tmargin-bottom: 0.5em\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper .item-info_wrapper .item-badges .badge {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: row;\r\n\t\t\t\tjustify-content: left;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tgap: 0.25em\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper .item-info_wrapper .item-badges .badge .badge-icon {\r\n\t\t\t\t\t--length: 1.5em;\r\n\t\t\t\t\tmin-width: var(--length);\r\n\t\t\t\t\tmin-height: var(--length);\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t\tbackground-position: center center;\r\n\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t}\r\n\r\n.dbItemPanel_wrapper .item-info_wrapper .item-badges .badge .badge-svg {\r\n\t\t\t\t\t--length: 1.5em;\r\n\t\t\t\t\t--path: attr(data-icon);\r\n\t\t\t\t\twidth: var(--length);\r\n\t\t\t\t\theight: var(--length);\r\n\t\t\t\t\t/* background-color: #fff; */\r\n\t\t\t\t\t/* mask: url(\"assets/icons.svg#close-x\"); */\r\n\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t\tbackground-position: center center;\r\n\t\t\t\t}\r\n\r\n.dbItemPanel_wrapper .json-info_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tmargin-bottom: 1em;\r\n\t\tpadding: 0 1em\r\n\t}\r\n\r\n.dbItemPanel_wrapper .json-info_wrapper .dbItemPanel_path {\r\n\t\t\topacity: 0.5;\r\n\t\t\tpadding-bottom: 0.5em;\r\n\t\t\tfont-size: 0.7em;\r\n\t\t\tfont-weight: normal;\r\n\t\t\tfont-style: italic;\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper .dbItemPanel_json {\r\n\t\twidth: 100%;\r\n\t\tfont-size: 0.7em;\r\n\t\tline-break: anywhere;\r\n\t\toverflow-x: auto;\r\n\t\toverflow-y: auto;\r\n\t\tpadding: 0 1rem 5rem 1em;\r\n\t\tfont-family: monospace;\r\n\t\t-moz-tab-size: 1em;\r\n\t\t  -o-tab-size: 1em;\r\n\t\t     tab-size: 1em;\r\n\t\twhite-space: pre-wrap;\r\n\t\tword-break: keep-all;\r\n\t\tposition: relative;\r\n\t\tscrollbar-width: none\r\n\t}\r\n\r\n.dbItemPanel_wrapper .dbItemPanel_json::-webkit-scrollbar {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper header {\r\n\t\tmargin-bottom: 1em;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\twidth: 100%;\r\n\t\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25);\r\n\t\tbackground-color: rgba(0,0,0,0.15)\r\n\t}\r\n\r\n.dbItemPanel_wrapper header .item-img {\r\n\t\t\t--length: 9em;\r\n\t\t\tmin-width: var(--length);\r\n\t\t\tmin-height: var(--length);\r\n\t\t\tbackground-color: rgba(0,0,0,0.66);\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-position: center center;\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper header h2 {\r\n\t\t\tfont-size: 1.25em;\r\n\t\t\tpadding-top: 1rem;\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper header h3 {\r\n\t\t\tfont-size: 0.8em;\r\n\t\t\tfont-weight: normal;\r\n\t\t\tfont-style: italic;\r\n\t\t\topacity: 0.75;\r\n\t\t\tpadding-right: 0.5em;\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper header .dbItemPanel_titles {\r\n\t\t\t--rarity: var(--rarity-common);\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding-left: 1em;\r\n\t\t\tborder-left: 0.2rem solid var(--rarity-common);\r\n\t\t\ttransition: border-color var(--time-state) linear;\r\n\t\t\tposition: relative\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper header .dbItemPanel_titles::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tz-index: -1;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t\tbackground: linear-gradient(175deg, var(--rarity), rgba(0,0,0,0) 40%);\r\n\t\t\t\t-webkit-mask: var(--noise), linear-gradient(175deg, #000 10%, transparent 35%);\r\n\t\t\t\t        mask: var(--noise), linear-gradient(175deg, #000 10%, transparent 35%);\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper header .dbItemPanel_titles.legendary {\r\n\t\t\t\t--rarity: var(--rarity-legendary);\r\n\t\t\t\tborder-left: 0.2rem solid var(--rarity);\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper header .dbItemPanel_titles.epic {\r\n\t\t\t\t--rarity: var(--rarity-epic);\r\n\t\t\t\tborder-left: 0.2rem solid var(--rarity-epic);\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper header .dbItemPanel_titles.rare {\r\n\t\t\t\t--rarity: var(--rarity-rare);\r\n\t\t\t\tborder-left: 0.2rem solid var(--rarity-rare);\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper header .favorite {\r\n\t\t\t--length: 2rem;\r\n\t\t\theight: var(--length);\r\n\t\t\twidth: var(--length);\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0.5rem;\r\n\t\t\ttop: 0.5rem;\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-position: center center\r\n\t\t}\r\n\r\n.dbItemPanel_wrapper header .favorite:hover {\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tbackground-color: transparent;\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper header .favorite::before {\r\n\t\t\t\tborder-width: 0;\r\n\t\t\t}\r\n\r\n.dbItemPanel_wrapper .parentSocket {\r\n\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\tpadding: 0 0.2em;\r\n\t\tmargin: 0 0.2em;\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t}", "",{"version":3,"sources":["webpack://./src/db/index.css"],"names":[],"mappings":"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","sourcesContent":["button.dbItemIcon {\r\n\t--length: 10rem;\r\n\twidth: var(--length);\r\n\theight: var(--length);\r\n\tmargin: 0.8em;\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n\tbackground-color: rgba(0,0,0,0.25);\r\n\tfont-weight: bold;\r\n\ttext-shadow: 0.1rem 0.1rem 0.2rem #000;\r\n\tanimation: fade-in var(--time-state) linear;\r\n\tposition: relative;\r\n\t&.ArmorVisor {\r\n\t\tbackground-size: 130%;\r\n\t\tbackground-position: center 60%;\r\n\t}\r\n\t&::before {\r\n\t\tdisplay: block;\r\n\t\tcontent: \"\";\r\n\t\t--padding: -0.5em;\r\n\t\ttop: var(--padding);\r\n\t\tleft: var(--padding);\r\n\t\tright: var(--padding);\r\n\t\tbottom: var(--padding);\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t\tposition: absolute;\r\n\t\tborder-width: 0.18em;\r\n\t\tborder-style: solid;\r\n\t\tborder-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\thsla(var(--theme-interact-hsl), 1),\r\n\t\t\thsla(var(--theme-interact-hsl), 1) 7%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 8%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 12%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 13%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 87%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 88%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 92%,\r\n\t\t\tvar(--rarity) 93%,\r\n\t\t\tvar(--rarity)\r\n\t\t) 1 100%;\r\n\t\tborder-image-slice: 1;\r\n\t\topacity: 0.4;\r\n\t\ttransition: opacity var(--time-state) linear,\r\n\t\t\tborder-width var(--time-active) linear;\r\n\t}\r\n\t&::after {\r\n\t\tdisplay: block;\r\n\t\tcontent: \"\";\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n\t}\r\n\t&>span {\r\n\t\twidth: 100%;\r\n\t\topacity: 1;\r\n\t\ttransition: opacity var(--time-active) linear;\r\n\t\tfont-size: 0.9em;\r\n\t\tmargin-bottom: 0.25em;\r\n\t}\r\n\t&:hover {\r\n    background-color: rgba(255,255,255,1);\r\n\t\tcolor: #000;\r\n\t\ttext-shadow: 0 0 1rem #fff, 0 0 0.5rem #fff;\r\n\t\t&::before {\r\n\t\t\tborder-width: 0.25em;\r\n\t\t}\r\n\t}\r\n\t&:hover>span {\r\n\t\topacity: 1;\r\n\t}\r\n\t&:hover::before, &:focus::before {\r\n\t\topacity: 1;\r\n\t}\r\n\t&.invert-hover:hover {\r\n\t\tfilter: invert(1);\r\n\t\tbackground-color: #000;\r\n\t\tcolor: #fff;\r\n\t\ttext-shadow: 0 0 1rem #000, 0 0 0.5rem #000;\r\n\t\t&::before {\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\t}\r\n\t& .item-type-icon {\r\n\t\tposition: absolute;\r\n\t\t--typeLength: 2.3rem;\r\n\t\twidth: var(--typeLength);\r\n\t\theight: var(--typeLength);\r\n\t\ttop: -0.1rem;\r\n\t\tright: 0.5rem;\r\n\t\tmask-size: contain;\r\n\t\tmask-repeat: no-repeat;\r\n\t\tmask-position: center center;\r\n\t\tbackground-size: contain;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center center;\r\n\t\toverflow: hidden;\r\n\t\tborder-radius: 0.1rem;\r\n\t\t&.WeaponCoating {\r\n\t\t\ttransform: rotate(-30deg);\r\n\t\t\tbackground-color: rgb(128,128,128);\r\n\t\t}\r\n\t\t&.ArmorCoating {\r\n\t\t\ttop: 0.3rem;\r\n\t\t\tright: 0.1rem;\r\n\t\t\t--typeLength: 1.7rem;\r\n\t\t}\r\n\t}\r\n\t& .season-icon {\r\n\t\t--seasonLength: 1rem;\r\n\t\twidth: var(--seasonLength);\r\n\t\theight: var(--seasonLength);\r\n\t\tposition: absolute;\r\n\t\ttop: 0.2rem;\r\n\t\tleft: 0.2rem;\r\n\t\topacity: 1;\r\n\t\tbackground-color: #808080;\r\n\t\tmask-size: contain;\r\n\t\tmask-repeat: no-repeat;\r\n\t\tmask-position: center center;\r\n\t\tbackground-size: contain;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center center;\r\n\t}\r\n}\r\n\r\n.dbItemPanel_clickout {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0,0,0,0.5);\r\n\tcursor: pointer;\r\n\tanimation: fade-in var(--time-active) linear;\r\n}\r\n\r\n.dbItemPanel_wrapper {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\theight: 100vh;\r\n\tmax-width: 80vw;\r\n\twidth: 50em;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbackground-color: #141c27;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\tbox-shadow: -1rem 0 1rem #000;\r\n\tanimation: slide-in-right var(--time-active) linear;\r\n\tz-index: 99;\r\n\t&::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n\t\tleft: 0;\r\n    right: 0;\r\n\t\tbottom: 0;\r\n\t\tz-index: -1;\r\n    display: block;\r\n\t\tpointer-events: none;\r\n\t\tbackground: radial-gradient(circle at 0%, transparent 20%, #0f161f 60%);\r\n\t\tmask: var(--noise), radial-gradient(circle at 0%, transparent 30%, #000 75%);\r\n\t}\r\n\t&::after {\r\n\t\tcontent: \"\";\r\n\t\tposition: fixed;\r\n\t\theight: 5em;\r\n\t\twidth: 100%;\r\n\t\tbottom: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: block;\r\n\t\tpointer-events: none;\r\n\t\tbackground: linear-gradient(transparent, #0f161f 60%);\r\n\t\tmask: var(--noise), linear-gradient(transparent, #000 80%);\r\n\t}\r\n\t& .item-info_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: left;\r\n\t\tpadding: 0 1em;\r\n\t\tmargin-bottom: 1em;\r\n\t\t& .attribute {\r\n\t\t\tfont-size: 0.8em;\r\n\t\t\tfont-weight: normal;\r\n\t\t}\r\n\t\t& .item-badges {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: left;\r\n\t\t\talign-items: center;\r\n\t\t\tfont-size: 0.9em;\r\n\t\t\tgap: 1em;\r\n\t\t\tmargin-bottom: 0.5em;\r\n\t\t\t& .badge {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: row;\r\n\t\t\t\tjustify-content: left;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tgap: 0.25em;\r\n\t\t\t\t& .badge-icon {\r\n\t\t\t\t\t--length: 1.5em;\r\n\t\t\t\t\tmin-width: var(--length);\r\n\t\t\t\t\tmin-height: var(--length);\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t\tbackground-position: center center;\r\n\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t}\r\n\t\t\t\t& .badge-svg {\r\n\t\t\t\t\t--length: 1.5em;\r\n\t\t\t\t\t--path: attr(data-icon);\r\n\t\t\t\t\twidth: var(--length);\r\n\t\t\t\t\theight: var(--length);\r\n\t\t\t\t\t/* background-color: #fff; */\r\n\t\t\t\t\t/* mask: url(\"assets/icons.svg#close-x\"); */\r\n\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t\tbackground-position: center center;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t& .json-info_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tmargin-bottom: 1em;\r\n\t\tpadding: 0 1em;\r\n\t\t& .dbItemPanel_path {\r\n\t\t\topacity: 0.5;\r\n\t\t\tpadding-bottom: 0.5em;\r\n\t\t\tfont-size: 0.7em;\r\n\t\t\tfont-weight: normal;\r\n\t\t\tfont-style: italic;\r\n\t\t}\r\n\t}\r\n\t& .dbItemPanel_json {\r\n\t\twidth: 100%;\r\n\t\tfont-size: 0.7em;\r\n\t\tline-break: anywhere;\r\n\t\toverflow-x: auto;\r\n\t\toverflow-y: auto;\r\n\t\tpadding: 0 1rem 5rem 1em;\r\n\t\tfont-family: monospace;\r\n\t\ttab-size: 1em;\r\n\t\twhite-space: pre-wrap;\r\n\t\tword-break: keep-all;\r\n\t\tposition: relative;\r\n\t\tscrollbar-width: none;\r\n\t\t&::-webkit-scrollbar {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t& header {\r\n\t\tmargin-bottom: 1em;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\twidth: 100%;\r\n\t\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25);\r\n\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\t& .item-img {\r\n\t\t\t--length: 9em;\r\n\t\t\tmin-width: var(--length);\r\n\t\t\tmin-height: var(--length);\r\n\t\t\tbackground-color: rgba(0,0,0,0.66);\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-position: center center;\r\n\t\t}\r\n\t\t& h2 {\r\n\t\t\tfont-size: 1.25em;\r\n\t\t\tpadding-top: 1rem;\r\n\t\t}\r\n\t\t& h3 {\r\n\t\t\tfont-size: 0.8em;\r\n\t\t\tfont-weight: normal;\r\n\t\t\tfont-style: italic;\r\n\t\t\topacity: 0.75;\r\n\t\t\tpadding-right: 0.5em;\r\n\t\t}\r\n\t\t& .dbItemPanel_titles {\r\n\t\t\t--rarity: var(--rarity-common);\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding-left: 1em;\r\n\t\t\tborder-left: 0.2rem solid var(--rarity-common);\r\n\t\t\ttransition: border-color var(--time-state) linear;\r\n\t\t\tposition: relative;\r\n\t\t\t&::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tz-index: -1;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t\tbackground: linear-gradient(175deg, var(--rarity), rgba(0,0,0,0) 40%);\r\n\t\t\t\tmask: var(--noise), linear-gradient(175deg, #000 10%, transparent 35%);\r\n\t\t\t}\r\n\t\t\t&.legendary {\r\n\t\t\t\t--rarity: var(--rarity-legendary);\r\n\t\t\t\tborder-left: 0.2rem solid var(--rarity);\r\n\t\t\t}\r\n\t\t\t&.epic {\r\n\t\t\t\t--rarity: var(--rarity-epic);\r\n\t\t\t\tborder-left: 0.2rem solid var(--rarity-epic);\r\n\t\t\t}\r\n\t\t\t&.rare {\r\n\t\t\t\t--rarity: var(--rarity-rare);\r\n\t\t\t\tborder-left: 0.2rem solid var(--rarity-rare);\r\n\t\t\t}\r\n\t\t}\r\n\t\t& .favorite {\r\n\t\t\t--length: 2rem;\r\n\t\t\theight: var(--length);\r\n\t\t\twidth: var(--length);\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0.5rem;\r\n\t\t\ttop: 0.5rem;\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-position: center center;\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tbackground-color: transparent;\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\tborder-width: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t& .parentSocket {\r\n\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\tpadding: 0 0.2em;\r\n\t\tmargin: 0 0.2em;\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.css ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,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 */ "data:image/png;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--app-size: 1rem;\r\n\t--app-font-size: 1rem;\r\n\tfont-size: 1rem;\r\n\tfont-size: var(--app-size);\r\n\r\n\t--theme-fonts: 'Titillium Web', \"Noto Sans\", \"Roboto\", \"system-ui\", \"system\", sans-serif;\r\n\r\n\t--base-bright: #d6dbdc;\t\t--base-bright-hsl: 186, 8%, 85%;\r\n\t--base-light: #839496;\t\t--base-light-hsl: 186, 8%, 55%;\r\n\t--base-dark: #404040;\t\t--base-dark-hsl: 0, 0%, 25%;\r\n\t--base-darkish: #333333;\t--base-darkish-hsl: 0, 0%, 21%;\r\n\t--base-darker: #04202a;\t\t--base-darker-hsl: 195, 82%, 9%;\r\n\t--base-yellow: #f1c40e;\t\t--base-yellow-hsl: 48, 89%, 50%;\r\n\t--base-orange: #cb4b16;\t\t--base-orange-hsl: 18, 80%, 44%;\r\n\t--base-red: #dc322f;\t\t--base-red-hsl: 1, 71%, 52%;\r\n\t--base-magenta: #d33682;\t--base-magenta-hsl: 331, 64%, 52%;\r\n\t--base-violet: #6c71c4;\t\t--base-violet-hsl: 237, 43%, 60%;\r\n\t--base-cyan: #45a7b9;\t\t--base-cyan-hsl: 189, 46%, 50%;\r\n\t--base-blue: #2e8dcd;\t\t--base-blue-hsl: 204, 63%, 49%;\r\n\t--base-green: #2ecc71;\t--base-green-hsl: 145, 63%, 49%;\r\n\t--base-white: #fff;\t\t\t--base-white-hsl: 0, 0%, 100%;\r\n\r\n\t--time-state: 0.2s;\r\n\t--time-active: 0.1s;\r\n\t--time-pulse: 1s;\r\n\r\n\t--time-hold-short: 1000ms;\r\n\t--time-hold-long: 5000ms;\r\n\r\n\t--theme-shadow: 0 0.5rem 0.75rem -0.75rem rgba(0, 0, 0, 0.5);\r\n\t--theme-shadow-hover: 0 1rem 0.75rem -1rem rgba(0, 0, 0, 0.75);\r\n\t--theme-shadow-right: 0.5rem 0rem 0.75rem -0.75rem rgba(0, 0, 0, 0.75);\r\n\t--theme-shadow-right-hover: 1rem 0rem 0.75rem -1rem rgba(0, 0, 0, 0.75);\r\n\t--theme-shadow-cover: 0 0.5rem 1.75rem -0.25rem rgba(0, 0, 0, 0.5);\r\n\r\n\t--theme-border-radius: 0.2em; --theme-radius: 0.25em;\r\n\t--theme-border: 0.1rem solid hsla(var(--theme-accent-hsl), 0.75);\r\n\r\n\t--theme-padding: 0.25em; --theme-padding-double: 0.5em; --theme-padding-thin: 0.15em;\r\n\r\n\t/*Dark Theme*/\r\n\t--theme-primary: var(--base-dark);\t\t--theme-primary-hsl: var(--base-dark-hsl);\r\n\t--theme-secondary: var(--base-darkish);\t--theme-secondary-hsl: var(--base-darkish-hsl);\r\n\t--theme-accent: #102150;\t\t--theme-accent-hsl: 224, 67%, 19%;\r\n\t--theme-text: var(--base-bright);\t\t--theme-text-hsl: var(--base-bright-hsl);\r\n\t--theme-interact: var(--base-white);\t--theme-interact-hsl: var(--base-white-hsl);\r\n\t--theme-active: var(--base-blue);\t\t--theme-active-hsl: var(--base-blue-hsl);\r\n\t--theme-error: var(--base-red);\t\t\t--theme-error-hsl: var(--base-red-hsl);\r\n\t--theme-blank: #000;\r\n\r\n\t--rarity-legendary: #a6701b;\r\n\t--rarity-epic: #5948b0;\r\n\t--rarity-rare: #2a71a7;\r\n\t--rarity-common: #808080;\r\n\t--rarity-event: #f15d22;\r\n\r\n\t--noise: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\r\n\t/*Light Theme*/\r\n\t/*--theme-primary: #fff;\t\t\t\t--theme-primary-hsl: 360, 100%, 100%;\r\n\t--theme-secondary: hsl(0, 0%, 95%);\t\t\t\t--theme-secondary-hsl: 0, 0%, 95%;\r\n\t--theme-accent: #000;\t\t\t\t\t--theme-accent-hsl: 0, 0%, 0%;\r\n\t--theme-text: #1a1a1a;\t\t\t\t\t--theme-text-hsl: 0, 0%, 10%;\r\n\t--theme-interact: var(--base-green);\t\t--theme-interact-hsl: var(--base-green-hsl);\r\n\t--theme-active: var(--base-blue);\t\t\t--theme-active-hsl: var(--base-blue-hsl);*/\r\n}\r\n\r\nhtml {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: inherit;\r\n\tfont-family: 'Titillium Web', \"Noto Sans\", \"Roboto\", \"system-ui\", \"system\", sans-serif;\r\n\tfont-family: var(--theme-fonts);\r\n}\r\n\r\nbody {\r\n\tfont-size: 12pt;\r\n\tfont-size: 1rem;\r\n\tfont-size: var(--app-font-size);\r\n\tcolor: #ccc;\r\n\tfont-family: \"Noto Sans\", \"Roboto\", \"system-ui\", \"system\", sans-serif;\r\n\tmin-height: 100%\r\n}\r\n\r\nbody::before, body::after {\r\n    content: \"\";\r\n    position: fixed;\r\n    top: 0;\r\n\t\tleft: 0;\r\n    right: 0;\r\n\t\tbottom: 0;\r\n\t\tz-index: -1;\r\n    display: block;\r\n\t\tpointer-events: none;\r\n  }\r\n\r\nbody::before {\r\n\t\tbackground: radial-gradient(circle at 66%, transparent 30%, #0f161f 60%);\r\n\t\t-webkit-mask: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(circle at 66%, transparent 40%, #000 75%);\r\n\t\t        mask: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(circle at 66%, transparent 40%, #000 75%);\r\n\t\t-webkit-mask: var(--noise), radial-gradient(circle at 66%, transparent 40%, #000 75%);\r\n\t\t        mask: var(--noise), radial-gradient(circle at 66%, transparent 40%, #000 75%);\r\n\t}\r\n\r\nbody::after {\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), linear-gradient(-80deg, #000 0%, transparent 25%, transparent 75%, #000 100%);\r\n            mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), linear-gradient(-80deg, #000 0%, transparent 25%, transparent 75%, #000 100%);\r\n    -webkit-mask-image: var(--noise), linear-gradient(-80deg, #000 0%, transparent 25%, transparent 75%, #000 100%);\r\n            mask-image: var(--noise), linear-gradient(-80deg, #000 0%, transparent 25%, transparent 75%, #000 100%);\r\n    background: linear-gradient(-80deg, rgba(16,33,80,0.66) 20%, transparent 45%, transparent 75%, rgb(40,49,64) 90%);\r\n  }\r\n\r\nfooter {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 2em;\r\n\topacity: 0.5;\r\n\tfont-size: 0.8em\r\n}\r\n\r\nfooter a {\r\n\t\ttext-decoration: none;\r\n\t}\r\n\r\nfooter span {\r\n\t\tpadding-left: 0.33em;\r\n\t}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n\tz-index: 1;\r\n}\r\n\r\na:not([class]), .parentSocket {\r\n\tfont-size: 1em;\r\n\tcolor: #d6dbdc;\r\n\tcolor: var(--theme-text);\r\n\ttext-underline-offset: 0.15em;\r\n\t-webkit-text-decoration-skip: ink;\r\n\t        text-decoration-skip-ink: auto;\r\n\t-webkit-text-decoration-color: hsla(0, 0%, 100%, 0.5);\r\n\t        text-decoration-color: hsla(0, 0%, 100%, 0.5);\r\n\t-webkit-text-decoration-color: hsla(var(--theme-interact-hsl), 0.5);\r\n\t        text-decoration-color: hsla(var(--theme-interact-hsl), 0.5);\r\n\ttransition: -webkit-text-decoration-color 0.2s linear;\r\n\ttransition: text-decoration-color 0.2s linear;\r\n\ttransition: text-decoration-color 0.2s linear, -webkit-text-decoration-color 0.2s linear;\r\n\ttransition: -webkit-text-decoration-color var(--time-state) linear;\r\n\ttransition: text-decoration-color var(--time-state) linear;\r\n\ttransition: text-decoration-color var(--time-state) linear, -webkit-text-decoration-color var(--time-state) linear\r\n}\r\n\r\n:is(a:not([class]),.parentSocket):hover {\r\n\t\t-webkit-text-decoration-color: hsla(0, 0%, 100%, 1);\r\n\t\t        text-decoration-color: hsla(0, 0%, 100%, 1);\r\n\t\t-webkit-text-decoration-color: hsla(var(--theme-interact-hsl), 1);\r\n\t\t        text-decoration-color: hsla(var(--theme-interact-hsl), 1);\r\n\t}\r\n\r\n:is(a:not([class]),.parentSocket):focus {\r\n\t\toutline: 0.1em solid hsla(0, 0%, 100%, 0.5);\r\n\t\toutline: 0.1em solid hsla(var(--theme-interact-hsl), 0.5);\r\n\t\toutline-offset: 0.15em;\r\n\t}\r\n\r\n@-webkit-keyframes slide-in-right {\r\n\t0% {\r\n\t\ttransform: translateX(100%);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n@keyframes slide-in-right {\r\n\t0% {\r\n\t\ttransform: translateX(100%);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes slide-in-top-bottom {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n@keyframes slide-in-top-bottom {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes slide-in-top-bottom-events {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t\tpointer-events: none;\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t\tpointer-events: none;\r\n\t}\r\n}\r\n\r\n@keyframes slide-in-top-bottom-events {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t\tpointer-events: none;\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t\tpointer-events: none;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes pop-up {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(1.1);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n\r\n@keyframes pop-up {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(1.1);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes scale-in {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t\tpointer-events: none;\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t\tpointer-events: none;\r\n\t}\r\n}\r\n\r\n@keyframes scale-in {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t\tpointer-events: none;\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t\tpointer-events: none;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\nbutton {\r\n\t--rarity: rgba(255,255,255,0.25);\r\n\tposition: relative;\r\n\t-webkit-appearance: none;\r\n\t   -moz-appearance: none;\r\n\t        appearance: none;\r\n\twidth: -webkit-fit-content;\r\n\twidth: -moz-fit-content;\r\n\twidth: fit-content;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder-radius: 0.2em;\r\n\tborder-radius: var(--theme-border-radius);\r\n\tpadding: 0.25em 0.5em;\r\n\tpadding: var(--theme-padding) var(--theme-padding-double);\r\n\tmargin: 0.25em 0;\r\n\tmargin: var(--theme-padding) 0;\r\n\tbackground-color: transparent;\r\n\tcolor: #d6dbdc;\r\n\tcolor: var(--theme-text);\r\n\tcursor: pointer;\r\n\tfont-family: 'Titillium Web', \"Noto Sans\", \"Roboto\", \"system-ui\", \"system\", sans-serif;\r\n\tfont-family: var(--theme-fonts);\r\n\tfont-size: 1em;\r\n\tfont-weight: light;\r\n\toverflow: visible;\r\n\tborder: none;\r\n\tmargin: 0.2em;\r\n\ttransition: color 0.2s linear,\r\n\t\tbackground 0.2s linear,\r\n\t\ttext-shadow 0.1s linear;\r\n\ttransition: color var(--time-state) linear,\r\n\t\tbackground var(--time-state) linear,\r\n\t\ttext-shadow var(--time-active) linear\r\n}\r\n\r\nbutton.rare {\r\n\t\t--rarity: var(--rarity-rare);\r\n\t}\r\n\r\nbutton.epic {\r\n\t\t--rarity: var(--rarity-epic);\r\n\t}\r\n\r\nbutton.legendary {\r\n\t\t--rarity: var(--rarity-legendary);\r\n\t}\r\n\r\nbutton:hover {\r\n\t\tcolor: #000;\r\n\t\tbackground-color: hsla(0, 0%, 100%, 1);\r\n\t\tbackground-color: hsla(var(--theme-interact-hsl), 1);\r\n\t}\r\n\r\n.mica_viewer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(0,0,0,0.15);\r\n\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25);\r\n\tmargin-bottom: 6rem\r\n}\r\n\r\n.mica_viewer .mica_header-strip {\r\n\t\tdisplay: flex;\r\n\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\tpadding: 1em;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap\r\n\t}\r\n\r\n.mica_viewer .mica_header-strip .mica_header-anchor {\r\n\t\t\topacity: 0.8;\r\n\t\t\tcolor: #d6dbdc;\r\n\t\t\tcolor: var(--theme-text);\r\n\t\t\ttext-decoration: none;\r\n\t\t\t-webkit-text-decoration-color: transparent;\r\n\t\t\t        text-decoration-color: transparent;\r\n\t\t\ttransition: opacity 0.2s linear,\r\n\t\t\t\t-webkit-text-decoration-color 0.2s linear;\r\n\t\t\ttransition: text-decoration-color 0.2s linear,\r\n\t\t\t\topacity 0.2s linear;\r\n\t\t\ttransition: text-decoration-color 0.2s linear,\r\n\t\t\t\topacity 0.2s linear,\r\n\t\t\t\t-webkit-text-decoration-color 0.2s linear;\r\n\t\t\ttransition: opacity var(--time-state) linear,\r\n\t\t\t\t-webkit-text-decoration-color var(--time-state) linear;\r\n\t\t\ttransition: text-decoration-color var(--time-state) linear,\r\n\t\t\t\topacity var(--time-state) linear;\r\n\t\t\ttransition: text-decoration-color var(--time-state) linear,\r\n\t\t\t\topacity var(--time-state) linear,\r\n\t\t\t\t-webkit-text-decoration-color var(--time-state) linear\r\n\t\t}\r\n\r\n.mica_viewer .mica_header-strip .mica_header-anchor:hover, .mica_viewer .mica_header-strip .mica_header-anchor:focus {\r\n\t\t\t\topacity: 1;\r\n\t\t\t\ttext-decoration: underline;\r\n\t\t\t\ttext-underline-offset: 0.15em;\r\n\t\t\t\t-webkit-text-decoration-skip: ink;\r\n\t\t\t\t        text-decoration-skip-ink: auto;\r\n\t\t\t\t-webkit-text-decoration-color: hsla(0, 0%, 100%, 0.5);\r\n\t\t\t\t        text-decoration-color: hsla(0, 0%, 100%, 0.5);\r\n\t\t\t\t-webkit-text-decoration-color: hsla(var(--theme-interact-hsl), 0.5);\r\n\t\t\t\t        text-decoration-color: hsla(var(--theme-interact-hsl), 0.5);\r\n\t\t\t\ttransition: -webkit-text-decoration-color 0.2s linear;\r\n\t\t\t\ttransition: text-decoration-color 0.2s linear;\r\n\t\t\t\ttransition: text-decoration-color 0.2s linear, -webkit-text-decoration-color 0.2s linear;\r\n\t\t\t\ttransition: -webkit-text-decoration-color var(--time-state) linear;\r\n\t\t\t\ttransition: text-decoration-color var(--time-state) linear;\r\n\t\t\t\ttransition: text-decoration-color var(--time-state) linear, -webkit-text-decoration-color var(--time-state) linear;\r\n\t\t\t}\r\n\r\n.mica_viewer .mica_header-strip .mica_header-anchor h2 {\r\n\t\t\t\tfont-size: 1.3rem;\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t}\r\n\r\n.mica_viewer .mica_nav-list {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tmin-height: 100%;\r\n\t\tmax-height: 100%;\r\n\t\tscrollbar-width: none;\r\n\t\tpadding: 1em;\r\n\t\tbackground-color: rgba(0,0,0,0.15)\r\n\t}\r\n\r\n.mica_viewer .mica_nav-list::-webkit-scrollbar {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n.mica_viewer .mica_nav-list button {\r\n\t\t\tdisplay: flex;\r\n\t\t\twidth: 9.5em;\r\n\t\t\toverflow: hidden;\r\n\t\t\twhite-space: nowrap;\r\n\t\t\tfont-size: 0.9em\r\n\t\t}\r\n\r\n.mica_viewer .mica_nav-list button.active {\r\n\t\t\t\tbackground-color: hsla(0, 0%, 100%, 0.1);\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1)\r\n\t\t\t}\r\n\r\n.mica_viewer .mica_nav-list button.active:hover {\r\n\t\t\t\t\tbackground-color: hsla(0, 0%, 100%, 1);\r\n\t\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 1);\r\n\t\t\t\t}\r\n\r\n.mica_viewer .mica_nav-list button span {\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tword-wrap: break-word;\r\n\t\t\t\tword-wrap: break-word;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t}\r\n\r\n.mica_viewer .mica_main-content {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: no-wrap;\r\n\t\twidth: 100%;\r\n\t}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,qBAAqB;CACrB,eAA0B;CAA1B,0BAA0B;;CAE1B,wFAAwF;;CAExF,sBAAsB,GAAG,+BAA+B;CACxD,qBAAqB,GAAG,8BAA8B;CACtD,oBAAoB,GAAG,2BAA2B;CAClD,uBAAuB,EAAE,8BAA8B;CACvD,sBAAsB,GAAG,+BAA+B;CACxD,sBAAsB,GAAG,+BAA+B;CACxD,sBAAsB,GAAG,+BAA+B;CACxD,mBAAmB,GAAG,2BAA2B;CACjD,uBAAuB,EAAE,iCAAiC;CAC1D,sBAAsB,GAAG,gCAAgC;CACzD,oBAAoB,GAAG,8BAA8B;CACrD,oBAAoB,GAAG,8BAA8B;CACrD,qBAAqB,EAAE,+BAA+B;CACtD,kBAAkB,IAAI,6BAA6B;;CAEnD,kBAAkB;CAClB,mBAAmB;CACnB,gBAAgB;;CAEhB,yBAAyB;CACzB,wBAAwB;;CAExB,4DAA4D;CAC5D,8DAA8D;CAC9D,sEAAsE;CACtE,uEAAuE;CACvE,kEAAkE;;CAElE,4BAA4B,EAAE,sBAAsB;CACpD,gEAAgE;;CAEhE,uBAAuB,EAAE,6BAA6B,EAAE,4BAA4B;;CAEpF,aAAa;CACb,iCAAiC,GAAG,yCAAyC;CAC7E,sCAAsC,EAAE,8CAA8C;CACtF,uBAAuB,GAAG,iCAAiC;CAC3D,gCAAgC,GAAG,wCAAwC;CAC3E,mCAAmC,EAAE,2CAA2C;CAChF,gCAAgC,GAAG,wCAAwC;CAC3E,8BAA8B,IAAI,sCAAsC;CACxE,mBAAmB;;CAEnB,2BAA2B;CAC3B,sBAAsB;CACtB,sBAAsB;CACtB,wBAAwB;CACxB,uBAAuB;;CAEvB,gDAAktI;;CAEltI,cAAc;CACd;;;;;+EAK8E;AAC/E;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,mBAAmB;CACnB,sFAA+B;CAA/B,+BAA+B;AAChC;;AAEA;CACC,eAAe;CACf,eAA+B;CAA/B,+BAA+B;CAC/B,WAAW;CACX,qEAAqE;CACrE;AAqBD;;AApBC;IACG,WAAW;IACX,eAAe;IACf,MAAM;EACR,OAAO;IACL,QAAQ;EACV,SAAS;EACT,WAAW;IACT,cAAc;EAChB,oBAAoB;EACpB;;AACD;EACC,wEAAwE;EACxE,gHAA6E;UAA7E,wGAA6E;EAA7E,qFAA6E;UAA7E,6EAA6E;CAC9E;;AAEC;IACE,0IAAuG;YAAvG,kIAAuG;IAAvG,+GAAuG;YAAvG,uGAAuG;IACvG,iHAAiH;EACnH;;AAGF;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,YAAY;CACZ;AAOD;;AANC;EACC,qBAAqB;CACtB;;AACA;EACC,oBAAoB;CACrB;;AAGD;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,UAAU;AACX;;AAEA;CACC,cAAc;CACd,cAAwB;CAAxB,wBAAwB;CACxB,6BAA6B;CAC7B,iCAA8B;SAA9B,8BAA8B;CAC9B,qDAA2D;SAA3D,6CAA2D;CAA3D,mEAA2D;SAA3D,2DAA2D;CAC3D,qDAA0D;CAA1D,6CAA0D;CAA1D,wFAA0D;CAA1D,kEAA0D;CAA1D,0DAA0D;CAA1D;AAQD;;AAPC;EACC,mDAAyD;UAAzD,2CAAyD;EAAzD,iEAAyD;UAAzD,yDAAyD;CAC1D;;AACA;EACC,2CAAyD;EAAzD,yDAAyD;EACzD,sBAAsB;CACvB;;AAGD;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,yBAAyB;CAC1B;AACD;;AAPA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,yBAAyB;CAC1B;AACD;;AAEA;CACC;EACC,4BAA4B;CAC7B;CACA;EACC,yBAAyB;CAC1B;AACD;;AAPA;CACC;EACC,4BAA4B;CAC7B;CACA;EACC,yBAAyB;CAC1B;AACD;;AAEA;CACC;EACC,4BAA4B;EAC5B,oBAAoB;CACrB;CACA;EACC,yBAAyB;EACzB,oBAAoB;CACrB;AACD;;AATA;CACC;EACC,4BAA4B;EAC5B,oBAAoB;CACrB;CACA;EACC,yBAAyB;EACzB,oBAAoB;CACrB;AACD;;AAEA;CACC;EACC,mBAAmB;CACpB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,mBAAmB;CACpB;AACD;;AAVA;CACC;EACC,mBAAmB;CACpB;CACA;EACC,qBAAqB;CACtB;CACA;EACC,mBAAmB;CACpB;AACD;;AAEA;CACC;EACC,mBAAmB;EACnB,oBAAoB;CACrB;CACA;EACC,mBAAmB;EACnB,oBAAoB;CACrB;AACD;;AATA;CACC;EACC,mBAAmB;EACnB,oBAAoB;CACrB;CACA;EACC,mBAAmB;EACnB,oBAAoB;CACrB;AACD;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,UAAU;CACX;AACD;;AAPA;CACC;EACC,UAAU;CACX;CACA;EACC,UAAU;CACX;AACD;;AAEA;CACC,gCAAgC;CAChC,kBAAkB;CAClB,wBAAgB;IAAhB,qBAAgB;SAAhB,gBAAgB;CAChB,0BAAkB;CAAlB,uBAAkB;CAAlB,kBAAkB;CAClB,aAAa;CACb,mBAAmB;CACnB,oBAAyC;CAAzC,yCAAyC;CACzC,qBAAyD;CAAzD,yDAAyD;CACzD,gBAA8B;CAA9B,8BAA8B;CAC9B,6BAA6B;CAC7B,cAAwB;CAAxB,wBAAwB;CACxB,eAAe;CACf,sFAA+B;CAA/B,+BAA+B;CAC/B,cAAc;CACd,kBAAkB;CAClB,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb;;yBAEsC;CAFtC;;;AAgBD;;AAbC;EACC,4BAA4B;CAC7B;;AACA;EACC,4BAA4B;CAC7B;;AACA;EACC,iCAAiC;CAClC;;AACA;EACC,WAAW;EACX,sCAAoD;EAApD,oDAAoD;CACrD;;AAGD;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,kCAAkC;CAClC,wCAAwC;CACxC;AAoED;;AAnEC;EACC,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB;CAqBD;;AApBC;GACC,YAAY;GACZ,cAAwB;GAAxB,wBAAwB;GACxB,qBAAqB;GACrB,0CAAkC;WAAlC,kCAAkC;GAClC;6CACiC;GADjC;uBACiC;GADjC;;6CACiC;GADjC;0DACiC;GADjC;oCACiC;GADjC;;;EAcD;;AAZC;IACC,UAAU;IACV,0BAA0B;IAC1B,6BAA6B;IAC7B,iCAA8B;YAA9B,8BAA8B;IAC9B,qDAA2D;YAA3D,6CAA2D;IAA3D,mEAA2D;YAA3D,2DAA2D;IAC3D,qDAA0D;IAA1D,6CAA0D;IAA1D,wFAA0D;IAA1D,kEAA0D;IAA1D,0DAA0D;IAA1D,kHAA0D;GAC3D;;AACA;IACC,iBAAiB;IACjB,mBAAmB;GACpB;;AAGF;EACC,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,YAAY;EACZ;CAuBD;;AAtBC;GACC,aAAa;EACd;;AACA;GACC,aAAa;GACb,YAAY;GACZ,gBAAgB;GAChB,mBAAmB;GACnB;EAaD;;AAZC;IACC,wCAAsD;IAAtD;GAID;;AAHC;KACC,sCAAoD;KAApD,oDAAoD;IACrD;;AAED;IACC,gBAAgB;IAChB,qBAAqB;IACrB,qBAAyB;IACzB,uBAAuB;GACxB;;AAGF;EACC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;CACZ","sourcesContent":[":root {\r\n\t--app-size: 1rem;\r\n\t--app-font-size: 1rem;\r\n\tfont-size: var(--app-size);\r\n\r\n\t--theme-fonts: 'Titillium Web', \"Noto Sans\", \"Roboto\", \"system-ui\", \"system\", sans-serif;\r\n\r\n\t--base-bright: #d6dbdc;\t\t--base-bright-hsl: 186, 8%, 85%;\r\n\t--base-light: #839496;\t\t--base-light-hsl: 186, 8%, 55%;\r\n\t--base-dark: #404040;\t\t--base-dark-hsl: 0, 0%, 25%;\r\n\t--base-darkish: #333333;\t--base-darkish-hsl: 0, 0%, 21%;\r\n\t--base-darker: #04202a;\t\t--base-darker-hsl: 195, 82%, 9%;\r\n\t--base-yellow: #f1c40e;\t\t--base-yellow-hsl: 48, 89%, 50%;\r\n\t--base-orange: #cb4b16;\t\t--base-orange-hsl: 18, 80%, 44%;\r\n\t--base-red: #dc322f;\t\t--base-red-hsl: 1, 71%, 52%;\r\n\t--base-magenta: #d33682;\t--base-magenta-hsl: 331, 64%, 52%;\r\n\t--base-violet: #6c71c4;\t\t--base-violet-hsl: 237, 43%, 60%;\r\n\t--base-cyan: #45a7b9;\t\t--base-cyan-hsl: 189, 46%, 50%;\r\n\t--base-blue: #2e8dcd;\t\t--base-blue-hsl: 204, 63%, 49%;\r\n\t--base-green: #2ecc71;\t--base-green-hsl: 145, 63%, 49%;\r\n\t--base-white: #fff;\t\t\t--base-white-hsl: 0, 0%, 100%;\r\n\r\n\t--time-state: 0.2s;\r\n\t--time-active: 0.1s;\r\n\t--time-pulse: 1s;\r\n\r\n\t--time-hold-short: 1000ms;\r\n\t--time-hold-long: 5000ms;\r\n\r\n\t--theme-shadow: 0 0.5rem 0.75rem -0.75rem rgba(0, 0, 0, 0.5);\r\n\t--theme-shadow-hover: 0 1rem 0.75rem -1rem rgba(0, 0, 0, 0.75);\r\n\t--theme-shadow-right: 0.5rem 0rem 0.75rem -0.75rem rgba(0, 0, 0, 0.75);\r\n\t--theme-shadow-right-hover: 1rem 0rem 0.75rem -1rem rgba(0, 0, 0, 0.75);\r\n\t--theme-shadow-cover: 0 0.5rem 1.75rem -0.25rem rgba(0, 0, 0, 0.5);\r\n\r\n\t--theme-border-radius: 0.2em; --theme-radius: 0.25em;\r\n\t--theme-border: 0.1rem solid hsla(var(--theme-accent-hsl), 0.75);\r\n\r\n\t--theme-padding: 0.25em; --theme-padding-double: 0.5em; --theme-padding-thin: 0.15em;\r\n\r\n\t/*Dark Theme*/\r\n\t--theme-primary: var(--base-dark);\t\t--theme-primary-hsl: var(--base-dark-hsl);\r\n\t--theme-secondary: var(--base-darkish);\t--theme-secondary-hsl: var(--base-darkish-hsl);\r\n\t--theme-accent: #102150;\t\t--theme-accent-hsl: 224, 67%, 19%;\r\n\t--theme-text: var(--base-bright);\t\t--theme-text-hsl: var(--base-bright-hsl);\r\n\t--theme-interact: var(--base-white);\t--theme-interact-hsl: var(--base-white-hsl);\r\n\t--theme-active: var(--base-blue);\t\t--theme-active-hsl: var(--base-blue-hsl);\r\n\t--theme-error: var(--base-red);\t\t\t--theme-error-hsl: var(--base-red-hsl);\r\n\t--theme-blank: #000;\r\n\r\n\t--rarity-legendary: #a6701b;\r\n\t--rarity-epic: #5948b0;\r\n\t--rarity-rare: #2a71a7;\r\n\t--rarity-common: #808080;\r\n\t--rarity-event: #f15d22;\r\n\r\n\t--noise: url('data:image/png;base64,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');\r\n\r\n\t/*Light Theme*/\r\n\t/*--theme-primary: #fff;\t\t\t\t--theme-primary-hsl: 360, 100%, 100%;\r\n\t--theme-secondary: hsl(0, 0%, 95%);\t\t\t\t--theme-secondary-hsl: 0, 0%, 95%;\r\n\t--theme-accent: #000;\t\t\t\t\t--theme-accent-hsl: 0, 0%, 0%;\r\n\t--theme-text: #1a1a1a;\t\t\t\t\t--theme-text-hsl: 0, 0%, 10%;\r\n\t--theme-interact: var(--base-green);\t\t--theme-interact-hsl: var(--base-green-hsl);\r\n\t--theme-active: var(--base-blue);\t\t\t--theme-active-hsl: var(--base-blue-hsl);*/\r\n}\r\n\r\nhtml {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: inherit;\r\n\tfont-family: var(--theme-fonts);\r\n}\r\n\r\nbody {\r\n\tfont-size: 12pt;\r\n\tfont-size: var(--app-font-size);\r\n\tcolor: #ccc;\r\n\tfont-family: \"Noto Sans\", \"Roboto\", \"system-ui\", \"system\", sans-serif;\r\n\tmin-height: 100%;\r\n\t&::before, &::after {\r\n    content: \"\";\r\n    position: fixed;\r\n    top: 0;\r\n\t\tleft: 0;\r\n    right: 0;\r\n\t\tbottom: 0;\r\n\t\tz-index: -1;\r\n    display: block;\r\n\t\tpointer-events: none;\r\n  }\r\n\t&::before {\r\n\t\tbackground: radial-gradient(circle at 66%, transparent 30%, #0f161f 60%);\r\n\t\tmask: var(--noise), radial-gradient(circle at 66%, transparent 40%, #000 75%);\r\n\t}\r\n  \r\n  &::after {\r\n    mask-image: var(--noise), linear-gradient(-80deg, #000 0%, transparent 25%, transparent 75%, #000 100%);\r\n    background: linear-gradient(-80deg, rgba(16,33,80,0.66) 20%, transparent 45%, transparent 75%, rgb(40,49,64) 90%);\r\n  }\r\n}\r\n\r\nfooter {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 2em;\r\n\topacity: 0.5;\r\n\tfont-size: 0.8em;\r\n\t& a {\r\n\t\ttext-decoration: none;\r\n\t}\r\n\t& span {\r\n\t\tpadding-left: 0.33em;\r\n\t}\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n\tz-index: 1;\r\n}\r\n\r\na:not([class]), .parentSocket {\r\n\tfont-size: 1em;\r\n\tcolor: var(--theme-text);\r\n\ttext-underline-offset: 0.15em;\r\n\ttext-decoration-skip-ink: auto;\r\n\ttext-decoration-color: hsla(var(--theme-interact-hsl), 0.5);\r\n\ttransition: text-decoration-color var(--time-state) linear;\r\n\t&:hover {\r\n\t\ttext-decoration-color: hsla(var(--theme-interact-hsl), 1);\r\n\t}\r\n\t&:focus {\r\n\t\toutline: 0.1em solid hsla(var(--theme-interact-hsl), 0.5);\r\n\t\toutline-offset: 0.15em;\r\n\t}\r\n}\r\n\r\n@keyframes slide-in-right {\r\n\t0% {\r\n\t\ttransform: translateX(100%);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n@keyframes slide-in-top-bottom {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n@keyframes slide-in-top-bottom-events {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t\tpointer-events: none;\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t\tpointer-events: none;\r\n\t}\r\n}\r\n\r\n@keyframes pop-up {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(1.1);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n\r\n@keyframes scale-in {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t\tpointer-events: none;\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t\tpointer-events: none;\r\n\t}\r\n}\r\n\r\n@keyframes fade-in {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\nbutton {\r\n\t--rarity: rgba(255,255,255,0.25);\r\n\tposition: relative;\r\n\tappearance: none;\r\n\twidth: fit-content;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder-radius: var(--theme-border-radius);\r\n\tpadding: var(--theme-padding) var(--theme-padding-double);\r\n\tmargin: var(--theme-padding) 0;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--theme-text);\r\n\tcursor: pointer;\r\n\tfont-family: var(--theme-fonts);\r\n\tfont-size: 1em;\r\n\tfont-weight: light;\r\n\toverflow: visible;\r\n\tborder: none;\r\n\tmargin: 0.2em;\r\n\ttransition: color var(--time-state) linear,\r\n\t\tbackground var(--time-state) linear,\r\n\t\ttext-shadow var(--time-active) linear;\r\n\t&.rare {\r\n\t\t--rarity: var(--rarity-rare);\r\n\t}\r\n\t&.epic {\r\n\t\t--rarity: var(--rarity-epic);\r\n\t}\r\n\t&.legendary {\r\n\t\t--rarity: var(--rarity-legendary);\r\n\t}\r\n\t&:hover {\r\n\t\tcolor: #000;\r\n\t\tbackground-color: hsla(var(--theme-interact-hsl), 1);\r\n\t}\r\n}\r\n\r\n.mica_viewer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(0,0,0,0.15);\r\n\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25);\r\n\tmargin-bottom: 6rem;\r\n\t& .mica_header-strip {\r\n\t\tdisplay: flex;\r\n\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\tpadding: 1em;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\t& .mica_header-anchor {\r\n\t\t\topacity: 0.8;\r\n\t\t\tcolor: var(--theme-text);\r\n\t\t\ttext-decoration: none;\r\n\t\t\ttext-decoration-color: transparent;\r\n\t\t\ttransition: text-decoration-color var(--time-state) linear,\r\n\t\t\t\topacity var(--time-state) linear;\r\n\t\t\t&:hover, &:focus {\r\n\t\t\t\topacity: 1;\r\n\t\t\t\ttext-decoration: underline;\r\n\t\t\t\ttext-underline-offset: 0.15em;\r\n\t\t\t\ttext-decoration-skip-ink: auto;\r\n\t\t\t\ttext-decoration-color: hsla(var(--theme-interact-hsl), 0.5);\r\n\t\t\t\ttransition: text-decoration-color var(--time-state) linear;\r\n\t\t\t}\r\n\t\t\t& h2 {\r\n\t\t\t\tfont-size: 1.3rem;\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t& .mica_nav-list {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tmin-height: 100%;\r\n\t\tmax-height: 100%;\r\n\t\tscrollbar-width: none;\r\n\t\tpadding: 1em;\r\n\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\t&::-webkit-scrollbar {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t\t& button {\r\n\t\t\tdisplay: flex;\r\n\t\t\twidth: 9.5em;\r\n\t\t\toverflow: hidden;\r\n\t\t\twhite-space: nowrap;\r\n\t\t\tfont-size: 0.9em;\r\n\t\t\t&.active {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 1);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t& span {\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tword-wrap: break-word;\r\n\t\t\t\toverflow-wrap: break-word;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t& .mica_main-content {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: no-wrap;\r\n\t\twidth: 100%;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/calendar/index.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/calendar/index.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\t.calendar_wrapper .header-notice {\r\n\t\tfont-size: 0.8em;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\t-webkit-user-select: none;\r\n\t\t   -moz-user-select: none;\r\n\t\t    -ms-user-select: none;\r\n\t\t        user-select: none;\r\n\t}\r\n\r\n.calendar_wrapper .calendar-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\t-webkit-user-select: none;\r\n\t\t   -moz-user-select: none;\r\n\t\t    -ms-user-select: none;\r\n\t\t        user-select: none;\r\n\t}\r\n\r\n.calendar_wrapper .calendar_content {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t}\r\n\r\n.calendar_wrapper nav ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: left;\r\n\t\talign-items: center;\r\n\t\talign-content: flex-start;\r\n\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\tpadding: 1em;\r\n\t\theight: 100%\r\n\t}\r\n\r\n.calendar_wrapper nav ul button {\r\n\t\t\tfont-size: 1em;\r\n\t\t\twidth: 9.5em;\r\n\t\t\tmax-width: 30vw\r\n\t\t}\r\n\r\n.calendar_wrapper nav ul button span {\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\ttext-align: left;\r\n\t\t\t}\r\n\r\n.timeline_wrapper {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\talign-items: flex-start;\r\n\talign-content: flex-start\r\n}\r\n\r\n.timeline_wrapper .timeline_list {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\twidth: 100%;\r\n\t\tpadding: 0.5em;\r\n\t\tlist-style-type: none;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\tgap: 0.2rem\r\n\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event {\r\n\t\t\tposition: relative;\r\n\t\t\tborder-radius: var(--theme-border-radius);\r\n\t\t\toverflow: hidden\r\n\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event .event-bg {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\tbackground-size: cover;\r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tbackground-position: center 35%;\r\n\t\t\t\topacity: 0.33;\r\n\t\t\t\ttransition: opacity var(--time-active) linear;\r\n\t\t\t\tborder: 0.15rem solid var(--rarity-epic);\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t\t-webkit-user-select: none;\r\n\t\t\t\t   -moz-user-select: none;\r\n\t\t\t\t    -ms-user-select: none;\r\n\t\t\t\t        user-select: none\r\n\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event .event-bg.past {\r\n\t\t\t\t\tfilter: grayscale(80%);\r\n\t\t\t\t\topacity: 0.15;\r\n\t\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event:hover .event-bg {\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event.active .event-bg {\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t\tborder: 0.15rem solid var(--rarity-event);\r\n\t\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event.active:hover .event-bg {\r\n\t\t\t\t\topacity: 1;\r\n\t\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event.operation .event-bg {\r\n\t\t\t\tborder: 0.15rem solid var(--rarity-legendary);\r\n\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event button {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tflex-wrap: wrap;\r\n\t\t\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\t\t\tpadding: 0.75em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\theight: 10rem;\r\n\t\t\t\twidth: 10rem;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t\talign-content: flex-start;\r\n\t\t\t\ttext-shadow: 0.1rem 0.1rem 0.2rem #000, 0.1rem 0.1rem 0.2rem #000;\r\n\t\t\t\ttext-align: left\r\n\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event button:hover {\r\n\t\t\t\t\tcolor: currentColor;\r\n\t\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list .timeline-event button .upcoming {\r\n\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t}\r\n\r\n.timeline_wrapper .timeline_list.rituals {\r\n\t\tflex-grow: 2;\r\n\t}\r\n\r\n.timeline_wrapper .timeline_list.operations {\r\n\t\twidth: 10rem\r\n\t}\r\n\r\n.timeline_wrapper .timeline_list.operations button {\r\n\t\t\theight: 20.2rem;\r\n\t\t\twidth: 10rem;\r\n\t\t}\r\n\r\n.reward-track_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 100%;\r\n\tpadding: 0.5em\r\n}\r\n\r\n.reward-track_wrapper ul {\r\n\t\tlist-style-type: none;\r\n\t}\r\n\r\n.reward-track_wrapper header {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t}\r\n\r\n.reward-track_wrapper .dates-list {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\talign-items: center\r\n\t\t/* visibility: collapse; */\r\n\t}\r\n\r\n.reward-track_wrapper .dates-list li:not(.event-header) {\r\n\t\t\tbackground-color: red;\r\n\t\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\t\tpadding: 0.5em;\r\n\t\t\tmargin: 0.2em;\r\n\t\t\tborder-radius: var(--theme-border-radius);\r\n\t\t\tfont-size: 0.8em;\r\n\t\t}\r\n\r\n.reward-track_wrapper .reward-list {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tpadding: 0.5em\r\n\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-bottom: 2em;\r\n\t\t\t-webkit-animation: fade-in var(--time-state) linear;\r\n\t\t\t        animation: fade-in var(--time-state) linear\r\n\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards:hover .rank_number {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.25);\r\n\t\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards .rank_number {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: left;\r\n\t\t\t\tpadding-left: 0.5em;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\tbottom: 0.8em;\r\n\t\t\t\tleft: 0.5em;\r\n\t\t\t\tright: 0.5em;\r\n\t\t\t\theight: 1.2em;\r\n\t\t\t\tfont-size: 0.9em;\r\n\t\t\t\tborder-radius: var(--theme-border-radius);\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\t-webkit-user-select: none;\r\n\t\t\t\t   -moz-user-select: none;\r\n\t\t\t\t    -ms-user-select: none;\r\n\t\t\t\t        user-select: none;\r\n\t\t\t\tpoint-events: none;\r\n\t\t\t\ttransition: background-color var(--time-active) linear;\r\n\t\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards .rank_reward-items li {\r\n\t\t\t\tposition: relative\r\n\t\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards .rank_reward-items li::before {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tfont-size: 0.8em;\r\n\t\t\t\t\tbottom: -2.5em;\r\n\t\t\t\t\theight: 1em;\r\n\t\t\t\t\twidth: 3rem;\r\n\t\t\t\t\tleft: calc(50% - 1.5rem);\r\n\t\t\t\t\tpadding: 0 0.2rem;\r\n\t\t\t\t\tmargin: 0.1rem;\r\n\t\t\t\t\t-webkit-user-select: none;\r\n\t\t\t\t\t   -moz-user-select: none;\r\n\t\t\t\t\t    -ms-user-select: none;\r\n\t\t\t\t\t        user-select: none;\r\n\t\t\t\t\tpoint-events: none;\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards .rank_reward-items.free li::before {\r\n\t\t\t\tcontent: \"FREE\";\r\n\t\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards .rank_reward-items.paid li::before {\r\n\t\t\t\tcontent: \"PAID\";\r\n\t\t\t}\r\n\r\n.reward-track_wrapper .reward-list .rank_rewards .currency::after {\r\n\t\t\t\tcontent: \"×\" attr(data-quantity);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tfont-size: 0.8em;\r\n\t\t\t\tbottom: -2.5em;\r\n\t\t\t\theight: 1em;\r\n\t\t\t\twidth: 3rem;\r\n\t\t\t\tright: 0;\r\n\t\t\t\tpadding: 0 0.2rem;\r\n\t\t\t\tmargin: 0.1rem;\r\n\t\t\t\t-webkit-user-select: none;\r\n\t\t\t\t   -moz-user-select: none;\r\n\t\t\t\t    -ms-user-select: none;\r\n\t\t\t\t        user-select: none;\r\n\t\t\t\tpoint-events: none;\r\n\t\t\t\topacity: 0.8;\r\n\t\t\t}", "",{"version":3,"sources":["webpack://./src/ui/calendar/index.css"],"names":[],"mappings":"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","sourcesContent":[".calendar_wrapper {\r\n\t& .header-notice {\r\n\t\tfont-size: 0.8em;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\tuser-select: none;\r\n\t}\r\n\t& .calendar-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\tuser-select: none;\r\n\t}\r\n\t& .calendar_content {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t}\r\n\t& nav ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: left;\r\n\t\talign-items: center;\r\n\t\talign-content: flex-start;\r\n\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\tpadding: 1em;\r\n\t\theight: 100%;\r\n\t\t& button {\r\n\t\t\tfont-size: 1em;\r\n\t\t\twidth: 9.5em;\r\n\t\t\tmax-width: 30vw;\r\n\t\t\t& span {\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\ttext-align: left;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.timeline_wrapper {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\talign-items: flex-start;\r\n\talign-content: flex-start;\r\n\t& .timeline_list {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\twidth: 100%;\r\n\t\tpadding: 0.5em;\r\n\t\tlist-style-type: none;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\tgap: 0.2rem;\r\n\t\t& .timeline-event {\r\n\t\t\tposition: relative;\r\n\t\t\tborder-radius: var(--theme-border-radius);\r\n\t\t\toverflow: hidden;\r\n\t\t\t& .event-bg {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\tbackground-size: cover;\r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\tbackground-position: center 35%;\r\n\t\t\t\topacity: 0.33;\r\n\t\t\t\ttransition: opacity var(--time-active) linear;\r\n\t\t\t\tborder: 0.15rem solid var(--rarity-epic);\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t\tuser-select: none;\r\n\t\t\t\t&.past {\r\n\t\t\t\t\tfilter: grayscale(80%);\r\n\t\t\t\t\topacity: 0.15;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:hover .event-bg {\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t}\r\n\t\t\t&.active {\r\n\t\t\t\t& .event-bg {\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t\tborder: 0.15rem solid var(--rarity-event);\r\n\t\t\t\t}\r\n\t\t\t\t&:hover .event-bg {\r\n\t\t\t\t\topacity: 1;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&.operation .event-bg {\r\n\t\t\t\tborder: 0.15rem solid var(--rarity-legendary);\r\n\t\t\t}\r\n\t\t\t& button {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tflex-wrap: wrap;\r\n\t\t\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\t\t\tpadding: 0.75em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\theight: 10rem;\r\n\t\t\t\twidth: 10rem;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t\talign-content: flex-start;\r\n\t\t\t\ttext-shadow: 0.1rem 0.1rem 0.2rem #000, 0.1rem 0.1rem 0.2rem #000;\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tcolor: currentColor;\r\n\t\t\t\t}\r\n\t\t\t\t& .upcoming {\r\n\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t& .timeline_list.rituals {\r\n\t\tflex-grow: 2;\r\n\t}\r\n\t& .timeline_list.operations {\r\n\t\twidth: 10rem;\r\n\t\t& button {\r\n\t\t\theight: 20.2rem;\r\n\t\t\twidth: 10rem;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.reward-track_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 100%;\r\n\tpadding: 0.5em;\r\n\t& ul {\r\n\t\tlist-style-type: none;\r\n\t}\r\n\t& header {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t}\r\n\t& .dates-list {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\talign-items: center;\r\n\t\t/* visibility: collapse; */\r\n\t\t& li:not(.event-header) {\r\n\t\t\tbackground-color: red;\r\n\t\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\t\tpadding: 0.5em;\r\n\t\t\tmargin: 0.2em;\r\n\t\t\tborder-radius: var(--theme-border-radius);\r\n\t\t\tfont-size: 0.8em;\r\n\t\t}\r\n\t}\r\n\t& .reward-list {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tpadding: 0.5em;\r\n\t\t& .rank_rewards {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-bottom: 2em;\r\n\t\t\tanimation: fade-in var(--time-state) linear;\r\n\t\t\t&:hover .rank_number {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.25);\r\n\t\t\t}\r\n\t\t\t& .rank_number {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: left;\r\n\t\t\t\tpadding-left: 0.5em;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\tbottom: 0.8em;\r\n\t\t\t\tleft: 0.5em;\r\n\t\t\t\tright: 0.5em;\r\n\t\t\t\theight: 1.2em;\r\n\t\t\t\tfont-size: 0.9em;\r\n\t\t\t\tborder-radius: var(--theme-border-radius);\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tuser-select: none;\r\n\t\t\t\tpoint-events: none;\r\n\t\t\t\ttransition: background-color var(--time-active) linear;\r\n\t\t\t}\r\n\t\t\t& .rank_reward-items li {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\t&::before {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tfont-size: 0.8em;\r\n\t\t\t\t\tbottom: -2.5em;\r\n\t\t\t\t\theight: 1em;\r\n\t\t\t\t\twidth: 3rem;\r\n\t\t\t\t\tleft: calc(50% - 1.5rem);\r\n\t\t\t\t\tpadding: 0 0.2rem;\r\n\t\t\t\t\tmargin: 0.1rem;\r\n\t\t\t\t\tuser-select: none;\r\n\t\t\t\t\tpoint-events: none;\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t& .rank_reward-items.free li::before {\r\n\t\t\t\tcontent: \"FREE\";\r\n\t\t\t}\r\n\t\t\t& .rank_reward-items.paid li::before {\r\n\t\t\t\tcontent: \"PAID\";\r\n\t\t\t}\r\n\t\t\t& .currency::after {\r\n\t\t\t\tcontent: \"×\" attr(data-quantity);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tfont-size: 0.8em;\r\n\t\t\t\tbottom: -2.5em;\r\n\t\t\t\theight: 1em;\r\n\t\t\t\twidth: 3rem;\r\n\t\t\t\tright: 0;\r\n\t\t\t\tpadding: 0 0.2rem;\r\n\t\t\t\tmargin: 0.1rem;\r\n\t\t\t\tuser-select: none;\r\n\t\t\t\tpoint-events: none;\r\n\t\t\t\topacity: 0.8;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/cores/index.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/cores/index.css ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\t.core-viewer_wrapper .core-viewer_nav ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\tpadding: 0 1rem 0.25em;\r\n\t}\r\n\r\n.core-viewer_wrapper .cores-list_nav ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\tpadding: 0 1rem 0.25em;\r\n\t}\r\n\r\n.core-viewer_wrapper nav button {\r\n\t\tmargin-top: 0;\r\n\t\tborder-top: 0.2em solid transparent\r\n\t}\r\n\r\n.core-viewer_wrapper nav button.active {\r\n\t\t\tborder-top: 0.2em solid hsla(var(--theme-interact-hsl), 0.5);\r\n\t\t\tborder-radius: 0 0 var(--theme-border-radius) var(--theme-border-radius)\r\n\t\t}\r\n\r\n.core-viewer_wrapper nav button.active:hover {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\tcolor: var(--theme-text);\r\n\t\t\t}\r\n\r\n.core-viewer_wrapper .core-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\t-webkit-user-select: none;\r\n\t\t   -moz-user-select: none;\r\n\t\t    -ms-user-select: none;\r\n\t\t        user-select: none;\r\n\t\ttext-transform: uppercase;\r\n\t\tmin-height: 8rem;\r\n\t}\r\n\r\n.core_wrapper .core-socket-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\t-webkit-user-select: none;\r\n\t\t   -moz-user-select: none;\r\n\t\t    -ms-user-select: none;\r\n\t\t        user-select: none;\r\n\t}\r\n\r\n.core_wrapper .core-socket-list {\r\n\t\t-webkit-animation: fade-in var(--time-active) linear;\r\n\t\t        animation: fade-in var(--time-active) linear\r\n\t}\r\n\r\n.core_wrapper .core-socket-list button {\r\n\t\t\tfont-size: 1em;\r\n\t\t\twidth: 9.5em;\r\n\t\t\tmax-width: 30vw\r\n\t\t}\r\n\r\n.core_wrapper .core-socket-list button::before {\r\n\t\t\t\tborder-width: 0;\r\n\t\t\t}\r\n\r\n.core_wrapper .core-socket-list button.active {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1)\r\n\t\t\t}\r\n\r\n.core_wrapper .core-socket-list button.active:hover {\r\n\t\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 1);\r\n\t\t\t\t}\r\n\r\n.core_wrapper .core-socket-list button span {\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t}\r\n\r\n.core_wrapper .core-socket-list .core-socket-title {\r\n\t\t\topacity: 0.66;\r\n\t\t}\r\n\r\n.core_wrapper .core-sockets_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: flex-start;\r\n\t\tpadding: 0.5em\r\n\t}\r\n\r\n.core_wrapper .core-sockets_wrapper .socket-items {\r\n\t\t\twidth: 100%;\r\n\t\t\tlist-style-type: none;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: left;\r\n\t\t\tpadding: 0.5em;\r\n\t\t}", "",{"version":3,"sources":["webpack://./src/ui/cores/index.css"],"names":[],"mappings":";CACC;EACC,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,sBAAsB;CACvB;;AACA;EACC,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,sBAAsB;CACvB;;AACA;EACC,aAAa;EACb;CASD;;AARC;GACC,4DAA4D;GAC5D;EAKD;;AAJC;IACC,sDAAsD;IACtD,wBAAwB;GACzB;;AAGF;EACC,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,oBAAoB;EACpB,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;CACjB;;AAIA;EACC,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,oBAAoB;EACpB,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;CAClB;;AACA;EACC,oDAA4C;UAA5C;CAwBD;;AAvBC;GACC,cAAc;GACd,YAAY;GACZ;EAgBD;;AAfC;IACC,eAAe;GAChB;;AACA;IACC;GAID;;AAHC;KACC,oDAAoD;IACrD;;AAED;IACC,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;GACpB;;AAED;GACC,aAAa;EACd;;AAED;EACC,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,2BAA2B;EAC3B,uBAAuB;EACvB;CAUD;;AATC;GACC,WAAW;GACX,qBAAqB;GACrB,aAAa;GACb,mBAAmB;GACnB,eAAe;GACf,qBAAqB;GACrB,cAAc;EACf","sourcesContent":[".core-viewer_wrapper {\r\n\t& .core-viewer_nav ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tbackground-color: rgba(0,0,0,0.25);\r\n\t\tpadding: 0 1rem 0.25em;\r\n\t}\r\n\t& .cores-list_nav ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\tpadding: 0 1rem 0.25em;\r\n\t}\r\n\t& nav button {\r\n\t\tmargin-top: 0;\r\n\t\tborder-top: 0.2em solid transparent;\r\n\t\t&.active {\r\n\t\t\tborder-top: 0.2em solid hsla(var(--theme-interact-hsl), 0.5);\r\n\t\t\tborder-radius: 0 0 var(--theme-border-radius) var(--theme-border-radius);\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\tcolor: var(--theme-text);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t& .core-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\tuser-select: none;\r\n\t\ttext-transform: uppercase;\r\n\t\tmin-height: 8rem;\r\n\t}\r\n}\r\n\r\n.core_wrapper {\r\n\t& .core-socket-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\tuser-select: none;\r\n\t}\r\n\t& .core-socket-list {\r\n\t\tanimation: fade-in var(--time-active) linear;\r\n\t\t& button {\r\n\t\t\tfont-size: 1em;\r\n\t\t\twidth: 9.5em;\r\n\t\t\tmax-width: 30vw;\r\n\t\t\t&::before {\r\n\t\t\t\tborder-width: 0;\r\n\t\t\t}\r\n\t\t\t&.active {\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 1);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t& span {\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t}\r\n\t\t}\r\n\t\t& .core-socket-title {\r\n\t\t\topacity: 0.66;\r\n\t\t}\r\n\t}\r\n\t& .core-sockets_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: flex-start;\r\n\t\tpadding: 0.5em;\r\n\t\t& .socket-items {\r\n\t\t\twidth: 100%;\r\n\t\t\tlist-style-type: none;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: left;\r\n\t\t\tpadding: 0.5em;\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/inventory/index.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/inventory/index.css ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\t.inventory_wrapper .inventory-category_wrapper {\r\n\t\tpadding: 0.5em;\r\n\t\twidth: 100%;\r\n\t}\r\n.inventory_wrapper .inv-category-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-content: center;\r\n\t\tmargin-top: 8em;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\t-webkit-user-select: none;\r\n\t\t   -moz-user-select: none;\r\n\t\t    -ms-user-select: none;\r\n\t\t        user-select: none;\r\n\t}\r\n.inventory_wrapper .inventory-category_items {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: left;\r\n\t\tpadding: 0.5em;\r\n\t}\r\n.inventory_wrapper ul {\r\n\t\tlist-style-type: none;\r\n\t}\r\n.inventory_wrapper header.h-favorites {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: space-between;\r\n\t\twidth: 100%;\r\n\t}\r\n.inventory_wrapper .favorites-placeholder {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: flex-end;\r\n\t\talign-content: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tgap: 0.3rem;\r\n\t\twidth: 100%;\r\n\t\theight: 7rem;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\t-webkit-user-select: none;\r\n\t\t   -moz-user-select: none;\r\n\t\t    -ms-user-select: none;\r\n\t\t        user-select: none\r\n\t}\r\n.inventory_wrapper .favorites-placeholder .favorite {\r\n\t\t\tdisplay: block;\r\n\t\t\t--length: 1.25rem;\r\n\t\t\theight: var(--length);\r\n\t\t\twidth: var(--length);\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-position: center center;\r\n\t\t\tmargin-bottom: 0.15rem;\r\n\t\t}\r\n.inventory_wrapper .inventory-search_wrapper {\r\n\t\twidth: 100%;\r\n\t\tmargin-top: 1rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\tjustify-content: center\r\n\t}\r\n.inventory_wrapper .inventory-search_wrapper .inventory-search_input {\r\n\t\t\tpadding: 0.5em;\r\n\t\t\tmargin: 0 0.25rem;\r\n\t\t\tborder: 0;\r\n\t\t\tborder-bottom: 0.2rem solid hsla(var(--theme-text-hsl), 0.25);\r\n\t\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\t\twidth: 50%;\r\n\t\t\tcolor: var(--theme-text);\r\n\t\t\tfont-size: 1.25em;\r\n\t\t}\r\n.favorites-man_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column\r\n}\r\n.favorites-man_wrapper textarea {\r\n\t\tcolor: #000;\r\n\t}", "",{"version":3,"sources":["webpack://./src/ui/inventory/index.css"],"names":[],"mappings":";CACC;EACC,cAAc;EACd,WAAW;CACZ;AACA;EACC,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;CAClB;AACA;EACC,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,cAAc;CACf;AACA;EACC,qBAAqB;CACtB;AACA;EACC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;CACZ;AACA;EACC,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,WAAW;EACX,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB;CAWD;AAVC;GACC,cAAc;GACd,iBAAiB;GACjB,qBAAqB;GACrB,oBAAoB;GACpB,sBAAsB;GACtB,4BAA4B;GAC5B,kCAAkC;GAClC,sBAAsB;EACvB;AAED;EACC,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB;CAWD;AAVC;GACC,cAAc;GACd,iBAAiB;GACjB,SAAS;GACT,6DAA6D;GAC7D,kCAAkC;GAClC,UAAU;GACV,wBAAwB;GACxB,iBAAiB;EAClB;AAGF;CACC,aAAa;CACb;AAID;AAHC;EACC,WAAW;CACZ","sourcesContent":[".inventory_wrapper {\r\n\t& .inventory-category_wrapper {\r\n\t\tpadding: 0.5em;\r\n\t\twidth: 100%;\r\n\t}\r\n\t& .inv-category-placeholder {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: center;\r\n\t\talign-content: center;\r\n\t\tmargin-top: 8em;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\tuser-select: none;\r\n\t}\r\n\t& .inventory-category_items {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: left;\r\n\t\tpadding: 0.5em;\r\n\t}\r\n\t& ul {\r\n\t\tlist-style-type: none;\r\n\t}\r\n\t& header.h-favorites {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: space-between;\r\n\t\twidth: 100%;\r\n\t}\r\n\t& .favorites-placeholder {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: flex-end;\r\n\t\talign-content: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tgap: 0.3rem;\r\n\t\twidth: 100%;\r\n\t\theight: 7rem;\r\n\t\topacity: 0.66;\r\n\t\tpointer-events: none;\r\n\t\tuser-select: none;\r\n\t\t& .favorite {\r\n\t\t\tdisplay: block;\r\n\t\t\t--length: 1.25rem;\r\n\t\t\theight: var(--length);\r\n\t\t\twidth: var(--length);\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-position: center center;\r\n\t\t\tmargin-bottom: 0.15rem;\r\n\t\t}\r\n\t}\r\n\t& .inventory-search_wrapper {\r\n\t\twidth: 100%;\r\n\t\tmargin-top: 1rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\tjustify-content: center;\r\n\t\t& .inventory-search_input {\r\n\t\t\tpadding: 0.5em;\r\n\t\t\tmargin: 0 0.25rem;\r\n\t\t\tborder: 0;\r\n\t\t\tborder-bottom: 0.2rem solid hsla(var(--theme-text-hsl), 0.25);\r\n\t\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\t\twidth: 50%;\r\n\t\t\tcolor: var(--theme-text);\r\n\t\t\tfont-size: 1.25em;\r\n\t\t}\r\n\t}\r\n}\r\n.favorites-man_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t& textarea {\r\n\t\tcolor: #000;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/modal/index.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/modal/index.css ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modals_wrapper {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tpointer-events: none;\r\n\tz-index: 999;\r\n}\r\n\r\n.modal_clickout {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0,0,0,0.5);\r\n\tcursor: pointer;\r\n\t-webkit-animation: fade-in var(--time-active) linear;\r\n\t        animation: fade-in var(--time-active) linear;\r\n\tpointer-events: auto;\r\n}\r\n\r\n.modal_wrapper {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tpointer-events: none;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center\r\n}\r\n\r\n.modal_wrapper .modal_content {\r\n\t\talign-items: left;\r\n\t\tpointer-events: auto;\r\n\t\tpadding: 1em;\r\n\t\tmax-width: 90vw;\r\n\t\tmax-height: 90vh;\r\n\t\toverflow: auto;\r\n\t\tbackground-color: var(--theme-primary);\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t}", "",{"version":3,"sources":["webpack://./src/ui/modal/index.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,oBAAoB;CACpB,YAAY;AACb;;AAEA;CACC,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,iCAAiC;CACjC,eAAe;CACf,oDAA4C;SAA5C,4CAA4C;CAC5C,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,oBAAoB;CACpB,aAAa;CACb,uBAAuB;CACvB;AAWD;;AAVC;EACC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,sCAAsC;EACtC,yCAAyC;CAC1C","sourcesContent":[".modals_wrapper {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tpointer-events: none;\r\n\tz-index: 999;\r\n}\r\n\r\n.modal_clickout {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0,0,0,0.5);\r\n\tcursor: pointer;\r\n\tanimation: fade-in var(--time-active) linear;\r\n\tpointer-events: auto;\r\n}\r\n\r\n.modal_wrapper {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tpointer-events: none;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\t& .modal_content {\r\n\t\talign-items: left;\r\n\t\tpointer-events: auto;\r\n\t\tpadding: 1em;\r\n\t\tmax-width: 90vw;\r\n\t\tmax-height: 90vh;\r\n\t\toverflow: auto;\r\n\t\tbackground-color: var(--theme-primary);\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/nav/index.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/nav/index.css ***!
  \******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav.toolbar {\r\n\twidth: 100%;\r\n\tpadding: 0.2rem 0.5em;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 1em\r\n}\r\nnav.toolbar ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center\r\n\t}\r\nnav.toolbar ul li {\r\n\t\t\tpadding: 0 0.5em;\r\n\t\t\t/* & button::before {\r\n\t\t\t\tborder-width: 0;\r\n\t\t\t} */\r\n\t\t}\r\nnav.toolbar .settings:not(:hover) {\r\n\t\topacity: 0.5;\r\n\t}\r\nnav.toolbar .header-logo {\r\n\t\tcolor: #fff;\r\n\t\ttext-decoration: none;\r\n\t}\r\nnav.toolbar header {\r\n\t\tdisplay: flex;\r\n\t\theight: 4rem;\r\n\t\tflex-direction: row;\r\n\t\tgap: 0.5rem;\r\n\t\topacity: 0.66;\r\n\t\ttransition: opacity var(--time-state) linear\r\n\t}\r\nnav.toolbar header span {\r\n\t\t\tfont-size: 0.8rem;\r\n\t\t}\r\nnav.toolbar header .logo {\r\n\t\t\tmargin-top: 0.5rem;\r\n\t\t\ttransition: fill var(--time-state) linear,  filter var(--time-state) linear;\r\n\t\t\tfill: #fff;\r\n\t\t\tfilter: blur(0.25rem);\r\n\t\t\tmax-height: 100%;\r\n\t\t\twidth: 2rem;\r\n\t\t\topacity: 0.1;\r\n\t\t}\r\nnav.toolbar header:hover {\r\n\t\t\topacity: 1\r\n\t\t}\r\nnav.toolbar header:hover .logo {\r\n\t\t\t\tfilter: blur(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\nnav.toolbar header:hover .cls-1 {\r\n\t\t\t\tfill: #2a8c2a;\r\n\t\t\t}\r\nnav.toolbar header:hover .cls-2 {\r\n\t\t\t\tfill: #f4ad31;\r\n\t\t\t}\r\nnav.toolbar header:hover .cls-3 {\r\n\t\t\t\tfill: #282828;\r\n\t\t\t}\r\nnav.toolbar header:hover {\r\n\t\t\t& .cls-3, .cls-4 {\r\n\t\t\t\tfill-rule: evenodd;\r\n\t\t\t}\r\n\t\t}\r\nnav.toolbar header:hover .cls-4 {\r\n\t\t\t\tfill: #fff;\r\n\t\t\t}\r\nnav.toolbar header:hover .title_wrapper {\r\n\t\t\t\ttransform: translate(0);\r\n\t\t\t}\r\nnav.toolbar header .title_wrapper {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\theight: 100%;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 0.25rem 0;\r\n\t\t\ttransform: translate(-2rem);\r\n\t\t\ttransition: transform var(--time-active) linear;\r\n\t\t}", "",{"version":3,"sources":["webpack://./src/ui/nav/index.css"],"names":[],"mappings":"AAAA;CACC,WAAW;CACX,qBAAqB;CACrB,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,qBAAqB;CACrB,8BAA8B;CAC9B;AA0ED;AAzEC;EACC,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB;CAOD;AANC;GACC,gBAAgB;GAChB;;MAEG;EACJ;AAED;EACC,YAAY;CACb;AACA;EACC,WAAW;EACX,qBAAqB;CACtB;AACA;EACC,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb;CA+CD;AA9CC;GACC,iBAAiB;EAClB;AACA;GACC,kBAAkB;GAClB,2EAA2E;GAC3E,UAAU;GACV,qBAAqB;GACrB,gBAAgB;GAChB,WAAW;GACX,YAAY;EACb;AACA;GACC;EAuBD;AAtBC;IACC,eAAe;IACf,UAAU;GACX;AACA;IACC,aAAa;GACd;AACA;IACC,aAAa;GACd;AACA;IACC,aAAa;GACd;AAdD;GAeC;IACC,kBAAkB;GACnB;EAOD;AANC;IACC,UAAU;GACX;AACA;IACC,uBAAuB;GACxB;AAED;GACC,aAAa;GACb,sBAAsB;GACtB,YAAY;GACZ,8BAA8B;GAC9B,kBAAkB;GAClB,2BAA2B;GAC3B,+CAA+C;EAChD","sourcesContent":["nav.toolbar {\r\n\twidth: 100%;\r\n\tpadding: 0.2rem 0.5em;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 1em;\r\n\t& ul {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\t& li {\r\n\t\t\tpadding: 0 0.5em;\r\n\t\t\t/* & button::before {\r\n\t\t\t\tborder-width: 0;\r\n\t\t\t} */\r\n\t\t}\r\n\t}\r\n\t& .settings:not(:hover) {\r\n\t\topacity: 0.5;\r\n\t}\r\n\t& .header-logo {\r\n\t\tcolor: #fff;\r\n\t\ttext-decoration: none;\r\n\t}\r\n\t& header {\r\n\t\tdisplay: flex;\r\n\t\theight: 4rem;\r\n\t\tflex-direction: row;\r\n\t\tgap: 0.5rem;\r\n\t\topacity: 0.66;\r\n\t\ttransition: opacity var(--time-state) linear;\r\n\t\t& span {\r\n\t\t\tfont-size: 0.8rem;\r\n\t\t}\r\n\t\t& .logo {\r\n\t\t\tmargin-top: 0.5rem;\r\n\t\t\ttransition: fill var(--time-state) linear,  filter var(--time-state) linear;\r\n\t\t\tfill: #fff;\r\n\t\t\tfilter: blur(0.25rem);\r\n\t\t\tmax-height: 100%;\r\n\t\t\twidth: 2rem;\r\n\t\t\topacity: 0.1;\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\topacity: 1;\r\n\t\t\t& .logo {\r\n\t\t\t\tfilter: blur(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\n\t\t\t& .cls-1 {\r\n\t\t\t\tfill: #2a8c2a;\r\n\t\t\t}\r\n\t\t\t& .cls-2 {\r\n\t\t\t\tfill: #f4ad31;\r\n\t\t\t}\r\n\t\t\t& .cls-3 {\r\n\t\t\t\tfill: #282828;\r\n\t\t\t}\r\n\t\t\t& .cls-3, .cls-4 {\r\n\t\t\t\tfill-rule: evenodd;\r\n\t\t\t}\r\n\t\t\t& .cls-4 {\r\n\t\t\t\tfill: #fff;\r\n\t\t\t}\r\n\t\t\t& .title_wrapper {\r\n\t\t\t\ttransform: translate(0);\r\n\t\t\t}\r\n\t\t}\r\n\t\t& .title_wrapper {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\theight: 100%;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 0.25rem 0;\r\n\t\t\ttransform: translate(-2rem);\r\n\t\t\ttransition: transform var(--time-active) linear;\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/settings/index.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/settings/index.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: left;\r\n\tgap: 1em\r\n}\n.settings_wrapper header {\r\n\t\tfont-size: 1.5em;\r\n\t}\n.settings_wrapper .option_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: 0.5em;\r\n\t}", "",{"version":3,"sources":["webpack://./src/ui/settings/index.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,qBAAqB;CACrB;AAWD;AAVC;EACC,gBAAgB;CACjB;AACA;EACC,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;CACX","sourcesContent":[".settings_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: left;\r\n\tgap: 1em;\r\n\t& header {\r\n\t\tfont-size: 1.5em;\r\n\t}\r\n\t& .option_wrapper {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: 0.5em;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/disconnected/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/disconnected/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi */
function disconnected(poly) {'use strict';
  var Event = poly.Event;
  var WeakSet = poly.WeakSet;
  var notObserving = true;
  var observer = null;
  return function observe(node) {
    if (notObserving) {
      notObserving = !notObserving;
      observer = new WeakSet;
      startObserving(node.ownerDocument);
    }
    observer.add(node);
    return node;
  };
  function startObserving(document) {
    var connected = new WeakSet;
    var disconnected = new WeakSet;
    try {
      (new MutationObserver(changes)).observe(
        document,
        {subtree: true, childList: true}
      );
    }
    catch(o_O) {
      var timer = 0;
      var records = [];
      var reschedule = function (record) {
        records.push(record);
        clearTimeout(timer);
        timer = setTimeout(
          function () {
            changes(records.splice(timer = 0, records.length));
          },
          0
        );
      };
      document.addEventListener(
        'DOMNodeRemoved',
        function (event) {
          reschedule({addedNodes: [], removedNodes: [event.target]});
        },
        true
      );
      document.addEventListener(
        'DOMNodeInserted',
        function (event) {
          reschedule({addedNodes: [event.target], removedNodes: []});
        },
        true
      );
    }
    function changes(records) {
      for (var
        record,
        length = records.length,
        i = 0; i < length; i++
      ) {
        record = records[i];
        dispatchAll(record.removedNodes, 'disconnected', disconnected, connected);
        dispatchAll(record.addedNodes, 'connected', connected, disconnected);
      }
    }
    function dispatchAll(nodes, type, wsin, wsout) {
      for (var
        node,
        event = new Event(type),
        length = nodes.length,
        i = 0; i < length;
        (node = nodes[i++]).nodeType === 1 &&
        dispatchTarget(node, event, type, wsin, wsout)
      );
    }
    function dispatchTarget(node, event, type, wsin, wsout) {
      if (observer.has(node) && !wsin.has(node)) {
        wsout.delete(node);
        wsin.add(node);
        node.dispatchEvent(event);
        /*
        // The event is not bubbling (perf reason: should it?),
        // hence there's no way to know if
        // stop/Immediate/Propagation() was called.
        // Should DOM Level 0 work at all?
        // I say it's a YAGNI case for the time being,
        // and easy to implement in user-land.
        if (!event.cancelBubble) {
          var fn = node['on' + type];
          if (fn)
            fn.call(node, event);
        }
        */
      }
      for (var
        // apparently is node.children || IE11 ... ^_^;;
        // https://github.com/WebReflection/disconnected/issues/1
        children = node.children || [],
        length = children.length,
        i = 0; i < length;
        dispatchTarget(children[i++], event, type, wsin, wsout)
      );
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disconnected);


/***/ }),

/***/ "./node_modules/domconstants/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/domconstants/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UID": () => (/* binding */ UID),
/* harmony export */   "UIDC": () => (/* binding */ UIDC),
/* harmony export */   "UID_IE": () => (/* binding */ UID_IE),
/* harmony export */   "COMMENT_NODE": () => (/* binding */ COMMENT_NODE),
/* harmony export */   "DOCUMENT_FRAGMENT_NODE": () => (/* binding */ DOCUMENT_FRAGMENT_NODE),
/* harmony export */   "ELEMENT_NODE": () => (/* binding */ ELEMENT_NODE),
/* harmony export */   "TEXT_NODE": () => (/* binding */ TEXT_NODE),
/* harmony export */   "SHOULD_USE_TEXT_CONTENT": () => (/* binding */ SHOULD_USE_TEXT_CONTENT),
/* harmony export */   "VOID_ELEMENTS": () => (/* binding */ VOID_ELEMENTS)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */

// Custom
var UID = '-' + Math.random().toFixed(6) + '%';
//                           Edge issue!

var UID_IE = false;

try {
  if (!(function (template, content, tabindex) {
    return content in template && (
      (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>'),
      template[content].childNodes[0].getAttribute(tabindex) == UID
    );
  }(document.createElement('template'), 'content', 'tabindex'))) {
    UID = '_dt: ' + UID.slice(1, -1) + ';';
    UID_IE = true;
  }
} catch(meh) {}

var UIDC = '<!--' + UID + '-->';

// DOM
var COMMENT_NODE = 8;
var DOCUMENT_FRAGMENT_NODE = 11;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;




/***/ }),

/***/ "./node_modules/domdiff/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/domdiff/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/domdiff/esm/utils.js");
/*! (c) 2018 Andrea Giammarchi (ISC) */



const domdiff = (
  parentNode,     // where changes happen
  currentNodes,   // Array of current items/nodes
  futureNodes,    // Array of future items/nodes
  options         // optional object with one of the following properties
                  //  before: domNode
                  //  compare(generic, generic) => true if same generic
                  //  node(generic) => Node
) => {
  if (!options)
    options = {};

  const compare = options.compare || _utils_js__WEBPACK_IMPORTED_MODULE_0__.eqeq;
  const get = options.node || _utils_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  const before = options.before == null ? null : get(options.before, 0);

  const currentLength = currentNodes.length;
  let currentEnd = currentLength;
  let currentStart = 0;

  let futureEnd = futureNodes.length;
  let futureStart = 0;

  // common prefix
  while (
    currentStart < currentEnd &&
    futureStart < futureEnd &&
    compare(currentNodes[currentStart], futureNodes[futureStart])
  ) {
    currentStart++;
    futureStart++;
  }

  // common suffix
  while (
    currentStart < currentEnd &&
    futureStart < futureEnd &&
    compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])
  ) {
    currentEnd--;
    futureEnd--;
  }

  const currentSame = currentStart === currentEnd;
  const futureSame = futureStart === futureEnd;

  // same list
  if (currentSame && futureSame)
    return futureNodes;

  // only stuff to add
  if (currentSame && futureStart < futureEnd) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.append)(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.next)(get, currentNodes, currentStart, currentLength, before)
    );
    return futureNodes;
  }

  // only stuff to remove
  if (futureSame && currentStart < currentEnd) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(
      get,
      currentNodes,
      currentStart,
      currentEnd
    );
    return futureNodes;
  }

  const currentChanges = currentEnd - currentStart;
  const futureChanges = futureEnd - futureStart;
  let i = -1;

  // 2 simple indels: the shortest sequence is a subsequence of the longest
  if (currentChanges < futureChanges) {
    i = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(
      futureNodes,
      futureStart,
      futureEnd,
      currentNodes,
      currentStart,
      currentEnd,
      compare
    );
    // inner diff
    if (-1 < i) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.append)(
        get,
        parentNode,
        futureNodes,
        futureStart,
        i,
        get(currentNodes[currentStart], 0)
      );
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.append)(
        get,
        parentNode,
        futureNodes,
        i + currentChanges,
        futureEnd,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.next)(get, currentNodes, currentEnd, currentLength, before)
      );
      return futureNodes;
    }
  }
  /* istanbul ignore else */
  else if (futureChanges < currentChanges) {
    i = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(
      currentNodes,
      currentStart,
      currentEnd,
      futureNodes,
      futureStart,
      futureEnd,
      compare
    );
    // outer diff
    if (-1 < i) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(
        get,
        currentNodes,
        currentStart,
        i
      );
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(
        get,
        currentNodes,
        i + futureChanges,
        currentEnd
      );
      return futureNodes;
    }
  }

  // common case with one replacement for many nodes
  // or many nodes replaced for a single one
  /* istanbul ignore else */
  if ((currentChanges < 2 || futureChanges < 2)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.append)(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      get(currentNodes[currentStart], 0)
    );
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(
      get,
      currentNodes,
      currentStart,
      currentEnd
    );
    return futureNodes;
  }

  // the half match diff part has been skipped in petit-dom
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
  // accordingly, I think it's safe to skip in here too
  // if one day it'll come out like the speediest thing ever to do
  // then I might add it in here too

  // Extra: before going too fancy, what about reversed lists ?
  //        This should bail out pretty quickly if that's not the case.
  if (
    currentChanges === futureChanges &&
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isReversed)(
      futureNodes,
      futureEnd,
      currentNodes,
      currentStart,
      currentEnd,
      compare
    )
  ) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.append)(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.next)(get, currentNodes, currentEnd, currentLength, before)
    );
    return futureNodes;
  }

  // last resort through a smart diff
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.smartDiff)(
    get,
    parentNode,
    futureNodes,
    futureStart,
    futureEnd,
    futureChanges,
    currentNodes,
    currentStart,
    currentEnd,
    currentChanges,
    currentLength,
    compare,
    before
  );

  return futureNodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domdiff);


/***/ }),

/***/ "./node_modules/domdiff/esm/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/domdiff/esm/utils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "eqeq": () => (/* binding */ eqeq),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "indexOf": () => (/* binding */ indexOf),
/* harmony export */   "isReversed": () => (/* binding */ isReversed),
/* harmony export */   "next": () => (/* binding */ next),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "smartDiff": () => (/* binding */ smartDiff)
/* harmony export */ });
/* harmony import */ var uarray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uarray */ "./node_modules/uarray/esm/index.js");


const append = (get, parent, children, start, end, before) => {
  const isSelect = 'selectedIndex' in parent;
  let noSelection = isSelect;
  while (start < end) {
    const child = get(children[start], 1);
    parent.insertBefore(child, before);
    if (isSelect && noSelection && child.selected) {
      noSelection = !noSelection;
      let {selectedIndex} = parent;
      parent.selectedIndex = selectedIndex < 0 ?
        start :
        uarray__WEBPACK_IMPORTED_MODULE_0__.indexOf.call(parent.querySelectorAll('option'), child);
    }
    start++;
  }
};

const eqeq = (a, b) => a == b;

const identity = O => O;

const indexOf = (
  moreNodes,
  moreStart,
  moreEnd,
  lessNodes,
  lessStart,
  lessEnd,
  compare
) => {
  const length = lessEnd - lessStart;
  /* istanbul ignore if */
  if (length < 1)
    return -1;
  while ((moreEnd - moreStart) >= length) {
    let m = moreStart;
    let l = lessStart;
    while (
      m < moreEnd &&
      l < lessEnd &&
      compare(moreNodes[m], lessNodes[l])
    ) {
      m++;
      l++;
    }
    if (l === lessEnd)
      return moreStart;
    moreStart = m + 1;
  }
  return -1;
};

const isReversed = (
  futureNodes,
  futureEnd,
  currentNodes,
  currentStart,
  currentEnd,
  compare
) => {
  while (
    currentStart < currentEnd &&
    compare(
      currentNodes[currentStart],
      futureNodes[futureEnd - 1]
    )) {
      currentStart++;
      futureEnd--;
    };
  return futureEnd === 0;
};

const next = (get, list, i, length, before) => i < length ?
              get(list[i], 0) :
              (0 < i ?
                get(list[i - 1], -0).nextSibling :
                before);

const remove = (get, children, start, end) => {
  while (start < end)
    drop(get(children[start++], -1));
};

// - - - - - - - - - - - - - - - - - - -
// diff related constants and utilities
// - - - - - - - - - - - - - - - - - - -

const DELETION = -1;
const INSERTION = 1;
const SKIP = 0;
const SKIP_OND = 50;

const HS = (
  futureNodes,
  futureStart,
  futureEnd,
  futureChanges,
  currentNodes,
  currentStart,
  currentEnd,
  currentChanges
) => {

  let k = 0;
  /* istanbul ignore next */
  let minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
  const link = Array(minLen++);
  const tresh = Array(minLen);
  tresh[0] = -1;

  for (let i = 1; i < minLen; i++)
    tresh[i] = currentEnd;

  const nodes = currentNodes.slice(currentStart, currentEnd);

  for (let i = futureStart; i < futureEnd; i++) {
    const index = nodes.indexOf(futureNodes[i]);
    if (-1 < index) {
      const idxInOld = index + currentStart;
      k = findK(tresh, minLen, idxInOld);
      /* istanbul ignore else */
      if (-1 < k) {
        tresh[k] = idxInOld;
        link[k] = {
          newi: i,
          oldi: idxInOld,
          prev: link[k - 1]
        };
      }
    }
  }

  k = --minLen;
  --currentEnd;
  while (tresh[k] > currentEnd) --k;

  minLen = currentChanges + futureChanges - k;
  const diff = Array(minLen);
  let ptr = link[k];
  --futureEnd;
  while (ptr) {
    const {newi, oldi} = ptr;
    while (futureEnd > newi) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }
    while (currentEnd > oldi) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }
    diff[--minLen] = SKIP;
    --futureEnd;
    --currentEnd;
    ptr = ptr.prev;
  }
  while (futureEnd >= futureStart) {
    diff[--minLen] = INSERTION;
    --futureEnd;
  }
  while (currentEnd >= currentStart) {
    diff[--minLen] = DELETION;
    --currentEnd;
  }
  return diff;
};

// this is pretty much the same petit-dom code without the delete map part
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561
const OND = (
  futureNodes,
  futureStart,
  rows,
  currentNodes,
  currentStart,
  cols,
  compare
) => {
  const length = rows + cols;
  const v = [];
  let d, k, r, c, pv, cv, pd;
  outer: for (d = 0; d <= length; d++) {
    /* istanbul ignore if */
    if (d > SKIP_OND)
      return null;
    pd = d - 1;
    /* istanbul ignore next */
    pv = d ? v[d - 1] : [0, 0];
    cv = v[d] = [];
    for (k = -d; k <= d; k += 2) {
      if (k === -d || (k !== d && pv[pd + k - 1] < pv[pd + k + 1])) {
        c = pv[pd + k + 1];
      } else {
        c = pv[pd + k - 1] + 1;
      }
      r = c - k;
      while (
        c < cols &&
        r < rows &&
        compare(
          currentNodes[currentStart + c],
          futureNodes[futureStart + r]
        )
      ) {
        c++;
        r++;
      }
      if (c === cols && r === rows) {
        break outer;
      }
      cv[d + k] = c;
    }
  }

  const diff = Array(d / 2 + length / 2);
  let diffIdx = diff.length - 1;
  for (d = v.length - 1; d >= 0; d--) {
    while (
      c > 0 &&
      r > 0 &&
      compare(
        currentNodes[currentStart + c - 1],
        futureNodes[futureStart + r - 1]
      )
    ) {
      // diagonal edge = equality
      diff[diffIdx--] = SKIP;
      c--;
      r--;
    }
    if (!d)
      break;
    pd = d - 1;
    /* istanbul ignore next */
    pv = d ? v[d - 1] : [0, 0];
    k = c - r;
    if (k === -d || (k !== d && pv[pd + k - 1] < pv[pd + k + 1])) {
      // vertical edge = insertion
      r--;
      diff[diffIdx--] = INSERTION;
    } else {
      // horizontal edge = deletion
      c--;
      diff[diffIdx--] = DELETION;
    }
  }
  return diff;
};

const applyDiff = (
  diff,
  get,
  parentNode,
  futureNodes,
  futureStart,
  currentNodes,
  currentStart,
  currentLength,
  before
) => {
  const live = [];
  const length = diff.length;
  let currentIndex = currentStart;
  let i = 0;
  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        futureStart++;
        currentIndex++;
        break;
      case INSERTION:
        // TODO: bulk appends for sequential nodes
        live.push(futureNodes[futureStart]);
        append(
          get,
          parentNode,
          futureNodes,
          futureStart++,
          futureStart,
          currentIndex < currentLength ?
            get(currentNodes[currentIndex], 0) :
            before
        );
        break;
      case DELETION:
        currentIndex++;
        break;
    }
  }
  i = 0;
  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        currentStart++;
        break;
      case DELETION:
        // TODO: bulk removes for sequential nodes
        if (-1 < live.indexOf(currentNodes[currentStart]))
          currentStart++;
        else
          remove(
            get,
            currentNodes,
            currentStart++,
            currentStart
          );
        break;
    }
  }
};

const findK = (ktr, length, j) => {
  let lo = 1;
  let hi = length;
  while (lo < hi) {
    const mid = ((lo + hi) / 2) >>> 0;
    if (j < ktr[mid])
      hi = mid;
    else
      lo = mid + 1;
  }
  return lo;
}

const smartDiff = (
  get,
  parentNode,
  futureNodes,
  futureStart,
  futureEnd,
  futureChanges,
  currentNodes,
  currentStart,
  currentEnd,
  currentChanges,
  currentLength,
  compare,
  before
) => {
  applyDiff(
    OND(
      futureNodes,
      futureStart,
      futureChanges,
      currentNodes,
      currentStart,
      currentChanges,
      compare
    ) ||
    HS(
      futureNodes,
      futureStart,
      futureEnd,
      futureChanges,
      currentNodes,
      currentStart,
      currentEnd,
      currentChanges
    ),
    get,
    parentNode,
    futureNodes,
    futureStart,
    currentNodes,
    currentStart,
    currentLength,
    before
  );
};

const drop = node => (node.remove || dropChild).call(node);

function dropChild() {
  const {parentNode} = this;
  /* istanbul ignore else */
  if (parentNode)
    parentNode.removeChild(this);
}


/***/ }),

/***/ "./node_modules/domsanitizer/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/domsanitizer/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var domconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domconstants */ "./node_modules/domconstants/esm/index.js");
/*! (c) Andrea Giammarchi - ISC */



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(template) {
  return template.join(domconstants__WEBPACK_IMPORTED_MODULE_0__.UIDC)
          .replace(selfClosing, fullClosing)
          .replace(attrSeeker, attrReplacer);
}

var spaces = ' \\f\\n\\r\\t';
var almostEverything = '[^' + spaces + '\\/>"\'=]+';
var attrName = '[' + spaces + ']+' + almostEverything;
var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';

var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + domconstants__WEBPACK_IMPORTED_MODULE_0__.UIDC + '\\2', 'gi');

function attrReplacer($0, $1, $2, $3) {
  return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}

function replaceAttributes($0, $1, $2) {
  return $1 + ($2 || '"') + domconstants__WEBPACK_IMPORTED_MODULE_0__.UID + ($2 || '"');
}

function fullClosing($0, $1, $2) {
  return domconstants__WEBPACK_IMPORTED_MODULE_0__.VOID_ELEMENTS.test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');
}


/***/ }),

/***/ "./node_modules/domtagger/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/domtagger/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/weakmap */ "./node_modules/@ungap/weakmap/esm/index.js");
/* harmony import */ var _ungap_create_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/create-content */ "./node_modules/@ungap/create-content/esm/index.js");
/* harmony import */ var _ungap_import_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ungap/import-node */ "./node_modules/@ungap/import-node/esm/index.js");
/* harmony import */ var _ungap_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ungap/trim */ "./node_modules/@ungap/trim/esm/index.js");
/* harmony import */ var domsanitizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! domsanitizer */ "./node_modules/domsanitizer/esm/index.js");
/* harmony import */ var umap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! umap */ "./node_modules/umap/esm/index.js");
/* harmony import */ var _walker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walker.js */ "./node_modules/domtagger/esm/walker.js");
// globals


// utils






// local


// the domtagger 🎉
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domtagger);

var parsed = (0,umap__WEBPACK_IMPORTED_MODULE_5__["default"])(new _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__["default"]);

function createInfo(options, template) {
  var markup = (options.convert || domsanitizer__WEBPACK_IMPORTED_MODULE_4__["default"])(template);
  var transform = options.transform;
  if (transform)
    markup = transform(markup);
  var content = (0,_ungap_create_content__WEBPACK_IMPORTED_MODULE_1__["default"])(markup, options.type);
  cleanContent(content);
  var holes = [];
  (0,_walker_js__WEBPACK_IMPORTED_MODULE_6__.parse)(content, holes, template.slice(0), []);
  return {
    content: content,
    updates: function (content) {
      var updates = [];
      var len = holes.length;
      var i = 0;
      var off = 0;
      while (i < len) {
        var info = holes[i++];
        var node = (0,_walker_js__WEBPACK_IMPORTED_MODULE_6__.find)(content, info.path);
        switch (info.type) {
          case 'any':
            updates.push({fn: options.any(node, []), sparse: false});
            break;
          case 'attr':
            var sparse = info.sparse;
            var fn = options.attribute(node, info.name, info.node);
            if (sparse === null)
              updates.push({fn: fn, sparse: false});
            else {
              off += sparse.length - 2;
              updates.push({fn: fn, sparse: true, values: sparse});
            }
            break;
          case 'text':
            updates.push({fn: options.text(node), sparse: false});
            node.textContent = '';
            break;
        }
      }
      len += off;
      return function () {
        var length = arguments.length;
        if (len !== (length - 1)) {
          throw new Error(
            (length - 1) + ' values instead of ' + len + '\n' +
            template.join('${value}')
          );
        }
        var i = 1;
        var off = 1;
        while (i < length) {
          var update = updates[i - off];
          if (update.sparse) {
            var values = update.values;
            var value = values[0];
            var j = 1;
            var l = values.length;
            off += l - 2;
            while (j < l)
              value += arguments[i++] + values[j++];
            update.fn(value);
          }
          else
            update.fn(arguments[i++]);
        }
        return content;
      };
    }
  };
}

function createDetails(options, template) {
  var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
  return info.updates(_ungap_import_node__WEBPACK_IMPORTED_MODULE_2__["default"].call(document, info.content, true));
}

var empty = [];
function domtagger(options) {
  var previous = empty;
  var updates = cleanContent;
  return function (template) {
    if (previous !== template)
      updates = createDetails(options, (previous = template));
    return updates.apply(null, arguments);
  };
}

function cleanContent(fragment) {
  var childNodes = fragment.childNodes;
  var i = childNodes.length;
  while (i--) {
    var child = childNodes[i];
    if (
      child.nodeType !== 1 &&
      _ungap_trim__WEBPACK_IMPORTED_MODULE_3__["default"].call(child.textContent).length === 0
    ) {
      fragment.removeChild(child);
    }
  }
}


/***/ }),

/***/ "./node_modules/domtagger/esm/walker.js":
/*!**********************************************!*\
  !*** ./node_modules/domtagger/esm/walker.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _ungap_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/trim */ "./node_modules/@ungap/trim/esm/index.js");
/* harmony import */ var domconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domconstants */ "./node_modules/domconstants/esm/index.js");






/* istanbul ignore next */
var normalizeAttributes = domconstants__WEBPACK_IMPORTED_MODULE_1__.UID_IE ?
  function (attributes, parts) {
    var html = parts.join(' ');
    return parts.slice.call(attributes, 0).sort(function (left, right) {
      return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
  } :
  function (attributes, parts) {
    return parts.slice.call(attributes, 0);
  }
;

function find(node, path) {
  var length = path.length;
  var i = 0;
  while (i < length)
    node = node.childNodes[path[i++]];
  return node;
}

function parse(node, holes, parts, path) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  var i = 0;
  while (i < length) {
    var child = childNodes[i];
    switch (child.nodeType) {
      case domconstants__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_NODE:
        var childPath = path.concat(i);
        parseAttributes(child, holes, parts, childPath);
        parse(child, holes, parts, childPath);
        break;
      case domconstants__WEBPACK_IMPORTED_MODULE_1__.COMMENT_NODE:
        var textContent = child.textContent;
        if (textContent === domconstants__WEBPACK_IMPORTED_MODULE_1__.UID) {
          parts.shift();
          holes.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            domconstants__WEBPACK_IMPORTED_MODULE_1__.SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ?
              Text(node, path) :
              Any(child, path.concat(i))
          );
        } else {
          switch (textContent.slice(0, 2)) {
            case '/*':
              if (textContent.slice(-2) !== '*/')
                break;
            case '\uD83D\uDC7B': // ghost
              node.removeChild(child);
              i--;
              length--;
          }
        }
        break;
      case domconstants__WEBPACK_IMPORTED_MODULE_1__.TEXT_NODE:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (
          domconstants__WEBPACK_IMPORTED_MODULE_1__.SHOULD_USE_TEXT_CONTENT.test(node.nodeName) &&
          _ungap_trim__WEBPACK_IMPORTED_MODULE_0__["default"].call(child.textContent) === domconstants__WEBPACK_IMPORTED_MODULE_1__.UIDC
        ) {
          parts.shift();
          holes.push(Text(node, path));
        }
        break;
    }
    i++;
  }
}

function parseAttributes(node, holes, parts, path) {
  var attributes = node.attributes;
  var cache = [];
  var remove = [];
  var array = normalizeAttributes(attributes, parts);
  var length = array.length;
  var i = 0;
  while (i < length) {
    var attribute = array[i++];
    var direct = attribute.value === domconstants__WEBPACK_IMPORTED_MODULE_1__.UID;
    var sparse;
    if (direct || 1 < (sparse = attribute.value.split(domconstants__WEBPACK_IMPORTED_MODULE_1__.UIDC)).length) {
      var name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (cache.indexOf(name) < 0) {
        cache.push(name);
        var realName = parts.shift().replace(
          direct ?
            /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ :
            new RegExp(
              '^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")[\\S\\s]*',
              'i'
            ),
            '$1'
        );
        var value = attributes[realName] ||
                      // the following ignore is covered by browsers
                      // while basicHTML is already case-sensitive
                      /* istanbul ignore next */
                      attributes[realName.toLowerCase()];
        if (direct)
          holes.push(Attr(value, path, realName, null));
        else {
          var skip = sparse.length - 2;
          while (skip--)
            parts.shift();
          holes.push(Attr(value, path, realName, sparse));
        }
      }
      remove.push(attribute);
    }
  }
  length = remove.length;
  i = 0;

  /* istanbul ignore next */
  var cleanValue = 0 < length && domconstants__WEBPACK_IMPORTED_MODULE_1__.UID_IE && !('ownerSVGElement' in node);
  while (i < length) {
    // Edge HTML bug #16878726
    var attr = remove[i++];
    // IE/Edge bug lighterhtml#63 - clean the value or it'll persist
    /* istanbul ignore next */
    if (cleanValue)
      attr.value = '';
    // IE/Edge bug lighterhtml#64 - don't use removeAttributeNode
    node.removeAttribute(attr.name);
  }

  // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense?
  var nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    // this used to be like that
    // var script = createElement(node, nodeName);
    // then Edge arrived and decided that scripts created
    // through template documents aren't worth executing
    // so it became this ... hopefully it won't hurt in the wild
    var script = document.createElement(nodeName);
    length = attributes.length;
    i = 0;
    while (i < length)
      script.setAttributeNode(attributes[i++].cloneNode(true));
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
}

function Any(node, path) {
  return {
    type: 'any',
    node: node,
    path: path
  };
}

function Attr(node, path, name, sparse) {
  return {
    type: 'attr',
    node: node,
    path: path,
    name: name,
    sparse: sparse
  };
}

function Text(node, path) {
  return {
    type: 'text',
    node: node,
    path: path
  };
}


/***/ }),

/***/ "./node_modules/hyperhtml-style/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/hyperhtml-style/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var hyperStyle = (function (){'use strict';
  // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/varants.js
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  var hyphen = /([^A-Z])([A-Z]+)/g;
  return function hyperStyle(node, original) {
    return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
  };
  function ized($0, $1, $2) {
    return $1 + '-' + $2.toLowerCase();
  }
  function svg(node, original) {
    var style;
    if (original)
      style = original.cloneNode(true);
    else {
      node.setAttribute('style', '--hyper:style;');
      style = node.getAttributeNode('style');
    }
    style.value = '';
    node.setAttributeNode(style);
    return update(style, true);
  }
  function toStyle(object) {
    var key, css = [];
    for (key in object)
      css.push(key.replace(hyphen, ized), ':', object[key], ';');
    return css.join('');
  }
  function update(style, isSVG) {
    var oldType, oldValue;
    return function (newValue) {
      var info, key, styleValue, value;
      switch (typeof newValue) {
        case 'object':
          if (newValue) {
            if (oldType === 'object') {
              if (!isSVG) {
                if (oldValue !== newValue) {
                  for (key in oldValue) {
                    if (!(key in newValue)) {
                      style[key] = '';
                    }
                  }
                }
              }
            } else {
              if (isSVG)
                style.value = '';
              else
                style.cssText = '';
            }
            info = isSVG ? {} : style;
            for (key in newValue) {
              value = newValue[key];
              styleValue = typeof value === 'number' &&
                                  !IS_NON_DIMENSIONAL.test(key) ?
                                  (value + 'px') : value;
              if (!isSVG && /^--/.test(key))
                info.setProperty(key, styleValue);
              else
                info[key] = styleValue;
            }
            oldType = 'object';
            if (isSVG)
              style.value = toStyle((oldValue = info));
            else
              oldValue = newValue;
            break;
          }
        default:
          if (oldValue != newValue) {
            oldType = 'string';
            oldValue = newValue;
            if (isSVG)
              style.value = newValue || '';
            else
              style.cssText = newValue || '';
          }
          break;
      }
    };
  }
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyperStyle);


/***/ }),

/***/ "./node_modules/hyperhtml-wire/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/hyperhtml-wire/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var Wire = (function (slice, proto) {

  proto = Wire.prototype;

  proto.ELEMENT_NODE = 1;
  proto.nodeType = 111;

  proto.remove = function (keepFirst) {
    var childNodes = this.childNodes;
    var first = this.firstChild;
    var last = this.lastChild;
    this._ = null;
    if (keepFirst && childNodes.length === 2) {
      last.parentNode.removeChild(last);
    } else {
      var range = this.ownerDocument.createRange();
      range.setStartBefore(keepFirst ? childNodes[1] : first);
      range.setEndAfter(last);
      range.deleteContents();
    }
    return first;
  };

  proto.valueOf = function (forceAppend) {
    var fragment = this._;
    var noFragment = fragment == null;
    if (noFragment)
      fragment = (this._ = this.ownerDocument.createDocumentFragment());
    if (noFragment || forceAppend) {
      for (var n = this.childNodes, i = 0, l = n.length; i < l; i++)
        fragment.appendChild(n[i]);
    }
    return fragment;
  };

  return Wire;

  function Wire(childNodes) {
    var nodes = (this.childNodes = slice.call(childNodes, 0));
    this.firstChild = nodes[0];
    this.lastChild = nodes[nodes.length - 1];
    this.ownerDocument = nodes[0].ownerDocument;
    this._ = null;
  }

}([].slice));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wire);


/***/ }),

/***/ "./node_modules/hyperhtml/esm/classes/Component.js":
/*!*********************************************************!*\
  !*** ./node_modules/hyperhtml/esm/classes/Component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component),
/* harmony export */   "setup": () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _ungap_custom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/custom-event */ "./node_modules/@ungap/custom-event/esm/index.js");
/* harmony import */ var _ungap_essential_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/essential-map */ "./node_modules/@ungap/essential-map/esm/index.js");
/* harmony import */ var _ungap_weakmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ungap/weakmap */ "./node_modules/@ungap/weakmap/esm/index.js");




// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function Component() {
  return this; // this is needed in Edge !!!
}

// Component is lazily setup because it needs
// wire mechanism as lazy content
function setup(content) {
  // there are various weakly referenced variables in here
  // and mostly are to use Component.for(...) static method.
  const children = new _ungap_weakmap__WEBPACK_IMPORTED_MODULE_2__["default"];
  const create = Object.create;
  const createEntry = (wm, id, component) => {
    wm.set(id, component);
    return component;
  };
  const get = (Class, info, context, id) => {
    const relation = info.get(Class) || relate(Class, info);
    switch (typeof id) {
      case 'object':
      case 'function':
        const wm = relation.w || (relation.w = new _ungap_weakmap__WEBPACK_IMPORTED_MODULE_2__["default"]);
        return wm.get(id) || createEntry(wm, id, new Class(context));
      default:
        const sm = relation.p || (relation.p = create(null));
        return sm[id] || (sm[id] = new Class(context));
    }
  };
  const relate = (Class, info) => {
    const relation = {w: null, p: null};
    info.set(Class, relation);
    return relation;
  };
  const set = context => {
    const info = new _ungap_essential_map__WEBPACK_IMPORTED_MODULE_1__["default"];
    children.set(context, info);
    return info;
  };
  // The Component Class
  Object.defineProperties(
    Component,
    {
      // Component.for(context[, id]) is a convenient way
      // to automatically relate data/context to children components
      // If not created yet, the new Component(context) is weakly stored
      // and after that same instance would always be returned.
      for: {
        configurable: true,
        value(context, id) {
          return get(
            this,
            children.get(context) || set(context),
            context,
            id == null ?
              'default' : id
          );
        }
      }
    }
  );
  Object.defineProperties(
    Component.prototype,
    {
      // all events are handled with the component as context
      handleEvent: {value(e) {
        const ct = e.currentTarget;
        this[
          ('getAttribute' in ct && ct.getAttribute('data-call')) ||
          ('on' + e.type)
        ](e);
      }},
      // components will lazily define html or svg properties
      // as soon as these are invoked within the .render() method
      // Such render() method is not provided by the base class
      // but it must be available through the Component extend.
      // Declared components could implement a
      // render(props) method too and use props as needed.
      html: lazyGetter('html', content),
      svg: lazyGetter('svg', content),
      // the state is a very basic/simple mechanism inspired by Preact
      state: lazyGetter('state', function () { return this.defaultState; }),
      // it is possible to define a default state that'd be always an object otherwise
      defaultState: {get() { return {}; }},
      // dispatch a bubbling, cancelable, custom event
      // through the first known/available node
      dispatch: {value(type, detail) {
        const {_wire$} = this;
        if (_wire$) {
          const event = new _ungap_custom_event__WEBPACK_IMPORTED_MODULE_0__["default"](type, {
            bubbles: true,
            cancelable: true,
            detail
          });
          event.component = this;
          return (_wire$.dispatchEvent ?
                    _wire$ :
                    _wire$.firstChild
                  ).dispatchEvent(event);
        }
        return false;
      }},
      // setting some property state through a new object
      // or a callback, triggers also automatically a render
      // unless explicitly specified to not do so (render === false)
      setState: {value(state, render) {
        const target = this.state;
        const source = typeof state === 'function' ? state.call(this, target) : state;
        for (const key in source) target[key] = source[key];
        if (render !== false)
          this.render();
        return this;
      }}
    }
  );
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
const lazyGetter = (type, fn) => {
  const secret = '_' + type + '$';
  return {
    get() {
      return this[secret] || setValue(this, secret, fn.call(this, type));
    },
    set(value) {
      setValue(this, secret, value);
    }
  };
};

// shortcut to set value on get or set(value)
const setValue = (self, secret, value) =>
  Object.defineProperty(self, secret, {
    configurable: true,
    value: typeof value === 'function' ?
      function () {
        return (self._wire$ = value.apply(this, arguments));
      } :
      value
  })[secret]
;

Object.defineProperties(
  Component.prototype,
  {
    // used to distinguish better than instanceof
    ELEMENT_NODE: {value: 1},
    nodeType: {value: -1}
  }
);


/***/ }),

/***/ "./node_modules/hyperhtml/esm/hyper/render.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/esm/hyper/render.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/weakmap */ "./node_modules/@ungap/weakmap/esm/index.js");
/* harmony import */ var _ungap_template_tag_arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/template-tag-arguments */ "./node_modules/@ungap/template-tag-arguments/esm/index.js");
/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants.js */ "./node_modules/hyperhtml/esm/shared/constants.js");
/* harmony import */ var _objects_Updates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/Updates.js */ "./node_modules/hyperhtml/esm/objects/Updates.js");






// a weak collection of contexts that
// are already known to hyperHTML
const bewitched = new _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__["default"];

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render() {
  const wicked = bewitched.get(this);
  const args = _ungap_template_tag_arguments__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, arguments);
  if (wicked && wicked.template === args[0]) {
    wicked.tagger.apply(null, args);
  } else {
    upgrade.apply(this, args);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  const type = _shared_constants_js__WEBPACK_IMPORTED_MODULE_2__.OWNER_SVG_ELEMENT in this ? 'svg' : 'html';
  const tagger = new _objects_Updates_js__WEBPACK_IMPORTED_MODULE_3__.Tagger(type);
  bewitched.set(this, {tagger, template: template});
  this.textContent = '';
  this.appendChild(tagger.apply(null, arguments));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./node_modules/hyperhtml/esm/hyper/wire.js":
/*!**************************************************!*\
  !*** ./node_modules/hyperhtml/esm/hyper/wire.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "weakly": () => (/* binding */ weakly),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/weakmap */ "./node_modules/@ungap/weakmap/esm/index.js");
/* harmony import */ var _ungap_template_tag_arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/template-tag-arguments */ "./node_modules/@ungap/template-tag-arguments/esm/index.js");
/* harmony import */ var hyperhtml_wire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hyperhtml-wire */ "./node_modules/hyperhtml-wire/esm/index.js");
/* harmony import */ var _objects_Updates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/Updates.js */ "./node_modules/hyperhtml/esm/objects/Updates.js");







// all wires used per each context
const wires = new _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__["default"];

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
const wire = (obj, type) => obj == null ?
  content(type || 'html') :
  weakly(obj, type || 'html');

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
const content = type => {
  let wire, tagger, template;
  return function () {
    const args = _ungap_template_tag_arguments__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, arguments);
    if (template !== args[0]) {
      template = args[0];
      tagger = new _objects_Updates_js__WEBPACK_IMPORTED_MODULE_3__.Tagger(type);
      wire = wireContent(tagger.apply(tagger, args));
    } else {
      tagger.apply(tagger, args);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
const weakly = (obj, type) => {
  const i = type.indexOf(':');
  let wire = wires.get(obj);
  let id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire)
    wires.set(obj, wire = {});
  return wire[id] || (wire[id] = content(type));
};

// A document fragment loses its nodes 
// as soon as it is appended into another node.
// This has the undesired effect of losing wired content
// on a second render call, because (by then) the fragment would be empty:
// no longer providing access to those sub-nodes that ultimately need to
// stay associated with the original interpolation.
// To prevent hyperHTML from forgetting about a fragment's sub-nodes,
// fragments are instead returned as an Array of nodes or, if there's only one entry,
// as a single referenced node which, unlike fragments, will indeed persist
// wire content throughout multiple renderings.
// The initial fragment, at this point, would be used as unique reference to this
// array of nodes or to this single referenced node.
const wireContent = node => {
  const childNodes = node.childNodes;
  const {length} = childNodes;
  return length === 1 ?
    childNodes[0] :
    (length ? new hyperhtml_wire__WEBPACK_IMPORTED_MODULE_2__["default"](childNodes) : node);
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wire);


/***/ }),

/***/ "./node_modules/hyperhtml/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/hyperhtml/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _classes_Component_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "define": () => (/* binding */ define),
/* harmony export */   "diff": () => (/* reexport safe */ domdiff__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "hyper": () => (/* binding */ hyper),
/* harmony export */   "observe": () => (/* reexport safe */ _objects_Updates_js__WEBPACK_IMPORTED_MODULE_5__.observe),
/* harmony export */   "tagger": () => (/* binding */ tagger),
/* harmony export */   "wire": () => (/* reexport safe */ _hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "default": () => (/* binding */ hyper)
/* harmony export */ });
/* harmony import */ var _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/weakmap */ "./node_modules/@ungap/weakmap/esm/index.js");
/* harmony import */ var _ungap_essential_weakset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/essential-weakset */ "./node_modules/@ungap/essential-weakset/esm/index.js");
/* harmony import */ var domdiff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domdiff */ "./node_modules/domdiff/esm/index.js");
/* harmony import */ var _classes_Component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Component.js */ "./node_modules/hyperhtml/esm/classes/Component.js");
/* harmony import */ var _objects_Intent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/Intent.js */ "./node_modules/hyperhtml/esm/objects/Intent.js");
/* harmony import */ var _objects_Updates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/Updates.js */ "./node_modules/hyperhtml/esm/objects/Updates.js");
/* harmony import */ var _hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hyper/wire.js */ "./node_modules/hyperhtml/esm/hyper/wire.js");
/* harmony import */ var _hyper_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hyper/render.js */ "./node_modules/hyperhtml/esm/hyper/render.js");
/*! (c) Andrea Giammarchi (ISC) */










// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
const bind = context => _hyper_render_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(context);
const define = _objects_Intent_js__WEBPACK_IMPORTED_MODULE_4__["default"].define;
const tagger = _objects_Updates_js__WEBPACK_IMPORTED_MODULE_5__.Tagger.prototype;

hyper.Component = _classes_Component_js__WEBPACK_IMPORTED_MODULE_3__["default"];
hyper.bind = bind;
hyper.define = define;
hyper.diff = domdiff__WEBPACK_IMPORTED_MODULE_2__["default"];
hyper.hyper = hyper;
hyper.observe = _objects_Updates_js__WEBPACK_IMPORTED_MODULE_5__.observe;
hyper.tagger = tagger;
hyper.wire = _hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// exported as shared utils
// for projects based on hyperHTML
// that don't necessarily need upfront polyfills
// i.e. those still targeting IE
hyper._ = {
  WeakMap: _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__["default"],
  WeakSet: _ungap_essential_weakset__WEBPACK_IMPORTED_MODULE_1__["default"]
};

// the wire content is the lazy defined
// html or svg property of each hyper.Component
(0,_classes_Component_js__WEBPACK_IMPORTED_MODULE_3__.setup)(_hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__.content);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ?
    (HTML == null ?
      (0,_hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__.content)('html') :
      (typeof HTML === 'string' ?
        hyper.wire(null, HTML) :
        ('raw' in HTML ?
          (0,_hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__.content)('html')(HTML) :
          ('nodeType' in HTML ?
            hyper.bind(HTML) :
            (0,_hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__.weakly)(HTML, 'html')
          )
        )
      )) :
    ('raw' in HTML ?
      (0,_hyper_wire_js__WEBPACK_IMPORTED_MODULE_6__.content)('html') : hyper.wire
    ).apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/hyperhtml/esm/objects/Intent.js":
/*!******************************************************!*\
  !*** ./node_modules/hyperhtml/esm/objects/Intent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {};
const intents = {};
const keys = [];
const hasOwnProperty = intents.hasOwnProperty;

let length = 0;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

  // used to invoke right away hyper:attributes
  attributes,

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: (intent, callback) => {
    if (intent.indexOf('-') < 0) {
      if (!(intent in intents)) {
        length = keys.push(intent);
      }
      intents[intent] = callback;
    } else {
      attributes[intent] = callback;
    }
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: (object, callback) => {
    for (let i = 0; i < length; i++) {
      let key = keys[i];
      if (hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/hyperhtml/esm/objects/Updates.js":
/*!*******************************************************!*\
  !*** ./node_modules/hyperhtml/esm/objects/Updates.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tagger": () => (/* binding */ Tagger),
/* harmony export */   "observe": () => (/* binding */ observe)
/* harmony export */ });
/* harmony import */ var _ungap_custom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/custom-event */ "./node_modules/@ungap/custom-event/esm/index.js");
/* harmony import */ var _ungap_essential_weakset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/essential-weakset */ "./node_modules/@ungap/essential-weakset/esm/index.js");
/* harmony import */ var _ungap_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ungap/is-array */ "./node_modules/@ungap/is-array/esm/index.js");
/* harmony import */ var _ungap_create_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ungap/create-content */ "./node_modules/@ungap/create-content/esm/index.js");
/* harmony import */ var disconnected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! disconnected */ "./node_modules/disconnected/esm/index.js");
/* harmony import */ var domdiff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! domdiff */ "./node_modules/domdiff/esm/index.js");
/* harmony import */ var domtagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! domtagger */ "./node_modules/domtagger/esm/index.js");
/* harmony import */ var hyperhtml_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hyperhtml-style */ "./node_modules/hyperhtml-style/esm/index.js");
/* harmony import */ var hyperhtml_wire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hyperhtml-wire */ "./node_modules/hyperhtml-wire/esm/index.js");
/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants.js */ "./node_modules/hyperhtml/esm/shared/constants.js");
/* harmony import */ var _classes_Component_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../classes/Component.js */ "./node_modules/hyperhtml/esm/classes/Component.js");
/* harmony import */ var _Intent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Intent.js */ "./node_modules/hyperhtml/esm/objects/Intent.js");
















const componentType = _classes_Component_js__WEBPACK_IMPORTED_MODULE_10__["default"].prototype.nodeType;
const wireType = hyperhtml_wire__WEBPACK_IMPORTED_MODULE_8__["default"].prototype.nodeType;

const observe = (0,disconnected__WEBPACK_IMPORTED_MODULE_4__["default"])({Event: _ungap_custom_event__WEBPACK_IMPORTED_MODULE_0__["default"], WeakSet: _ungap_essential_weakset__WEBPACK_IMPORTED_MODULE_1__["default"]});



// returns an intent to explicitly inject content as html
const asHTML = html => ({html});

// returns nodes from wires and components
const asNode = (item, i) => {
  switch (item.nodeType) {
    case wireType:
      // in the Wire case, the content can be
      // removed, post-pended, inserted, or pre-pended and
      // all these cases are handled by domdiff already
      /* istanbul ignore next */
      return (1 / i) < 0 ?
        (i ? item.remove(true) : item.lastChild) :
        (i ? item.valueOf(true) : item.firstChild);
    case componentType:
      return asNode(item.render(), i);
    default:
      return item;
  }
}

// returns true if domdiff can handle the value
const canDiff = value => 'ELEMENT_NODE' in value;

// borrowed from uhandlers
// https://github.com/WebReflection/uhandlers
const booleanSetter = (node, key, oldValue) => newValue => {
  if (oldValue !== !!newValue) {
    if ((oldValue = !!newValue))
      node.setAttribute(key, '');
    else
      node.removeAttribute(key);
  }
};

const hyperSetter = (node, name, svg) => svg ?
  value => {
    try {
      node[name] = value;
    }
    catch (nope) {
      node.setAttribute(name, value);
    }
  } :
  value => {
    node[name] = value;
  };

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
const invokeAtDistance = (value, callback) => {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(_Intent_js__WEBPACK_IMPORTED_MODULE_11__["default"].invoke(value, callback)).then(callback);
  }
};

// quick and dirty way to check for Promise/ish values
const isPromise_ish = value => value != null && 'then' in value;

// list of attributes that should not be directly assigned
const readOnly = /^(?:form|list)$/i;

// reused every slice time
const slice = [].slice;

// simplifies text node creation
const text = (node, text) => node.ownerDocument.createTextNode(text);

function Tagger(type) {
  this.type = type;
  return (0,domtagger__WEBPACK_IMPORTED_MODULE_6__["default"])(this);
}

Tagger.prototype = {

  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  attribute(node, name, original) {
    const isSVG = _shared_constants_js__WEBPACK_IMPORTED_MODULE_9__.OWNER_SVG_ELEMENT in node;
    let oldValue;
    // if the attribute is the style one
    // handle it differently from others
    if (name === 'style')
      return (0,hyperhtml_style__WEBPACK_IMPORTED_MODULE_7__["default"])(node, original, isSVG);
    // direct accessors for <input .value=${...}> and friends
    else if (name.slice(0, 1) === '.')
      return hyperSetter(node, name.slice(1), isSVG);
    // boolean accessors for <input .value=${...}> and friends
    else if (name.slice(0, 1) === '?')
      return booleanSetter(node, name.slice(1));
    // the name is an event one,
    // add/remove event listeners accordingly
    else if (/^on/.test(name)) {
      let type = name.slice(2);
      if (type === _shared_constants_js__WEBPACK_IMPORTED_MODULE_9__.CONNECTED || type === _shared_constants_js__WEBPACK_IMPORTED_MODULE_9__.DISCONNECTED) {
        observe(node);
      }
      else if (name.toLowerCase()
        in node) {
        type = type.toLowerCase();
      }
      return newValue => {
        if (oldValue !== newValue) {
          if (oldValue)
            node.removeEventListener(type, oldValue, false);
          oldValue = newValue;
          if (newValue)
            node.addEventListener(type, newValue, false);
        }
      };
    }
    // the attribute is special ('value' in input)
    // and it's not SVG *or* the name is exactly data,
    // in this case assign the value directly
    else if (
      name === 'data' ||
      (!isSVG && name in node && !readOnly.test(name))
    ) {
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (node[name] !== newValue && newValue == null) {
            // cleanup on null to avoid silly IE/Edge bug
            node[name] = '';
            node.removeAttribute(name);
          }
          else
            node[name] = newValue;
        }
      };
    }
    else if (name in _Intent_js__WEBPACK_IMPORTED_MODULE_11__["default"].attributes) {
      oldValue;
      return any => {
        const newValue = _Intent_js__WEBPACK_IMPORTED_MODULE_11__["default"].attributes[name](node, any);
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (newValue == null)
            node.removeAttribute(name);
          else
            node.setAttribute(name, newValue);
        }
      };
    }
    // in every other case, use the attribute node as it is
    // update only the value, set it as node only when/if needed
    else {
      let owner = false;
      const attribute = original.cloneNode(true);
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (attribute.value !== newValue) {
            if (newValue == null) {
              if (owner) {
                owner = false;
                node.removeAttributeNode(attribute);
              }
              attribute.value = newValue;
            } else {
              attribute.value = newValue;
              if (!owner) {
                owner = true;
                node.setAttributeNode(attribute);
              }
            }
          }
        }
      };
    }
  },

  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a component, update the content by rendering it
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  any(node, childNodes) {
    const diffOptions = {node: asNode, before: node};
    const nodeType = _shared_constants_js__WEBPACK_IMPORTED_MODULE_9__.OWNER_SVG_ELEMENT in node ? /* istanbul ignore next */ 'svg' : 'html';
    let fastPath = false;
    let oldValue;
    const anyContent = value => {
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = (0,domdiff__WEBPACK_IMPORTED_MODULE_5__["default"])(
              node.parentNode,
              childNodes,
              [text(node, value)],
              diffOptions
            );
          }
          break;
        case 'function':
          anyContent(value(node));
          break;
        case 'object':
        case 'undefined':
          if (value == null) {
            fastPath = false;
            childNodes = (0,domdiff__WEBPACK_IMPORTED_MODULE_5__["default"])(
              node.parentNode,
              childNodes,
              [],
              diffOptions
            );
            break;
          }
        default:
          fastPath = false;
          oldValue = value;
          if ((0,_ungap_is_array__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = (0,domdiff__WEBPACK_IMPORTED_MODULE_5__["default"])(
                  node.parentNode,
                  childNodes,
                  [],
                  diffOptions
                );
              }
            } else {
              switch (typeof value[0]) {
                case 'string':
                case 'number':
                case 'boolean':
                  anyContent({html: value});
                  break;
                case 'object':
                  if ((0,_ungap_is_array__WEBPACK_IMPORTED_MODULE_2__["default"])(value[0])) {
                    value = value.concat.apply([], value);
                  }
                  if (isPromise_ish(value[0])) {
                    Promise.all(value).then(anyContent);
                    break;
                  }
                default:
                  childNodes = (0,domdiff__WEBPACK_IMPORTED_MODULE_5__["default"])(
                    node.parentNode,
                    childNodes,
                    value,
                    diffOptions
                  );
                  break;
              }
            }
          } else if (canDiff(value)) {
            childNodes = (0,domdiff__WEBPACK_IMPORTED_MODULE_5__["default"])(
              node.parentNode,
              childNodes,
              value.nodeType === _shared_constants_js__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT_FRAGMENT_NODE ?
                slice.call(value.childNodes) :
                [value],
              diffOptions
            );
          } else if (isPromise_ish(value)) {
            value.then(anyContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, anyContent);
          } else if ('text' in value) {
            anyContent(String(value.text));
          } else if ('any' in value) {
            anyContent(value.any);
          } else if ('html' in value) {
            childNodes = (0,domdiff__WEBPACK_IMPORTED_MODULE_5__["default"])(
              node.parentNode,
              childNodes,
              slice.call(
                (0,_ungap_create_content__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  [].concat(value.html).join(''),
                  nodeType
                ).childNodes
              ),
              diffOptions
            );
          } else if ('length' in value) {
            anyContent(slice.call(value));
          } else {
            anyContent(_Intent_js__WEBPACK_IMPORTED_MODULE_11__["default"].invoke(value, anyContent));
          }
          break;
      }
    };
    return anyContent;
  },

  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  text(node) {
    let oldValue;
    const textContent = value => {
      if (oldValue !== value) {
        oldValue = value;
        const type = typeof value;
        if (type === 'object' && value) {
          if (isPromise_ish(value)) {
            value.then(textContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, textContent);
          } else if ('text' in value) {
            textContent(String(value.text));
          } else if ('any' in value) {
            textContent(value.any);
          } else if ('html' in value) {
            textContent([].concat(value.html).join(''));
          } else if ('length' in value) {
            textContent(slice.call(value).join(''));
          } else {
            textContent(_Intent_js__WEBPACK_IMPORTED_MODULE_11__["default"].invoke(value, textContent));
          }
        } else if (type === 'function') {
          textContent(value(node));
        } else {
          node.textContent = value == null ? '' : value;
        }
      }
    };
    return textContent;
  }
};


/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ELEMENT_NODE": () => (/* binding */ ELEMENT_NODE),
/* harmony export */   "DOCUMENT_FRAGMENT_NODE": () => (/* binding */ DOCUMENT_FRAGMENT_NODE),
/* harmony export */   "OWNER_SVG_ELEMENT": () => (/* binding */ OWNER_SVG_ELEMENT),
/* harmony export */   "CONNECTED": () => (/* binding */ CONNECTED),
/* harmony export */   "DISCONNECTED": () => (/* binding */ DISCONNECTED)
/* harmony export */ });
// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
const ELEMENT_NODE = 1;
const DOCUMENT_FRAGMENT_NODE = 11;

// SVG related constants
const OWNER_SVG_ELEMENT = 'ownerSVGElement';

// Custom Elements / MutationObserver constants
const CONNECTED = 'connected';
const DISCONNECTED = 'dis' + CONNECTED;


/***/ }),

/***/ "./src/db/index.css":
/*!**************************!*\
  !*** ./src/db/index.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/db/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/db/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/db/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/calendar/index.css":
/*!***********************************!*\
  !*** ./src/ui/calendar/index.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/calendar/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/calendar/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/calendar/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/cores/index.css":
/*!********************************!*\
  !*** ./src/ui/cores/index.css ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/cores/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/cores/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/cores/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/inventory/index.css":
/*!************************************!*\
  !*** ./src/ui/inventory/index.css ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/inventory/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/inventory/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/inventory/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/modal/index.css":
/*!********************************!*\
  !*** ./src/ui/modal/index.css ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/modal/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/modal/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/modal/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/nav/index.css":
/*!******************************!*\
  !*** ./src/ui/nav/index.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/nav/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/nav/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/nav/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/settings/index.css":
/*!***********************************!*\
  !*** ./src/ui/settings/index.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/settings/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/settings/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/ui/settings/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventEmitter */ "./src/eventEmitter/index.js");
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");




/**
 * @module Component
 */

/**
 * Stateful class basis to be extended
 *
 * @export
 * @class Component
 */
class Component {
	/**
	 * Called to initialize state, overridden by child classes
	 *
	 * @readonly
	 * @memberof Component
	 * @example returns {
	 * 	color: 'blue',
	 * 	content: `<span style=${{color: this.state.color}}>Hello</span>`
	 * }
	 */
	get defaultState() {
		return {};
	}

	/**
	 * Return object's state or calls `defaultState` to initialize it.
	 *
	 * @memberof Component
	 * @example `${this.state.color}`
	 */
	get state() {
		return this._state ??= this.defaultState;
	}

	/**
	 * Setting bypasses `setState()` to set state directly
	 *
	 * @param {object} value - state to set
	 * @memberof Component
	 * @example this.state.color = 'red';
	 */
	set state(value) {
		Object.defineProperty(this, '_state', {configurable: true, value: value});
		// this.states.push({...this.state});
	}

	/**
	 * Sets a property in the object's state and then calls the class's
	 *  `render()` funtion
	 *
	 * @param {*} state the property to set
	 * @param {boolean} render optional, defaults to `true`, pass `false`
	 *  to skip `render()`
	 * @example
	 * this.setState({
	 * 	color: 'red',
	 * 	content: `<span style=${{color: this.state.color}}>I'm ${this.state.color}</span>`
	 * });
	 *
	 * this.setState(prevState => {
	 * 	return {
	 * 		...prevState,
	 * 		color = 'red'
	 * 	}
	 * });
	 */
	setState(state, ...args) {
		const newState = typeof state === 'function'
			? state.call(this, this.state, ...args)
			: state;
		this.state = {
			...this.state,
			...newState
		};
		if (!args.render || args.render !== false) this.render();
		return this;
		// const target = this.state;
		// const source = typeof state === 'function' ? state.call(this, target) : state;
		// for (const key in source) target[key] = source[key];
		// if (render !== false) this.render();
		// return this;
	}

	// _states = [{...this.state}]

	// get states() {
	// 	return this._states;
	// }

	// popState() {
	// 	this.states.pop();
	// 	this.state = this.states[this.states.length - 1] || this.defaultState;
	// 	this.render();
	// }

	/**
	 * Called by this.setState() or manually to render state changes.
	 *
	 * @memberof Component
	 * @example return `${this.state.content}`
	 */
	render() {}

	#html;
	get html() {
		return this.#html ??= lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(this);
	}

	#messenger;
	get messenger() {
		return this.#messenger ??= new eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
	}

	adoptState(component) {
		if(!component instanceof Component) throw new Error('Target state must be of a Component.');
		// this._state = component._state;
		// delete this.state;
		// Object.defineProperty(this, 'state', { get function() {
		// 	return component.state;
		// } })
	}

	// Global listener management system wip, unused

	get globalListeners() {
		return this._globalListeners ??= new Map();
	}

	globalListen(id, func, once) {
		try {
			const eventNames = Array.isArray(id) ? id : [id];
			for(const eventName of eventNames) {
				if(typeof eventName !== 'string' && typeof eventName !== 'symbol') {
					throw new Error(`[Component][EventEmitter] eventName must be a string. Type: "${typeof eventName}"`);
				}
				// if(this.globalListeners.has(func)) throw new Error('Already listening!');
				if(once) {
					eventEmitter__WEBPACK_IMPORTED_MODULE_0__.emitter.once(eventName, func);
				} else {
					eventEmitter__WEBPACK_IMPORTED_MODULE_0__.emitter.on(eventName, func);
				}
				let listeners = this.globalListeners.get(eventName);
				if(!listeners) this.globalListeners.set(eventName, listeners = new Set());
				listeners.add(func);
			}
		} catch (error) {
			console.error('[globalListen]', this, error);
		}
	}

	globalListenOnce(id, func) {
		this.globalListen(id, func, true);
	}

	destroyGlobalListeners() {
		try {
			const listeners = [...this.globalListeners.entries()];
			if(!listeners || !listeners.length) return;
			for(const listener of listeners) eventEmitter__WEBPACK_IMPORTED_MODULE_0__.emitter.off(...listener);
		} catch (error) {
			console.warn('Could not clean up listeners!', this, error);
		}
	}

	get onDestroy() {
		return this._onDestroy ??= new Set();
	}

	destroy() {
		// this.destroyGlobalListeners();
		for(const func of [...this.onDestroy]) {
			try {
				func();
			} catch (error) {
				console.warn('Sloppy destroy!');
			}
		}
	}
}

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "CurrencyItem": () => (/* binding */ CurrencyItem),
/* harmony export */   "itemPanel": () => (/* binding */ itemPanel)
/* harmony export */ });
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var eventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventEmitter */ "./src/eventEmitter/index.js");
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var ui_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/settings */ "./src/ui/settings/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/db/index.css");







class Database {
	constructor() {
		this.dbPath = 'db';
		if (ui_settings__WEBPACK_IMPORTED_MODULE_3__.settings.data.has('dbPath')) this.dbPath = ui_settings__WEBPACK_IMPORTED_MODULE_3__.settings.data.get('dbPath');
		if (ui_settings__WEBPACK_IMPORTED_MODULE_3__.settings.data.has('pathCasing')) this.pathCasing = ui_settings__WEBPACK_IMPORTED_MODULE_3__.settings.data.get('pathCasing');

		// TODO get manufacturer info
		// metadata/metadata.json
	}

	async init() {
		this.metadata = await this.getJSON('metadata/metadata.json')
			.catch(error => {
				console.warn(`[skimmer] metadata did not load...`, error);
				this.metadata = {}
			});
		
		this.index = await this.getJSON('index.json')
			.then(response => {
				if (!response || !Array.isArray(response?.types) || !Array.isArray(response?.manifest))
				{
					throw new Error(`[skimmer] index malformed...`)
				}
				return {
					date: new Date(response.date),
					types: new Set(response?.types ?? []),
					manifest: new Map(response?.manifest ?? [])
				}
			})
			.catch(error => {
				console.error(`[skimmer] index did not load...`, error);
				this.index = {
					date: new Date(),
					types: new Set(),
					manifest: new Map()
				}
			});
		if (this.index) console.info(`[skimmer.db.init] "${this.index.manifest.size}" items in index.`);
	}

	async getJSON(path) {
		// console.log(`[db.get] "${path}"`);
		if (!path || typeof path !== 'string')
		{
			console.warn(`[db.get] Bad path! "${path}"`);
			return;
		}
		
		return await fetch(`/${this?.dbPath ?? 'db'}/${this.pathCase(path)}`)
			.then(response => {
				if (response.ok) return response.json();
				console.error(`[db.get] ${response.status} "${this.pathCase(path)}"`)
				return Promise.reject(response);
			});
	}

	get items() {
		return this?._items ?? (this._items = new Map());
	}

	get typeIDs() {
		return this?._typeIDs ?? (this._typeIDs = new Map());
	}

	itemPathToID(path) {
		if (!path || typeof path !== 'string') return;
		try {
			const pathLowercase = path.toLowerCase();
			const pathParts = pathLowercase.split('/');
			if (!pathParts.length) return;

			const fileName = pathParts[pathParts.length-1];
			const name = fileName.substring(0, fileName.length-5); // remove '.json'
			if (name) return name;
		} catch (error) {
			console.error(`[db.itemPathToID] Bad id/path for "${path}"`);
			return '???';
		}
	}

	getItemsIDsByType(type) {
		if (!type || typeof type !== 'string') return;
		if (this.typeIDs.has(type)) return this.typeIDs.get(type);

		if (type === 'Favorites') {
			return new Set([...this.favoriteItemPaths].map(path => this.itemPathToID(path)));
		}

		if (this.index.types.has(type))
		{
			const entries = [...this.index.manifest.values()].filter(entry => entry?.type === type);
			this.typeIDs.set(type, new Set(entries.map(entry => entry?.name ?? 'UNK')));
			return this.typeIDs.get(type);
		}
		console.warn(`[db.getItemsIDsByType] Type not found! "${type}"`);
	}

	getItemManifestByID(id) {
		if (!id || typeof id !== 'string') return;
		if (this.index.manifest.has(id)) return this.index.manifest.get(id);
		console.warn(`[db.getItemManifestByID] Not found! "${id}"`);
	}

	getItemPathByID(id) {
		if (!id || typeof id !== 'string') return;
		const path = this.getItemManifestByID(id)?.path;
		if (path) return path;
		console.warn(`[db.getItemPathByID] Not found! "${id}"`);
	}

	getItemByID(id) {
		if (!id || typeof id !== 'string') return;
		const path = this.getItemPathByID(id);
		if (path)
		{
			// TODO
		}
	}

	getCorePaths() {
		const coreTypes = ['ArmorCore', 'VehicleCore', 'WeaponCore'];
		return coreTypes.map(type => {
			return [...this.getItemsIDsByType(type)].map(entry => entry.path);
		});
	}

	get manufacturers() {
		if (!this.metadata) return new Map();
		return this?._manufacturers ?? (this._manufacturers = new Map(
			this?.metadata?.Manufacturers.map((properties, index) => [index, properties])
		))
	}

	getManufacturerByIndex(index) {
		const defaultMan = {
			"ManufacturerName": "",
			"ManufacturerLogoImage": ""
		}
		if (!index || index === 0) return defaultMan;
		if (this.manufacturers.has(index)) return this.manufacturers.get(index);
		return defaultMan;
	}

	get itemTypes() {
		return this?._types ?? (this._types = new Map([
			['ArmorCoating', 'Coating, Armor'],
			['ArmorHelmet', 'Helmet'],
			['ArmorHelmetAttachment', 'Helmet Attachment'],
			['ArmorVisor', 'Visor'],
			['ArmorLeftShoulderPad', 'Shoulder, Left'],
			['ArmorRightShoulderPad', 'Shoulder, Right'],
			['ArmorGlove', 'Gloves'],
			['ArmorChestAttachment', 'Chest Attachment'],
			['ArmorKneePad', 'Knee Pads'],
			['ArmorWristAttachment', 'Wrist Attachment'],
			['ArmorHipAttachment', 'Hip Attachment'],
			['ArmorEmblem', 'Emblem, Armor'],
			['ArmorFx', 'Armor Effects'],
			['ArmorMythicFx', 'Mythic Effects'],
			['ArmorTheme', 'Theme, Armor'],
			['ArmorCore', 'Core, Armor'],
			['SpartanActionPose', 'Stance'],
			['SpartanBackdropImage', 'Backdrop'],
			['SpartanEmblem', 'Emblem, Nameplate'],
			['WeaponCharm', 'Weapon Charm'],
			['WeaponCoating', 'Coating, Weapon'],
			['WeaponDeathFx', 'Death Effect'],
			['WeaponEmblem', 'Emblem, Weapon'],
			['WeaponTheme', 'Theme, Weapon'],
			['WeaponCore', 'Core, Weapon'],
			['WeaponAlternateGeometryRegion', 'Weapon Model'],
			['VehicleAlternateGeometryRegion', 'Vehicle Model'],
			['VehicleCoating', 'Coating, Vehicle'],
			['VehicleEmblem', 'Emblem, Vehicle'],
			['VehicleTheme', 'Theme, Vehicle'],
			['VehicleCore', 'Core, Vehicle'],
			['HelmetAttachments', 'Helmet Attachment'],
			['LeftShoulderPads', 'Shoulder, Left'],
			['RightShoulderPads', 'Shoulder, Right'],
			['KneePads', 'Knee Pads'],
			['ChestAttachments', 'Chest Attachments'],
			['WristAttachments', 'Wrist Attachments'],
			['HipAttachments', 'Hip Attachments'],
			['WeaponCharms', 'Weapon Charms'],
			['DeathFx', 'Death Effects'],
			['AlternateGeometryRegions', 'Models'],
			['MythicFx', 'Mythic Effects'],
			['AiColor', 'AI Color'],
			['AiModel', 'AI Model'],
			['AiTheme', 'Theme, AI'],
			['AiCore', 'Core, AI']
		]))
	}

	getItemType(name) {
		if (name && this.itemTypes.has(name)) return this.itemTypes.get(name);
		return name;
	}

	async showItemPanelByPath(path, skipState) {
		const item = new Item(path);
		const response = await item?.init();
		if (response) itemPanel.displayItem(item, skipState);
	}

	pathCase(path) {
		if (!path || typeof path !== 'string') return '';
		return `${(this?.pathCasing ?? true) ? path.toLowerCase() : path}`
	}

	get favoriteItemPaths() {
		if (this?._favoriteItemPaths) return this._favoriteItemPaths;
		const stored = localStorage.getItem('userFavorites');
		if (!stored) return (this._favoriteItemPaths = new Set());
		// console.log('stored!')
		// TODO process for is a path? etc
		const paths = JSON.parse(stored);
		if (!Array.isArray(paths)) return (this._favoriteItemPaths = new Set());
		return (this._favoriteItemPaths = new Set(paths.map(path => path.toLowerCase())));
	}

	toggleFavorite(path) {
		console.log('fav', path);
		if (!path) return;
		if (this.favoriteItemPaths.has(`${path}`))
		{
			console.info(`[skimmer] Removing favorite path ${path}`);
			this.favoriteItemPaths.delete(`${path}`);
		} else {
			console.info(`[skimmer] Adding favorite path ${path}`);
			this.favoriteItemPaths.add(`${path}`);
		}

		localStorage.setItem('userFavorites', JSON.stringify([...this.favoriteItemPaths]));
		console.warn(localStorage.getItem('userFavorites'))
		eventEmitter__WEBPACK_IMPORTED_MODULE_1__.emitter.emit('favoriteItemPaths', `${path}`)
	}
}

const db = new Database();



class Item extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor(path) {
		super();
		if (!path || path.length < 10) return console.error(`[Item] Bad path ${path}`);
		const pathLowercase = path.toLowerCase();
		if (db.items.has(pathLowercase))
		{
			// console.warn('[skimmer][db.item] Duplicate', path);
			return db.items.get(pathLowercase);
		}
		this.path = pathLowercase;
		db.items.set(`${pathLowercase}`, this);
	}

	get id() {
		return this?._id ?? (this._id = db.itemPathToID(this.path));
	}

	get name() {
		return this?.data?.CommonData?.Title ?? this.id;
	}

	get seasonNumber() {
		const season = this?.data?.CommonData?.Season;
		if (!season || typeof season !== 'string') return '0';
		const split = season.split(' ');
		if (split && split?.[1]) return parseInt(split[1]);
		return '0';
	}

	async getName() {
		await this.init();
		return this?.data?.CommonData?.Title ?? this.id;
	}

	get parentPaths() {
		if (!this?.data?.CommonData?.ParentPaths?.length) return;
		return this?._parentPaths ?? (this._parentPaths = new Set([...this?.data?.CommonData?.ParentPaths.map(parent => parent?.Path)]));
	}

	get manufacturerName() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId)?.ManufacturerName ?? '';
	}

	get manufacturerImage() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId)?.ManufacturerLogoImage ?? '';
	}

	get defaultState() {
		return {
			expand: false
		};
	}

	async init() {
		if (this.data)
		{
			await this.data;
			return this;
		}
		try {
			this.data = db.getJSON(this.path) // TODO need to get rid of this await. errors with itempanel on refresh
				.then(res => this.data = res);
			await this.data;
		} catch (error) {
			console.error(`[Item.init]`, error);
			return false;
		}
		return this;
	}

	async render() {
		console.warn('render', this);
	}

	async renderIcon(id, {
		itemTypeIcon = false
	} = {}) {
		await this.init();
		return lib_HTML__WEBPACK_IMPORTED_MODULE_2__.HTML.wire(this, `:${id ?? 'icon'}`)`
			<button
				class=${
					`dbItem dbItemIcon ${this?.data?.CommonData?.Type ?? 'defaultType'}${
						this?.data?.CommonData?.Quality ? ` ${this?.data?.CommonData?.Quality?.toLowerCase?.() ?? ''}` : ''
						}${
						this?.data?.CommonData?.Type === 'SpartanBackdropImage' ? ' invert-hover' : ''
						}`
				}
				onclick=${() => this.showItemPanel()}
				style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.imagePath)})`}}
			>
				<span>${this.name ?? '???'}</span>
				${itemTypeIcon ? this.renderItemTypeIcon() : ''}
				${this.seasonNumber > 1 ? lib_HTML__WEBPACK_IMPORTED_MODULE_2__.HTML.wire(this, ':seasonIcon')`<div
						class="season-icon"
						style=${{webkitMaskImage: `url(seasons.svg#${this.seasonNumber ?? 'default'})`}}
					></div>` : ''
				}
			</button>
		`;
	}

	get itemTypeIcons() {
		return this?._itemTypeIcons ?? (this._itemTypeIcons = new Set([
			'ArmorCoating',
			'WeaponCoating'
		]));
	}

	async renderItemTypeIcon() {
		const path = this?.data?.CommonData?.ParentPaths?.[0]?.Path ?? this?.data?.CommonData?.ParentTheme ?? '';
		const type = this?.data?.CommonData?.Type;
		if (!path || !this.itemTypeIcons.has(type)) return '';
		if (type && type === 'WeaponCoating')
		{
			const parent = await new Item(path).getImagePath();
			const imagePath = `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(parent)})`;
			return lib_HTML__WEBPACK_IMPORTED_MODULE_2__.HTML.wire(this, `:itemType-${path}`)`
				<div
					class=${`item-type-icon ${this?.data?.CommonData?.Type ?? 'default-type'}`}
					style=${{webkitMaskImage: imagePath, maskImage: imagePath}}
				></div>
			`;
		}
		if (type && type === 'ArmorCoating')
		{
			let svgId = 'ArmorCoating';
			switch (path) {
				case 'Inventory/Armor/Themes/007-001-olympus-c13d0b38.json':
					svgId = 'MK7'
					break;
				case 'Inventory/Armor/Themes/007-001-reach-2564121f.json':
					svgId = 'MK5'
					break;
				case 'Inventory/Armor/Themes/007-001-samurai-55badb14.json':
					svgId = 'YOROI'
					break;
			
				default:
					break;
			}
			return lib_HTML__WEBPACK_IMPORTED_MODULE_2__.HTML.wire(this, `:itemType-${performance.now()}`)`
				<div
					class=${`item-type-icon ${this?.data?.CommonData?.Type ?? 'default-type'}`}
					style=${{backgroundImage: `url(items.svg#${svgId ?? 'default'})`}}
				></div>
			`;
		}
	}

	get imagePath() {
		let imagePath = '';
		const displayPath = this?.data?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
		if (displayPath && typeof displayPath === 'string') {
			imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
		}

		return imagePath;
	}

	async getImagePath() {
		if (this?._imagePath) return this._imagePath;
		await this.init();
		let imagePath = '';
		const displayPath = this?.data?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
		if (displayPath && typeof displayPath === 'string') {
			imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
		}

		return (this._imagePath = imagePath);
	}

	async getParentItem() {
		if (this?._parentItem) return this._parentItem;
		if (this?.data?.CommonData?.ParentTheme)
		{
			this._parentItem = new Item(this?.data?.CommonData?.ParentTheme);
			await this._parentItem.init();
			return this._parentItem;
		}
		// const test = async path => `<a class="parentSocket" href=${`#${path}`}>${await new Item(path).getName()}</a>`
	}

	get icon() {
		return this?._icon ?? (this._icon = this.renderIcon())
	}

	showItemPanel() {
		itemPanel.displayItem(this);
	}
}

class CurrencyItem extends Item {
	get currencies() {
		return this?._currencies ?? (this._currencies = new Map([
			['currency/currencies/rerollcurrency.json', {
				mediaPath: 'progression/currencies/1104-000-data-pad-e39bef84-sm.png',
				name: 'Challenge Swap'
			}],
			['currency/currencies/xpgrant.json', {
				mediaPath: 'progression/currencies/1102-000-xp-grant-c77c6396-sm.png',
				name: 'XP Grant'
			}],
			['currency/currencies/xpboost.json', {
				mediaPath: 'progression/currencies/1103-000-xp-boost-5e92621a-sm.png',
				name: 'XP Boost'
			}],
			['currency/currencies/cr.json', {
				mediaPath: 'progression/Default/default.png',
				name: 'cR'
			}]
		]))
	}

	get currency() {
		const path = this.path.toLowerCase();
		if (this.currencies.has(path)) return this.currencies.get(path);
		return {
			mediaPath: 'progression/Default/default.png',
			name: 'Unknown Currency'
		}
	}

	get name() {
		return this.currency.name;
	}

	get imagePath() {
		return this.currency.mediaPath;
	}
}

class ItemPanel extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	get defaultState() {
		return {
			visible: false,
			item: {},
			pretty: true
		};
	}

	hide() {
		this.setState({visible: false});
		history.pushState(null, 'Halosets', `#`);
	}

	toggleVisibility() {
		this.setState({visible: !this.state.visible});
	}

	displayItem(item, skipState) {
		// check if is of class Item...
		if (skipState) {
			history.replaceState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		} else {
			history.pushState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		}
		
		this.setState({
			item,
			visible: true
		});
	}

	render() {
		if (this.state.visible) {
			const item = this.state.item.data;

			let imagePath = '';
			const displayPath = item?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
			if (displayPath && typeof displayPath === 'string') {
				imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
			}

			return lib_HTML__WEBPACK_IMPORTED_MODULE_2__.HTML.bind(document.querySelector('.js--item-panel'))`
				<div
					class="dbItemPanel_clickout"
					onclick=${() => this.hide()}
				></div>
				<div
					class="dbItemPanel_wrapper"
				>
					<header>
						<div
							class="item-img"
							style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(imagePath)})`}}
						></div>
						<div class=${`dbItemPanel_titles${item?.CommonData?.Quality ? ` ${item.CommonData.Quality?.toLowerCase?.()}` : ''}`}>
							<h2>${this.state.item?.data?.CommonData?.Title ?? 'Item'}</h2>
							<h3>${this.state.item?.data?.CommonData?.Description ?? '...'}</h3>
						</div>
						<button
							class=${'favorite'}
							onclick=${() => {
								if (!this.state.item?.data?.CommonData) return;
								db.toggleFavorite(this.state.item.path);
								this.render();
							}}
							style=${{backgroundImage: `url(items.svg#${db.favoriteItemPaths.has(this.state.item.path) ? 'favored' : 'unfavored'})`}}
						></button>
					</header>
					<div class="item-info_wrapper">
						<div class="item-badges">
							<div class="badge">
								<div
									class="badge-svg"
									style=${{backgroundImage: `url(seasons.svg#${this.state.item.seasonNumber ?? 'default'})`}}
								></div>
								<span>${this.state.item?.data?.CommonData?.Season ?? 'Season'}</span>
							</div>
							<div class="badge">
								<div
									class="badge-svg"
									data-icon=${this.state.item?.data?.CommonData?.Type ?? 'default'}
									style=${{backgroundImage: `url(items.svg#${this.state.item?.data?.CommonData?.Type ?? 'default'})`}}
								></div>
								<span class="badge">${db.getItemType(this.state.item?.data?.CommonData?.Type) ?? 'Item'}</span>
							</div>
							<div class="badge">
								<div
									class="badge-icon"
									style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.state.item?.manufacturerImage)})`}}
								></div>
								<span class="badge">${this.state.item?.manufacturerName ?? ''}</span>
							</div>
						</div>
						<span class="attribute">${this.state.item?.data?.CommonData?.CustomAvailability ?? null}</span>
						<span class="attribute">
							${this.state.item?.parentPaths ? `Applies to: ` : ''}
							${[...this.state.item?.parentPaths ?? []].map(async path => `<a class="parentSocket" href=${`#${path}`}>${await new Item(path).getName()}</a>`)}
						</span>
					</div>
					<div class="json-info_wrapper">
						<span class="dbItemPanel_path">Share link: <a href=${`/#${this.state.item?.path ?? ''}`}>${this.state.item?.path ?? 'UNK'}</a></span>
						<button
							onclick=${() => this.setState({pretty: !this.state.pretty})}
						>${this.state.pretty ? 'raw' : 'pretty'}</button>
					</div>
					<pre class="dbItemPanel_json">${{html: this.state.pretty ? this.prettyJson(this.state?.item?.data ?? {}) : JSON.stringify(this.state.item?.data, null, "\t")}}</pre>
				</div>
			`;
			// <pre class="dbItemPanel_json">${JSON.stringify(this.state.item?.data, null, "\t")}</pre>
									// style=${{"maskImage": `url("/assets/icons.svg")`}}
		}
		return lib_HTML__WEBPACK_IMPORTED_MODULE_2__.HTML.bind(document.querySelector('.js--item-panel'))``;
	}

	prettyJson(json) {
		return JSON.stringify(json, (key, value) => {
			if (typeof value === 'string' && value.length > 10 && value.substring(value.length -5) === '.json')
			{
				return `<a href=${`#${value}`}>${value}</a>`;
			}
			return value;
		}, '\t');
	}
}

const itemPanel = new ItemPanel();

/***/ }),

/***/ "./src/eventEmitter/index.js":
/*!***********************************!*\
  !*** ./src/eventEmitter/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* binding */ EventEmitter),
/* harmony export */   "emitter": () => (/* binding */ emitter)
/* harmony export */ });
/**
 * @module EventEmitter
 */

/**
 * Stores listener callbacks and executes them when a string matching event is emitted
 *
 * @export
 * @class EventEmitter
 * @see Based on code by Saul van der Walt https://github.com/SaulDoesCode
 */
class EventEmitter {
	constructor() {
		this.listeners = new Map();
	}

	/**
	 * Repeatable event
	 *
	 * @param {string} eventName
	 * @param {*} func
	 * @param {boolean} [once=false] option, prefer calling `EventEmitter.once()`
	 * @chainable
	 * @memberof EventEmitter
	 */
	on(eventNames, func, once = false) {
		eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
		for(const eventName of eventNames) {
			if(typeof eventName !== 'string' && typeof eventName !== 'symbol') {
				throw new Error(`[EventEmitter] eventName must be a string. Type: "${typeof eventName}"`);
			}
			let listeners = this.listeners.get(eventName);
			if(!listeners) this.listeners.set(eventName, listeners = new Set());
			func.once = once;
			listeners.add(func);
		}
		return this;
	}

	// TODO onAny()

	// TODO offAny()

	/**
	 * Event is called once, then the listener is removed after event is emitted
	 *
	 * @param {string} eventName
	 * @param {*} func
	 * @chainable
	 * @memberof EventEmitter
	 */
	once(eventName, func) {
		this.on(eventName, func, true);
		return this;
	}

	/**
	 * Remove a callback from a listener
	 *
	 * @param {string} eventName
	 * @param {*} func
	 * @chainable
	 * @memberof EventEmitter
	 */
	off(eventName, func) {
		const list = this.listeners.get(eventName);
		if(!list) return;
		const funcs = Array.isArray(func) ? func : [func];
		for(const listener of funcs) list.delete(listener);
		if(!list.size) this.listeners.delete(eventName);
		return this;
	}

	clear(eventName) {
		if(this.listeners.has(eventName)) this.listeners.delete(eventName);
		return this;
	}

	/**
	 *
	 *
	 * @param {string} eventName
	 * @param {*} data passed to listener
	 * @returns {Promise}
	 * @memberof EventEmitter
	 */
	async emit(eventName, ...data) {
		if(!this.listeners.has(eventName)) return;
		const listeners = [...this.listeners.get(eventName)];
		await Promise.all(listeners.map(async listener => {
			await listener(...data);
			if(listener.once) this.off(eventName, listener);
			return;
		}));
		return this;
	}
}

/**
 * Eventbus that can be imported to any module for shared events
 *
 * @export
 * @class EventEmitter
 */
const emitter = new EventEmitter();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var eventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventEmitter */ "./src/eventEmitter/index.js");
/* harmony import */ var ui_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/nav */ "./src/ui/nav/index.js");
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! db */ "./src/db/index.js");
/* harmony import */ var ui_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/calendar */ "./src/ui/calendar/index.js");
/* harmony import */ var ui_cores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui/cores */ "./src/ui/cores/index.js");
/* harmony import */ var ui_inventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui/inventory */ "./src/ui/inventory/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");










console.log('hello world');

lib_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML.bind(document.querySelector('.js--main'))`
	<div>Loading...</div>
`;

// await fetch('/db/entries/armor-core-list.json')
// 	.then(response => response.json())
// 	.then(data => console.log(data))

// db.init();

class App {
	async init() {
		// this.entries = [
		// 	inventory.init(),
		// 	armorCores.init(),
		// 	coreViewer.init()
		// ]

		// Promise.all(this.entries)
		// 	.then(() => this.render())
		// 	.then(() => this.parseUri());
		await db__WEBPACK_IMPORTED_MODULE_3__.db.init();
		await ui_inventory__WEBPACK_IMPORTED_MODULE_6__.inventory.init();
		ui_cores__WEBPACK_IMPORTED_MODULE_5__.coreViewer.init()
		ui_calendar__WEBPACK_IMPORTED_MODULE_4__.calendar.init()
			.then(() => this.parseUri());
		this.render();
		// this.parseUri();
		
		window.addEventListener('popstate', (event) => {
			console.log('popstate', event.state);
			if (event?.state?.path) db__WEBPACK_IMPORTED_MODULE_3__.db.showItemPanelByPath(event.state.path, true);
		});
		window.addEventListener('hashchange', (event) => {
			const hash = window.location.hash?.substring?.(1);
			if (hash && typeof hash === 'string' && hash.length > 6 && hash.substring(hash.length -5) === '.json')
			{
				db__WEBPACK_IMPORTED_MODULE_3__.db.showItemPanelByPath(hash, true);
			}
		});
	}

	async render() {
		lib_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML.bind(document.querySelector('.js--main'))`
			${ui_nav__WEBPACK_IMPORTED_MODULE_2__.headerNav.render()}
			${ui_cores__WEBPACK_IMPORTED_MODULE_5__.coreViewer.render()}
			${ui_calendar__WEBPACK_IMPORTED_MODULE_4__.calendar.render()}
			${ui_inventory__WEBPACK_IMPORTED_MODULE_6__.inventory.render()}
		`;
	}

	parseUri() {
		const hash = window.location.hash?.substring?.(1);
		if (hash && typeof hash === 'string' && hash.substring(hash.length-5, hash.length) === '.json') {
			try {
				db__WEBPACK_IMPORTED_MODULE_3__.db.showItemPanelByPath(hash, true);
			} catch (error) {
				console.error(`[skimmer][parseUri]`, error)
			}
		} else if (hash && typeof hash === 'string') {
			const el = document.querySelector(`#${hash}`);
			if (el)
			{
				el.scrollIntoView();
			}
		}
	}
}

const app = new App();
app.init();

/***/ }),

/***/ "./src/lib/HTML/index.js":
/*!*******************************!*\
  !*** ./src/lib/HTML/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTML": () => (/* binding */ HTML),
/* harmony export */   "wire": () => (/* binding */ wire),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var hyperhtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperhtml */ "./node_modules/hyperhtml/esm/index.js");

hyperhtml__WEBPACK_IMPORTED_MODULE_0__["default"].placeholders = {
	
};
const HTML = hyperhtml__WEBPACK_IMPORTED_MODULE_0__["default"];
const { wire, bind } = hyperhtml__WEBPACK_IMPORTED_MODULE_0__["default"];
const html = (...args) => hyperhtml__WEBPACK_IMPORTED_MODULE_0__["default"].wire()(...args);

/***/ }),

/***/ "./src/ui/about/index.js":
/*!*******************************!*\
  !*** ./src/ui/about/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/component/index.js");



class About extends component__WEBPACK_IMPORTED_MODULE_1__.Component {
	constructor() {
		super();
		this.links = [];
	}
	render() {
		return this.html`
		<p>
			<span>Cylix is a compendium of items found within the game Halo Infinite.</span><br><br>
			<span>All information presented is generated from the game API and is subject to change. As such it may not accurately reflect future content and can not be used as an authoritative source.</span><br><br>
			<span>This site is not operated by nor affiliated with Microsoft and 343 Industries.</span><br><br>
			<span>This site displays content owned or licensed by Microsoft for the purpose of education and information archiving.</span><br><br><br>
			<span>The original assets (e.g. code) used for this website, not associated with Microsoft, are available under the ISC license. To contribute, report issues, or contact me, please visit the <a href="https://github.com/Gasgira/gasgira.github.io" target="_blank" rel="noopener noreferrer">GitHub repository</a> for this project. All contributions must be made under the same license and terms.</span><br><br>
		</p>
			<pre>ISC License

Copyright (c) 2022 Kwatzy

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.</pre>
		`;
	}
}

const about = new About();

/***/ }),

/***/ "./src/ui/calendar/index.js":
/*!**********************************!*\
  !*** ./src/ui/calendar/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendar": () => (/* binding */ calendar)
/* harmony export */ });
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db */ "./src/db/index.js");
/* harmony import */ var urlParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urlParams */ "./src/urlParams/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/ui/calendar/index.css");







class Calendar extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	async init() {
		const calendarPath = 'Calendars/Seasons/SeasonCalendar.json';
		this.data = await db__WEBPACK_IMPORTED_MODULE_2__.db.getJSON(calendarPath);
		this.events = [];
		this.operations = [];

		this.data?.Seasons?.forEach(async season => {
			const path = season.OperationTrackPath;
			if (!path) return;
			if (!this.rewardTracks.has(path))
			{
				const rewardTrack = new RewardTrack(path, true);
				this.rewardTracks.set(`${path}`, rewardTrack);
				rewardTrack.addDates(season?.StartDate?.ISO8601Date, season?.EndDate?.ISO8601Date);

				this.operations.push({
					type: 'operation',
					startDate: season?.StartDate?.ISO8601Date,
					endDate: season?.EndDate?.ISO8601Date,
					rewardTrack
				});
			}
		});
		const launchDate = new Date('2021-11-15T08:00:00');
		const today = new Date();
		let upcoming = false;
		this.data?.Events?.forEach(ritual => {
			const path = ritual?.RewardTrackPath;
			// console.log(path)
			if (!path) return;
			const startDate = new Date(ritual?.StartDate?.ISO8601Date);
			const endDate = new Date(ritual?.EndDate?.ISO8601Date);

			let isNext = false;
			let isPast = today > endDate ? true : false;
			if (startDate > today && !upcoming)
			{
				isNext = true;
				upcoming = true;
			}

			if (!this.rewardTracks.has(path))
			{
				if (!(startDate < launchDate))
				{
					const rewardTrack = new RewardTrack(path, false);
					this.rewardTracks.set(`${path}`, rewardTrack);
					rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);
	
					this.events.push({
						type: 'ritual',
						startDate: ritual?.StartDate?.ISO8601Date,
						endDate: ritual?.EndDate?.ISO8601Date,
						rewardTrack,
						isNext,
						isPast
					});
				}
			} else {
				const rewardTrack = this.rewardTracks.get(ritual.RewardTrackPath);
				rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);

				this.events.push({
					type: 'ritual',
					startDate: ritual?.StartDate?.ISO8601Date,
					endDate: ritual?.EndDate?.ISO8601Date,
					rewardTrack,
					isNext,
					isPast
				});
			}
		});

		// this.rewardTracks = [...this.rewardTrackPaths.values()].map(path => new RewardTrack(path));

		// console.log('[skimmer] rewardTracks', this.rewardTracks);
		this.render();
		Promise.allSettled([...this?.rewardTracks.values()].map(rewardTrack => rewardTrack.init()))
			.then(() => {
				this.render();
				this.renderEventList();
				const paramEvent = urlParams__WEBPACK_IMPORTED_MODULE_3__.urlParams.getSecionSetting('calendar');
				if (paramEvent) this.showRewardTrackByName(paramEvent);
			})
		return this;
	}

	get rewardTracks() {
		return this?._rewardTracks ?? (this._rewardTracks = new Map());
	}

	async render() {
		return this.html`
			<div class="mica_viewer calendar_wrapper" id="season-calendar">
				<header class="mica_header-strip"><a class="mica_header-anchor" href="#season-calendar"><h2>Season Calendar</h2></a><span class="header-notice">Note: content and dates subject to change.</span></header>
				<div class="mica_main-content">
					<nav><ul class="mica_nav-list">
						${this.renderEventList()}
					</ul></nav>
					${this.state?.rewardTrack?.render() ?? this.calendar()}
				</div>
			</div>
		`;
		// ${{html: this.state?.rewardTrack ? '' : '<div class="calendar-placeholder">CHOOSE AN EVENT</div>'}}
	}

	renderEventList() {
		return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(this, ':list')`
			<li
			><button
				onclick=${() => this.showCalendar()}
				class=${!this.state?.rewardTrack ? 'active' : null}
			>
				<span>Timeline</span>
			</button></li>
			${[...this?.rewardTracks.values()].map(rewardTrack => lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(rewardTrack)`
				<li
					class=${rewardTrack.isSeason ? 'season' : null}
				><button
					onclick=${() => this.showRewardTrack(rewardTrack)}
					class=${this.state?.rewardTrack === rewardTrack ? 'active' : null}
				>
					<span>${rewardTrack?.name}</span>
				</button></li>
			`)}
		`;
	}

	daysLeftInSeason() {
		try {
			const operation = this?.operations?.[0];
			if (operation)
			{
				const today = new Date();
				const endDate = new Date(operation?.endDate);
				const dayMS = 24 * 60 * 60 * 1000;

				const days = Math.round(Math.abs((today - endDate) / dayMS));
				return days;
			}
		} catch (error) {
			console.error('daysLeftInSeason', error);
			return 0
		}
	}

	calendar() {
		return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(this, ':calendar')`
		<div class="reward-track_wrapper">
			<span>Season 1 // ${this.daysLeftInSeason()} days remaining</span>
			<div class="timeline_wrapper">
				<ul class="timeline_list operations">
					${this?.operations?.map(event => {
						let active = false;
						let startDate = new Date(event.startDate);
						const launchDate = new Date('2021-11-15T08:00:00');
						if (startDate < launchDate) startDate = launchDate;
						const endDate = new Date(event.endDate);
						endDate.setDate(endDate.getDate() - 1);

						const today = new Date();
						if (startDate <= today && new Date(event.endDate) >= today) active = true;
						return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(event)`
							<li
								class=${`timeline-event ${event?.type ?? 'ritual'}${active ? ' active' : ''}`}
							>
								<div
									class="event-bg"
									style=${{backgroundImage: `url(/${db__WEBPACK_IMPORTED_MODULE_2__.db.dbPath ?? 'db'}/images/${db__WEBPACK_IMPORTED_MODULE_2__.db.pathCase(event.rewardTrack?.data?.SummaryImagePath)})`}}
								></div>
								<button
									onclick=${() => this.showRewardTrack(event.rewardTrack)}
								>
									<span class="date-range">
									${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
									${' - '}${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
									</span>
									<span class="event-name">${event.rewardTrack.name}</span>
								</button>
							</li>
						`;
					}) ?? 'Could not load events...'}
				</ul>
				<ul class="timeline_list rituals">
					${{html: this?.events ? '' : '<div class="timeline-placeholder">Loading timeline...</div>'}}
					${this?.events?.map(event => {
						let active = false;
						let startDate = new Date(event.startDate);
						const launchDate = new Date('2021-11-15T08:00:00');
						if (startDate < launchDate) startDate = launchDate;
						const endDate = new Date(event.endDate);
						endDate.setDate(endDate.getDate() - 1);

						const today = new Date();
						if (startDate <= today && new Date(event.endDate) >= today) active = true;
						return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(event)`
							<li
								class=${`timeline-event ${event?.type ?? 'ritual'}${active ? ' active' : ''}`}
							>
								<div
									class=${`event-bg${event.isPast ? ' past' : ''}`}
									style=${{backgroundImage: `url(/${db__WEBPACK_IMPORTED_MODULE_2__.db.dbPath ?? 'db'}/images/${db__WEBPACK_IMPORTED_MODULE_2__.db.pathCase(event.rewardTrack?.data?.SummaryImagePath)})`}}
								></div>
								<button
									onclick=${() => this.showRewardTrack(event.rewardTrack)}
								>
									<span class="date-range">
										${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
										${' - '}${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
										<br><span class="upcoming">${event.isNext ? 'Up Next' : ''}</span>
									</span>
									<span class="event-name">${event.rewardTrack.name}</span>
								</button>
							</li>
						`;
					}) ?? 'Could not load events...'}
				</ul>
			</div>
		</div>
		`;
	}

	showRewardTrack(rewardTrack) {
		if (this.state?.rewardTrack === rewardTrack) {
			this.showCalendar();
			return;
		}
		this.setState({rewardTrack});
		urlParams__WEBPACK_IMPORTED_MODULE_3__.urlParams.setSecionSetting('calendar', rewardTrack?.name);
	}

	showRewardTrackByName(name) {
		for (const rewardTrack of [...this?.rewardTracks.values()])
		{
			if (rewardTrack?.name === name)
			{
				this.showRewardTrack(rewardTrack);
				break;
			}
		}
	}

	showCalendar() {
		this.setState({rewardTrack: undefined});
		urlParams__WEBPACK_IMPORTED_MODULE_3__.urlParams.deleteSecionSetting('calendar');
	}
}

const calendar = new Calendar();

class RewardTrack extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor(path, isSeason) {
		super();
		this.path = path;
		this.dates = [];
		isSeason ? this.isSeason = true : this.isSeason = false;
	}

	async init() {
		this.data = await db__WEBPACK_IMPORTED_MODULE_2__.db.getJSON(this.path);
		// this.renderRewardList();
	}

	render() {
		return this.html`
			<div class="reward-track_wrapper">
				<ul class="dates-list">
					<li class="event-header">${this.name} // </li>
					${{html: this.dates.map(dates => `
						<li><span>
							${dates.startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
							${' - '}
							${dates.endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
						</span></li>
					`)}}
				</ul>
				<ul class="reward-list">${this.renderRewardList()}</ul>
			</div>
		`;
	}

	async renderRewardList() {
		// TODO performance.now is a hack to display duplicate items in a single wire
		// need to implement uuid
		return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(this, ':list')`
			${this?.data?.Ranks?.map(rank => {
				return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire(rank)`<li class="reward-rank">
					<ul class="rank_rewards">
						<li class="rank_number">${rank.Rank}</li>
						<ul class="rank_reward-items free">
							${rank?.FreeRewards?.InventoryRewards?.map(reward => {
								return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire()`<li>${new db__WEBPACK_IMPORTED_MODULE_2__.Item(reward?.InventoryItemPath).renderIcon('reward', {itemTypeIcon: true})}</li>`
							})}
							${rank?.FreeRewards?.CurrencyRewards?.map(reward => {
								return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${new db__WEBPACK_IMPORTED_MODULE_2__.CurrencyItem(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`)}</li>`
							})}
						</ul>
						<ul class="rank_reward-items paid">
							${rank?.PaidRewards?.InventoryRewards?.map(reward => {
								return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire()`<li>${new db__WEBPACK_IMPORTED_MODULE_2__.Item(reward?.InventoryItemPath).renderIcon('reward', {itemTypeIcon: true})}</li>`
							})}
							${rank?.PaidRewards?.CurrencyRewards?.map(reward => {
								return lib_HTML__WEBPACK_IMPORTED_MODULE_1__.HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${new db__WEBPACK_IMPORTED_MODULE_2__.CurrencyItem(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`)}</li>`
							})}
						</ul>
					</ul>
				</li>`
			})}
		`;
	}

	get name() {
		return this?.data?.Name ?? '...';
	}

	addDates(startDateString, endDateString) {
		const startDate = new Date(startDateString);
		const endDate = new Date(endDateString);

		if (startDate && endDate) this.dates.push({startDate, endDate});
	}
}

/***/ }),

/***/ "./src/ui/cores/index.js":
/*!*******************************!*\
  !*** ./src/ui/cores/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coreViewer": () => (/* binding */ coreViewer)
/* harmony export */ });
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db */ "./src/db/index.js");
/* harmony import */ var eventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventEmitter */ "./src/eventEmitter/index.js");
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var ui_inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/inventory */ "./src/ui/inventory/index.js");
/* harmony import */ var urlParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urlParams */ "./src/urlParams/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/ui/cores/index.css");









class CoreViewer extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor() {
		super();

		this.coreTypes = new Map([
			['ArmorCore', []],
			['WeaponCore', []],
			['VehicleCore', []]
		]);
		
		// this.armorCores = [];
		// this.weaponCores = [];
		// this.vehicleCores = [];

		this.cores = [];

		eventEmitter__WEBPACK_IMPORTED_MODULE_2__.emitter.on('showSocket', () => this.updateParams());
	}
	async init() {
		ui_inventory__WEBPACK_IMPORTED_MODULE_4__.inventory.coreList.forEach(item => {
			const core = new Core(item?.ItemPath);
			this.cores.push(core);
			// if (item?.ItemType === 'ArmorCore') this.armorCores.push(core);
			// if (item?.ItemType === 'WeaponCore') this.weaponCores.push(core);
			// if (item?.ItemType === 'VehicleCore') this.vehicleCores.push(core);
			const type = item?.ItemType;
			if (type && typeof type === 'string' && this.coreTypes.has(type))
			{
				this.coreTypes.get(type).push(core);
			}
		});

		const paramCoreType = urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.getSecionSetting('coreType');
		if (paramCoreType && this.coreTypes.has(paramCoreType))
		{
			this.showCoreType(paramCoreType, true)
			// console.log('ct init', paramCoreType);
			const coreName = urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.getSecionSetting('coreName');
			if (coreName)
			{
				// console.log('ct corename', coreName);
				await this.initAllCores();
				this.showCoreByName(coreName)
			};
		} else {
			this.showCoreType('ArmorCore', true);
			this.showCore(this.state?.coreType?.[0], true);
		}
		this.render();

		// this.initAllCores()
		// 	.then(() => emitter.emit('CoreViewer.initAllCores'));
	}

	get defaultState() {
		return {
		};
	}

	async initAllCores() {
		// this.cores.forEach(core => core.init());
		for (const core of this.cores)
		{
			await core.init()
		}
	}

	render() {
		return this.html`
			<div class ="core-viewer_wrapper mica_viewer">
				<nav class ="core-viewer_nav"><ul>
					<li><button class=${`core-tab${this.state?.coreTypeName === 'ArmorCore' ? ' active' : ''}`} onclick=${() => this.showCoreType('ArmorCore')}>Armor</button></li>
					<li><button class=${`core-tab${this.state?.coreTypeName === 'WeaponCore' ? ' active' : ''}`} onclick=${() => this.showCoreType('WeaponCore')}>Weapons</button></li>
					<li><button class=${`core-tab${this.state?.coreTypeName === 'VehicleCore' ? ' active' : ''}`} onclick=${() => this.showCoreType('VehicleCore')}>Vehicles</button></li>
				</ul></nav>
				<nav class ="cores-list_nav"><ul>
					${this.coreList()}
				</ul></nav>
				${this.state?.core?.render() ?? ''}
				${{html: this.state?.core ? '' : '<div class="core-placeholder">Loading cores...</div>'}}
			</div>
		`;
	}
  
	coreList() {
		return lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire(this, ':coreList')`
			${this.state.coreType.map(core => lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire(core, ':nav')`<li><button
				onclick=${() => this.showCore(core)}
				class=${this.state?.core === core ? 'active' : null}
			>${core.name}</button></li>`)}
		`;
	}

	updateParams() {
		urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.setSecionSetting('coreType', this.state?.coreTypeName ?? 'unk');
		urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.setSecionSetting('coreName', this.state?.core?.name ?? 'unk');
		if (this.state?.core?.state?.socket)
		{
			urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.setSecionSetting('coreSocket', this.state?.core?.state?.socket?.socketName ?? 'unk');
		} else {
			urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.deleteSecionSetting('coreSocket');
		}
	}

	showCore(core, skipParam = false) {
		if (!core) return;
		this.setState({core});

		if (!skipParam)
		{
			this.updateParams();
		}
		// console.warn('c', urlParams.getSecionSetting('coreName'))
	}

	showCoreByName(coreName) {
		if (!coreName || typeof coreName !== 'string' || !this.state.coreType) return;
		for (const core of this.state.coreType)
		{
			if (core && core.name && core.name === coreName)
			{
				this.setState({core});
				break;
			}
		}
	}

	showCoreType(type, skipParam = false) {
		if (!type || !this.coreTypes.has(type)) return;
		const coreType = this.coreTypes.get(type);
		this.state.coreType = coreType;
		this.state.coreTypeName = type;
		coreType.forEach(async core => {
			await core.init();
			this.coreList();
		});
	}
}

const coreViewer = new CoreViewer();

class Core extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor(corePath) {
		super();
		this.corePath = corePath;

		this.sockets = [];
	}

	get name() {
		return this?.item?.data?.CommonData?.Title ?? '...';
	}

	async init() {
		if (this.core) return;
		this.core = {};
		this.core = await new db__WEBPACK_IMPORTED_MODULE_1__.Item(this.corePath).init();
		this.item = await new db__WEBPACK_IMPORTED_MODULE_1__.Item(this.core.data?.Themes?.DefaultOptionPath).init();

		const item = this.item.data;

		const paramSocketName = urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.getSecionSetting('coreSocket');

		for (const socketName in item) {
			let socket;
			if (item[socketName]?.OptionPaths?.length)
			{
				const OptionPaths = item[socketName]?.OptionPaths;
				socket = new Socket({OptionPaths, socketName});
				this.sockets.push(socket);
			} else if (socketName === 'Helmets' && item[socketName]?.Options?.length) {
				const attachmentPaths = new Set();
				const OptionPaths = item[socketName]?.Options.map(option => {
					option?.HelmetAttachments?.OptionPaths.forEach(path => attachmentPaths.add(path));
					return option.HelmetPath;
				});

				socket = new Socket({OptionPaths, socketName});
				this.sockets.push(socket);
				if (!paramSocketName) this.state.socket = socket;

				if (attachmentPaths.size)
				{
					const attachmentSocket = new Socket({
						OptionPaths: [...attachmentPaths],
						socketName: 'HelmetAttachments'
					});
					this.sockets.push(attachmentSocket);
					if (paramSocketName && paramSocketName === 'HelmetAttachments') this.state.socket = attachmentSocket;
				}
			}

			if (paramSocketName && socketName === paramSocketName) this.state.socket = socket;
		}
		this.render();

		return this;
	}

	async render() {
		if (!this.core) await this.init();
		return this.html`
			<div
				class ="core_wrapper mica_main-content"
			>
				<ul class="core-socket-list mica_nav-list">
					<li class="core-socket-title">${this?.item?.data?.CommonData?.Title ?? 'Loading core...'}</li>
					${this.sockets.map(socket => lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire(socket)`
						<li><button
							onclick=${() => this.showSocket(socket)}
							class=${this.state?.socket === socket ? 'active' : null}
						><span>${socket.name}</span></button></li>
					`)}
				</ul>
				${this.state?.socket?.render() ?? ''}
				${{html: this.state?.socket ? '' : '<div class="core-socket-placeholder">CHOOSE A SOCKET</div>'}}
			</div>
		`
	}

	showSocket(socket) {
		if (this.state?.socket === socket) {
			this.setState({socket: undefined});
			eventEmitter__WEBPACK_IMPORTED_MODULE_2__.emitter.emit('showSocket');
			return;
		}
		this.setState({socket});
		eventEmitter__WEBPACK_IMPORTED_MODULE_2__.emitter.emit('showSocket');
	}
}

class Socket extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor({
		OptionPaths,
		socketName
	}) {
		super();

		this.OptionPaths = OptionPaths;
		this.socketName = socketName;

		this.items = this.OptionPaths.map(path => new db__WEBPACK_IMPORTED_MODULE_1__.Item(path))

		// return this.render();
	}

	render() {
		return this.html`
			<div
				class ="core-sockets_wrapper"
			>
			${this.name ?? 'Socket'} // ${this?.items?.length ?? '#'}
				<ul
					class="socket-items"
				>
					${this.items.map(item => lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire()`<li>${item.renderIcon('core')}</li>`)}
				</ul>
			</div>
		`;
	}

	get name() {
		return db__WEBPACK_IMPORTED_MODULE_1__.db.getItemType(this?.socketName);
	}
}

/***/ }),

/***/ "./src/ui/inventory/index.js":
/*!***********************************!*\
  !*** ./src/ui/inventory/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inventory": () => (/* binding */ inventory)
/* harmony export */ });
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db */ "./src/db/index.js");
/* harmony import */ var eventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventEmitter */ "./src/eventEmitter/index.js");
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var ui_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/modal */ "./src/ui/modal/index.js");
/* harmony import */ var urlParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urlParams */ "./src/urlParams/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/ui/inventory/index.css");









class Inventory extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	async init() {
		const inventoryPath = 'Inventory/catalog/inventory_catalog.json';
		this.data = await db__WEBPACK_IMPORTED_MODULE_1__.db.getJSON(inventoryPath);

		const favorites = new InventoryCategory({categoryName: 'Favorites'});
		const search = new Search({categoryName: 'Search'});

		this.categories = [favorites, search];

		const paramCategoryName = urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.getSecionSetting('inventory');
		const paramBundle = urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.getSecionSetting('bundle');

		if (paramBundle)
		{
			const bundleSet = new Set(paramBundle.split('~'));
			if (bundleSet.size)
			{
				const bundleCategory = new InventoryCategory({
					categoryName: 'Collection',
					itemIDs: bundleSet
				});
				this.categories.push(bundleCategory);
				if (!paramCategoryName || paramCategoryName === 'Collection')
				{
					bundleCategory.init();
					this.state.inventoryCategory = bundleCategory;
				}
			}
		}

		const skipTypes = new Set([
			'ChallengeReroll',
			'XPBoost',
			'XPGrant',
			'None',
			'AiTheme',
			'AiCore',
		]);

		for (const type of db__WEBPACK_IMPORTED_MODULE_1__.db.index.types)
		{
			if (skipTypes.has(type)) continue;
			const category = new InventoryCategory({categoryName: type});
			this.categories.push(category);

			if (paramCategoryName && paramCategoryName === type)
			{
				category.init();
				this.state.inventoryCategory = category;
			}
		}

		if (!this.state.inventoryCategory && paramCategoryName !== 'Search')
		{
			favorites.init();
			this.state.inventoryCategory = favorites;
		} else if (paramCategoryName === 'Search')
		{
			search.init();
			this.state.inventoryCategory = search;
		}

		console.info(`[Inventory] Found "${this.categories.length}" item categories.`)
	}

	render() {
		return this.html`<div class="inventory_wrapper mica_viewer" id="inventory">
			<header class="inventory mica_header-strip">
				<a class="mica_header-anchor" href="#inventory"><h2>Inventory</h2></a>
			</header>
			<div class="inventory_content mica_main-content">
				<ul class="inventory-catergories mica_nav-list">
					${this.categories.map(category => lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire(category)`<li><button
						onclick=${() => this.showCategory(category)}
						class=${this.state?.inventoryCategory === category ? 'active' : null}
					><span>${db__WEBPACK_IMPORTED_MODULE_1__.db.getItemType(category.categoryName) ?? '...'}</span></button></li>`)}
				</ul>
				${this.state?.inventoryCategory?.render() ?? ''}
				${{html: this.state?.inventoryCategory ? '' : '<div class="inv-category-placeholder">CHOOSE A CATEGORY</div>'}}
			</div>
		</div>`;
	}

	showCategory(inventoryCategory) {
		if (this.state?.inventoryCategory === inventoryCategory) {
			this.setState({inventoryCategory: undefined});
			urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.deleteSecionSetting('inventory');
			return;
		}
		inventoryCategory.init();
		this.setState({inventoryCategory});
		urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.setSecionSetting('inventory', inventoryCategory?.categoryName ?? 'unk');
	}

	get coreList() {
		if (!this.data) return [];
		return this.data?.Cores;
	}
}

const inventory = new Inventory();

class InventoryCategory extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor({
		categoryName,
		itemIDs
	}) {
		super();
		this.categoryName = categoryName;
		this.items = [];
		this.itemIDs = new Set();

		if (itemIDs && itemIDs.size)
		{
			// TODO get items
			console.log('TEST Bundle', itemIDs);
			this.itemIDs = new Set(itemIDs);
		}

		// Listen for updates to favorites list, render on change
		if (this.categoryName === 'Favorites') {
			eventEmitter__WEBPACK_IMPORTED_MODULE_2__.emitter.on('favoriteItemPaths', (path) => {
				console.log('fav update', path);
				this.init();
				if (inventory.state?.inventoryCategory === this) this.render();
			})
		}
	}

	get defaultState() {
		return {
			importValid: false
		};
	}

	init() {
		if (this.items?.length && this.categoryName !== 'Favorites') return;

		if (!this.itemIDs.size || this.categoryName === 'Favorites') this.itemIDs = db__WEBPACK_IMPORTED_MODULE_1__.db.getItemsIDsByType(this.categoryName);
		
		if (!this.itemIDs.size) return;
		console.info('IDs', this.itemIDs);

		this.items = [...this.itemIDs].map(id => new db__WEBPACK_IMPORTED_MODULE_1__.Item(db__WEBPACK_IMPORTED_MODULE_1__.db.getItemPathByID(id)));
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
			<header class="h-favorites">
				<div>${db__WEBPACK_IMPORTED_MODULE_1__.db.getItemType(this.categoryName) ?? ''} // ${this?.items?.length}</div>
			</header>
				<ul
					class="inventory-category_items"
				>
					${this.items.map(item => lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire()`<li>${item.renderIcon('inventory', {itemTypeIcon: true})}</li>`)}
					${this.categoryName === 'Favorites' && !this.items.length ? lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire(this, ':favPlaceholder')`
						<div class="favorites-placeholder">Tap the <span
							class=${'favorite'}
							style=${{backgroundImage: `url(items.svg#unfavored)`}}
						></span> in item detail panels to collect favorites into this section.</div>
					` : ''}
				</ul>
			</div>
		`;
				// ${this.categoryName === 'Favorites' ? HTML.wire(this, ':manage')`
				// <button
				// 	onclick=${() => modalConstructor.showView(this.renderFavoritesManager())}
				// >Manage</button>` : ''}
	}

	renderFavoritesManager() {
		console.log('reb');
		return lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire(this, ':favoritesManager')`
			<div class="favorites-man_wrapper">
				<span>Click the star icon in item detail panels to add favorites!</span>
				<span>Copy and paste the following text box to send your list to someone.</span>
				<textarea id="story" name="fav-export" rows="5" cols="33" readonly>${JSON.stringify([...db__WEBPACK_IMPORTED_MODULE_1__.db.favoriteItemPaths], null, '\t')}</textarea>
				<span>---TODO collapsing import---</span>
				<span>Paste a favorites list in the following box.</span>
				<textarea id="story" name="fav-import" rows="5" cols="33"
					oninput=${(e) => this.validateImport(e.target.value)}
				></textarea>
				<button
					onclick=${() => this.replaceFavorites()}
				>Replace</button>
				<button
					onclick=${() => this.appendFavorites()}
				>Append</button>${this.state?.awaitingImport}
			</div>
		`;
	}

	validateImport(text) {
		try {
			console.log('v', text);
			const json = JSON.parse(text);

			if (json && json.length) {
				const set = new Set(json);
				this.state.awaitingImport = set;
				console.log('arr', this.state.awaitingImport);
				this.renderFavoritesManager();
			}
		} catch (error) {
			console.error(`[skimmer] validateImport`, error)
		}
	}

	replaceFavorites() {
		console.log('rep', this.state?.awaitingImport)
	}

	appendFavorites() {
		console.log('app', this.state?.awaitingImport)
	}
}

class Search extends InventoryCategory {
	init() {
		// this.items = new Set();
		const term = urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.getSecionSetting('s');
		if (!this.state.term && term && typeof term === 'string')
		{
			this.state.term = term;
			this.searchItems();
		}
	}

	get defaultState() {
		return {
			term: ''
		};
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
				<header class="h-favorites">
					<div>Search // ${this?.itemIDs?.size ?? 0}</div>
				</header>
				<div class="inventory-search_wrapper">
					<input
						type="search"
						class="inventory-search_input"
						id="inventory-search"
						name="inventory-search"
						oninput=${(e) => this.input(e?.target?.value ?? '')}
						value=${this.state.term}
					>
					<button
						class="inventory-search_submit"
						onclick=${() => this.submit()}
					>Search</button>
				</div>
				<div class="inventory-search_info">
					${this?.itemIDs?.size > 100 ? `${this.itemIDs.size} results, showing ${this?.items?.size}` : ''}
					${this.state.term && !this?.itemIDs?.size ? 'No results' : ''}
				</div>
				<ul
					class="inventory-category_items"
				>
					${[...this.items].map(item => lib_HTML__WEBPACK_IMPORTED_MODULE_3__.HTML.wire()`<li>${item.renderIcon('inventory', {itemTypeIcon: true})}</li>`)}
				</ul>
			</div>
		`;
	}

	input(value) {
		if (value && typeof value === 'string')
		{
			return this.state.term = value.toLowerCase();
		}
		return this.state.term = '';
	}

	searchItems() {
		if (!this.state.term || typeof this.state.term !== 'string') return;
		this.itemIDs = new Set();
		// console.info(`[search] "${db.index.manifest.size}" items in index`);
		[...db__WEBPACK_IMPORTED_MODULE_1__.db.index.manifest.values()].forEach(entry => {
			const title = entry.title.toLowerCase();
			if (title.includes(this.state.term))
			{
				this.itemIDs.add(entry.name);
				// console.log(title, entry.name);
			}
		});
		console.info(`[search] Found "${this.itemIDs.size}" items`);
		if (this.itemIDs.size)
		{
			// TODO slice, pagination
			this.items = new Set([...this.itemIDs].slice(0, 100).map(id => new db__WEBPACK_IMPORTED_MODULE_1__.Item(db__WEBPACK_IMPORTED_MODULE_1__.db.getItemPathByID(id))));
			this.render();
			return;
		}

		this.items = new Set();
		this.render();
	}

	submit() {
		if (!this.state.term || typeof this.state.term !== 'string')
		{
			this.items = new Set();
			this.itemIDs = new Set();
			urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.deleteSecionSetting('s');
			this.render();
			return;
		}
		console.log('submit', this.state.term);
		urlParams__WEBPACK_IMPORTED_MODULE_5__.urlParams.setSecionSetting('s', this.state.term);
		this.searchItems();
		this.render();
	}
}

/***/ }),

/***/ "./src/ui/modal/index.js":
/*!*******************************!*\
  !*** ./src/ui/modal/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalConstructor": () => (/* binding */ modalConstructor)
/* harmony export */ });
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var ui_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/settings */ "./src/ui/settings/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/ui/modal/index.css");






class ModalConstructor extends component__WEBPACK_IMPORTED_MODULE_1__.Component {
	get modals() {
		return this?._modals ?? (this._modals = new Set());
	}

	showView(view) {
		const modal = new Modal(view);
		this.modals.add(modal);
		this.render();
	}

	closeView(modal) {
		// console.log('close', this)
		if (this.modals.has(modal)) this.modals.delete(modal);
		// console.log('close', this.modals)
		this.render();
	}

	render() {
		if (!this.modals.size) return lib_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML.bind(document.querySelector('.js--modals'))``;
		return lib_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML.bind(document.querySelector('.js--modals'))`
			<div class="modals_wrapper">${[...this.modals.values()].map(modal => modal.render())}</div>
		`;
	}
}

const modalConstructor = new ModalConstructor();

class Modal extends component__WEBPACK_IMPORTED_MODULE_1__.Component {
	constructor(view) {
		super();
		this.view = view;
	}

	render() {
		return this.html`
			<div class="modal_clickout" onclick=${() => modalConstructor.closeView(this)}></div>
			<div class="modal_wrapper"><div class="modal_content">${this?.view ?? '...'}</div></div>
		`;
	}
}

/***/ }),

/***/ "./src/ui/nav/index.js":
/*!*****************************!*\
  !*** ./src/ui/nav/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerNav": () => (/* binding */ headerNav)
/* harmony export */ });
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var ui_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/settings */ "./src/ui/settings/index.js");
/* harmony import */ var ui_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/about */ "./src/ui/about/index.js");
/* harmony import */ var ui_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/modal */ "./src/ui/modal/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/ui/nav/index.css");








class HeaderNav extends component__WEBPACK_IMPORTED_MODULE_1__.Component {
	constructor() {
		super();
		this.links = [];
	}
	render() {
		return this.html`
			<nav class="toolbar">
			<a class="header-logo" href="/"><header>
					<div class="logo">
						<svg id="greenman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.45 505">
							<defs>
								<style>
								</style>
							</defs>
							<g id="body">
								<polygon class="cls-1 greenman" points="0 0 0 294.58 32.18 294.58 32.18 420.83 0 420.83 0 505 225.27 505 225.27 294.58 257.45 294.58 257.45 0 0 0"/>
							</g>
							<g id="visor">
								<rect class="cls-2 greenman" x="84.17" y="42.08" width="86.64" height="42.08"/>
							</g>
							<g id="face">
								<path class="cls-3 greenman" d="M115,53.26h2.65q-3.93-6.21-13-6.2t-13,6.2h2.65q3-4.18,10.34-4.19T115,53.26Zm.49,4.83a4.24,4.24,0,0,0-1.33-3.15,4.48,4.48,0,0,0-3.23-1.29,4.4,4.4,0,0,0-3.2,1.29,4.27,4.27,0,0,0-1.31,3.15,4.52,4.52,0,0,0,4.54,4.53,4.51,4.51,0,0,0,4.53-4.53Zm-2.73,1.85a2.47,2.47,0,0,1-1.83.78,2.39,2.39,0,0,1-1.81-.77,2.58,2.58,0,0,1-.73-1.86,2.45,2.45,0,0,1,.75-1.8,2.48,2.48,0,0,1,1.82-.75,2.53,2.53,0,0,1,1.82.74,2.45,2.45,0,0,1,.75,1.81A2.55,2.55,0,0,1,112.72,59.94Zm13.71,22.21q-7.29,0-10.34-4.19h-2.65q3.93,6.21,13,6.2t13-6.2h-2.65Q133.75,82.15,126.43,82.15Zm9.77-6.24a5.11,5.11,0,0,0,2-4.08,6.27,6.27,0,0,0-.64-2.84,13.1,13.1,0,0,0-2.65-3.23,9.46,9.46,0,0,1-2-2.54,6.34,6.34,0,0,1-.5-2.62v-8h-2.69v8a8.37,8.37,0,0,0,.6,3.48,13,13,0,0,0,2.43,3.17,13.79,13.79,0,0,1,2.19,2.63,4,4,0,0,1,.5,2,3,3,0,0,1-1.19,2.45,5,5,0,0,1-3.19,1A9.09,9.09,0,0,1,126.44,74v2.52a11.22,11.22,0,0,0,4.62,1A7.76,7.76,0,0,0,136.2,75.91Zm22-22.65h2.65q-3.93-6.21-13-6.2t-13,6.2h2.65q3-4.18,10.33-4.19T158.23,53.26Zm-4.08.39A4.38,4.38,0,0,0,151,54.94a4.27,4.27,0,0,0-1.31,3.15,4.52,4.52,0,0,0,4.54,4.53,4.51,4.51,0,0,0,4.53-4.53,4.24,4.24,0,0,0-1.33-3.15A4.49,4.49,0,0,0,154.15,53.65ZM156,59.94a2.51,2.51,0,0,1-1.84.78,2.37,2.37,0,0,1-1.8-.77,2.58,2.58,0,0,1-.73-1.86,2.45,2.45,0,0,1,.75-1.8,2.58,2.58,0,0,1,3.63,0,2.42,2.42,0,0,1,.76,1.81A2.55,2.55,0,0,1,156,59.94Z"/>
							</g>
							<g id="fillet">
								<path class="cls-4 greenman" d="M237.75,39.61h7.33A22.38,22.38,0,0,0,222.79,19.8v5A14.89,14.89,0,0,1,237.75,39.61ZM19.7,257.45H12.37a22.38,22.38,0,0,0,22.29,19.81v-5A14.91,14.91,0,0,1,19.7,257.45ZM190.61,482.72v4.95a22.37,22.37,0,0,0,22.29-19.8h-7.33A14.91,14.91,0,0,1,190.61,482.72Zm4.95-207.94a14.9,14.9,0,0,1-14.95-14.85h-7.33a22.37,22.37,0,0,0,22.28,19.8ZM12.52,39.61H19.8A14.86,14.86,0,0,1,34.66,24.76v-5A22.29,22.29,0,0,0,12.52,39.61Zm0,420.83H19.8a14.86,14.86,0,0,1,14.86-14.85v-4.95A22.28,22.28,0,0,0,12.52,460.44Zm64.37,0h7.28A14.85,14.85,0,0,1,99,445.59v-4.95A22.26,22.26,0,0,0,76.89,460.44Zm145.9-185.66v5a22.38,22.38,0,0,0,22.29-19.8h-7.33A14.9,14.9,0,0,1,222.79,274.78Z"/>
							</g>
							<g id="lines">
								<path class="cls-4 greenman" d="M84.17,470.34H76.74v12.38H19.8V470.34H12.38v17.33H190.61v-4.95H84.17ZM52,428.26H44.56v12.38h-9.9v4.95H52Zm56.93,0v12.38H99v4.95h17.33V428.26Zm86.64-148.53h9.91v12.38h7.42V279.73h9.9v-5H195.56Zm-151-7.43h-9.9v4.95h9.9ZM34.66,19.8v5H222.79v-5Z"/>
							</g>
							<g id="dashes">
								<path class="cls-4 greenman" d="M12.38,123.77H19.8V91.59H12.38Zm0-42.08H19.8V49.51H12.38Zm0,84.17H19.8V133.68H12.38Zm0,42.08H19.8V175.76H12.38Zm0,42.08H19.8V217.84H12.38Zm32.18-84.16H52V133.68H44.56Zm0,42.08H52V175.76H44.56Zm0,42.08H52V217.84H44.56Zm0,42.09H52V259.93H44.56Zm0,42.08H52V302H44.56Zm0,42.08H52V344.09H44.56Zm0,42.09H52V386.18H44.56Zm64.36-42.09h7.43V344.09h-7.43Zm0,42.09h7.43V386.18h-7.43ZM237.65,123.77h7.42V91.59h-7.42Zm-64.37,84.17h7.43V175.76h-7.43Zm0,42.08h7.43V217.84h-7.43ZM237.65,49.51V81.69h7.42V49.51Zm0,158.43h7.42V175.76h-7.42Zm0-42.08h7.42V133.68h-7.42ZM205.47,460.44h7.42V428.26h-7.42ZM237.65,250h7.42V217.84h-7.42Zm-32.18,84.17h7.42V302h-7.42Zm0,42.08h7.42V344.09h-7.42Zm0,42.09h7.42V386.18h-7.42Zm-32.19-252.5h7.43V133.68h-7.43Z"/>
							</g>
						</svg>
					</div>
					<div class="title_wrapper">
						<h1>Cylix</h1>
						<span>Halo Infinite API Explorer</span>
					</div>
				</header></a>
				<ul>
					<li><button class="settings" onclick=${() => ui_modal__WEBPACK_IMPORTED_MODULE_4__.modalConstructor.showView(ui_settings__WEBPACK_IMPORTED_MODULE_2__.settings.render())}>Settings</button></li>
					<li><button onclick=${() => ui_modal__WEBPACK_IMPORTED_MODULE_4__.modalConstructor.showView(ui_about__WEBPACK_IMPORTED_MODULE_3__.about.render())}>Disclaimer</button></li>
				</ul>
			</nav>
		`;
	}
}

const headerNav = new HeaderNav();

/***/ }),

/***/ "./src/ui/settings/index.js":
/*!**********************************!*\
  !*** ./src/ui/settings/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var lib_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/HTML */ "./src/lib/HTML/index.js");
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/component/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/ui/settings/index.css");





class Settings extends component__WEBPACK_IMPORTED_MODULE_1__.Component {
	constructor() {
		super();

		// lets the user provide an alternate root for the db
		const dbPath = localStorage.getItem('dbPath');
		if (dbPath) this.data.set('dbPath', dbPath);

		// enabling pathCasing with normalize all paths as lower case
		const pathCasing = localStorage.getItem('pathCasing');
		// console.error('pathc', pathCasing, pathCasing === 'false')
		if (!pathCasing || pathCasing === 'true') {
			this.data.set('pathCasing', true);
		} else {
			this.data.set('pathCasing', false);
		}

		const appScale = localStorage.getItem('userAppScale');
		if (appScale) {
			this.setAppScale(appScale);
		} 
		
		const textScale = localStorage.getItem('userTextScale');
		if (appScale) {
			this.setTextScale(textScale);
		} 
	}

	render() {
		return this.html`
			<div class="settings_wrapper">
				<section>
					<header>Accessibility</header>
					<div class="option_wrapper">
						<label for="appScale">Interface Scale: ${this.appScale}</label>
						<input class="show-value" type="range" id="appScale" name="appScale" value=${this.appScale} min="0.5" max="2" step="0.05"
							onchange=${(e) => this.setAppScale(parseFloat(e?.target?.value ?? 1))}
						>
					</div>
					<div class="option_wrapper">
						<label for="textScale">Text Scale: ${this.textScale}</label>
						<input class="show-value" type="range" id="textScale" name="textScale" value=${this.textScale} min="0.5" max="2" step="0.05"
							onchange=${(e) => this.setTextScale(parseFloat(e?.target?.value ?? 1))}
						>
					</div>
				</section>
				${this.advanced()}
				<button onclick=${() => this.reset()}>Reset Settings</button>
			</div>
		`;
	}

	advanced() {
		if (window?.location?.hostname === 'cylix.guide') return;
		return lib_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML.wire(this, ':advanced')`
			<section>
				<header>Advanced</header>
				<span>Do not modify advanced settings unless you know why to.</span><br>
				<label for="dbPath">dbPath:</label>
				<input type="text" id="dbPath" name="dbPath" minlength="0" maxlength="8" size="10"
					onchange=${(e) => this.setDbPath(e.target.value)}
					placeholder=${this.data.get('dbPath') ?? 'db'}
				>
				<br>
				<label for="pathCasing">Normalize paths to lowercase:</label>
				<input type="checkbox" id="pathCasing" name="pathCasing"
					onchange=${(e) => this.setPathCasing(e.target.checked)}
					checked=${this.data.get('pathCasing') === true}
				>
			</section>
		`;
	}

	get data() {
		return this._data ?? (this._data = new Map());
	}

	setRootProperty(key, value) {
		const root = document.documentElement;
		root.style.setProperty(`--${key}`, `${value}`);
	}

	get appScale() {
		return localStorage.getItem('userAppScale') ?? 1;
	}

	setAppScale(value = 1) {
		const float = parseFloat(value ?? 1);
		console.info(`[skimmer] settings -> appScale "${float}"`);
		localStorage.setItem('userAppScale', float);

		this.setRootProperty('app-size', `${float}rem`);
		this.render();
	}

	get textScale() {
		return localStorage.getItem('userTextScale') ?? 1;
	}

	setTextScale(value = 1) {
		const float = parseFloat(value ?? 1);
		console.info(`[skimmer] settings -> textScale "${float}"`);
		localStorage.setItem('userTextScale', float);

		this.setRootProperty('app-font-size', `${float}rem`);
		this.render();
	}

	setDbPath(path) {
		if (path && typeof path === 'string') {
			localStorage.setItem('dbPath', `${path}`);
			console.info(`[skimmer][settings] Set dbPath to custom value! Refresh the page to take full effect.`, localStorage.getItem('dbPath'));
		}
	}

	setPathCasing(value) {
		if (value) {
			localStorage.setItem('pathCasing', true);
		} else {
			localStorage.setItem('pathCasing', false);
		}
		
		console.info(`[skimmer][settings] Set normalize path casing! Refresh the page to take full effect.`, localStorage.getItem('pathCasing'));

	}

	reset() {
		this.data.clear();
		localStorage.clear();
		console.warn(`[skimmer][settings] Cleared settings. Refresh the page to take full effect.`, this.data);
		this.render();
	}
}

const settings = new Settings();

/***/ }),

/***/ "./src/urlParams/index.js":
/*!********************************!*\
  !*** ./src/urlParams/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlParams": () => (/* binding */ urlParams)
/* harmony export */ });
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/component/index.js");


class Params extends component__WEBPACK_IMPORTED_MODULE_0__.Component {
	constructor() {
		super();
		const url = new URL(window?.location ?? '');
		this.params = new URLSearchParams(url?.search ?? '');
		// console.log(`params`, this.params.toString());
		// for (conast [key, value] of params)
		// {
		// 	console.log(`[skimmer] params key: "${key}", value: "${value}"`);
		// 	this.store.set(`${key}`, `${value}`);
		// }
		// console.log(`[skimmer] store`, this.store);
	}

	// get store() {
	// 	return this?._map ?? (this._map = new Map());
	// }

	setSectionVisibility(name, bool) {
		if (typeof name !== 'string' || typeof bool !== 'boolean') return;
		if (this.params.has(name) && !bool) this.params.delete(name);
		if (bool) this.params.set(name, true)
	}

	getSecionVisibility(name) {
		if (typeof name !== 'string') return;
		if (this.params.has(name)) return true;
		return false;
	}

	setSecionSetting(name, value) {
		try {
			if (typeof name !== 'string' || typeof value !== 'string') return;
			const currentSetting = this.getSecionSetting(name);
			if (currentSetting && currentSetting === value) return;
			this.params.set(encodeURIComponent(name), encodeURIComponent(value));
			console.log(`params`, this.params.toString());
			history.replaceState({}, `Skimmer`, `?${this.params.toString()}`);
		} catch (error) {
			console.error(`[skimmer] setSecionSetting`, error);
		}
	}

	getSecionSetting(name) {
		try {
			if (typeof name !== 'string') return;
			const encodedName = encodeURIComponent(name);
			if (this.params.has(encodedName)) return decodeURIComponent(this.params.get(encodedName));
			return false;
		} catch (error) {
			console.error(`[skimmer] getSecionSetting`, error);
		}
	}

	deleteSecionSetting(name) {
		try {
			if (typeof name !== 'string') return;
			const encodedName = encodeURIComponent(name);
			if (this.params.has(encodedName))
			{
				this.params.delete(name);
				history.replaceState({}, `Skimmer`, `?${this.params.toString()}`);
			}
		} catch (error) {
			console.error(`[skimmer] deleteSecionSetting`, error);
		}
	}
}

const urlParams = new Params();

/***/ }),

/***/ "data:image/png;base64,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":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAAAgVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtFS1lAAAAK3RSTlMWi3QSa1uQOKBWCTwcb6V4gWInTWYOqQSGfa6XLyszmyABlFFJXySxQ0BGn2PQBgAAC4NJREFUWMMV1kWO5UAQRdFk5kwzs/33v8Cunr7ZUehKAdaRUAse99ozDjF5BqswrPKm7btzJ2tRziN3rMYXC236humIV5Our7nHWnVdFOBojW2XVnkeu1IZHNJH5OPHj9TjgVxBGBwAAmp60WoA1gBBvg3XMFhxUQ4KuLqx0CritYZPPXinsOqB7I76+OHaZlPzLEcftrqOlOwjeXvuEuH6t6emkaofgVUDIb4fEZB6CmRAeFCTq11lxbAgUyx4rXkqlH9I4bTUDRRVD1xjbqb9HyUBn7rhtr1x+x9Y0e3BdX31/loYvZaLxqnjbRuokz+pPG7WebnSNKE3yE6Tka4aDEDMVYr6Neq126c+ZR2nzzm3yyiC7PGWG/1uueqZudrVGYNdsgOMDvt1cI8CXu63QIcPvYNY8z870WwYazTS7DqpDEknZqS0AFXObWUxTaw0q5pnHlq4oQImakpLfJkmErdvAfhsc7lod0DVT4tuob25C0tQjzdiFObCz7U7eaKGP3s6yQVgQ/y+q+nY6K5dfV75iXzcNlGIP38aj22sVwtWWKMRb7B5HoHPaBvI1Ve5TSXATi66vV6utxsV+aZNFu+93VvlrG/oj8Wp67YT8l+Oq6PjwdGatFm7SEAP13kE0y9CEcf9qhtEWCMIq5AGq71moEAI9vrmFcmO8+7ZyDnmRN/VUaFkM2ce8KuBGFzDMmY6myLfQGra2ofgHhbJRXuRDZ4H+HmliWBHXQ0ysLGfv6FetbxtxzRgIZWjIsGVFl5imPXeyvVyayNek+dSWzjXd4t310YBdaF8sXeKs481PjsXbAtIru2+wHbv3GVh3sQY6Dnu6pF3pZ714VYdDi9A5GkXR/6xgaZN/tpQ8wVV3zeBuB+njoBNE4wjc+uA523ysXGd/P2sntmOb3OdHNWP5OVrxD3eJHdtH8QVkEIAqCor3hReR96yqt6PkTQfenllooQ447h6tOrnnuzwA8fMpq+jqg1oW8fTYYIncAYpVeTvkEFr/khQSbjoE8ykx9049OkE5MQEO9lC24tT7DwThQgf4Fhf8nGgAo3GYaON3crODpOr2pu5dBABz69t7F5yJBBo+r6QJdeLDWEoO7r1tceR3haA7gc7eZrCvpxSXXeKpo4P+hRixo9DeOFbqQVjKyWfBg9pnrEZKzK7R437YTTwhfoySG/YOCt3fs4aXlU3FjKortqQ6XyXaD0+Y/8VoqpyU9TRW45eN4oBxAH8Y/jLnNXfELJW+/p/MgO9Z+mBli2qqAP7dV/Arc2+YZRZwtBW8/p32y5ZsEuCS4O5AAgfR7Dde7zhiGfgvurQkfAXIrUG61rmxc2EZo18ph4vaWZI+QM0JdsbNlBJlPlwf9uguujQJy0j7TgTHdtRnjybTg55Hkk9S6l2rpYahumSewKHVosa1bh2Y6r9JGkdKvIDN/eeAwScrfjoLkCxWJuFZQ53FNP5w9XbQd1HhgHcVB/0fATG3sUUid1RTfc2+7pZVKldFSsaEK0v4k90tapQOk2HIbMhaJQtrUEL5+3sDanh8sOpbYRoQoqXWu6SQcUTQL9jzOrXNPWCJwXge4U7tlU1hkF012cAmvp8llQxf1IEMcw14pURxVOWATz4ITnYQjuF+vDXg5hgoiqXzO6mS91FQUBheURHIJxUeU1i3P0WOMpsm7vFYk0JJi/Ev+X3FwYD69cARPuP5GIc0PxoAFjcLRbNur0iMTrQmBBNYJ2ngU4x7SWfdTRl52Bqv7LmYW3C1CyTCPTHeWWIAM/Whm32COHsaj+2UQ739XB9t6NV0o9E9b7CW3XNiXzi9e0KiE+3rntukdIDBWrU2jsfQWuyFJRANxq8StHVv1JPy2C3Byco7qdNbASrnNXZ8G0L/Wp/pif4Ai9aEZ9Bb+TRx+REBdGlkF/s0dUdMSMr+6YCbuGxqPWdzcdqutvqkBzCksFcwAtjf55TeuH79M6AQa7r5PLeXxMFIlQKrXP9VJ275WGX+ptpf+tvTDBsecPnYQAlAWrVbRVJ7K2pRHwIjtSpbX96Y/lbKk6ZWXlBmh15r8yAWQsYxXgBOXYMAfHnUXF+rDqnB8bXDRtAn7bCziIqetSboK3NexMePvsCRLvmsoREA+kH8j4HWFpnNEaWgOmR7xyXHfTaz3slHc/YA6H6tl/L8d5tPcIwwD0tjvRaq3Y5BmYBSDClpv0VIX4s8D0XK3sPdpAb94HjPLkgboEz9EdZATW6ZdcmQvtKUwoWw+nAVKA7IcdY1UHnvNnIBplKci+knzewLz5/GGnzkGuuGky+0LTjtGBGR85EQICDqKChnm5pH3Z44nnWAk1YRdyu3g7QoFZ0h8jkr2ffjKmi+Qvsp+9GvNGZHmgW+YQAGUw7PPt8IPKbdy432vhKtRJjKWcSqq7helj81o3nfmaxVZ7Sqie8OOBk9WsyTD/ab7fQ5aWwQeJvnH6+ayo4IdIkOSBJjzXkgr+1TPhAx1AXDsxtCCj3TzQTLA1p782f7a8vdgPfwwrXmZxxbqo2h+6Zlo6mcMY4V7cFBOLm17VCvx9Qa2tAnkxEB+KYyQgbgAAnmNDOdOO6y2Cb+lke1MWQc9o+EMdQf7ubIG3Ek8GZ4k1PtGjbhwgOMPp5Em59JMVk/jU8/aF73Xcrd3UBNZyueQu0/xz2aGtZT8CRziOax2BWFXaeDzgZNV7oRtUzFoijoETf3xkAFFk3OMb7SgPh5wxU1+MygDIp9gZChH2qEcpgLh8pBIK90PXT1ZSU+ZExFK4Vm4GL/J7+K13lS5dQkW4HQwl6GX4yLqu8GhGWS2k75yel5IZIfFNdAL0NpKr2N5dQesBnxa42DLgJd6agS1jJsp1mO1dip7PU4P6diLLoTsZ4m3Q0QweiqeFfIGPLgF6v6mSVv6xe85VBD/1Mpe3AurRbcJ9SEo8NszNVy8rOCEexyIFcJRvYAlI/wk2I7r3p60FFLQXoH2q9xri/m41svRPbW0/EnPn2DWsmk0IiPpB60aa3+hiFfWuC8ZvWKEd9LxAk3HcOof6d77RewPaPsGw5lQAHcZN2vx1448u9pLfMLGQ3BSRRjBzRhKt7HcCw/7aqjtCDs5q76b4ZGphxN2th1WeXYlfnozX3ebKtX4Te11hf1tZP1diiGjIDAB1cR4Sb9rcFPC/nBARjlgDxd+tCBb1t91j71xJcgGjT3g/dUFnXXNiDrxkyoHANPk58ACPUa42hj8tgGrhiXOCmygxFZBiT2wyAJTDJ4wJEPmp6JIrDaSWYNqv4xH2wwdSTGYb3E0pXnS39nmLUsqoVZxzSoegqzd0o06wdbTXsaHGL+IF4JtIcXddTcD/dCd8hVf+fWPSV553kjMmMEULLS8HcgmptDO955dLGX78PjiDA6IsTHPm5IA6bc5ha0gaGkoEttXuxU11B2dOJ65/Q08tEF1+Y9cr2Nh/VECfQ33GyvR/gsdN1LuIeLpKMCAF2yRr769g9/4aJLZNRI71m2S91+Kp+Q0zubTcxoG2/6gm1Q79wkMj2XNO2ui7nWw8ULtu27CCvqTGX2PffD+xcwgh/TrOKvGZMM5jRFGDTn4NO/lwnDR/GY/waDZtkWDUPI0O8ztcFVqp6r2ZW+2bvkJ3raptYagFqu95VdIaml2CIp6CKets34x+fH2C+zH4cVFO7vj+6k2FU39PtRhWluYeZ3gDz1TLB9K2v7SD9gJU1qDxoRDrAWcrFGLyndhdtd0505+gEP79adK8fmFCWNYC+ahzVNcRH79E8dA1iqX/N0qq22xcOc20ALxLDspEj4QCFBQMgaIwoKbxr0Bd7Sbws6GiRK6tqoPfpiCle23axejRLyO1I+ahsEpWrzT5ZsCyS5RcY9jMfENFxSnhKsrfW8JHH6/rdQUMfmQPT3Uz9gY0C/pu1yuCnrPUvio0a1qMEosA/EwIzzid7cqsAAAAASUVORK5CYII= ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAAAgVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtFS1lAAAAK3RSTlMWi3QSa1uQOKBWCTwcb6V4gWInTWYOqQSGfa6XLyszmyABlFFJXySxQ0BGn2PQBgAAC4NJREFUWMMV1kWO5UAQRdFk5kwzs/33v8Cunr7ZUehKAdaRUAse99ozDjF5BqswrPKm7btzJ2tRziN3rMYXC236humIV5Our7nHWnVdFOBojW2XVnkeu1IZHNJH5OPHj9TjgVxBGBwAAmp60WoA1gBBvg3XMFhxUQ4KuLqx0CritYZPPXinsOqB7I76+OHaZlPzLEcftrqOlOwjeXvuEuH6t6emkaofgVUDIb4fEZB6CmRAeFCTq11lxbAgUyx4rXkqlH9I4bTUDRRVD1xjbqb9HyUBn7rhtr1x+x9Y0e3BdX31/loYvZaLxqnjbRuokz+pPG7WebnSNKE3yE6Tka4aDEDMVYr6Neq126c+ZR2nzzm3yyiC7PGWG/1uueqZudrVGYNdsgOMDvt1cI8CXu63QIcPvYNY8z870WwYazTS7DqpDEknZqS0AFXObWUxTaw0q5pnHlq4oQImakpLfJkmErdvAfhsc7lod0DVT4tuob25C0tQjzdiFObCz7U7eaKGP3s6yQVgQ/y+q+nY6K5dfV75iXzcNlGIP38aj22sVwtWWKMRb7B5HoHPaBvI1Ve5TSXATi66vV6utxsV+aZNFu+93VvlrG/oj8Wp67YT8l+Oq6PjwdGatFm7SEAP13kE0y9CEcf9qhtEWCMIq5AGq71moEAI9vrmFcmO8+7ZyDnmRN/VUaFkM2ce8KuBGFzDMmY6myLfQGra2ofgHhbJRXuRDZ4H+HmliWBHXQ0ysLGfv6FetbxtxzRgIZWjIsGVFl5imPXeyvVyayNek+dSWzjXd4t310YBdaF8sXeKs481PjsXbAtIru2+wHbv3GVh3sQY6Dnu6pF3pZ714VYdDi9A5GkXR/6xgaZN/tpQ8wVV3zeBuB+njoBNE4wjc+uA523ysXGd/P2sntmOb3OdHNWP5OVrxD3eJHdtH8QVkEIAqCor3hReR96yqt6PkTQfenllooQ447h6tOrnnuzwA8fMpq+jqg1oW8fTYYIncAYpVeTvkEFr/khQSbjoE8ykx9049OkE5MQEO9lC24tT7DwThQgf4Fhf8nGgAo3GYaON3crODpOr2pu5dBABz69t7F5yJBBo+r6QJdeLDWEoO7r1tceR3haA7gc7eZrCvpxSXXeKpo4P+hRixo9DeOFbqQVjKyWfBg9pnrEZKzK7R437YTTwhfoySG/YOCt3fs4aXlU3FjKortqQ6XyXaD0+Y/8VoqpyU9TRW45eN4oBxAH8Y/jLnNXfELJW+/p/MgO9Z+mBli2qqAP7dV/Arc2+YZRZwtBW8/p32y5ZsEuCS4O5AAgfR7Dde7zhiGfgvurQkfAXIrUG61rmxc2EZo18ph4vaWZI+QM0JdsbNlBJlPlwf9uguujQJy0j7TgTHdtRnjybTg55Hkk9S6l2rpYahumSewKHVosa1bh2Y6r9JGkdKvIDN/eeAwScrfjoLkCxWJuFZQ53FNP5w9XbQd1HhgHcVB/0fATG3sUUid1RTfc2+7pZVKldFSsaEK0v4k90tapQOk2HIbMhaJQtrUEL5+3sDanh8sOpbYRoQoqXWu6SQcUTQL9jzOrXNPWCJwXge4U7tlU1hkF012cAmvp8llQxf1IEMcw14pURxVOWATz4ITnYQjuF+vDXg5hgoiqXzO6mS91FQUBheURHIJxUeU1i3P0WOMpsm7vFYk0JJi/Ev+X3FwYD69cARPuP5GIc0PxoAFjcLRbNur0iMTrQmBBNYJ2ngU4x7SWfdTRl52Bqv7LmYW3C1CyTCPTHeWWIAM/Whm32COHsaj+2UQ739XB9t6NV0o9E9b7CW3XNiXzi9e0KiE+3rntukdIDBWrU2jsfQWuyFJRANxq8StHVv1JPy2C3Byco7qdNbASrnNXZ8G0L/Wp/pif4Ai9aEZ9Bb+TRx+REBdGlkF/s0dUdMSMr+6YCbuGxqPWdzcdqutvqkBzCksFcwAtjf55TeuH79M6AQa7r5PLeXxMFIlQKrXP9VJ275WGX+ptpf+tvTDBsecPnYQAlAWrVbRVJ7K2pRHwIjtSpbX96Y/lbKk6ZWXlBmh15r8yAWQsYxXgBOXYMAfHnUXF+rDqnB8bXDRtAn7bCziIqetSboK3NexMePvsCRLvmsoREA+kH8j4HWFpnNEaWgOmR7xyXHfTaz3slHc/YA6H6tl/L8d5tPcIwwD0tjvRaq3Y5BmYBSDClpv0VIX4s8D0XK3sPdpAb94HjPLkgboEz9EdZATW6ZdcmQvtKUwoWw+nAVKA7IcdY1UHnvNnIBplKci+knzewLz5/GGnzkGuuGky+0LTjtGBGR85EQICDqKChnm5pH3Z44nnWAk1YRdyu3g7QoFZ0h8jkr2ffjKmi+Qvsp+9GvNGZHmgW+YQAGUw7PPt8IPKbdy432vhKtRJjKWcSqq7helj81o3nfmaxVZ7Sqie8OOBk9WsyTD/ab7fQ5aWwQeJvnH6+ayo4IdIkOSBJjzXkgr+1TPhAx1AXDsxtCCj3TzQTLA1p782f7a8vdgPfwwrXmZxxbqo2h+6Zlo6mcMY4V7cFBOLm17VCvx9Qa2tAnkxEB+KYyQgbgAAnmNDOdOO6y2Cb+lke1MWQc9o+EMdQf7ubIG3Ek8GZ4k1PtGjbhwgOMPp5Em59JMVk/jU8/aF73Xcrd3UBNZyueQu0/xz2aGtZT8CRziOax2BWFXaeDzgZNV7oRtUzFoijoETf3xkAFFk3OMb7SgPh5wxU1+MygDIp9gZChH2qEcpgLh8pBIK90PXT1ZSU+ZExFK4Vm4GL/J7+K13lS5dQkW4HQwl6GX4yLqu8GhGWS2k75yel5IZIfFNdAL0NpKr2N5dQesBnxa42DLgJd6agS1jJsp1mO1dip7PU4P6diLLoTsZ4m3Q0QweiqeFfIGPLgF6v6mSVv6xe85VBD/1Mpe3AurRbcJ9SEo8NszNVy8rOCEexyIFcJRvYAlI/wk2I7r3p60FFLQXoH2q9xri/m41svRPbW0/EnPn2DWsmk0IiPpB60aa3+hiFfWuC8ZvWKEd9LxAk3HcOof6d77RewPaPsGw5lQAHcZN2vx1448u9pLfMLGQ3BSRRjBzRhKt7HcCw/7aqjtCDs5q76b4ZGphxN2th1WeXYlfnozX3ebKtX4Te11hf1tZP1diiGjIDAB1cR4Sb9rcFPC/nBARjlgDxd+tCBb1t91j71xJcgGjT3g/dUFnXXNiDrxkyoHANPk58ACPUa42hj8tgGrhiXOCmygxFZBiT2wyAJTDJ4wJEPmp6JIrDaSWYNqv4xH2wwdSTGYb3E0pXnS39nmLUsqoVZxzSoegqzd0o06wdbTXsaHGL+IF4JtIcXddTcD/dCd8hVf+fWPSV553kjMmMEULLS8HcgmptDO955dLGX78PjiDA6IsTHPm5IA6bc5ha0gaGkoEttXuxU11B2dOJ65/Q08tEF1+Y9cr2Nh/VECfQ33GyvR/gsdN1LuIeLpKMCAF2yRr769g9/4aJLZNRI71m2S91+Kp+Q0zubTcxoG2/6gm1Q79wkMj2XNO2ui7nWw8ULtu27CCvqTGX2PffD+xcwgh/TrOKvGZMM5jRFGDTn4NO/lwnDR/GY/waDZtkWDUPI0O8ztcFVqp6r2ZW+2bvkJ3raptYagFqu95VdIaml2CIp6CKets34x+fH2C+zH4cVFO7vj+6k2FU39PtRhWluYeZ3gDz1TLB9K2v7SD9gJU1qDxoRDrAWcrFGLyndhdtd0505+gEP79adK8fmFCWNYC+ahzVNcRH79E8dA1iqX/N0qq22xcOc20ALxLDspEj4QCFBQMgaIwoKbxr0Bd7Sbws6GiRK6tqoPfpiCle23axejRLyO1I+ahsEpWrzT5ZsCyS5RcY9jMfENFxSnhKsrfW8JHH6/rdQUMfmQPT3Uz9gY0C/pu1yuCnrPUvio0a1qMEosA/EwIzzid7cqsAAAAASUVORK5CYII=";

/***/ }),

/***/ "./node_modules/@ungap/create-content/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ungap/create-content/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var createContent = (function (document) {'use strict';
  var FRAGMENT = 'fragment';
  var TEMPLATE = 'template';
  var HAS_CONTENT = 'content' in create(TEMPLATE);

  var createHTML = HAS_CONTENT ?
    function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } :
    function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;
      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }
      append(content, childNodes);
      return content;
    };

  return function createContent(markup, type) {
    return (type === 'svg' ? createSVG : createHTML)(markup);
  };

  function append(root, childNodes) {
    var length = childNodes.length;
    while (length--)
      root.appendChild(childNodes[0]);
  }

  function create(element) {
    return element === FRAGMENT ?
      document.createDocumentFragment() :
      document.createElementNS('http://www.w3.org/1999/xhtml', element);
  }

  // it could use createElementNS when hasNode is there
  // but this fallback is equally fast and easier to maintain
  // it is also battle tested already in all IE
  function createSVG(svg) {
    var content = create(FRAGMENT);
    var template = create('div');
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
    append(content, template.firstChild.childNodes);
    return content;
  }

}(document));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);


/***/ }),

/***/ "./node_modules/@ungap/custom-event/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ungap/custom-event/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var self = {};
self.CustomEvent = typeof CustomEvent === 'function' ?
  CustomEvent :
  (function (__p__) {
    CustomEvent[__p__] = new CustomEvent('').constructor[__p__];
    return CustomEvent;
    function CustomEvent(type, init) {
      if (!init) init = {};
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, !!init.bubbles, !!init.cancelable, init.detail);
      return e;
    }
  }('prototype'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self.CustomEvent);


/***/ }),

/***/ "./node_modules/@ungap/essential-map/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ungap/essential-map/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var self = {};
try { self.Map = Map; }
catch (Map) {
  self.Map = function Map() {
    var i = 0;
    var k = [];
    var v = [];
    return {
      delete: function (key) {
        var had = contains(key);
        if (had) {
          k.splice(i, 1);
          v.splice(i, 1);
        }
        return had;
      },
      forEach: function forEach(callback, context) {
        k.forEach(
          function (key, i)  {
            callback.call(context, v[i], key, this);
          },
          this
        );
      },
      get: function get(key) {
        return contains(key) ? v[i] : void 0;
      },
      has: function has(key) {
        return contains(key);
      },
      set: function set(key, value) {
        v[contains(key) ? i : (k.push(key) - 1)] = value;
        return this;
      }
    };
    function contains(v) {
      i = k.indexOf(v);
      return -1 < i;
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self.Map);


/***/ }),

/***/ "./node_modules/@ungap/essential-weakset/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ungap/essential-weakset/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var self = {};
try { self.WeakSet = WeakSet; }
catch (WeakSet) {
  (function (id, dP) {
    var proto = WeakSet.prototype;
    proto.add = function (object) {
      if (!this.has(object))
        dP(object, this._, {value: true, configurable: true});
      return this;
    };
    proto.has = function (object) {
      return this.hasOwnProperty.call(object, this._);
    };
    proto.delete = function (object) {
      return this.has(object) && delete object[this._];
    };
    self.WeakSet = WeakSet;
    function WeakSet() {'use strict';
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
    }
  }(Math.random(), Object.defineProperty));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self.WeakSet);


/***/ }),

/***/ "./node_modules/@ungap/import-node/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ungap/import-node/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var importNode = (function (
  document,
  appendChild,
  cloneNode,
  createTextNode,
  importNode
) {
  var native = importNode in document;
  // IE 11 has problems with cloning templates:
  // it "forgets" empty childNodes. This feature-detects that.
  var fragment = document.createDocumentFragment();
  fragment[appendChild](document[createTextNode]('g'));
  fragment[appendChild](document[createTextNode](''));
  /* istanbul ignore next */
  var content = native ?
    document[importNode](fragment, true) :
    fragment[cloneNode](true);
  return content.childNodes.length < 2 ?
    function importNode(node, deep) {
      var clone = node[cloneNode]();
      for (var
        /* istanbul ignore next */
        childNodes = node.childNodes || [],
        length = childNodes.length,
        i = 0; deep && i < length; i++
      ) {
        clone[appendChild](importNode(childNodes[i], deep));
      }
      return clone;
    } :
    /* istanbul ignore next */
    (native ?
      document[importNode] :
      function (node, deep) {
        return node[cloneNode](!!deep);
      }
    );
}(
  document,
  'appendChild',
  'cloneNode',
  'createTextNode',
  'importNode'
));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (importNode);


/***/ }),

/***/ "./node_modules/@ungap/is-array/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@ungap/is-array/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isArray = Array.isArray || /* istanbul ignore next */ (function (toString) {
  /* istanbul ignore next */
  var $ = toString.call([]);
  /* istanbul ignore next */
  return function isArray(object) {
    return toString.call(object) === $;
  };
}({}.toString));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ "./node_modules/@ungap/template-literal/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/template-literal/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/weakmap */ "./node_modules/@ungap/weakmap/esm/index.js");


var isNoOp = typeof document !== 'object';

var templateLiteral = function (tl) {
  var RAW = 'raw';
  var isBroken = function (UA) {
    return /(Firefox|Safari)\/(\d+)/.test(UA) &&
          !/(Chrom[eium]+|Android)\/(\d+)/.test(UA);
  };
  var broken = isBroken((document.defaultView.navigator || {}).userAgent);
  var FTS = !(RAW in tl) ||
            tl.propertyIsEnumerable(RAW) ||
            !Object.isFrozen(tl[RAW]);
  if (broken || FTS) {
    var forever = {};
    var foreverCache = function (tl) {
      for (var key = '.', i = 0; i < tl.length; i++)
        key += tl[i].length + '.' + tl[i];
      return forever[key] || (forever[key] = tl);
    };
    // Fallback TypeScript shenanigans
    if (FTS)
      templateLiteral = foreverCache;
    // try fast path for other browsers:
    // store the template as WeakMap key
    // and forever cache it only when it's not there.
    // this way performance is still optimal,
    // penalized only when there are GC issues
    else {
      var wm = new _ungap_weakmap__WEBPACK_IMPORTED_MODULE_0__["default"];
      var set = function (tl, unique) {
        wm.set(tl, unique);
        return unique;
      };
      templateLiteral = function (tl) {
        return wm.get(tl) || set(tl, foreverCache(tl));
      };
    }
  } else {
    isNoOp = true;
  }
  return TL(tl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TL);

function TL(tl) {
  return isNoOp ? tl : templateLiteral(tl);
}


/***/ }),

/***/ "./node_modules/@ungap/template-tag-arguments/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/template-tag-arguments/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ungap_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/template-literal */ "./node_modules/@ungap/template-literal/esm/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(template) {
  var length = arguments.length;
  var args = [(0,_ungap_template_literal__WEBPACK_IMPORTED_MODULE_0__["default"])(template)];
  var i = 1;
  while (i < length)
    args.push(arguments[i++]);
  return args;
};

/**
 * best benchmark goes here
 * https://jsperf.com/tta-bench
 * I should probably have an @ungap/template-literal-es too
export default (...args) => {
  args[0] = unique(args[0]);
  return args;
};
 */

/***/ }),

/***/ "./node_modules/@ungap/trim/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@ungap/trim/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var trim = ''.trim || /* istanbul ignore next */ function () {
  return String(this).replace(/^\s+|\s+/g, '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trim);


/***/ }),

/***/ "./node_modules/@ungap/weakmap/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ungap/weakmap/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! (c) Andrea Giammarchi - ISC */
var self = {};
try { self.WeakMap = WeakMap; }
catch (WeakMap) {
  // this could be better but 90% of the time
  // it's everything developers need as fallback
  self.WeakMap = (function (id, Object) {'use strict';
    var dP = Object.defineProperty;
    var hOP = Object.hasOwnProperty;
    var proto = WeakMap.prototype;
    proto.delete = function (key) {
      return this.has(key) && delete key[this._];
    };
    proto.get = function (key) {
      return this.has(key) ? key[this._] : void 0;
    };
    proto.has = function (key) {
      return hOP.call(key, this._);
    };
    proto.set = function (key, value) {
      dP(key, this._, {configurable: true, value: value});
      return this;
    };
    return WeakMap;
    function WeakMap(iterable) {
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
      if (iterable)
        iterable.forEach(add, this);
    }
    function add(pair) {
      this.set(pair[0], pair[1]);
    }
  }(Math.random(), Object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self.WeakMap);


/***/ }),

/***/ "./node_modules/uarray/esm/index.js":
/*!******************************************!*\
  !*** ./node_modules/uarray/esm/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "indexOf": () => (/* binding */ indexOf),
/* harmony export */   "slice": () => (/* binding */ slice)
/* harmony export */ });
const {isArray} = Array;
const {indexOf, slice} = [];




/***/ }),

/***/ "./node_modules/umap/esm/index.js":
/*!****************************************!*\
  !*** ./node_modules/umap/esm/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ => ({
  // About: get: _.get.bind(_)
  // It looks like WebKit/Safari didn't optimize bind at all,
  // so that using bind slows it down by 60%.
  // Firefox and Chrome are just fine in both cases,
  // so let's use the approach that works fast everywhere 👍
  get: key => _.get(key),
  set: (key, value) => (_.set(key, value), value)
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3dea464b99decb01e198")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "skimmer:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateskimmer"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.3dea464b99decb01e198.js.map
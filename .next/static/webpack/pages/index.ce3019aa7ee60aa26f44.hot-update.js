webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\petve\\OneDrive\\Documentos\\MeusProjetos\\NLW\\mova-se\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




var countdownTimeout;
function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0.1 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownCountainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo Encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive),
        children: "Abandonar Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountdown,
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
        children: "Iniciar um Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(Countdown, "cVu0hsDf1rnm10+qbfS96WIdEJo=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwic2V0SGFzRmluaXNoZWQiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInN0eWxlcyIsImNvdW50ZG93bkNvdW50YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG9CQUNNQyx3REFBVSxDQUFDQyw2RUFBRCxDQURoQjtBQUFBLE1BQ2hCQyxpQkFEZ0IsZUFDaEJBLGlCQURnQjs7QUFBQSxrQkFHQUMsc0RBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FIUjtBQUFBLE1BR2pCQyxJQUhpQjtBQUFBLE1BR1hDLE9BSFc7O0FBQUEsbUJBSVFGLHNEQUFRLENBQUMsS0FBRCxDQUpoQjtBQUFBLE1BSWpCRyxRQUppQjtBQUFBLE1BSVBDLFdBSk87O0FBQUEsbUJBS2NKLHNEQUFRLENBQUMsS0FBRCxDQUx0QjtBQUFBLE1BS2pCSyxXQUxpQjtBQUFBLE1BS0pDLGNBTEk7O0FB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YTdlZTYwYWEyNmY0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnO1xyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcclxuICAgIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcblxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApXHJcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwXHJcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXHJcbiAgICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dClcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICAgICAgICBzZXRUaW1lKDAuMSAqIDYwKVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcclxuICAgICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSlcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ291bnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsgaGFzRmluaXNoZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBDaWNsbyBFbmNlcnJhZG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXNBY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIENpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5pY2lhciB1bSBDaWNsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
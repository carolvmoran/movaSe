webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Countdown_countdownCountainer__3tSZr {\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.Countdown_countdownCountainer__3tSZr > div {\r\n    flex: 1 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.Countdown_countdownCountainer__3tSZr > div span {\r\n    flex: 1 1;\r\n}\r\n\r\n.Countdown_countdownCountainer__3tSZr > div span:first-child {\r\n    border-right: 1px solid #f0f1f3;\r\n}\r\n.Countdown_countdownCountainer__3tSZr > div span:last-child {\r\n    border-left: 1px solid #f0f1f3;\r\n}\r\n\r\n.Countdown_countdownCountainer__3tSZr > span {\r\n    font-size: 6.25rem;\r\n    margin: 0 0.5rem;\r\n}\r\n\r\n.Countdown_countdownButton__2cSHU {\r\n    width: 100%;\r\n    height: 5rem;\r\n    margin-top: 2rem;\r\n    display: flex;\r\n    align-items: center;   \r\n    justify-content: center;\r\n    border: 0;\r\n    border-radius: 5px; \r\n    background: var(--blue);\r\n    color: var(--white);\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.Countdown_countdownButton__2cSHU:not(:disable):hover {\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.Countdown_countdownButtonActive__37GOc {\r\n    background: var(--white);\r\n    color: var(--title);\r\n}\r\n\r\n.Countdown_countdownButtonActive__37GOc:hover {\r\n    background: var(--red);\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/Countdown.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;IACP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,wBAAwB;IACxB,uCAAuC;IACvC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,+BAA+B;AACnC;AACA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[".countdownCountainer {\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.countdownCountainer > div {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0, 0, 0, .05);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.countdownCountainer > div span {\r\n    flex: 1;\r\n}\r\n\r\n.countdownCountainer > div span:first-child {\r\n    border-right: 1px solid #f0f1f3;\r\n}\r\n.countdownCountainer > div span:last-child {\r\n    border-left: 1px solid #f0f1f3;\r\n}\r\n\r\n.countdownCountainer > span {\r\n    font-size: 6.25rem;\r\n    margin: 0 0.5rem;\r\n}\r\n\r\n.countdownButton {\r\n    width: 100%;\r\n    height: 5rem;\r\n    margin-top: 2rem;\r\n    display: flex;\r\n    align-items: center;   \r\n    justify-content: center;\r\n    border: 0;\r\n    border-radius: 5px; \r\n    background: var(--blue);\r\n    color: var(--white);\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.countdownButton:not(:disable):hover {\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.countdownButtonActive {\r\n    background: var(--white);\r\n    color: var(--title);\r\n}\r\n\r\n.countdownButtonActive:hover {\r\n    background: var(--red);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countdownCountainer": "Countdown_countdownCountainer__3tSZr",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsc0JBQXNCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLDRCQUE0QixLQUFLLHFEQUFxRCxrQkFBa0Isc0JBQXNCLDRCQUE0QixzQ0FBc0MsaUNBQWlDLGdEQUFnRCwyQkFBMkIsMEJBQTBCLDJCQUEyQixLQUFLLDBEQUEwRCxrQkFBa0IsS0FBSyxzRUFBc0Usd0NBQXdDLEtBQUssaUVBQWlFLHVDQUF1QyxLQUFLLHNEQUFzRCwyQkFBMkIseUJBQXlCLEtBQUssMkNBQTJDLG9CQUFvQixxQkFBcUIseUJBQXlCLHNCQUFzQiw0QkFBNEIsbUNBQW1DLGtCQUFrQiwyQkFBMkIsaUNBQWlDLDRCQUE0QiwyQkFBMkIseUJBQXlCLDBDQUEwQyxLQUFLLCtEQUErRCxxQ0FBcUMsS0FBSyxpREFBaUQsaUNBQWlDLDRCQUE0QixLQUFLLHVEQUF1RCwrQkFBK0IsS0FBSyxPQUFPLDJHQUEyRyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxnREFBZ0Qsc0JBQXNCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLDRCQUE0QixLQUFLLG9DQUFvQyxnQkFBZ0Isc0JBQXNCLDRCQUE0QixzQ0FBc0MsaUNBQWlDLGdEQUFnRCwyQkFBMkIsMEJBQTBCLDJCQUEyQixLQUFLLHlDQUF5QyxnQkFBZ0IsS0FBSyxxREFBcUQsd0NBQXdDLEtBQUssZ0RBQWdELHVDQUF1QyxLQUFLLHFDQUFxQywyQkFBMkIseUJBQXlCLEtBQUssMEJBQTBCLG9CQUFvQixxQkFBcUIseUJBQXlCLHNCQUFzQiw0QkFBNEIsbUNBQW1DLGtCQUFrQiwyQkFBMkIsaUNBQWlDLDRCQUE0QiwyQkFBMkIseUJBQXlCLDBDQUEwQyxLQUFLLDhDQUE4QyxxQ0FBcUMsS0FBSyxnQ0FBZ0MsaUNBQWlDLDRCQUE0QixLQUFLLHNDQUFzQywrQkFBK0IsS0FBSyxtQkFBbUI7QUFDaHZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1YjRjYTA1YzQ0NmM5ZjNmYmY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ291bnRkb3duX2NvdW50ZG93bkNvdW50YWluZXJfXzN0U1pyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkNvdW50YWluZXJfXzN0U1pyID4gZGl2IHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIC4wNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db3VudGFpbmVyX18zdFNaciA+IGRpdiBzcGFuIHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkNvdW50YWluZXJfXzN0U1pyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcclxcbn1cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkNvdW50YWluZXJfXzN0U1pyID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db3VudGFpbmVyX18zdFNaciA+IHNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVOm5vdCg6ZGlzYWJsZSk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2Mge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPYzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFPO0FBQ1g7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudGRvd25Db3VudGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQ291bnRhaW5lciA+IGRpdiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDguNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQ291bnRhaW5lciA+IGRpdiBzcGFuIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZG93bkNvdW50YWluZXIgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxyXFxufVxcclxcbi5jb3VudGRvd25Db3VudGFpbmVyID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZG93bkNvdW50YWluZXIgPiBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9uOm5vdCg6ZGlzYWJsZSk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9uQWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9uQWN0aXZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnRkb3duQ291bnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25Db3VudGFpbmVyX18zdFNaclwiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVXCIsXG5cdFwiY291bnRkb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2NcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9
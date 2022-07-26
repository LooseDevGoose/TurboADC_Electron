"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateturbo_adc_electron"]("main_window",{

/***/ "./src/Components/Scripts/Nitro_Retrieve_Vserver.js":
/*!**********************************************************!*\
  !*** ./src/Components/Scripts/Nitro_Retrieve_Vserver.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nitro_Retrieve_Vserver\": () => (/* binding */ Nitro_Retrieve_Vserver)\n/* harmony export */ });\nasync function Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/nsfeature?action=enable`, {\n      method: 'POST',\n      credentials: \"same-origin\",\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        \"nsfeature\": {\n          \"feature\": [\"LB\", \"CS\"]\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        \"all went well :)\";\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Nitro_Retrieve_Vserver: \" + error);\n  }\n\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLGVBQWVBLHNCQUFmLENBQXNDQyxXQUF0QyxFQUFtREMsUUFBbkQsRUFBNkRDLFFBQTdELEVBQXVFQyxhQUF2RSxFQUFzRjtFQUV6RixJQUFHO0lBRUgsTUFBTUMsUUFBUSxHQUFHRCxhQUFhLEdBQUcsT0FBSCxHQUFhLE1BQTNDO0lBQ0EsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFRixRQUFTLE1BQUtKLFdBQVksMENBQTlCLEVBQXlFO01BQ3JHTyxNQUFNLEVBQUUsTUFENkY7TUFFckdDLFdBQVcsRUFBRSxhQUZ3RjtNQUdyR0MsT0FBTyxFQUFFO1FBQ1QsZ0JBQWdCO01BRFAsQ0FINEY7TUFNckdDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDckIsYUFDQTtVQUNJLFdBQ0EsQ0FDSSxJQURKLEVBRUksSUFGSjtRQUZKO01BRnFCLENBQWY7SUFOK0YsQ0FBekUsQ0FBNUIsQ0FIRyxDQXFCQzs7SUFDQSxJQUFHUCxRQUFRLENBQUNRLEVBQVosRUFBZTtNQUVmQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBUSxDQUFDVyxJQUFULEdBQWdCQyxJQUFoQixDQUFzQkMsSUFBSSxJQUFJO1FBQ3RDO01BSUwsQ0FMYSxDQUFaLEVBRmUsQ0FRZjtJQUNDLENBVEQsTUFTSztNQUNESixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0lBRUg7O0lBQUE7RUFJSixDQXRDRCxDQXNDQyxPQUFNSSxLQUFOLEVBQVk7SUFDVEwsT0FBTyxDQUFDSyxLQUFSLENBQWMsNkJBQTZCQSxLQUEzQztFQUNIOztFQUFBO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanM/Zjg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBOaXRyb19SZXRyaWV2ZV9Wc2VydmVyKG5ldHNjYWxlcklQLCB1c2VyTmFtZSwgcGFzc3dvcmQsIGh0dHBzQ2hlY2tib3gpIHtcclxuIFxyXG4gICAgdHJ5e1xyXG5cclxuICAgIGNvbnN0IHByb3RvY29sID0gaHR0cHNDaGVja2JveCA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25ldHNjYWxlcklQfS9uaXRyby92MS9jb25maWcvbnNmZWF0dXJlP2FjdGlvbj1lbmFibGVgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICBcIm5zZmVhdHVyZVwiOiAgXHJcbiAgICB7IFxyXG4gICAgICAgIFwiZmVhdHVyZVwiOiAgXHJcbiAgICAgICAgWyBcclxuICAgICAgICAgICAgXCJMQlwiLCBcclxuICAgICAgICAgICAgXCJDU1wiIFxyXG4gICAgICAgIF0gXHJcbiAgICB9IFxyXG5cclxuICAgIH0pICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0NoZWNrIGlmIHRoZSByZXNwb25zZSBzdWNjZWVkZWQgKGF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIFwiYWxsIHdlbnQgd2VsbCA6KVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9KSkpO1xyXG4gICAgICAgIC8vaWYgbm90IGF1dGhlbnRpY2F0ZWQgc3VjY2VzZnVsbHk6XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNzdWUgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICBcclxuICAgICAgXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTml0cm9fUmV0cmlldmVfVnNlcnZlcjogXCIgKyBlcnJvcik7XHJcbiAgICB9O1xyXG4gICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIk5pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIiLCJuZXRzY2FsZXJJUCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJodHRwc0NoZWNrYm94IiwicHJvdG9jb2wiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwidGhlbiIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Nitro_Retrieve_Vserver.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f0fb44753c2dcb5cf66")
/******/ })();
/******/ 
/******/ }
);
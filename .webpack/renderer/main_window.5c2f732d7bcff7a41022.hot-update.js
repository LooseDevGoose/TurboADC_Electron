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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nitro_Retrieve_Vserver\": () => (/* binding */ Nitro_Retrieve_Vserver)\n/* harmony export */ });\nasync function Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/nsfeature?action=enable`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        \"nsfeature\": {\n          \"feature\": [\"LB\", \"CS\"]\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        \"all went well :)\";\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Nitro_Retrieve_Vserver: \" + error);\n  }\n\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLGVBQWVBLHNCQUFmLENBQXNDQyxXQUF0QyxFQUFtREMsUUFBbkQsRUFBNkRDLFFBQTdELEVBQXVFQyxhQUF2RSxFQUFzRjtFQUV6RixJQUFHO0lBRUgsTUFBTUMsUUFBUSxHQUFHRCxhQUFhLEdBQUcsT0FBSCxHQUFhLE1BQTNDO0lBQ0EsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFRixRQUFTLE1BQUtKLFdBQVksMENBQTlCLEVBQXlFO01BQ3JHTyxNQUFNLEVBQUUsTUFENkY7TUFFckdDLE9BQU8sRUFBRTtRQUNULGdCQUFnQjtNQURQLENBRjRGO01BS3JHQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1FBQ3JCLGFBQ0E7VUFDSSxXQUNBLENBQ0ksSUFESixFQUVJLElBRko7UUFGSjtNQUZxQixDQUFmO0lBTCtGLENBQXpFLENBQTVCLENBSEcsQ0FvQkM7O0lBQ0EsSUFBR04sUUFBUSxDQUFDTyxFQUFaLEVBQWU7TUFFZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVEsQ0FBQ1UsSUFBVCxHQUFnQkMsSUFBaEIsQ0FBc0JDLElBQUksSUFBSTtRQUN0QztNQUlMLENBTGEsQ0FBWixFQUZlLENBUWY7SUFDQyxDQVRELE1BU0s7TUFDREosT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtJQUVIOztJQUFBO0VBSUosQ0FyQ0QsQ0FxQ0MsT0FBTUksS0FBTixFQUFZO0lBQ1RMLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLDZCQUE2QkEsS0FBM0M7RUFDSDs7RUFBQTtBQUlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVyYm9fYWRjX2VsZWN0cm9uLy4vc3JjL0NvbXBvbmVudHMvU2NyaXB0cy9OaXRyb19SZXRyaWV2ZV9Wc2VydmVyLmpzP2Y4NzMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTml0cm9fUmV0cmlldmVfVnNlcnZlcihuZXRzY2FsZXJJUCwgdXNlck5hbWUsIHBhc3N3b3JkLCBodHRwc0NoZWNrYm94KSB7XHJcbiBcclxuICAgIHRyeXtcclxuXHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGh0dHBzQ2hlY2tib3ggPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvdG9jb2x9Oi8vJHtuZXRzY2FsZXJJUH0vbml0cm8vdjEvY29uZmlnL25zZmVhdHVyZT9hY3Rpb249ZW5hYmxlYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICBcIm5zZmVhdHVyZVwiOiAgXHJcbiAgICB7IFxyXG4gICAgICAgIFwiZmVhdHVyZVwiOiAgXHJcbiAgICAgICAgWyBcclxuICAgICAgICAgICAgXCJMQlwiLCBcclxuICAgICAgICAgICAgXCJDU1wiIFxyXG4gICAgICAgIF0gXHJcbiAgICB9IFxyXG5cclxuICAgIH0pICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0NoZWNrIGlmIHRoZSByZXNwb25zZSBzdWNjZWVkZWQgKGF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIFwiYWxsIHdlbnQgd2VsbCA6KVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9KSkpO1xyXG4gICAgICAgIC8vaWYgbm90IGF1dGhlbnRpY2F0ZWQgc3VjY2VzZnVsbHk6XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNzdWUgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICBcclxuICAgICAgXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTml0cm9fUmV0cmlldmVfVnNlcnZlcjogXCIgKyBlcnJvcik7XHJcbiAgICB9O1xyXG4gICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIk5pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIiLCJuZXRzY2FsZXJJUCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJodHRwc0NoZWNrYm94IiwicHJvdG9jb2wiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwianNvbiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Nitro_Retrieve_Vserver.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9bf7be1840cdadc8a60")
/******/ })();
/******/ 
/******/ }
);
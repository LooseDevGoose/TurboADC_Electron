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

/***/ "./src/Components/Scripts/Login_To_ADC.js":
/*!************************************************!*\
  !*** ./src/Components/Scripts/Login_To_ADC.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login_To_ADC\": () => (/* binding */ Login_To_ADC)\n/* harmony export */ });\nasync function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {\n      method: 'POST',\n      credentials: 'include',\n      mode: 'same-origin',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        'login': {\n          'username': userName,\n          'password': password\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        //localStorage.setItem('sessionid', data.sessionid)\n        //document.cookie = `NITRO\\_AUTH\\_TOKEN=${data.sessionid}; expires=Thu, 18 Dec 2023n 12:00:00 UTC; path=/`;\n        return data.sessionid;\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Login_To_ADC: \" + error);\n  }\n\n  ; // return fetch(`${protocol}://${nsip}:/list`)\n  // .then(data => data.json()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsYUFBN0QsRUFBNEU7RUFFL0UsSUFBRztJQUVILE1BQU1DLFFBQVEsR0FBR0QsYUFBYSxHQUFHLE9BQUgsR0FBYSxNQUEzQztJQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUYsUUFBUyxNQUFLSixXQUFZLHdCQUE5QixFQUF1RDtNQUNuRk8sTUFBTSxFQUFFLE1BRDJFO01BRW5GQyxXQUFXLEVBQUUsU0FGc0U7TUFHbkZDLElBQUksRUFBRSxhQUg2RTtNQUluRkMsT0FBTyxFQUFFO1FBQ1QsZ0JBQWdCO01BRFAsQ0FKMEU7TUFPbkZDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDckIsU0FDSTtVQUNBLFlBQVlaLFFBRFo7VUFFQSxZQUFZQztRQUZaO01BRmlCLENBQWY7SUFQNkUsQ0FBdkQsQ0FBNUIsQ0FKRyxDQW1CQzs7SUFDQSxJQUFHRyxRQUFRLENBQUNTLEVBQVosRUFBZTtNQUVmQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsUUFBUSxDQUFDWSxJQUFULEdBQWdCQyxJQUFoQixDQUFzQkMsSUFBSSxJQUFJO1FBQ3RDO1FBQ0Q7UUFDQyxPQUFPQSxJQUFJLENBQUNDLFNBQVo7TUFJTCxDQVBhLENBQVosRUFGZSxDQVVmO0lBQ0MsQ0FYRCxNQVdLO01BQ0RMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7SUFFSDs7SUFBQTtFQUlKLENBdENELENBc0NDLE9BQU1LLEtBQU4sRUFBWTtJQUNUTixPQUFPLENBQUNNLEtBQVIsQ0FBYyxtQkFBbUJBLEtBQWpDO0VBQ0g7O0VBQUEsQ0ExQzhFLENBK0MvRTtFQUNBO0FBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcz8xZTEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIExvZ2luX1RvX0FEQyhuZXRzY2FsZXJJUCwgdXNlck5hbWUsIHBhc3N3b3JkLCBodHRwc0NoZWNrYm94KSB7XHJcbiBcclxuICAgIHRyeXtcclxuXHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGh0dHBzQ2hlY2tib3ggPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb3RvY29sfTovLyR7bmV0c2NhbGVySVB9L25pdHJvL3YxL2NvbmZpZy9sb2dpbmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICdsb2dpbic6IFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgJ3VzZXJuYW1lJzogdXNlck5hbWUsIFxyXG4gICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkXHJcbiAgICAgICAgfSBcclxuICAgIH0pICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0NoZWNrIGlmIHRoZSByZXNwb25zZSBzdWNjZWVkZWQgKGF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb25pZCcsIGRhdGEuc2Vzc2lvbmlkKVxyXG4gICAgICAgICAgIC8vZG9jdW1lbnQuY29va2llID0gYE5JVFJPXFxfQVVUSFxcX1RPS0VOPSR7ZGF0YS5zZXNzaW9uaWR9OyBleHBpcmVzPVRodSwgMTggRGVjIDIwMjNuIDEyOjAwOjAwIFVUQzsgcGF0aD0vYDtcclxuICAgICAgICAgICAgcmV0dXJuKGRhdGEuc2Vzc2lvbmlkKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9KSkpO1xyXG4gICAgICAgIC8vaWYgbm90IGF1dGhlbnRpY2F0ZWQgc3VjY2VzZnVsbHk6XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNzdWUgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICBcclxuICAgICAgXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9naW5fVG9fQURDOiBcIiArIGVycm9yKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG5cclxuICAgIC8vIHJldHVybiBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25zaXB9Oi9saXN0YClcclxuICAgIC8vIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKClcclxuICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJMb2dpbl9Ub19BREMiLCJuZXRzY2FsZXJJUCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJodHRwc0NoZWNrYm94IiwicHJvdG9jb2wiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwianNvbiIsInRoZW4iLCJkYXRhIiwic2Vzc2lvbmlkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Login_To_ADC.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e168c7be105043e6df9")
/******/ })();
/******/ 
/******/ }
);
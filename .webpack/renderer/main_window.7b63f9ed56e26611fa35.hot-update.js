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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login_To_ADC\": () => (/* binding */ Login_To_ADC)\n/* harmony export */ });\nasync function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        'login': {\n          'username': userName,\n          'password': password\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        localStorage.setItem('sessionid', data.sessionid);\n\n        try {\n          document.cookie = 'NITRO\\\\_AUTH\\\\_TOKEN=abc; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/nitro/v1';\n        } catch (error) {\n          console.log(error);\n        }\n\n        return data.sessionid;\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Login_To_ADC: \" + error);\n  }\n\n  ; // return fetch(`${protocol}://${nsip}:/list`)\n  // .then(data => data.json()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsYUFBN0QsRUFBNEU7RUFFL0UsSUFBRztJQUVILE1BQU1DLFFBQVEsR0FBR0QsYUFBYSxHQUFHLE9BQUgsR0FBYSxNQUEzQztJQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUYsUUFBUyxNQUFLSixXQUFZLHdCQUE5QixFQUF1RDtNQUNuRk8sTUFBTSxFQUFFLE1BRDJFO01BRW5GQyxPQUFPLEVBQUU7UUFDVCxnQkFBZ0I7TUFEUCxDQUYwRTtNQUtuRkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtRQUNyQixTQUNJO1VBQ0EsWUFBWVYsUUFEWjtVQUVBLFlBQVlDO1FBRlo7TUFGaUIsQ0FBZjtJQUw2RSxDQUF2RCxDQUE1QixDQUpHLENBaUJDOztJQUNBLElBQUdHLFFBQVEsQ0FBQ08sRUFBWixFQUFlO01BRWZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxRQUFRLENBQUNVLElBQVQsR0FBZ0JDLElBQWhCLENBQXNCQyxJQUFJLElBQUk7UUFDdENDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixFQUFrQ0YsSUFBSSxDQUFDRyxTQUF2Qzs7UUFDQSxJQUFHO1VBQ0NDLFFBQVEsQ0FBQ0MsTUFBVCxHQUFrQixpRkFBbEI7UUFDSCxDQUZELENBRUMsT0FBT0MsS0FBUCxFQUFhO1VBQ1ZWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxLQUFaO1FBQ0g7O1FBRUQsT0FBT04sSUFBSSxDQUFDRyxTQUFaO01BSUwsQ0FaYSxDQUFaLEVBRmUsQ0FlZjtJQUNDLENBaEJELE1BZ0JLO01BQ0RQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7SUFFSDs7SUFBQTtFQUlKLENBekNELENBeUNDLE9BQU1TLEtBQU4sRUFBWTtJQUNUVixPQUFPLENBQUNVLEtBQVIsQ0FBYyxtQkFBbUJBLEtBQWpDO0VBQ0g7O0VBQUEsQ0E3QzhFLENBa0QvRTtFQUNBO0FBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcz8xZTEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIExvZ2luX1RvX0FEQyhuZXRzY2FsZXJJUCwgdXNlck5hbWUsIHBhc3N3b3JkLCBodHRwc0NoZWNrYm94KSB7XHJcbiBcclxuICAgIHRyeXtcclxuXHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGh0dHBzQ2hlY2tib3ggPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb3RvY29sfTovLyR7bmV0c2NhbGVySVB9L25pdHJvL3YxL2NvbmZpZy9sb2dpbmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAnbG9naW4nOiBcclxuICAgICAgICB7IFxyXG4gICAgICAgICd1c2VybmFtZSc6IHVzZXJOYW1lLCBcclxuICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZFxyXG4gICAgICAgIH0gXHJcbiAgICB9KSAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9DaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3VjY2VlZGVkIChhdXRoZW50aWNhdGVkKVxyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbmlkJywgZGF0YS5zZXNzaW9uaWQpXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdOSVRST1xcXFxfQVVUSFxcXFxfVE9LRU49YWJjOyBleHBpcmVzPVRodSwgMTggRGVjIDIwMjIgMTI6MDA6MDAgVVRDOyBwYXRoPS9uaXRyby92MSc7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybihkYXRhLnNlc3Npb25pZClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgfSkpKTtcclxuICAgICAgICAvL2lmIG5vdCBhdXRoZW50aWNhdGVkIHN1Y2Nlc2Z1bGx5OlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzc3VlIG9jY3VyZWRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luX1RvX0FEQzogXCIgKyBlcnJvcik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICBcclxuXHJcbiAgICAvLyByZXR1cm4gZmV0Y2goYCR7cHJvdG9jb2x9Oi8vJHtuc2lwfTovbGlzdGApXHJcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEuanNvbigpXHJcbiAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTG9naW5fVG9fQURDIiwibmV0c2NhbGVySVAiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiaHR0cHNDaGVja2JveCIsInByb3RvY29sIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJ0aGVuIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXNzaW9uaWQiLCJkb2N1bWVudCIsImNvb2tpZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Login_To_ADC.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("57de8dc28dad1757c4a0")
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __webpack_require__ !== 'undefined') __webpack_require__.ab = "X:\\Python Projects\\Personal Projects\\TurboADC_Electron\\TurboADC_Electron\\.webpack\\renderer" + "/native_modules/";
/******/ 
/******/ }
);
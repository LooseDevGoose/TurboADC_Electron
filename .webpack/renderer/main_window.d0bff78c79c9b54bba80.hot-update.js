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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login_To_ADC\": () => (/* binding */ Login_To_ADC)\n/* harmony export */ });\nasync function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {\n      method: 'POST',\n      credentials: 'same-origin',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        'login': {\n          'username': userName,\n          'password': password\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        //localStorage.setItem('sessionid', data.sessionid)\n        document.cookie = `NITRO\\_AUTH\\_TOKEN=${data.sessionid}; expires=session; domain=${netscalerIP}; path=/`;\n        return data.sessionid;\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Login_To_ADC: \" + error);\n  }\n\n  ; // return fetch(`${protocol}://${nsip}:/list`)\n  // .then(data => data.json()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsYUFBN0QsRUFBNEU7RUFFL0UsSUFBRztJQUVILE1BQU1DLFFBQVEsR0FBR0QsYUFBYSxHQUFHLE9BQUgsR0FBYSxNQUEzQztJQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUYsUUFBUyxNQUFLSixXQUFZLHdCQUE5QixFQUF1RDtNQUNuRk8sTUFBTSxFQUFFLE1BRDJFO01BRW5GQyxXQUFXLEVBQUUsYUFGc0U7TUFHbkZDLE9BQU8sRUFBRTtRQUNULGdCQUFnQjtNQURQLENBSDBFO01BTW5GQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1FBQ3JCLFNBQ0k7VUFDQSxZQUFZWCxRQURaO1VBRUEsWUFBWUM7UUFGWjtNQUZpQixDQUFmO0lBTjZFLENBQXZELENBQTVCLENBSkcsQ0FrQkM7O0lBQ0EsSUFBR0csUUFBUSxDQUFDUSxFQUFaLEVBQWU7TUFFZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVEsQ0FBQ1csSUFBVCxHQUFnQkMsSUFBaEIsQ0FBc0JDLElBQUksSUFBSTtRQUN0QztRQUNEQyxRQUFRLENBQUNDLE1BQVQsR0FBbUIsc0JBQXFCRixJQUFJLENBQUNHLFNBQVUsNkJBQTRCckIsV0FBWSxVQUEvRjtRQUNDLE9BQU9rQixJQUFJLENBQUNHLFNBQVo7TUFJTCxDQVBhLENBQVosRUFGZSxDQVVmO0lBQ0MsQ0FYRCxNQVdLO01BQ0RQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7SUFFSDs7SUFBQTtFQUlKLENBckNELENBcUNDLE9BQU1PLEtBQU4sRUFBWTtJQUNUUixPQUFPLENBQUNRLEtBQVIsQ0FBYyxtQkFBbUJBLEtBQWpDO0VBQ0g7O0VBQUEsQ0F6QzhFLENBOEMvRTtFQUNBO0FBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcz8xZTEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIExvZ2luX1RvX0FEQyhuZXRzY2FsZXJJUCwgdXNlck5hbWUsIHBhc3N3b3JkLCBodHRwc0NoZWNrYm94KSB7XHJcbiBcclxuICAgIHRyeXtcclxuXHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGh0dHBzQ2hlY2tib3ggPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb3RvY29sfTovLyR7bmV0c2NhbGVySVB9L25pdHJvL3YxL2NvbmZpZy9sb2dpbmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICdsb2dpbic6IFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgJ3VzZXJuYW1lJzogdXNlck5hbWUsIFxyXG4gICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkXHJcbiAgICAgICAgfSBcclxuICAgIH0pICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0NoZWNrIGlmIHRoZSByZXNwb25zZSBzdWNjZWVkZWQgKGF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb25pZCcsIGRhdGEuc2Vzc2lvbmlkKVxyXG4gICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBOSVRST1xcX0FVVEhcXF9UT0tFTj0ke2RhdGEuc2Vzc2lvbmlkfTsgZXhwaXJlcz1zZXNzaW9uOyBkb21haW49JHtuZXRzY2FsZXJJUH07IHBhdGg9L2A7XHJcbiAgICAgICAgICAgIHJldHVybihkYXRhLnNlc3Npb25pZClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgfSkpKTtcclxuICAgICAgICAvL2lmIG5vdCBhdXRoZW50aWNhdGVkIHN1Y2Nlc2Z1bGx5OlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzc3VlIG9jY3VyZWRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luX1RvX0FEQzogXCIgKyBlcnJvcik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICBcclxuXHJcbiAgICAvLyByZXR1cm4gZmV0Y2goYCR7cHJvdG9jb2x9Oi8vJHtuc2lwfTovbGlzdGApXHJcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEuanNvbigpXHJcbiAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTG9naW5fVG9fQURDIiwibmV0c2NhbGVySVAiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiaHR0cHNDaGVja2JveCIsInByb3RvY29sIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwianNvbiIsInRoZW4iLCJkYXRhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzZXNzaW9uaWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Login_To_ADC.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2b2955a896cb1763777e")
/******/ })();
/******/ 
/******/ }
);
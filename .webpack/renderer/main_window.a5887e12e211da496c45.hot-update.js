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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login_To_ADC\": () => (/* binding */ Login_To_ADC)\n/* harmony export */ });\nasync function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {\n      method: 'POST',\n      credentials: 'same-origin',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        'login': {\n          'username': userName,\n          'password': password\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        //localStorage.setItem('sessionid', data.sessionid)\n        document.cookie = `NITRO\\_AUTH\\_TOKEN=${data.sessionid}; expires=session; path=/`;\n        return data.sessionid;\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Login_To_ADC: \" + error);\n  }\n\n  ; // return fetch(`${protocol}://${nsip}:/list`)\n  // .then(data => data.json()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsYUFBN0QsRUFBNEU7RUFFL0UsSUFBRztJQUVILE1BQU1DLFFBQVEsR0FBR0QsYUFBYSxHQUFHLE9BQUgsR0FBYSxNQUEzQztJQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUYsUUFBUyxNQUFLSixXQUFZLHdCQUE5QixFQUF1RDtNQUNuRk8sTUFBTSxFQUFFLE1BRDJFO01BRW5GQyxXQUFXLEVBQUUsYUFGc0U7TUFHbkZDLE9BQU8sRUFBRTtRQUNULGdCQUFnQjtNQURQLENBSDBFO01BTW5GQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1FBQ3JCLFNBQ0k7VUFDQSxZQUFZWCxRQURaO1VBRUEsWUFBWUM7UUFGWjtNQUZpQixDQUFmO0lBTjZFLENBQXZELENBQTVCLENBSkcsQ0FrQkM7O0lBQ0EsSUFBR0csUUFBUSxDQUFDUSxFQUFaLEVBQWU7TUFFZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVEsQ0FBQ1csSUFBVCxHQUFnQkMsSUFBaEIsQ0FBc0JDLElBQUksSUFBSTtRQUN0QztRQUNEQyxRQUFRLENBQUNDLE1BQVQsR0FBbUIsc0JBQXFCRixJQUFJLENBQUNHLFNBQVUsMkJBQXZEO1FBQ0MsT0FBT0gsSUFBSSxDQUFDRyxTQUFaO01BSUwsQ0FQYSxDQUFaLEVBRmUsQ0FVZjtJQUNDLENBWEQsTUFXSztNQUNEUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0lBRUg7O0lBQUE7RUFJSixDQXJDRCxDQXFDQyxPQUFNTyxLQUFOLEVBQVk7SUFDVFIsT0FBTyxDQUFDUSxLQUFSLENBQWMsbUJBQW1CQSxLQUFqQztFQUNIOztFQUFBLENBekM4RSxDQThDL0U7RUFDQTtBQUlIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVyYm9fYWRjX2VsZWN0cm9uLy4vc3JjL0NvbXBvbmVudHMvU2NyaXB0cy9Mb2dpbl9Ub19BREMuanM/MWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2dpbl9Ub19BREMobmV0c2NhbGVySVAsIHVzZXJOYW1lLCBwYXNzd29yZCwgaHR0cHNDaGVja2JveCkge1xyXG4gXHJcbiAgICB0cnl7XHJcblxyXG4gICAgY29uc3QgcHJvdG9jb2wgPSBodHRwc0NoZWNrYm94ID8gXCJodHRwc1wiIDogXCJodHRwXCI7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25ldHNjYWxlcklQfS9uaXRyby92MS9jb25maWcvbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAnbG9naW4nOiBcclxuICAgICAgICB7IFxyXG4gICAgICAgICd1c2VybmFtZSc6IHVzZXJOYW1lLCBcclxuICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZFxyXG4gICAgICAgIH0gXHJcbiAgICB9KSAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9DaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3VjY2VlZGVkIChhdXRoZW50aWNhdGVkKVxyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uaWQnLCBkYXRhLnNlc3Npb25pZClcclxuICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgTklUUk9cXF9BVVRIXFxfVE9LRU49JHtkYXRhLnNlc3Npb25pZH07IGV4cGlyZXM9c2Vzc2lvbjsgcGF0aD0vYDtcclxuICAgICAgICAgICAgcmV0dXJuKGRhdGEuc2Vzc2lvbmlkKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9KSkpO1xyXG4gICAgICAgIC8vaWYgbm90IGF1dGhlbnRpY2F0ZWQgc3VjY2VzZnVsbHk6XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNzdWUgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICBcclxuICAgICAgXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9naW5fVG9fQURDOiBcIiArIGVycm9yKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG5cclxuICAgIC8vIHJldHVybiBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25zaXB9Oi9saXN0YClcclxuICAgIC8vIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKClcclxuICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJMb2dpbl9Ub19BREMiLCJuZXRzY2FsZXJJUCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJodHRwc0NoZWNrYm94IiwicHJvdG9jb2wiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwidGhlbiIsImRhdGEiLCJkb2N1bWVudCIsImNvb2tpZSIsInNlc3Npb25pZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Login_To_ADC.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2cd0de4ac7bacf195db5")
/******/ })();
/******/ 
/******/ }
);
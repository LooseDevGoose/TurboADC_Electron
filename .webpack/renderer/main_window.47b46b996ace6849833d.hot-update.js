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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login_To_ADC\": () => (/* binding */ Login_To_ADC)\n/* harmony export */ });\nasync function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {\n      method: 'POST',\n      credentials: 'include',\n      mode: 'same-origin',\n      headers: {\n        'Content-Type': 'application/json',\n        'SameSite': 'None'\n      },\n      body: JSON.stringify({\n        'login': {\n          'username': userName,\n          'password': password\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        //localStorage.setItem('sessionid', data.sessionid)\n        //document.cookie = `NITRO\\_AUTH\\_TOKEN=${data.sessionid}; expires=Thu, 18 Dec 2023n 12:00:00 UTC; path=/`;\n        return data.sessionid;\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Login_To_ADC: \" + error);\n  }\n\n  ; // return fetch(`${protocol}://${nsip}:/list`)\n  // .then(data => data.json()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsYUFBN0QsRUFBNEU7RUFFL0UsSUFBRztJQUVILE1BQU1DLFFBQVEsR0FBR0QsYUFBYSxHQUFHLE9BQUgsR0FBYSxNQUEzQztJQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUYsUUFBUyxNQUFLSixXQUFZLHdCQUE5QixFQUF1RDtNQUNuRk8sTUFBTSxFQUFFLE1BRDJFO01BRW5GQyxXQUFXLEVBQUUsU0FGc0U7TUFHbkZDLElBQUksRUFBRSxhQUg2RTtNQUluRkMsT0FBTyxFQUFFO1FBQ1QsZ0JBQWdCLGtCQURQO1FBRVQsWUFBYTtNQUZKLENBSjBFO01BUW5GQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1FBQ3JCLFNBQ0k7VUFDQSxZQUFZWixRQURaO1VBRUEsWUFBWUM7UUFGWjtNQUZpQixDQUFmO0lBUjZFLENBQXZELENBQTVCLENBSkcsQ0FvQkM7O0lBQ0EsSUFBR0csUUFBUSxDQUFDUyxFQUFaLEVBQWU7TUFFZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFFBQVEsQ0FBQ1ksSUFBVCxHQUFnQkMsSUFBaEIsQ0FBc0JDLElBQUksSUFBSTtRQUN0QztRQUNEO1FBQ0MsT0FBT0EsSUFBSSxDQUFDQyxTQUFaO01BSUwsQ0FQYSxDQUFaLEVBRmUsQ0FVZjtJQUNDLENBWEQsTUFXSztNQUNETCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0lBRUg7O0lBQUE7RUFJSixDQXZDRCxDQXVDQyxPQUFNSyxLQUFOLEVBQVk7SUFDVE4sT0FBTyxDQUFDTSxLQUFSLENBQWMsbUJBQW1CQSxLQUFqQztFQUNIOztFQUFBLENBM0M4RSxDQWdEL0U7RUFDQTtBQUlIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVyYm9fYWRjX2VsZWN0cm9uLy4vc3JjL0NvbXBvbmVudHMvU2NyaXB0cy9Mb2dpbl9Ub19BREMuanM/MWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2dpbl9Ub19BREMobmV0c2NhbGVySVAsIHVzZXJOYW1lLCBwYXNzd29yZCwgaHR0cHNDaGVja2JveCkge1xyXG4gXHJcbiAgICB0cnl7XHJcblxyXG4gICAgY29uc3QgcHJvdG9jb2wgPSBodHRwc0NoZWNrYm94ID8gXCJodHRwc1wiIDogXCJodHRwXCI7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25ldHNjYWxlcklQfS9uaXRyby92MS9jb25maWcvbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICdTYW1lU2l0ZScgOiAnTm9uZSdcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgJ2xvZ2luJzogXHJcbiAgICAgICAgeyBcclxuICAgICAgICAndXNlcm5hbWUnOiB1c2VyTmFtZSwgXHJcbiAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmRcclxuICAgICAgICB9IFxyXG4gICAgfSkgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHN1Y2NlZWRlZCAoYXV0aGVudGljYXRlZClcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhID0+IHtcclxuICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbmlkJywgZGF0YS5zZXNzaW9uaWQpXHJcbiAgICAgICAgICAgLy9kb2N1bWVudC5jb29raWUgPSBgTklUUk9cXF9BVVRIXFxfVE9LRU49JHtkYXRhLnNlc3Npb25pZH07IGV4cGlyZXM9VGh1LCAxOCBEZWMgMjAyM24gMTI6MDA6MDAgVVRDOyBwYXRoPS9gO1xyXG4gICAgICAgICAgICByZXR1cm4oZGF0YS5zZXNzaW9uaWQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgIH0pKSk7XHJcbiAgICAgICAgLy9pZiBub3QgYXV0aGVudGljYXRlZCBzdWNjZXNmdWxseTpcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc3N1ZSBvY2N1cmVkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbl9Ub19BREM6IFwiICsgZXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgLy8gcmV0dXJuIGZldGNoKGAke3Byb3RvY29sfTovLyR7bnNpcH06L2xpc3RgKVxyXG4gICAgLy8gLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKVxyXG4gICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkxvZ2luX1RvX0FEQyIsIm5ldHNjYWxlcklQIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImh0dHBzQ2hlY2tib3giLCJwcm90b2NvbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwidGhlbiIsImRhdGEiLCJzZXNzaW9uaWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Login_To_ADC.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a367c8af72d5b35cdac9")
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __webpack_require__ !== 'undefined') __webpack_require__.ab = "X:\\Python Projects\\Personal Projects\\TurboADC_Electron\\TurboADC_Electron\\.webpack\\renderer" + "/native_modules/";
/******/ 
/******/ }
);
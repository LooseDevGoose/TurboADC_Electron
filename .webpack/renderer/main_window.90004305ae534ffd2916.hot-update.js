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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login_To_ADC\": () => (/* binding */ Login_To_ADC)\n/* harmony export */ });\nasync function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {\n      method: 'POST',\n      credentials: \"same-origin\",\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        'login': {\n          'username': userName,\n          'password': password\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        localStorage.setItem('sessionid', data.sessionid);\n        document.cookie = `NITRO\\_AUTH\\_TOKEN=${data.sessionid}; expires=Thu, 18 Dec 2023n 12:00:00 UTC; path=/`;\n        return data.sessionid;\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Login_To_ADC: \" + error);\n  }\n\n  ; // return fetch(`${protocol}://${nsip}:/list`)\n  // .then(data => data.json()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsYUFBN0QsRUFBNEU7RUFFL0UsSUFBRztJQUVILE1BQU1DLFFBQVEsR0FBR0QsYUFBYSxHQUFHLE9BQUgsR0FBYSxNQUEzQztJQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUYsUUFBUyxNQUFLSixXQUFZLHdCQUE5QixFQUF1RDtNQUNuRk8sTUFBTSxFQUFFLE1BRDJFO01BRW5GQyxXQUFXLEVBQUUsYUFGc0U7TUFHbkZDLE9BQU8sRUFBRTtRQUNULGdCQUFnQjtNQURQLENBSDBFO01BTW5GQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1FBQ3JCLFNBQ0k7VUFDQSxZQUFZWCxRQURaO1VBRUEsWUFBWUM7UUFGWjtNQUZpQixDQUFmO0lBTjZFLENBQXZELENBQTVCLENBSkcsQ0FrQkM7O0lBQ0EsSUFBR0csUUFBUSxDQUFDUSxFQUFaLEVBQWU7TUFFZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVEsQ0FBQ1csSUFBVCxHQUFnQkMsSUFBaEIsQ0FBc0JDLElBQUksSUFBSTtRQUN0Q0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDRixJQUFJLENBQUNHLFNBQXZDO1FBQ0FDLFFBQVEsQ0FBQ0MsTUFBVCxHQUFtQixzQkFBcUJMLElBQUksQ0FBQ0csU0FBVSxrREFBdkQ7UUFDQSxPQUFPSCxJQUFJLENBQUNHLFNBQVo7TUFJTCxDQVBhLENBQVosRUFGZSxDQVVmO0lBQ0MsQ0FYRCxNQVdLO01BQ0RQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7SUFFSDs7SUFBQTtFQUlKLENBckNELENBcUNDLE9BQU1TLEtBQU4sRUFBWTtJQUNUVixPQUFPLENBQUNVLEtBQVIsQ0FBYyxtQkFBbUJBLEtBQWpDO0VBQ0g7O0VBQUEsQ0F6QzhFLENBOEMvRTtFQUNBO0FBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL0xvZ2luX1RvX0FEQy5qcz8xZTEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIExvZ2luX1RvX0FEQyhuZXRzY2FsZXJJUCwgdXNlck5hbWUsIHBhc3N3b3JkLCBodHRwc0NoZWNrYm94KSB7XHJcbiBcclxuICAgIHRyeXtcclxuXHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGh0dHBzQ2hlY2tib3ggPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb3RvY29sfTovLyR7bmV0c2NhbGVySVB9L25pdHJvL3YxL2NvbmZpZy9sb2dpbmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgJ2xvZ2luJzogXHJcbiAgICAgICAgeyBcclxuICAgICAgICAndXNlcm5hbWUnOiB1c2VyTmFtZSwgXHJcbiAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmRcclxuICAgICAgICB9IFxyXG4gICAgfSkgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHN1Y2NlZWRlZCAoYXV0aGVudGljYXRlZClcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb25pZCcsIGRhdGEuc2Vzc2lvbmlkKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgTklUUk9cXF9BVVRIXFxfVE9LRU49JHtkYXRhLnNlc3Npb25pZH07IGV4cGlyZXM9VGh1LCAxOCBEZWMgMjAyM24gMTI6MDA6MDAgVVRDOyBwYXRoPS9gO1xyXG4gICAgICAgICAgICByZXR1cm4oZGF0YS5zZXNzaW9uaWQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgIH0pKSk7XHJcbiAgICAgICAgLy9pZiBub3QgYXV0aGVudGljYXRlZCBzdWNjZXNmdWxseTpcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc3N1ZSBvY2N1cmVkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbl9Ub19BREM6IFwiICsgZXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgLy8gcmV0dXJuIGZldGNoKGAke3Byb3RvY29sfTovLyR7bnNpcH06L2xpc3RgKVxyXG4gICAgLy8gLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKVxyXG4gICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkxvZ2luX1RvX0FEQyIsIm5ldHNjYWxlcklQIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImh0dHBzQ2hlY2tib3giLCJwcm90b2NvbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJ0aGVuIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXNzaW9uaWQiLCJkb2N1bWVudCIsImNvb2tpZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Login_To_ADC.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81497c4770b9bd802be3")
/******/ })();
/******/ 
/******/ }
);
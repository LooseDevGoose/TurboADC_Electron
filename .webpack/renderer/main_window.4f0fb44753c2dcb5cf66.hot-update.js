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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nitro_Retrieve_Vserver\": () => (/* binding */ Nitro_Retrieve_Vserver)\n/* harmony export */ });\nasync function Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/nsfeature?action=enable`, {\n      method: 'POST',\n      credentials: \"include\",\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        \"nsfeature\": {\n          \"feature\": [\"LB\", \"CS\"]\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        \"all went well :)\";\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Nitro_Retrieve_Vserver: \" + error);\n  }\n\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLGVBQWVBLHNCQUFmLENBQXNDQyxXQUF0QyxFQUFtREMsUUFBbkQsRUFBNkRDLFFBQTdELEVBQXVFQyxhQUF2RSxFQUFzRjtFQUV6RixJQUFHO0lBRUgsTUFBTUMsUUFBUSxHQUFHRCxhQUFhLEdBQUcsT0FBSCxHQUFhLE1BQTNDO0lBQ0EsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFRixRQUFTLE1BQUtKLFdBQVksMENBQTlCLEVBQXlFO01BQ3JHTyxNQUFNLEVBQUUsTUFENkY7TUFFckdDLFdBQVcsRUFBRSxTQUZ3RjtNQUdyR0MsT0FBTyxFQUFFO1FBQ1QsZ0JBQWdCO01BRFAsQ0FINEY7TUFNckdDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDckIsYUFDQTtVQUNJLFdBQ0EsQ0FDSSxJQURKLEVBRUksSUFGSjtRQUZKO01BRnFCLENBQWY7SUFOK0YsQ0FBekUsQ0FBNUIsQ0FIRyxDQXFCQzs7SUFDQSxJQUFHUCxRQUFRLENBQUNRLEVBQVosRUFBZTtNQUVmQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBUSxDQUFDVyxJQUFULEdBQWdCQyxJQUFoQixDQUFzQkMsSUFBSSxJQUFJO1FBQ3RDO01BSUwsQ0FMYSxDQUFaLEVBRmUsQ0FRZjtJQUNDLENBVEQsTUFTSztNQUNESixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0lBRUg7O0lBQUE7RUFJSixDQXRDRCxDQXNDQyxPQUFNSSxLQUFOLEVBQVk7SUFDVEwsT0FBTyxDQUFDSyxLQUFSLENBQWMsNkJBQTZCQSxLQUEzQztFQUNIOztFQUFBO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanM/Zjg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBOaXRyb19SZXRyaWV2ZV9Wc2VydmVyKG5ldHNjYWxlcklQLCB1c2VyTmFtZSwgcGFzc3dvcmQsIGh0dHBzQ2hlY2tib3gpIHtcclxuIFxyXG4gICAgdHJ5e1xyXG5cclxuICAgIGNvbnN0IHByb3RvY29sID0gaHR0cHNDaGVja2JveCA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25ldHNjYWxlcklQfS9uaXRyby92MS9jb25maWcvbnNmZWF0dXJlP2FjdGlvbj1lbmFibGVgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgIFwibnNmZWF0dXJlXCI6ICBcclxuICAgIHsgXHJcbiAgICAgICAgXCJmZWF0dXJlXCI6ICBcclxuICAgICAgICBbIFxyXG4gICAgICAgICAgICBcIkxCXCIsIFxyXG4gICAgICAgICAgICBcIkNTXCIgXHJcbiAgICAgICAgXSBcclxuICAgIH0gXHJcblxyXG4gICAgfSkgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHN1Y2NlZWRlZCAoYXV0aGVudGljYXRlZClcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhID0+IHtcclxuICAgICAgICAgICAgXCJhbGwgd2VudCB3ZWxsIDopXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgIH0pKSk7XHJcbiAgICAgICAgLy9pZiBub3QgYXV0aGVudGljYXRlZCBzdWNjZXNmdWxseTpcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc3N1ZSBvY2N1cmVkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOaXRyb19SZXRyaWV2ZV9Wc2VydmVyOiBcIiArIGVycm9yKTtcclxuICAgIH07XHJcbiAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTml0cm9fUmV0cmlldmVfVnNlcnZlciIsIm5ldHNjYWxlcklQIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImh0dHBzQ2hlY2tib3giLCJwcm90b2NvbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJ0aGVuIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Nitro_Retrieve_Vserver.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53ef3613d91b27143906")
/******/ })();
/******/ 
/******/ }
);
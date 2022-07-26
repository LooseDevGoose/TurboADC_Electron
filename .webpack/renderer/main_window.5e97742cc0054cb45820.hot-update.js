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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nitro_Retrieve_Vserver\": () => (/* binding */ Nitro_Retrieve_Vserver)\n/* harmony export */ });\nasync function Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/nsfeature?action=enable`, {\n      method: 'GET',\n      credentials: \"include\",\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        \"nsfeature\": {\n          \"feature\": [\"LB\", \"CS\"]\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        \"all went well :)\";\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Nitro_Retrieve_Vserver: \" + error);\n  }\n\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLGVBQWVBLHNCQUFmLENBQXNDQyxXQUF0QyxFQUFtREMsUUFBbkQsRUFBNkRDLFFBQTdELEVBQXVFQyxhQUF2RSxFQUFzRjtFQUV6RixJQUFHO0lBRUgsTUFBTUMsUUFBUSxHQUFHRCxhQUFhLEdBQUcsT0FBSCxHQUFhLE1BQTNDO0lBQ0EsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFRixRQUFTLE1BQUtKLFdBQVksMENBQTlCLEVBQXlFO01BQ3JHTyxNQUFNLEVBQUUsS0FENkY7TUFFckdDLFdBQVcsRUFBRSxTQUZ3RjtNQUdyR0MsT0FBTyxFQUFFO1FBQ1QsZ0JBQWdCO01BRFAsQ0FINEY7TUFNckdDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDckIsYUFDQTtVQUNJLFdBQ0EsQ0FDSSxJQURKLEVBRUksSUFGSjtRQUZKO01BRnFCLENBQWY7SUFOK0YsQ0FBekUsQ0FBNUIsQ0FIRyxDQXFCQzs7SUFDQSxJQUFHUCxRQUFRLENBQUNRLEVBQVosRUFBZTtNQUVmQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBUSxDQUFDVyxJQUFULEdBQWdCQyxJQUFoQixDQUFzQkMsSUFBSSxJQUFJO1FBQ3RDO01BSUwsQ0FMYSxDQUFaLEVBRmUsQ0FRZjtJQUNDLENBVEQsTUFTSztNQUNESixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0lBRUg7O0lBQUE7RUFJSixDQXRDRCxDQXNDQyxPQUFNSSxLQUFOLEVBQVk7SUFDVEwsT0FBTyxDQUFDSyxLQUFSLENBQWMsNkJBQTZCQSxLQUEzQztFQUNIOztFQUFBO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanM/Zjg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBOaXRyb19SZXRyaWV2ZV9Wc2VydmVyKG5ldHNjYWxlcklQLCB1c2VyTmFtZSwgcGFzc3dvcmQsIGh0dHBzQ2hlY2tib3gpIHtcclxuIFxyXG4gICAgdHJ5e1xyXG5cclxuICAgIGNvbnN0IHByb3RvY29sID0gaHR0cHNDaGVja2JveCA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm90b2NvbH06Ly8ke25ldHNjYWxlcklQfS9uaXRyby92MS9jb25maWcvbnNmZWF0dXJlP2FjdGlvbj1lbmFibGVgLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgXCJuc2ZlYXR1cmVcIjogIFxyXG4gICAgeyBcclxuICAgICAgICBcImZlYXR1cmVcIjogIFxyXG4gICAgICAgIFsgXHJcbiAgICAgICAgICAgIFwiTEJcIiwgXHJcbiAgICAgICAgICAgIFwiQ1NcIiBcclxuICAgICAgICBdIFxyXG4gICAgfSBcclxuXHJcbiAgICB9KSAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9DaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3VjY2VlZGVkIChhdXRoZW50aWNhdGVkKVxyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBcImFsbCB3ZW50IHdlbGwgOilcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgfSkpKTtcclxuICAgICAgICAvL2lmIG5vdCBhdXRoZW50aWNhdGVkIHN1Y2Nlc2Z1bGx5OlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzc3VlIG9jY3VyZWRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5pdHJvX1JldHJpZXZlX1ZzZXJ2ZXI6IFwiICsgZXJyb3IpO1xyXG4gICAgfTtcclxuICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJOaXRyb19SZXRyaWV2ZV9Wc2VydmVyIiwibmV0c2NhbGVySVAiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiaHR0cHNDaGVja2JveCIsInByb3RvY29sIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwianNvbiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Nitro_Retrieve_Vserver.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56e7f36b40d7fb73298a")
/******/ })();
/******/ 
/******/ }
);
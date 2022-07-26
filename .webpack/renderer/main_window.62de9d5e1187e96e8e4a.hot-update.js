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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nitro_Retrieve_Vserver\": () => (/* binding */ Nitro_Retrieve_Vserver)\n/* harmony export */ });\nasync function Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox) {\n  try {\n    const protocol = httpsCheckbox ? \"https\" : \"http\";\n    const sessionid = localStorage.getItem('sessionid');\n    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/nsfeature?action=enable`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        \"nsfeature\": {\n          \"feature\": [\"LB\", \"CS\"]\n        }\n      })\n    }); //Check if the response succeeded (authenticated)\n\n    if (response.ok) {\n      console.log(response.json().then(data => {\n        \"all went well :)\";\n      })); //if not authenticated succesfully:\n    } else {\n      console.log(\"issue occured\");\n    }\n\n    ;\n  } catch (error) {\n    console.error(\"Nitro_Retrieve_Vserver: \" + error);\n  }\n\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLGVBQWVBLHNCQUFmLENBQXNDQyxXQUF0QyxFQUFtREMsUUFBbkQsRUFBNkRDLFFBQTdELEVBQXVFQyxhQUF2RSxFQUFzRjtFQUV6RixJQUFHO0lBRUgsTUFBTUMsUUFBUSxHQUFHRCxhQUFhLEdBQUcsT0FBSCxHQUFhLE1BQTNDO0lBQ0EsTUFBTUUsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBbEI7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVMLFFBQVMsTUFBS0osV0FBWSwwQ0FBOUIsRUFBeUU7TUFDckdVLE1BQU0sRUFBRSxNQUQ2RjtNQUVyR0MsT0FBTyxFQUFFO1FBQ1QsZ0JBQWdCO01BRFAsQ0FGNEY7TUFLckdDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDckIsYUFDQTtVQUNJLFdBQ0EsQ0FDSSxJQURKLEVBRUksSUFGSjtRQUZKO01BRnFCLENBQWY7SUFMK0YsQ0FBekUsQ0FBNUIsQ0FKRyxDQXFCQzs7SUFDQSxJQUFHTixRQUFRLENBQUNPLEVBQVosRUFBZTtNQUVmQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBUSxDQUFDVSxJQUFULEdBQWdCQyxJQUFoQixDQUFzQkMsSUFBSSxJQUFJO1FBQ3RDO01BSUwsQ0FMYSxDQUFaLEVBRmUsQ0FRZjtJQUNDLENBVEQsTUFTSztNQUNESixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0lBRUg7O0lBQUE7RUFJSixDQXRDRCxDQXNDQyxPQUFNSSxLQUFOLEVBQVk7SUFDVEwsT0FBTyxDQUFDSyxLQUFSLENBQWMsNkJBQTZCQSxLQUEzQztFQUNIOztFQUFBO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXJib19hZGNfZWxlY3Ryb24vLi9zcmMvQ29tcG9uZW50cy9TY3JpcHRzL05pdHJvX1JldHJpZXZlX1ZzZXJ2ZXIuanM/Zjg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBOaXRyb19SZXRyaWV2ZV9Wc2VydmVyKG5ldHNjYWxlcklQLCB1c2VyTmFtZSwgcGFzc3dvcmQsIGh0dHBzQ2hlY2tib3gpIHtcclxuIFxyXG4gICAgdHJ5e1xyXG5cclxuICAgIGNvbnN0IHByb3RvY29sID0gaHR0cHNDaGVja2JveCA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xyXG4gICAgY29uc3Qgc2Vzc2lvbmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb25pZCcpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb3RvY29sfTovLyR7bmV0c2NhbGVySVB9L25pdHJvL3YxL2NvbmZpZy9uc2ZlYXR1cmU/YWN0aW9uPWVuYWJsZWAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgXCJuc2ZlYXR1cmVcIjogIFxyXG4gICAgeyBcclxuICAgICAgICBcImZlYXR1cmVcIjogIFxyXG4gICAgICAgIFsgXHJcbiAgICAgICAgICAgIFwiTEJcIiwgXHJcbiAgICAgICAgICAgIFwiQ1NcIiBcclxuICAgICAgICBdIFxyXG4gICAgfSBcclxuXHJcbiAgICB9KSAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9DaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3VjY2VlZGVkIChhdXRoZW50aWNhdGVkKVxyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBcImFsbCB3ZW50IHdlbGwgOilcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgfSkpKTtcclxuICAgICAgICAvL2lmIG5vdCBhdXRoZW50aWNhdGVkIHN1Y2Nlc2Z1bGx5OlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzc3VlIG9jY3VyZWRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5pdHJvX1JldHJpZXZlX1ZzZXJ2ZXI6IFwiICsgZXJyb3IpO1xyXG4gICAgfTtcclxuICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJOaXRyb19SZXRyaWV2ZV9Wc2VydmVyIiwibmV0c2NhbGVySVAiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiaHR0cHNDaGVja2JveCIsInByb3RvY29sIiwic2Vzc2lvbmlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwidGhlbiIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Scripts/Nitro_Retrieve_Vserver.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c2f732d7bcff7a41022")
/******/ })();
/******/ 
/******/ }
);
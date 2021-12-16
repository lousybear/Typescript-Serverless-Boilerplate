"use strict";
exports.__esModule = true;
exports.handler = void 0;
var handler = function (event) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello User",
            input: event
        }, null, 2)
    };
    return new Promise(function (resolve) {
        resolve(response);
    });
};
exports.handler = handler;

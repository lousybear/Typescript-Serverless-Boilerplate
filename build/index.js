"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello User",
            input: event,
        }, null, 2),
    };
    return new Promise((resolve) => {
        resolve(response);
    });
};
exports.handler = handler;
//# sourceMappingURL=index.js.map
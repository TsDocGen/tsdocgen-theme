"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("react");
const Property = ({ property }) => {
    return ((0, jsx_runtime_1.jsx)(antd_1.Card, Object.assign({ title: property.name }, { children: (0, jsx_runtime_1.jsx)("code", { children: JSON.stringify(property, null, 2) }, void 0) }), void 0));
};
exports.default = Property;
//# sourceMappingURL=Property.js.map
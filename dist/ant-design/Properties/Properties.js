"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("react");
const Property_1 = require("../Property");
const { Title } = antd_1.Typography;
const Properties = ({ properties }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Title, { children: "Properties" }, void 0), properties.map((property) => ((0, jsx_runtime_1.jsx)(Property_1.default, { property: property }, void 0)))] }, void 0));
};
exports.default = Properties;
//# sourceMappingURL=Properties.js.map
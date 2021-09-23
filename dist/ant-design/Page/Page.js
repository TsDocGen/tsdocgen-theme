"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const { Title, Paragraph } = antd_1.Typography;
const Page = ({ doc }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title, { children: doc.name }, void 0), (0, jsx_runtime_1.jsx)(Paragraph, { children: doc.jsDoc.description }, void 0)] }, void 0));
};
exports.default = Page;
//# sourceMappingURL=Page.js.map
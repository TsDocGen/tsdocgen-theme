"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("react");
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const styled_components_1 = require("styled-components");
const { SubMenu } = antd_1.Menu;
const { Header, Content, Sider } = antd_1.Layout;
const GlobalStyles = (0, styled_components_1.createGlobalStyle) `
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
        width: 100%;
    }
`;
const AppLayout = ({ children }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GlobalStyles, {}, void 0), (0, jsx_runtime_1.jsxs)(antd_1.Layout, Object.assign({ style: { height: '100%' } }, { children: [(0, jsx_runtime_1.jsxs)(Header, Object.assign({ style: { position: 'fixed', zIndex: 1, width: '100%' } }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "logo" }, void 0), (0, jsx_runtime_1.jsxs)(antd_1.Menu, Object.assign({ theme: "dark", mode: "horizontal", defaultSelectedKeys: ['2'] }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "nav 1" }, "1"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "nav 2" }, "2"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "nav 3" }, "3")] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(antd_1.Layout, Object.assign({ style: { marginTop: '64px' } }, { children: [(0, jsx_runtime_1.jsx)(Sider, Object.assign({ width: 200, className: "site-layout-background" }, { children: (0, jsx_runtime_1.jsxs)(antd_1.Menu, Object.assign({ mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], style: { height: '100%', borderRight: 0 } }, { children: [(0, jsx_runtime_1.jsxs)(SubMenu, Object.assign({ icon: (0, jsx_runtime_1.jsx)(icons_1.UserOutlined, {}, void 0), title: "subnav 1" }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option1" }, "1"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option2" }, "2"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option3" }, "3"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option4" }, "4")] }), "sub1"), (0, jsx_runtime_1.jsxs)(SubMenu, Object.assign({ icon: (0, jsx_runtime_1.jsx)(icons_1.LaptopOutlined, {}, void 0), title: "subnav 2" }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option5" }, "5"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option6" }, "6"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option7" }, "7"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option8" }, "8")] }), "sub2"), (0, jsx_runtime_1.jsxs)(SubMenu, Object.assign({ icon: (0, jsx_runtime_1.jsx)(icons_1.NotificationOutlined, {}, void 0), title: "subnav 3" }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option9" }, "9"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option10" }, "10"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option11" }, "11"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "option12" }, "12")] }), "sub3")] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(antd_1.Layout, Object.assign({ style: { padding: '0 24px 24px' } }, { children: [(0, jsx_runtime_1.jsxs)(antd_1.Breadcrumb, Object.assign({ style: { margin: '16px 0' } }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Breadcrumb.Item, { children: "Classes" }, void 0), (0, jsx_runtime_1.jsx)(antd_1.Breadcrumb.Item, { children: "Doc" }, void 0), (0, jsx_runtime_1.jsx)(antd_1.Breadcrumb.Item, { children: "App" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Content, Object.assign({ className: "site-layout-background", style: {
                                            padding: 24,
                                            margin: 0,
                                            minHeight: 280,
                                        } }, { children: children }), void 0)] }), void 0)] }), void 0)] }), void 0)] }, void 0));
};
exports.default = AppLayout;
//# sourceMappingURL=Layout.js.map
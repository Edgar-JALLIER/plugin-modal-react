"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
require("./Modal.css");
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onConfirm = _a.onConfirm, title = _a.title, children = _a.children;
    if (!isOpen)
        return null;
    return (react_1.default.createElement("div", { className: "modal-overlay" },
        react_1.default.createElement("div", { className: "modal-container" },
            react_1.default.createElement("div", { className: "modal-header" },
                react_1.default.createElement("p", null, title),
                react_1.default.createElement("button", { className: "modal-button-close-X", onClick: onClose }, "\u00D7")),
            react_1.default.createElement("div", { className: "modal-content" }, children),
            react_1.default.createElement("div", { className: "modal-buttons" },
                react_1.default.createElement("button", { className: "modal-button modal-button-close", onClick: onClose }, "Cancel"),
                react_1.default.createElement("button", { className: "modal-button modal-button-confirm", onClick: onConfirm }, "Confirm")))));
};
Modal.propTypes = {
    isOpen: prop_types_1.default.bool.isRequired,
    onClose: prop_types_1.default.func.isRequired,
    onConfirm: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string,
    children: prop_types_1.default.node,
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map
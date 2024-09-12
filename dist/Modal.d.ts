import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    children?: React.ReactNode;
}
declare const Modal: {
    ({ isOpen, onClose, onConfirm, title, children }: ModalProps): React.JSX.Element | null;
    propTypes: {
        isOpen: PropTypes.Validator<boolean>;
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        onConfirm: PropTypes.Validator<(...args: any[]) => any>;
        title: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default Modal;

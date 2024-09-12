import * as React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  children?: React.ReactNode;
}

export class Modal extends React.Component<ModalProps> {}

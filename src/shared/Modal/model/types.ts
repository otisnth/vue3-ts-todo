import type { Component } from "vue";

export interface IModalData {
  component: Component;
  props?: Record<string, any>;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { ref, shallowRef } from 'vue';
import type { Component } from 'vue';

interface IModalData {
    component: Component;
    props?: Record<string, any>;
}

const isModalOpen = ref(false);
const modalComponent = shallowRef<Component | null>(null);
const modalProps = ref<Record<string, any>>({});

export const useModal = () => {
    const openModal = ({ component, props = {} }: IModalData) => {
        modalComponent.value = component;
        modalProps.value = props;
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
        modalComponent.value = null;
        modalProps.value = {};
    };

    return {
        isModalOpen,
        modalComponent,
        modalProps,
        openModal,
        closeModal,
    };
}; 
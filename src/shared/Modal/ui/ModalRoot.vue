<template>
  <Modal :is-open="isModalOpen" :on-close="closeModal">
    <component v-if="modalComponent" :is="modalComponent" v-bind="modalProps" @close="closeModal" />
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";
import { useModal } from "../model";

const { isModalOpen, modalComponent, modalProps, closeModal } = useModal();
</script>

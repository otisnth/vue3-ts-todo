<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal">
        <div class="modal__backdrop" @click="onClose" />
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { IModalProps } from "../model";

defineProps<IModalProps>();
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal__backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__content {
  position: relative;
  background: var(--container-bg);
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  min-width: 300px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="error-modal">
    <div class="error-modal__content">
      <div class="error-modal__message-container">
        <SvgIcon class="error-modal__icon" name="ALERT" width="36" height="36" />
        <p class="error-modal__message">{{ message }}</p>
      </div>
      <Button @click="closeModal" class="error-modal__button">ОК</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SvgIcon, Button } from "@shared/Common";
import { useModal } from "../model";

interface IProps {
  message: string;
}

const { message } = defineProps<IProps>();

const { closeModal } = useModal();
</script>

<style>
.error-modal {
  max-width: 600px;
}

.error-modal__content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.error-modal__message-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.error-modal__icon {
  color: var(--red);
}

.error-modal__message {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.error-modal__button {
  width: 100%;
}
</style>

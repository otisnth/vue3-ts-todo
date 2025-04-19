<template>
  <div class="error-modal">
    <div class="error-modal__content">
      <div class="error-modal__message-container">
        <SvgIcon name="ALERT" width="36" height="36" color="#E01B1B" />
        <p class="error-modal__message">{{ message }}</p>
      </div>
      <Button @click="closeModal" class="error-modal__button">ОК</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@shared/Common/ui/SvgIcon.vue";
import Button from "@shared/Common/ui/Button.vue";
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

.error-modal__message {
  color: #d6d6d6;
  font-size: 16px;
}

.error-modal__button {
  width: 100%;
}
</style>

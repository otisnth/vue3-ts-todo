<template>
  <div class="checkbox">
    <input class="checkbox__check" type="checkbox" v-model="value" :disabled="isDisabled" :id="checkboxId" />
    <label v-if="label" class="checkbox__label" :for="checkboxId">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  isDisabled?: boolean;
  label?: string;
}

const value = defineModel<boolean>({ required: true });

const { isDisabled = false, label = "" } = defineProps<IProps>();
const checkboxId = computed(() => `checkbox-${Math.random().toString().slice(2, 6)}`);
</script>

<style>
.checkbox {
  display: flex;
  align-items: center;
}

.checkbox:not(:has(.checkbox__check:disabled)) .checkbox__check,
.checkbox:not(:has(.checkbox__check:disabled)) .checkbox__label {
  cursor: pointer;
}

.checkbox__check {
  accent-color: var(--accent-color);
  width: 16px;
  height: 16px;
}

.checkbox__label {
  color: var(--text-primary);
  font-size: 14px;
  padding-left: 6px;
}
</style>

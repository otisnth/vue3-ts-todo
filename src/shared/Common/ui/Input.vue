<template>
  <div class="shared-input">
    <label v-if="label" class="shared-input__label">{{ label }}</label>
    <input v-model="value" class="shared-input__input" type="text" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

const value = defineModel<string>({ required: true });
const { label = "" } = defineProps<IProps>();
</script>

<style>
.shared-input {
  display: flex;
  flex-direction: column;
}

.shared-input__input {
  padding: 8px 16px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #d6d6d619;
  font-size: 16px;
  color: #d6d6d6;
}

.shared-input__label {
  font-size: 18px;
  color: #d6d6d6;
}
</style>

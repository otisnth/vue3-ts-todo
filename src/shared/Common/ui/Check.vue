<template>
  <div class="checkbox">
    <input class="checkbox__check" type="checkbox" v-model="value" :disabled="isDisabled" />
    <label v-if="label" class="checkbox__label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  isDisabled?: boolean;
  label?: string;
}

const value = defineModel<boolean>({ required: true });

const { isDisabled = false, label = "" } = defineProps<IProps>();
</script>

<style>
.checkbox__check {
  accent-color: #000000;
  width: 16px;
  height: 16px;
}

.checkbox__label {
  color: #d6d6d6;
  font-size: 14px;
  padding-left: 6px;
}
</style>

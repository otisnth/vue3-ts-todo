<template>
  <button :class="['button', `button__${BUTTON_COLOR[color]}`, { button__outlined: outlined }]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { BUTTON_COLOR } from "../model";

interface IProps {
  outlined?: boolean;
  color?: keyof typeof BUTTON_COLOR;
}

const { outlined = false, color = "ORANGE" } = defineProps<IProps>();
</script>

<style>
.button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.button__orange {
  background-color: #e0621b;
  color: #d6d6d6;
  border: 1px solid #e0621b;
}

.button__orange.button__outlined {
  background-color: transparent;
  color: #e0621b;
}

.button__red {
  background-color: #e01b1b;
  color: #d6d6d6;
  border: 1px solid #e01b1b;
}

.button__red.button__outlined {
  background-color: transparent;
  color: #e01b1b;
}

.button__peach {
  background-color: #ffd166;
  color: #d6d6d6;
  border: 1px solid #ffd166;
}

.button__peach.button__outlined {
  background-color: transparent;
  color: #ffd166;
}
</style>

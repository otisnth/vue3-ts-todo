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
  background-color: var(--orange);
  color: var(--text-primary);
  border: 1px solid var(--orange);
}

.button__orange.button__outlined {
  background-color: transparent;
  color: var(--orange);
}

.button__red {
  background-color: var(--red);
  color: var(--text-primary);
  border: 1px solid var(--red);
}

.button__red.button__outlined {
  background-color: transparent;
  color: var(--red);
}

.button__peach {
  background-color: var(--peach);
  color: var(--text-primary);
  border: 1px solid var(--peach);
}

.button__peach.button__outlined {
  background-color: transparent;
  color: var(--peach);
}
</style>

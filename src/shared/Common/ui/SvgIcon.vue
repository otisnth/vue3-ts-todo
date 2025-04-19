<template>
  <svg
    v-if="icon"
    :fill="color"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    shape-rendering="geometricPrecision"
    v-html="icon"
  ></svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ICONS } from "../model";

interface IProps {
  name: keyof typeof ICONS;
  width?: number | string;
  height?: number | string;
  color: string;
}

const { name, width = 24, height = 24, color = "currentColor" } = defineProps<IProps>();

const icon = computed(() => ICONS[name]);
</script>

<template>
  <Check
    class="task"
    :model-value="task.isDone"
    :label="task.title"
    :is-disabled="isPreview"
    @update:model-value="onCheck"
  />
</template>

<script setup lang="ts">
import type { ITask } from "../model";
import { Check } from "@shared/Common";

const { task, isPreview = false } = defineProps<{ task: ITask; isPreview?: boolean }>();

const emit = defineEmits<{
  (e: "update-task", task: ITask): void;
}>();

const onCheck = (value: boolean) => {
  emit("update-task", { ...task, isDone: value });
};
</script>

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
import type { ITask } from "@/entities/Note/model/types";
import Check from "@/shared/ui/Check.vue";

const { task, isPreview = false } = defineProps<{ task: ITask; isPreview?: boolean }>();

const emit = defineEmits<{
  (e: "update-task", task: ITask): void;
}>();

const onCheck = (value: boolean) => {
  emit("update-task", { ...task, isDone: value });
};
</script>

<template>
  <div class="taks-list">
    <Task
      v-for="(item, index) in filteredTasks"
      :key="index"
      :task="item"
      :is-disabled="isPreview"
      @update-task="onUpdateTask(index, $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { ITask } from "../model";
import { filtering, sorting } from "../lib";
import Task from "./Task.vue";

const { tasks, isPreview } = defineProps<{ tasks: Array<ITask>; isPreview: boolean }>();

const emit = defineEmits<{
  (e: "update-tasks", tasks: ITask[]): void;
}>();

const filteredTasks = ref<ITask[]>([]);

onMounted(() => {
  filteredTasks.value = isPreview ? previewSorting() : detailSorting();
});

const previewSorting = () => {
  return sorting(
    filtering(tasks, {
      fields: [{ field: "isDone", value: false }],
    }),
    {
      fields: [{ field: "createdAt", order: "asc" }],
    }
  ).slice(0, 3);
};

const detailSorting = () => {
  return sorting(tasks, {
    fields: [
      { field: "isDone", order: "asc" },
      { field: "createdAt", order: "asc" },
    ],
  });
};

const onUpdateTask = (index: number, updatedTask: ITask) => {
  filteredTasks.value[index] = updatedTask;
  emit("update-tasks", filteredTasks.value);
};
</script>

<style>
.taks-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>

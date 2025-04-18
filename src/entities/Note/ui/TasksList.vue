<template>
  <div class="taks-list__container">
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
import type { ITask } from "@/entities/Note/model/types";
import Task from "./Task.vue";
import { filtering } from "@/entities/Note/lib/filters";
import { sorting } from "@/entities/Note/lib/sorts";

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
  const newTasks = [...detailSorting()];
  newTasks[index] = updatedTask;
  emit("update-tasks", newTasks);
};
</script>

<style></style>

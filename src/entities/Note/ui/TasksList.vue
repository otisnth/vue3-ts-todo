<template>
  <div class="taks-list__container">
    <Task v-for="(item, index) in filteredTasks" :key="index" :task="item" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ITask } from "@/entities/Note/model/types";
import Task from "./Task.vue";
import { filtering } from "@/entities/Note/lib/filters";
import { sorting } from "@/entities/Note/lib/sorts";

const { tasks, isPreview } = defineProps<{ tasks: Array<ITask>; isPreview: boolean }>();

const filteredTasks = computed(() =>
  isPreview
    ? sorting(
        filtering(tasks, {
          fields: [{ field: "isDone", value: false }],
        }),
        {
          fields: [{ field: "createdAt", order: "asc" }],
        }
      ).slice(0, 3)
    : sorting(tasks, {
        fields: [
          { field: "isDone", order: "asc" },
          { field: "createdAt", order: "asc" },
        ],
      })
);
</script>

<style></style>

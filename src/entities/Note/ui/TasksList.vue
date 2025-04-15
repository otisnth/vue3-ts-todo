<template>
  <div class="taks-list__container">
    <Task v-for="(item, index) in tasks" :key="index" :task="item" />
  </div>
</template>

<script setup lang="ts">
import type { ITask } from "@/entities/Note/model/types";
import Task from "./Task.vue";

defineProps<{ tasks: Array<ITask> }>();
</script>

<style></style>

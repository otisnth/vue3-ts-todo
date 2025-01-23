<template>
    <div class="task__container">
        <input class="task__check" type="checkbox" v-model="task.isDone" disabled />
        <label class="task__title">{{ task.title }}</label>
    </div>
</template>

<script setup lang="ts">
import type { ITask } from "@/entities/Note/model/types";

defineProps<{ task: ITask }>();
</script>

<style>
.task__title {
    color: #d6d6d6;
    font-size: 14px;
}
</style>

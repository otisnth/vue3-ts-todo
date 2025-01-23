<template>
    <div class="note__container">
        <div class="note__info-area">
            <div class="note__info-header">
                <img class="note__icon" src="/wait.svg" alt="Task icon" />
                <span class="note__title">{{ note.title }}</span>
            </div>
            <TasksList class="note__task-list" :tasks="noteTasks" />
        </div>

        <div class="note__button-area">
            <div class="note__button">
                <img class="note__icon" src="/edit.svg" alt="Edit btn" />
            </div>

            <div class="note__button">
                <img class="note__icon" src="/trash.svg" alt="Delete btn" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { INote } from "@/entities/Note/model/types";
import TasksList from "./TasksList.vue";

const props = defineProps<{ note: INote }>();

const noteTasks = computed(() => props.note.tasks);
</script>

<style>
.note__container {
    display: flex;
    gap: 4px;
    justify-content: space-between;
    background-color: #1f1f1f;
    border-radius: 4px;
    padding: 16px 32px;
}

.note__info-area,
.note__button-area {
    display: flex;
    flex-direction: column;
}

.note__info-area {
    gap: 12px;
}

.note__button-area {
    justify-content: center;
}

.note__info-header {
    display: flex;
    align-items: center;
    gap: 12px;
}

.note__title {
    color: #d6d6d6;
    font-size: 16px;
}

.note__button {
    padding: 12px;
}

.note__icon {
    width: 24px;
    height: 24px;
}
</style>

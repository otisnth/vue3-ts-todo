<template>
    <div class="note__container">
        <div class="note__info-area">
            <div class="note__info-header">
                <SvgIcon class="note__icon" name="wait" width="24" height="24" color="#D6D6D6"/>
                <span class="note__title">{{ note.title }}</span>
            </div>
            <TasksList class="note__task-list" :tasks="noteTasks" />
        </div>

        <div class="note__button-area">
            <div class="note__button">
                <SvgIcon class="note__icon" name="edit" width="21" height="20" color="#FFD166"/>
            </div>

            <div class="note__button">
                <SvgIcon class="note__icon" name="trash" width="21" height="20" color="#E01B1B"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { INote } from "@/entities/Note/model/types";
import SvgIcon from "@/shared/ui/SvgIcon.vue";
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
    flex-shrink: 0;
}
</style>

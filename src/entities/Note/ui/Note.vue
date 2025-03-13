<template>
    <div class="note__container">
        <div class="note__info-area">
            <div class="note__info-header" @click="handleNoteClick">
                <SvgIcon class="note__icon" name="wait" width="24" height="24" color="#D6D6D6"/>
                <span class="note__title">{{ note.title }}</span>
            </div>
            <TasksList class="note__task-list" :tasks="noteTasks" />
            <div class="note__info-footer">
                <span class="note__info-footer-text">Создано:</span>
                <span class="note__info-date">{{ formatDate(note.createdAt) }}</span>
            </div>
        </div>

        <div class="note__button-area">
            <div class="note__button">
                <SvgIcon class="note__icon" name="edit" width="21" height="20" color="#FFD166" @click="editNoteHandler"/>
            </div>

            <div class="note__button">
                <SvgIcon class="note__icon" name="trash" width="21" height="20" color="#E01B1B"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { INote } from "@/entities/Note/model/types";
import { formatDate } from "../lib/dateFormat";
import SvgIcon from "@/shared/ui/SvgIcon.vue";
import TasksList from "./TasksList.vue";

const router = useRouter();

const props = defineProps<{ note: INote }>();

const noteTasks = computed(() => props.note.tasks);

const handleNoteClick = () => {
    router.push(`/note/${props.note.id}`);
};

const editNoteHandler = () => {
    router.push({ name: "editNote", params: { id: props.note.id } });
};
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
    height: 100%;
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
    cursor: pointer;
}

.note__title {
    color: #d6d6d6;
    font-size: 16px;
}

.note__button {
    padding: 12px;
    cursor: pointer;
}

.note__icon {
    flex-shrink: 0;
}

.note__task-list {
    flex-grow: 1;
}

.note__info-footer-text {
    color: #848484;
    font-weight: 600;
}

.note__info-date {
    color: #d6d6d6;
    font-size: 14px;
    padding-left: 8px;
}

</style>

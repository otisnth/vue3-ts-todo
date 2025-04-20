<template>
  <div class="note__container">
    <div class="note__info-area">
      <div class="note__info-header" @click="handleNoteClick">
        <SvgIcon class="note__icon" name="WAIT" width="24" height="24" />
        <span class="note__title">{{ note.title }}</span>
      </div>
      <TasksList class="note__task-list" :tasks="noteTasks" :is-preview="true" />
      <div class="note__info-footer">
        <span class="note__info-footer-text">Создано:</span>
        <span class="note__info-date">{{ formatDate(note.createdAt) }}</span>
      </div>
    </div>

    <div class="note__button-area">
      <div class="note__button note__button--edit">
        <SvgIcon class="note__icon" name="EDIT" width="24" height="24" @click="editNoteHandler" />
      </div>

      <div class="note__button note__button--delete">
        <SvgIcon class="note__icon" name="TRASH" width="24" height="24" @click="emit('delete-note', note.id)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { SvgIcon, formatDate } from "@shared/Common";
import type { INote } from "../model";
import TasksList from "./TasksList.vue";

const router = useRouter();

const { note } = defineProps<{ note: INote }>();

const emit = defineEmits<{
  (e: "delete-note", noteId: number): void;
}>();

const noteTasks = computed(() => note.tasks);
const noteId = computed(() => Number(note.id));

const handleNoteClick = () => {
  router.push(`/note/${noteId.value}`);
};

const editNoteHandler = () => {
  router.push({ name: "editNote", params: { id: noteId.value } });
};
</script>

<style>
.note__container {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  background-color: var(--container-bg);
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
  color: var(--text-primary);
  font-weight: 600;
}

.note__title {
  font-size: 16px;
}

.note__button {
  padding: 12px;
  cursor: pointer;
}

.note__button--edit {
  color: var(--peach);
}

.note__button--delete {
  color: var(--red);
}

.note__icon {
  flex-shrink: 0;
}

.note__task-list {
  flex-grow: 1;
}

.note__info-footer-text {
  color: var(--text-secondary);
  font-weight: 600;
}

.note__info-date {
  color: var(--text-primary);
  font-size: 14px;
  padding-left: 8px;
}
</style>

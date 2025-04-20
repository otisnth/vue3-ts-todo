<template>
  <PageContentHeader title="Просмотр заметки" is-back-button />
  <div v-if="note" class="note-view-page">
    <div class="note-view-page__header">
      <h2 class="note-view-page__title">{{ note.title }}</h2>
      <Button class="note-view-page__button" outlined color="PEACH" @click="editNoteHandler">Изменить</Button>
      <Button class="note-view-page__button" color="RED" @click="deleteNoteHandler(noteId)">Удалить</Button>
    </div>
    <p class="note-view-page__date">
      <span class="note-view-page__date-text">Создано:</span>
      <span class="note-view-page__date-value">{{ formatDate(note.createdAt) }}</span>
    </p>
    <TasksList class="note-view-page__tasks" :tasks="note.tasks" :is-preview="false" @update-tasks="onTasksUpdate" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEditNote } from "@features/EditNote";
import { useDeleteNote } from "@features/DeleteNote";
import type { INote, ITask } from "@entities/Note";
import { useNotes, TasksList } from "@entities/Note";
import { PageContentHeader, Button, formatDate } from "@shared/Common";

const route = useRoute();
const router = useRouter();
const { getNoteById } = useNotes();
const { editNoteForm } = useEditNote();
const { deleteNoteHandler } = useDeleteNote();

const noteId = Number(route.params.id);
const note = ref<INote | null>(null);

const editNoteHandler = () => {
  router.push({ name: "editNote", params: { id: noteId } });
};

onMounted(() => {
  note.value = getNoteById(noteId);
  if (!note.value) {
    router.push({ name: "notesPage" });
  }
});

const onTasksUpdate = (updatedTasks: ITask[]) => {
  if (!note.value) return;

  note.value.tasks = updatedTasks;
  editNoteForm(note.value);
};
</script>

<style>
.note-view-page {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  gap: 16px;
  padding: 16px 32px;
  background-color: var(--container-bg);
  border-radius: 4px;
}

.note-view-page__header {
  display: grid;
  gap: 16px;
  align-items: center;
  grid-template-columns: 1fr auto auto;
}

.note-view-page__title {
  font-size: 24px;
  color: var(--text-primary);
}

.note-view-page__date-text {
  font-weight: 600;
  color: var(--text-secondary);
}

.note-view-page__date-value {
  color: var(--text-primary);
  padding-left: 8px;
}
</style>

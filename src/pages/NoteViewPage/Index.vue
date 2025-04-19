<template>
  <PageContentHeader title="Просмотр заметки" is-back-button />
  <div v-if="note" class="note-view-page">
    <div class="note-view-page__header">
      <h2 class="note-view-page__title">{{ note.title }}</h2>
      <Button class="note-view-page__button" outlined color="PEACH" @click="editNoteHandler"> Изменить </Button>
      <Button class="note-view-page__button" color="RED"> Удалить </Button>
    </div>
    <p class="note-view-page__date">
      <span class="note-view-page__date-text">Создано:</span>
      <span class="note-view-page__date-value">{{ formatDate(note.createdAt) }}</span>
    </p>
    <TasksList class="note-view-page__tasks" :tasks="note.tasks" :is-preview="false" @update-tasks="onTasksUpdate" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNote } from "@/entities/Note/model/useNote";
import { useEditNote } from "@/features/EditNote/model/useEditNote";
import { formatDate } from "@/shared/Common/lib/dateFormat";
import type { INote, ITask } from "@/entities/Note/model/types";
import TasksList from "@/entities/Note/ui/TasksList.vue";
import { PageContentHeader, Button } from "@shared/Common";

const route = useRoute();
const router = useRouter();
const { getNoteById } = useNote();
const { editNoteForm } = useEditNote();

const noteId = route.params.id;
const note = ref<INote | null>(null);

const editNoteHandler = () => {
  router.push({ name: "editNote", params: { id: noteId } });
};

onMounted(() => {
  note.value = getNoteById(Number(noteId));
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
  background-color: #1f1f1f;
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
  color: #d6d6d6;
}

.note-view-page__date-text {
  font-weight: 600;
  color: #848484;
}

.note-view-page__date-value {
  color: #d6d6d6;
  padding-left: 8px;
}
</style>

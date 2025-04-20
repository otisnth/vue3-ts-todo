<template>
  <PageContentHeader title="Редактировать заметку" is-back-button />

  <div class="edit-note-page">
    <EditNoteForm v-model="note" @save="saveHandler" @cancel="cancelHandler" />
  </div>
</template>

<script setup lang="ts">
import { PageContentHeader } from "@shared/Common";
import { EditNoteForm, useEditNote } from "@features/EditNote";

import { reactive, onMounted, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";

import type { INote } from "@entities/Note";
import { useNotes, useValidationNote } from "@entities/Note";

const router = useRouter();
const route = useRoute();
const { getNoteById } = useNotes();
const { processEditNote } = useEditNote();
const { validateNote } = useValidationNote();

const note = reactive<INote>({
  id: 0,
  title: "",
  tasks: [],
  createdAt: "",
});

onMounted(() => {
  const noteId = Number(route.params.id);
  const currentNote = getNoteById(noteId);

  if (currentNote) {
    Object.assign(note, currentNote);
  } else {
    router.push({ name: "notesPage" });
  }
});

const saveHandler = () => {
  if (validateNote(note)) {
    processEditNote(toRaw(note));
    router.push({ name: "notesPage" });
  }
};

const cancelHandler = () => {
  router.back();
};
</script>

<style>
.edit-note-page {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  padding: 16px 32px;
  background-color: var(--container-bg);
  border-radius: 4px;
}
</style>

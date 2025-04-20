<template>
  <PageContentHeader title="Добавить заметку" is-back-button />

  <div class="add-note-page">
    <AddNoteForm v-model="note" @submit="addHandler" @cancel="cancelHandler" />
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from "vue";
import { useRouter } from "vue-router";
import { AddNoteForm, useAddNote } from "@features/AddNote";
import { useValidationNote } from "@entities/Note";
import type { INote } from "@entities/Note";
import { PageContentHeader } from "@shared/Common";

const router = useRouter();
const { validateNote } = useValidationNote();

const note = reactive<INote>({
  id: 0,
  title: "",
  tasks: [],
  createdAt: "",
});

const { processAddNote } = useAddNote();

const addHandler = () => {
  if (validateNote(note)) {
    processAddNote(toRaw(note));
    router.push({ name: "notesPage" });
  }
};

const cancelHandler = () => {
  router.back();
};
</script>

<style>
.add-note-page {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  padding: 16px 32px;
  background-color: var(--container-bg);
  border-radius: 4px;
}
</style>

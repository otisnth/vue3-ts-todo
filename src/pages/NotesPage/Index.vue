<template>
  <PageContentHeader title="Список заметок" />

  <div v-if="filteredNotes.length" class="notes-list__container">
    <Note v-for="item in filteredNotes" :key="item.id" :note="item" @delete-note="deleteNoteHandler" />
  </div>

  <EmptyNotesPage v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDeleteNote } from "@features/DeleteNote";
import { Note, useNotes, sorting } from "@entities/Note";
import { PageContentHeader } from "@shared/Common";
import { EmptyNotesPage } from "./empty";

const { deleteNoteHandler } = useDeleteNote();
const { notes } = useNotes();

const filteredNotes = computed(() =>
  sorting(notes.value, {
    fields: [{ field: "createdAt", order: "asc" }],
  })
);
</script>

<style>
.notes-list__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
</style>

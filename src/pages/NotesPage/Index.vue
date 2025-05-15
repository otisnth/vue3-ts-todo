<template>
  <PageContentHeader title="Список заметок" />

  <div v-if="filteredNotes.length" class="notes-list__container">
    <Note
      v-for="item in filteredNotes"
      :key="item.id"
      :note="item"
      @view-note="viewNoteHandler"
      @edit-note="editNoteHandler"
      @delete-note="deleteNoteHandler"
    />
  </div>

  <EmptyNotesPage v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useDeleteNote } from "@features/DeleteNote";
import { Note, useNotes, sorting, type INote } from "@entities/Note";
import { PageContentHeader } from "@shared/Common";
import { EmptyNotesPage } from "./empty";

const router = useRouter();

const { deleteNoteHandler } = useDeleteNote();
const { notes } = useNotes();

const viewNoteHandler = (id: INote["id"]) => {
  router.push({ name: "noteView", params: { id } });
};

const editNoteHandler = (id: INote["id"]) => {
  router.push({ name: "editNote", params: { id } });
};

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

<template>
  <PageContentHeader title="Список заметок" />

  <div class="notes-list__container">
    <Note v-for="(item, index) in filteredNotes" :key="index" :note="item" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNote } from "@/entities/Note/model/useNote";
import Note from "@/entities/Note/ui/Note.vue";
import { PageContentHeader } from "@shared/Common";
import { sorting } from "@/entities/Note/lib/sorts";

const { notes } = useNote();

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

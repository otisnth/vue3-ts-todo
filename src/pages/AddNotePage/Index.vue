<template>
  <PageContentHeader title="Добавить заметку" is-back-button />

  <div class="add-note-page">
    <AddNoteForm />
  </div>
</template>

<script setup lang="ts">
import { AddNoteForm } from "@features/AddNote";
import { PageContentHeader } from "@shared/Common";
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

<template>
  <PageContentHeader title="Редактировать заметку" is-back-button />

  <div class="edit-note-page">
    <EditNoteForm />
  </div>
</template>

<script setup lang="ts">
import { PageContentHeader } from "@shared/Common";
import { EditNoteForm } from "@features/EditNote";
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

<template>
    <PageContentHeader title="Добавить заметку" is-back-button />

    <div class="add-note-page">
        <AddNoteForm />
    </div>
</template>

<script setup lang="ts">
import AddNoteForm from "@/features/AddNote/ui/AddNoteForm.vue";
import PageContentHeader from "@/shared/ui/PageContentHeader.vue";

</script>

<style>
.add-note-page {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    background-color: #1f1f1f;
    border-radius: 4px;
}
</style>

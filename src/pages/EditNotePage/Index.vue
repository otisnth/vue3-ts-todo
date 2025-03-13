<template>
    <PageContentHeader title="Редактировать заметку" is-back-button />
    
    <div class="edit-note-page">
        <EditNoteForm />
    </div>
</template>

<script setup lang="ts">
import PageContentHeader from "@/shared/ui/PageContentHeader.vue";
import EditNoteForm from "@/features/EditNote/ui/EditNoteForm.vue";
</script>

<style>
.edit-note-page {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    padding: 16px 32px;
    background-color: #1f1f1f;
    border-radius: 4px;
}
</style>

<template>
    <div class="add-note-form">
        <NoteForm />
    </div>
</template>

<script setup lang="ts">
import NoteForm from "@/entities/Note/ui/NoteForm.vue";
</script>

<style>
.add-note-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

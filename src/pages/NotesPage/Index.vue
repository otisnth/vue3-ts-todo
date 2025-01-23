<template>
    <div class="page-title__container">
        <h1>Список заметок</h1>
    </div>

    <div class="notes-list__container">
        <Note v-for="(item, index) in notes" :key="index" :note="item" />
    </div>
</template>

<script setup lang="ts">
import { useNote } from "@/entities/Note/model/useNote";
import Note from "@/entities/Note/ui/Note.vue";

const { notes } = useNote();
</script>

<style>
.notes-list__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
</style>

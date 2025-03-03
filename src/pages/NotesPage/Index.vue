<template>
    <PageContentHeader title="Список заметок" />

    <div class="notes-list__container">
        <Note v-for="(item, index) in notes" :key="index" :note="item" />
    </div>
</template>

<script setup lang="ts">
import { useNote } from "@/entities/Note/model/useNote";
import Note from "@/entities/Note/ui/Note.vue";
import PageContentHeader from "@/shared/ui/PageContentHeader.vue";

const { notes } = useNote();
</script>

<style>
.notes-list__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
</style>

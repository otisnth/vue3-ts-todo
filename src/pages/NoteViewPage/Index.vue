<template>
    <div class="page-title__container">
        <h1>Просмотр заметки</h1>
    </div>
    <div v-if="note" class="note-view-page">
        <h2>{{ note.title }}</h2>
        <p>{{ formatDate(note.createdAt) }}</p>
        <TasksList :tasks="note.tasks" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useNote } from "@/entities/Note/model/useNote";
import { formatDate } from "@/entities/Note/lib/dateFormat";
import type { INote } from "@/entities/Note/model/types";
import TasksList from "@/entities/Note/ui/TasksList.vue";

const route = useRoute();
const { getNoteById } = useNote();

const noteId = route.params.id;
const note = ref<INote | null>(null);

onMounted(() => {
    note.value = getNoteById(Number(noteId));
});
</script>

<style>
.note-view-page {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    background-color: #1f1f1f;
    border-radius: 4px;
}
</style>

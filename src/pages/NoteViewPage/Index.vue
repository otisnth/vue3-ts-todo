<template>
    <PageContentHeader title="Просмотр заметки" is-back-button />
    <div v-if="note" class="note-view-page">
        <h2 class="note-view-page__title">{{ note.title }}</h2>
        <p class="note-view-page__date">
            <span class="note-view-page__date-text">Создано:</span>
            <span class="note-view-page__date-value">{{ formatDate(note.createdAt) }}</span>
        </p>
        <TasksList class="note-view-page__tasks" :tasks="note.tasks" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useNote } from "@/entities/Note/model/useNote";
import { formatDate } from "@/entities/Note/lib/dateFormat";
import type { INote } from "@/entities/Note/model/types";
import TasksList from "@/entities/Note/ui/TasksList.vue";
import PageContentHeader from "@/shared/ui/PageContentHeader.vue";

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
    gap: 16px;
    padding: 16px 8px;
    background-color: #1f1f1f;
    border-radius: 4px;
}

.note-view-page__title {
    font-size: 24px;
    color: #d6d6d6;
}

.note-view-page__date-text {
    font-weight: 600;
    color: #848484;
}

.note-view-page__date-value {
    color: #d6d6d6;
}

</style>

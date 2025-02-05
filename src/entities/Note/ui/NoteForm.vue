<template>
    <div class="note-form">
        <Input class="note-form__title" label="Заголовок заметки" v-model="note.title" />

        <div class="note-form__tasks">
            <h3 class="note-form__tasks-title">Задачи</h3>
            <Input
                v-for="(item, index) in note.tasks"
                class="note-form__task-input"
                :key="index"
                v-model="item.title"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

import type { INote } from "@/entities/Note/model/types";

import Input from "@/shared/ui/Input.vue";

const MIN_DISPLAYED_TASKS = 3;

const note = defineModel<INote>({ required: true });

const noteTasks = computed(() => note.value.tasks);

watch(
    () => noteTasks,
    () => {
        for (let i = 0; i < MIN_DISPLAYED_TASKS - noteTasks.value.length; i++) {
            note.value.tasks.push({ title: "", isDone: false, createdAt: "" });
        }

        if (!noteTasks.value.find((task) => task.title === "") && MIN_DISPLAYED_TASKS <= noteTasks.value.length) {
            note.value.tasks.push({ title: "", isDone: false, createdAt: "" });
        }
    },
    {
        immediate: true,
        deep: true,
    }
);
</script>

<style>
.note-form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.note-form__tasks-title {
    font-size: 18px;
    font-weight: 500;
    color: #d6d6d6;
}
</style>

<template>
  <div class="note-form">
    <Input class="note-form__title" label="Заголовок заметки" v-model="note.title" />

    <div class="note-form__tasks">
      <h3 class="note-form__tasks-title">Задачи</h3>
      <div class="note-form__task" v-for="(item, index) in note.tasks" :key="index">
        <Check v-if="isEditForm" class="note-form__task-check" v-model="item.isDone" />
        <Input class="note-form__task-input" v-model="item.title" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

import type { INote } from "@/entities/Note/model/types";

import { Input, Check } from "@shared/Common";

interface IProps {
  isEditForm?: boolean;
}

const MAX_DISPLAYED_TASKS = 3;

const { isEditForm = false } = defineProps<IProps>();

const note = defineModel<INote>({ required: true });

const noteTasks = computed(() => note.value.tasks);

watch(
  () => noteTasks,
  () => {
    for (let i = 0; i < MAX_DISPLAYED_TASKS - noteTasks.value.length; i++) {
      note.value.tasks.push({ title: "", isDone: false, createdAt: "" });
    }

    if (!noteTasks.value.find((task) => task.title === "") && MAX_DISPLAYED_TASKS <= noteTasks.value.length) {
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

.note-form__task {
  display: flex;
  align-items: center;
}
</style>

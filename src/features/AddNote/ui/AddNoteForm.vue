<template>
  <div class="add-note-form">
    <NoteForm v-model="note" />

    <div class="add-note-form__button-row">
      <Button @click="cancelButtonHandler" class="add-note-form__button" :outlined="true">
        <SvgIcon name="CANCEL" width="30" height="30" color="#e0621b" />
        <span class="add-note-form__button-text">Отмена</span>
      </Button>
      <Button @click="addButtonHandler" class="add-note-form__button">
        <SvgIcon name="EDIT_TODO" width="30" height="30" color="#FFFFFF" />
        <span class="add-note-form__button-text">Добавить</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from "vue";
import { useRouter } from "vue-router";

import { Button, SvgIcon } from "@shared/Common";
import type { INote } from "@entities/Note";
import { NoteForm, useValidationNote } from "@entities/Note";
import { useAddNote } from "../model";

const router = useRouter();
const { validateNote } = useValidationNote();

const note = reactive<INote>({
  id: 0,
  title: "",
  tasks: [],
  createdAt: "",
});

const { addNoteForm } = useAddNote();

const addButtonHandler = () => {
  if (validateNote(note)) {
    addNoteForm(toRaw(note));
    router.push({ name: "notesPage" });
  }
};

const cancelButtonHandler = () => {
  router.back();
};
</script>

<style>
.add-note-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.add-note-form__button-row {
  display: flex;
  gap: 20px;
}
</style>

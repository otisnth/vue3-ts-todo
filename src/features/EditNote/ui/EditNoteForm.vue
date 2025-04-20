<template>
  <div class="edit-note-form">
    <NoteForm v-model="note" is-edit-form />

    <div class="edit-note-form__button-row">
      <Button @click="emit('cancel')" class="edit-note-form__button" :outlined="true">
        <SvgIcon name="CANCEL" width="30" height="30" />
        <span class="edit-note-form__button-text">Отмена</span>
      </Button>
      <Button @click="emit('save')" class="edit-note-form__button">
        <SvgIcon name="EDIT_TODO" width="30" height="30" />
        <span class="edit-note-form__button-text">Сохранить</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NoteForm } from "@entities/Note";
import type { INote } from "@entities/Note";
import { Button, SvgIcon } from "@shared/Common";

const note = defineModel<INote>({ required: true });

const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "save"): void;
}>();
</script>

<style>
.edit-note-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.edit-note-form__button-row {
  display: flex;
  gap: 20px;
}
</style>

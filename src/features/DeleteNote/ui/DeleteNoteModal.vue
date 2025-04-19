<template>
  <div class="delete-note-modal">
    <h2 class="delete-note-modal__title">Вы действительно хотите удалить заметку?</h2>
    <div class="delete-note-modal__buttons">
      <Button @click="$emit('close')" :outlined="true">Отмена</Button>
      <Button @click="confirmDelete">Удалить</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@shared/Common";
import { useDeleteNote } from "../model/useDeleteNote";

const props = defineProps<{
  noteId: number;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const { deleteNoteHandler } = useDeleteNote();

const confirmDelete = () => {
  deleteNoteHandler(props.noteId);
  emit("close");
};
</script>

<style>
.delete-note-modal {
  display: grid;
  justify-items: center;
  gap: 40px;
}

.delete-note-modal__title {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}

.delete-note-modal__buttons {
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 20px;
}
</style>

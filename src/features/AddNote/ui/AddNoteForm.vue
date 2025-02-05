<template>
    <div class="add-note-form">
        <NoteForm v-model="note" />

        <div class="add-note-form__button-row">
            <Button class="add-note-form__button" :outlined="true">
                <img class="add-note-form__button-icon" src="/cancel.svg" alt="Cancel icon" />
                <span class="add-note-form__button-text">Отмена</span>
            </Button>
            <Button @click="addButtonHandler" class="add-note-form__button">
                <img class="add-note-form__button-icon" src="/edit.svg" alt="List icon" />
                <span class="add-note-form__button-text">Добавить</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "@/shared/ui/Button.vue";
import NoteForm from "@/entities/Note/ui/NoteForm.vue";

import type { INote } from "@/entities/Note/model/types";

import { useAddNote } from "@/features/AddNote/model/useAddNote";

const note = ref<INote>({
    title: "",
    tasks: [],
    createdAt: "",
});

const { addNoteForm } = useAddNote();

const addButtonHandler = () => {
    addNoteForm(note.value);
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

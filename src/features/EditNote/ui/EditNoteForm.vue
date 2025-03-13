<template>
    <div class="edit-note-form">
        <NoteForm v-model="note" />

        <div class="edit-note-form__button-row">
            <Button @click="cancelButtonHandler" class="edit-note-form__button" :outlined="true">
                <SvgIcon name="cancel" width="30" height="30" color="#e0621b"/>
                <span class="edit-note-form__button-text">Отмена</span>
            </Button>
            <Button @click="saveButtonHandler" class="edit-note-form__button">
                <SvgIcon name="editTodo" width="30" height="30" color="#FFFFFF"/>
                <span class="edit-note-form__button-text">Сохранить</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";

import SvgIcon from "@/shared/ui/SvgIcon.vue";
import Button from "@/shared/ui/Button.vue";
import NoteForm from "@/entities/Note/ui/NoteForm.vue";

import { useNote } from "@/entities/Note/model/useNote";
import type { INote } from "@/entities/Note/model/types";
import { useEditNote } from "@/features/EditNote/model/useEditNote";

const router = useRouter();
const route = useRoute();
const { getNoteById } = useNote();
const { editNoteForm } = useEditNote();

const note = reactive<INote>({
    id: 0,
    title: "",
    tasks: [],
    createdAt: "",
});

onMounted(() => {
    const noteId = Number(route.params.id);
    const currentNote = getNoteById(noteId);
    
    if (currentNote) {
        Object.assign(note, currentNote);
    } else {
        router.push({ name: "notesPage" });
    }
});

const saveButtonHandler = () => {
    editNoteForm(toRaw(note));
    router.push({ name: "notesPage" });
};

const cancelButtonHandler = () => {
    router.back();
};
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

<template>
    <div class="add-note-form">
        <NoteForm v-model="note" />

        <div class="add-note-form__button-row">
            <Button @click="cancelButtonHandler" class="add-note-form__button" :outlined="true">
                <SvgIcon name="cancel" width="30" height="30" color="#e0621b"/>
                <span class="add-note-form__button-text">Отмена</span>
            </Button>
            <Button @click="addButtonHandler" class="add-note-form__button">
                <SvgIcon name="edit" width="30" height="30" color="#FFD166"/>
                <span class="add-note-form__button-text">Добавить</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from "vue";
import { useRouter } from "vue-router";

import SvgIcon from "@/shared/ui/SvgIcon.vue";
import Button from "@/shared/ui/Button.vue";
import NoteForm from "@/entities/Note/ui/NoteForm.vue";

import type { INote } from "@/entities/Note/model/types";

import { useAddNote } from "@/features/AddNote/model/useAddNote";

const router = useRouter();

const note = reactive<INote>({
    title: "",
    tasks: [],
    createdAt: "",
});

const { addNoteForm } = useAddNote();

const addButtonHandler = () => {
    addNoteForm(toRaw(note));
    router.push({ name: "notesPage" });
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

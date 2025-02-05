import { ref } from "vue";

import type { INote } from "@/entities/Note/model/types";

import { useNote } from "@/entities/Note/model/useNote";

export const useAddNote = () => {
    const { addNote } = useNote();

    const addNoteForm = (note: INote) => {
        note.createdAt = Date.now().toString();

        note.tasks.forEach((task) => {
            task.createdAt = Date.now().toString();
        });

        addNote(note);
    };

    return {
        addNoteForm,
    };
};

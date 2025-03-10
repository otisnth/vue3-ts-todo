import { ref } from "vue";

import type { INote } from "./types";

const notes = ref<INote[]>([
    {
        id: 1,
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        createdAt: "1740983760374",
        tasks: [
            {
                title: "Dolor sit amet consectetur adipisicing elit.",
                isDone: true,
                createdAt: "1740983760374",
            },
            {
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                isDone: false,
                createdAt: "1740983760374",
            },
        ],
    },
    {
        id: 2,
        title: "Dolor sit amet consectetur adipisicing elit.",
        createdAt: "1740983760374",
        tasks: [
            {
                title: "Dolor sit amet consectetur adipisicing elit.",
                isDone: true,
                createdAt: "1740983760374",
            },
            {
                title: "Lorem ipsum",
                isDone: true,
                createdAt: "1740983760374",
            },
        ],
    },
]);

export const useNote = () => {
    const addNote = (note: INote) => {
        notes.value.push(note);
    };

    const getNoteById = (id: number) => {
        return notes.value.find((note) => note.id === id) || null;
    };

    return {
        notes,
        addNote,
        getNoteById,
    };
};

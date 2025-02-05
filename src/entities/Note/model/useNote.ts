import { ref } from "vue";

import type { INote } from "./types";

const notes = ref<INote[]>([
    {
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        createdAt: "2025-01-23",
        tasks: [
            {
                title: "Dolor sit amet consectetur adipisicing elit.",
                isDone: true,
                createdAt: "2025-01-23",
            },
            {
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                isDone: false,
                createdAt: "2025-01-23",
            },
        ],
    },
    {
        title: "Dolor sit amet consectetur adipisicing elit.",
        createdAt: "2025-01-23",
        tasks: [
            {
                title: "Dolor sit amet consectetur adipisicing elit.",
                isDone: true,
                createdAt: "2025-01-23",
            },
            {
                title: "Lorem ipsum",
                isDone: true,
                createdAt: "2025-01-23",
            },
        ],
    },
]);

export const useNote = () => {
    const addNote = (note: INote) => {
        notes.value.push(note);
    };

    return {
        notes,
        addNote,
    };
};

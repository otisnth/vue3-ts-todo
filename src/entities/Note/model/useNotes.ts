import { ref } from "vue";
import type { INote } from "./types";
import { deepClone } from "@shared/Common";

const notes = ref<INote[]>([
  {
    id: 1,
    title: "Заметка 1",
    createdAt: "1740983760374",
    tasks: [
      {
        title: "Задача 1 у заметки 1",
        isDone: true,
        createdAt: "1740983760374",
      },
      {
        title: "Задача 2 у заметки 1",
        isDone: false,
        createdAt: "1740983760374",
      },
    ],
  },
  {
    id: 2,
    title: "Заметка 2",
    createdAt: "1740983900900",
    tasks: [
      {
        title: "Задача 1 у заметки 2",
        isDone: true,
        createdAt: "1740983900900",
      },
      {
        title: "Задача 2 у заметки 2",
        isDone: true,
        createdAt: "1740983900900",
      },
    ],
  },
]);

export const useNotes = () => {
  const addNote = (note: INote) => {
    notes.value.push(note);
  };

  const getNoteById = (id: number) => {
    const foundNote = notes.value.find((note) => note.id === id);
    if (!foundNote) return null;

    return deepClone(foundNote);
  };

  const updateNote = (updatedNote: INote) => {
    const index = notes.value.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
      notes.value[index] = updatedNote;
    }
  };

  const deleteNote = (id: number) => {
    const index = notes.value.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes.value.splice(index, 1);
    }
  };

  return {
    notes,
    addNote,
    getNoteById,
    updateNote,
    deleteNote,
  };
};

import { ref } from "vue";
import type { INote } from "./types";
import { deepClone } from "@shared/Common";
import { STUB_NOTES } from "./config";

const notes = ref<INote[]>(STUB_NOTES);

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

import type { INote } from "@entities/Note";
import { useNotes } from "@entities/Note";

export const useAddNote = () => {
  const { addNote } = useNotes();

  const addNoteForm = (note: INote) => {
    note.createdAt = Date.now().toString();

    note.tasks = note.tasks.filter((task) => task.title.length);

    note.tasks.forEach((task) => {
      task.createdAt = Date.now().toString();
    });

    // For unique id
    note.id = Date.now();

    addNote(note);
  };

  return {
    addNoteForm,
  };
};

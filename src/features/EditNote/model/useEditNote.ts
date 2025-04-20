import type { INote } from "@entities/Note";
import { useNotes } from "@entities/Note";

export const useEditNote = () => {
  const { updateNote } = useNotes();

  const processEditNote = (note: INote) => {
    note.tasks = note.tasks.filter((task) => task.title.length);

    note.tasks.forEach((task) => {
      if (!task.createdAt) {
        task.createdAt = Date.now().toString();
      }
    });

    updateNote(note);
  };

  return {
    processEditNote,
  };
};

import type { INote } from "@/entities/Note/model/types";
import { useNote } from "@/entities/Note/model/useNote";

export const useEditNote = () => {
  const { updateNote } = useNote();

  const editNoteForm = (note: INote) => {
    note.tasks = note.tasks.filter((task) => task.title.length);

    note.tasks.forEach((task) => {
      if (!task.createdAt) {
        task.createdAt = Date.now().toString();
      }
    });

    updateNote(note);
  };

  return {
    editNoteForm,
  };
};

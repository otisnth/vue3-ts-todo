import { useRouter } from "vue-router";
import { useNotes } from "@entities/Note";

export const useDeleteNote = () => {
  const { deleteNote } = useNotes();
  const router = useRouter();

  const deleteNoteHandler = (noteId: number) => {
    deleteNote(noteId);
    router.push({ name: "notesPage" });
  };

  return {
    deleteNoteHandler,
  };
};

import { useNote } from "@/entities/Note/model/useNote";
import { useRouter } from "vue-router";

export const useDeleteNote = () => {
  const { deleteNote } = useNote();
  const router = useRouter();

  const deleteNoteHandler = (noteId: number) => {
    deleteNote(noteId);
    router.push({ name: "notesPage" });
  };

  return {
    deleteNoteHandler,
  };
};

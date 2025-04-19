import { useRouter } from "vue-router";
import { useNotes } from "@entities/Note";
import { useModal } from "@shared/Modal";
import { DeleteNoteModal } from "../ui";

export const useDeleteNote = () => {
  const router = useRouter();
  const { deleteNote } = useNotes();
  const { openModal } = useModal();

  const processDeleteNote = (noteId: number): void => {
    deleteNote(noteId);
    router.push({ name: "notesPage" });
  };

  const deleteNoteHandler = (noteId: number): void => {
    openModal({
      component: DeleteNoteModal,
      props: { noteId },
    });
  };

  return {
    processDeleteNote,
    deleteNoteHandler,
  };
};

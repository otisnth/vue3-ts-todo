import { createRouter, createWebHistory } from "vue-router";
import AddNotePage from "@/pages/AddNotePage/Index.vue";
import EditNotePage from "@/pages/EditNotePage/Index.vue";
import NotesPage from "@/pages/NotesPage/Index.vue";
import NoteViewPage from "@/pages/NoteViewPage/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "notesPage",
      component: NotesPage,
    },
    {
      path: "/note/:id([0-9]+)",
      name: "noteView",
      component: NoteViewPage,
    },
    {
      path: "/note/:id([0-9]+)/edit",
      name: "editNote",
      component: EditNotePage,
    },
    {
      path: "/note/add",
      name: "addNote",
      component: AddNotePage,
    },
  ],
});

export default router;

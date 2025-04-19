import type { IHeaderLink, TTheme } from "./types";

export const HEADER_LINKS: Array<IHeaderLink> = [
  {
    id: "list-note",
    link: "/",
    title: "Список заметок",
  },
  {
    id: "add-note",
    link: "/note/add",
    title: "Добавить заметку",
  },
];

export const THEME_KEY = "theme";
export const DEFAULT_THEME: TTheme = "light";

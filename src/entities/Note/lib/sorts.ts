import type { INote, ITask } from "../model/types";

type NoteSortField = Extract<keyof INote, "createdAt">;
type TaskSortField = Extract<keyof ITask, "createdAt" | "isDone">;

type SortOrder = "asc" | "desc";

type TCompareFn<T> = (a: T, b: T) => number;

interface SortConfig<T, F extends keyof T> {
  fields: { field: F; order?: SortOrder; customCompareFn?: TCompareFn<T> }[];
}

function baseCompare(a: any, b: any): number {
  if (Number(a) == Number(b)) return 0;
  if (Number(a) < Number(b)) return -1;
  return 1;
}

export function sorting<T, F extends keyof T>(items: T[], config: SortConfig<T, F>): T[];
export function sorting(items: ITask[], config: SortConfig<ITask, TaskSortField>): ITask[];
export function sorting(items: INote[], config: SortConfig<INote, NoteSortField>): INote[];

export function sorting<T, F extends keyof T>(items: T[], config: SortConfig<T, F>): T[] {
  return [...items].sort((a, b) => {
    for (const { field, order = "asc", customCompareFn } of config.fields) {
      let cmp = 0;
      if (customCompareFn) {
        cmp = customCompareFn(a, b);
      } else {
        cmp = baseCompare(a[field], b[field]);
      }
      if (cmp !== 0) {
        return order === "asc" ? cmp : -cmp;
      }
    }
    return 0;
  });
}

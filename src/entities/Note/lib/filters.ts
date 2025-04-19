import type { ITask } from "../model";

type TaskFilterField = Extract<keyof ITask, "isDone">;
type TaskFilterFn<T> = (item: T, value: any) => boolean;

interface FilterConfig<T, F extends keyof T> {
  fields: { field: F; value: T[F] | T[F][]; customFilterFn?: TaskFilterFn<T> }[];
}

export function filtering<T, F extends keyof T>(items: T[], config: FilterConfig<T, F>): T[];
export function filtering(items: ITask[], config: FilterConfig<ITask, TaskFilterField>): ITask[];

export function filtering<T, F extends keyof T>(items: T[], config: FilterConfig<T, F>): T[] {
  return items.filter((item) =>
    config.fields.every(({ field, value, customFilterFn }) => {
      if (customFilterFn) {
        return customFilterFn(item, value);
      }
      if (Array.isArray(value)) {
        return value.includes(item[field]);
      }
      return item[field] === value;
    })
  );
}

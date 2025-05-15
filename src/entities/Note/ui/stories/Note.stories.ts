import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import Note from "../Note.vue";
import type { INote } from "../../model";

const exampleNote: INote = {
  id: 1,
  title: "Моя заметка",
  createdAt: "1710000000000",
  tasks: [
    { title: "Первая задача", isDone: false, createdAt: "1710000000000" },
    { title: "Вторая задача", isDone: true, createdAt: "1710000001000" },
    { title: "Третья задача", isDone: false, createdAt: "1710000002000" },
  ],
};

const meta: Meta<typeof Note> = {
  title: "Entities/Note",
  component: Note,
  tags: ["autodocs"],
  argTypes: {
    note: { control: "object" },
  },
  args: {
    note: exampleNote,
    // @ts-expect-error:
    onDeleteNote: fn(),
    onViewNote: fn(),
    onEditNote: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutTasks: Story = {
  args: {
    note: {
      ...exampleNote,
      tasks: [],
    },
  },
};

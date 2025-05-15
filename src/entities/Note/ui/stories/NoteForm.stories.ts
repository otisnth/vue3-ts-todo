import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { userEvent, within } from "@storybook/test";
import NoteForm from "../NoteForm.vue";
import type { INote } from "../../model";

const emptyNote: INote = {
  id: 1,
  title: "",
  createdAt: Date.now().toString(),
  tasks: [
    { title: "", isDone: false, createdAt: Date.now().toString() },
    { title: "", isDone: false, createdAt: Date.now().toString() },
  ],
};

const filledNote: INote = {
  id: 2,
  title: "Заметка о покупках",
  createdAt: Date.now().toString(),
  tasks: [
    { title: "Купить хлеб", isDone: false, createdAt: Date.now().toString() },
    { title: "Купить молоко", isDone: true, createdAt: Date.now().toString() },
    { title: "Купить сыр", isDone: false, createdAt: Date.now().toString() },
  ],
};

const meta: Meta<typeof NoteForm> = {
  title: "Entities/NoteForm",
  component: NoteForm,
  tags: ["autodocs"],
  argTypes: {
    isEditForm: { control: "boolean" },
    modelValue: { control: "object", name: "note" },
  },
  args: {
    isEditForm: true,
    "onUpdate:modelValue": fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  args: {
    modelValue: { ...emptyNote },
  },
};

export const FilledForm: Story = {
  args: {
    modelValue: { ...filledNote },
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const titleInput = canvas.getByTestId("note-form__title").querySelector("input");
  //   if (titleInput) {
  //     await userEvent.clear(titleInput);
  //     await userEvent.type(titleInput, filledNote.title, { delay: 100 });
  //   }

  //   const { tasks } = filledNote;

  //   for (let i = 0; i < tasks.length; i++) {
  //     const taskInput = canvas.getByTestId(`note-form__task-input-${i}`).querySelector("input");
  //     if (taskInput) {
  //       await userEvent.clear(taskInput);
  //       await userEvent.type(taskInput, tasks[i].title, { delay: 100 });
  //     }

  //     if (tasks[i].isDone) {
  //       const check = canvas.queryByTestId?.(`note-form__task-check-${i}`);
  //       if (check) {
  //         await userEvent.click(check.querySelector("input") ?? check);
  //       }
  //     }
  //   }
  // },
};

export const AddMode: Story = {
  args: {
    isEditForm: false,
    modelValue: { ...filledNote },
  },
};

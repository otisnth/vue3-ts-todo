import type { INote } from "./types";
import { useModal, ErrorModal } from "@shared/Modal";

interface IValidationRule {
  field: keyof INote;
  validate: (value: any) => boolean;
  message: string;
}

const defaultValidationRules: IValidationRule[] = [
  {
    field: "title",
    validate: (value: string) => Boolean(value?.trim()),
    message: "Заголовок заметки является обязательным полем",
  },
];

export const useValidationNote = (customRules: IValidationRule[] = []) => {
  const { openModal } = useModal();
  const validationRules = [...defaultValidationRules, ...customRules];

  const validateNote = (note: INote): boolean => {
    for (const rule of validationRules) {
      const value = note[rule.field];
      if (!rule.validate(value)) {
        openModal({
          component: ErrorModal,
          props: {
            message: rule.message,
          },
        });
        return false;
      }
    }
    return true;
  };

  return {
    validateNote,
  };
};

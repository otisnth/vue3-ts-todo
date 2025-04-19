import type { INote } from "@/entities/Note/model/types";
import { useModal } from "@/shared/Modal/model/useModal";
import ErrorModal from "@/shared/Modal/ui/ErrorModal.vue";

interface IValidationRule {
  field: keyof INote;
  validate: (value: any) => boolean;
  message: string;
}

const defaultValidationRules: IValidationRule[] = [
  {
    field: "title",
    validate: (value: string) => !!value?.trim(),
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

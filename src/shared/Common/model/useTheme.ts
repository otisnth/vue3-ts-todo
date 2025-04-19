import { ref, computed, watch, onMounted } from "vue";
import type { TTheme } from "./types";
import { THEME_KEY, DEFAULT_THEME } from "./config";

export const useTheme = () => {
  const theme = ref<TTheme>(DEFAULT_THEME);

  const setTheme = (value: TTheme) => {
    theme.value = value;
    document.documentElement.classList.toggle("light-theme", value === "light");
    localStorage.setItem(THEME_KEY, value);
  };

  const themeBoolean = computed<boolean>({
    get: () => theme.value === "light",
    set: (val: boolean) => setTheme(val ? "light" : "dark"),
  });

  onMounted(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as TTheme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      setTheme(DEFAULT_THEME);
    }
  });

  watch(theme, (val) => setTheme(val));

  return {
    themeBoolean,
  };
};

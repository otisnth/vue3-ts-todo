<template>
  <div class="page-content-header">
    <SvgIcon
      v-if="isBackButton"
      class="page-content-header__back-button"
      name="ARROW_LEFT"
      width="40"
      height="40"
      @click="backButtonHandler"
    />
    <h1 class="page-content-header__title">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SvgIcon from "./SvgIcon.vue";

interface IProps {
  title: string;
  isBackButton?: boolean;
}

const { title, isBackButton = false } = defineProps<IProps>();

const router = useRouter();

const backButtonHandler = () => {
  router.back();
};
</script>

<style>
.page-content-header {
  background-color: var(--container-bg);
  color: var(--text-primary);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100%;
}

.page-content-header__title {
  display: block;
  grid-column: 2;
  justify-self: center;
}

.page-content-header__back-button {
  cursor: pointer;
  justify-self: start;
}
</style>

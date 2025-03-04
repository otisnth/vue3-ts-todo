<template>
    <div class="page-content-header">
        <SvgIcon v-if="isBackButton" class="page-content-header__back-button" name="arrowLeft" width="40" height="40" color="#d6d6d6" @click="backButtonHandler"/>
        <h1 class="page-content-header__title">{{ title }}</h1>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SvgIcon from "@/shared/ui/SvgIcon.vue";

defineProps<{
    title: string;
    isBackButton?: boolean;
}>();

const router = useRouter();

const backButtonHandler = () => {
    router.back();
}
</script>

<style>
.page-content-header {
  background-color: #1f1f1f;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100%;
}

.page-content-header__title {
  display: block;
  color: #d6d6d6;
  grid-column: 2;
  justify-self: center;
}

.page-content-header__back-button {
    cursor: pointer;
    justify-self: start;
}
</style>

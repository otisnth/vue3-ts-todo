<template>
  <Header />
  <router-view />
  <ModalRoot />
</template>

<script setup lang="ts">
import Header from "@/shared/ui/Header.vue";
import { RouterView } from "vue-router";
import ModalRoot from "@/shared/ui/Modal/ModalRoot.vue";
</script>

<style></style>

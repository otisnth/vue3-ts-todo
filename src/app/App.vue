<template>
  <Header />
  <router-view />
  <ModalRoot />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@shared/ui/Header.vue";
import ModalRoot from "@shared/ui/Modal/ModalRoot.vue";
</script>

<style></style>

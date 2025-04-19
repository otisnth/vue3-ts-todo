<template>
  <Header />
  <router-view />
  <ModalRoot />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { Header } from "@shared/Common";
import { ModalRoot } from "@shared/Modal";
</script>

<style></style>

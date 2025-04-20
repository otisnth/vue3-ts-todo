<template>
  <header class="header__container">
    <div class="header__logo">
      <img src="/to-do-list.svg" alt="Logo" />
    </div>

    <div class="header__links">
      <router-link class="header__link" v-for="item in HEADER_LINKS" :key="item.id" :to="item.link">
        {{ item.title }}
      </router-link>
    </div>

    <Toggler class="header__toggler" v-model="themeBoolean" />
  </header>
</template>

<script setup lang="ts">
import { HEADER_LINKS, useTheme } from "../model";
import Toggler from "./Toggler.vue";

const { themeBoolean } = useTheme();
</script>

<style>
.header__container {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  padding: 12px 32px;
  gap: 40px;
  background-color: var(--container-bg);
  color: var(--text-primary);
  border-radius: 4px;
}

.header__logo {
  width: 40px;
  width: 40px;
  color: var(--orange);
}

.header__links {
  display: flex;
  gap: 20px;
}

.header__link {
  background-color: var(--subcontainer-bg);
  border-radius: 12px;
  padding: 12px;
  font-size: 20px;
  line-height: 20px;
}

.header__link.router-link-active {
  background-color: var(--orange);
  color: var(--text-header);
}
</style>

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
  </header>
</template>

<script setup lang="ts">
import { HEADER_LINKS } from "../model";
</script>

<style>
.header__container {
  display: flex;
  padding: 12px 32px;
  gap: 40px;
  background-color: #1f1f1f;
  color: #d6d6d6;
  border-radius: 4px;
}

.header__logo {
  width: 40px;
  width: 40px;
  color: #e0621b;
}

.header__links {
  display: flex;
  gap: 20px;
}

.header__link {
  background-color: #d6d6d619;
  border-radius: 12px;
  padding: 12px;
  font-size: 20px;
  line-height: 20px;
}

.header__link.router-link-active {
  background-color: #e0621b;
  color: #fff;
}
</style>

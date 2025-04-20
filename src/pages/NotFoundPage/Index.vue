<template>
  <div class="not-found-page">
    <SvgIcon name="ALERT" width="80" height="80" />
    <h1>Такой страницы не существует</h1>
    <p>Возможно, вы ошиблись адресом</p>
    <router-link class="not-found-page__link" to="/">К списку заметок</router-link>
  </div>
</template>

<script setup lang="ts">
import { SvgIcon } from "@shared/Common";
</script>

<style>
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 80px 0;
  color: var(--text-secondary);
  background-color: var(--container-bg);
  border-radius: 4px;
}

.not-found-page__link {
  color: var(--orange);
  font-size: 18px;
  text-decoration: underline;
}
</style>

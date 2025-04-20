<template>
  <div class="empty-notes">
    <SvgIcon name="WAIT" width="64" height="64" />
    <div class="empty-notes__text">
      <slot>Кажется у вас пока нет заметок</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SvgIcon } from "@shared/Common";
</script>

<style>
.empty-notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  background-color: var(--container-bg);
  border-radius: 4px;
  padding: 100px 0;
}

.empty-notes__text {
  margin-top: 16px;
  font-size: 24px;
  text-align: center;
}
</style>

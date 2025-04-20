<template>
  <div class="toggler" @click="value = !value">
    <span class="toggler__badge" :class="{ 'toggler__badge--active': value }"></span>
  </div>
</template>

<script setup lang="ts">
const value = defineModel<boolean>({ default: false });
</script>

<style>
.toggler {
  width: 120px;
  height: 46px;
  background-color: var(--toggler-bg);
  display: flex;
  position: relative;
  border: 3px solid var(--toggler-border);
  border-radius: 30px;
  cursor: pointer;
}

.toggler__badge {
  display: block;
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid var(--toggler-badge-border);
  background-color: var(--toggler-badge);
  transition: all 0.3s ease;
}

.toggler__badge--active {
  transform: translateX(calc(80px - 6px));
  border: 2px solid var(--toggler-badge-border);
  background-color: var(--toggler-badge);
}
</style>

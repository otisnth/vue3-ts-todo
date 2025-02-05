<template>
    <button :class="['button', { button_outlined: outlined }]">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    outlined: {
        type: Boolean,
        default: false,
    },
});
</script>

<style>
.button {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 12px 24px;
    background-color: #e0621b;
    border-radius: 8px;
    color: #d6d6d6;
    font-size: 16px;
    border: 1px solid #e0621b;
    cursor: pointer;
}

.button_outlined {
    background-color: transparent;
    color: #e0621b;
}
</style>

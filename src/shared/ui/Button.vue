<template>
    <button :class="['button', `button__${color}`, { button__outlined: outlined }]">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
enum ButtonColor {
    red = 'red',
    peach = 'peach',
    orange = 'orange',
}

defineProps({
    outlined: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String as () => keyof typeof ButtonColor,
        default: ButtonColor.orange,
    },
});
</script>

<style>
.button {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

.button__orange {
    background-color: #E0621B;
    color: #d6d6d6;
    border: 1px solid #E0621B;
}

.button__orange.button__outlined {
    background-color: transparent;
    color: #e0621b;
}

.button__red {
    background-color: #E01B1B;
    color: #d6d6d6;
    border: 1px solid #E01B1B;
}

.button__red.button__outlined {
    background-color: transparent;
    color: #E01B1B;
}

.button__peach {
    background-color: #FFD166;
    color: #d6d6d6;
    border: 1px solid #FFD166;
}

.button__peach.button__outlined {
    background-color: transparent;
    color: #FFD166;
}
</style>

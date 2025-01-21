<template>
    <header class="header__container">
        <div class="header__logo">
            <slot></slot>
        </div>
        <div class="header__links">
            <router-link class="header__link" v-for="item in headerPageList" :key="item.id" :to="item.link">
                {{ item.title }}
            </router-link>
        </div>
    </header>
</template>

<script setup lang="ts">
const headerPageList: any = [
    {
        id: "list-note",
        link: "/",
        title: "Список заметок",
    },
    {
        id: "add-note",
        link: "/note/add",
        title: "Добавить заметку",
    },
];
</script>

<style></style>

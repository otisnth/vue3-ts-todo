<template>
    <header class="header__container">
        <div class="header__logo">
            <img src="/to-do-list.svg" alt="Logo" />
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
    color: #06b638;
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
    background-color: #06b638;
    color: #fff;
}
</style>

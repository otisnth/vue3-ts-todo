<template>
    <div class="page-title__container">
        <h1>Список заметок</h1>
    </div>
</template>

<script setup lang="ts">
import { useNote } from "@/entities/Note/model/useNote";

const { notes } = useNote();
</script>

<style></style>

<template>
    <div class="page">
        {{ count }} / {{ name }}
        <br />
        {{ doubleCount }} 
        <br />
        {{ doublePlusOne }}
        <br />
        <button @click="store.randomizeCounter">버튼</button>
        <!-- <CardComponent v-for="article in data?.articles" :key="article.url" :data="article" /> -->

    </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/api';

const store = useStore();
const {count, name, doubleCount, doublePlusOne} = storeToRefs(store);
// import type { ApiStructure } from '~/types/api';
// import CardComponent from './components/Card.vue';

// const API_KEY = "ce4c280c9dff4ac0a98c9d7ea869194d";
// const API_URL = `https://newsapi.org/v2/everything?q=Apple&from=2025-09-10&sortBy=popularity&apiKey=${API_KEY}`;
// const {data, pending, error, refresh} = await useAsyncData<ApiStructure>("getNews", ()=> $fetch(API_URL));


</script>

<style lang="scss" scoped>
.page{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>
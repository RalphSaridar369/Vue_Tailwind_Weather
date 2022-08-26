<template>
    <div class="flex flex-col flex-1 items-center">
        <!-- Banner -->
        <div v-if="route?.params?.search?.length > 0" class="text-white p-4 bg-weather-secondary w-full text-center">
            <p>You are currently previewing the city, click the "+" icon start tracking the city</p>
        </div>
        <div v-for="weatherData in appStore.locations">
            <City :weatherData="weatherData"/>
        </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import City from '../components/City.vue';
const route = useRoute();

import { useAppStore } from '../stores/appStore';

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
</style>
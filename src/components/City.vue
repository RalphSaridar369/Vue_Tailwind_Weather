<template>
    <div>
        <!-- Weather Overview -->
        <div class="flex flex-col items-center text-white py-12">
            <i class="fa-solid fa-close text-xl hover: cursor-pointer"
                @click="confirmDeletion(weatherData.data.location.name)"></i>
            <h1 class="text-4xl mb-2">{{ weatherData.data.location.name }}</h1>
            <h1 class="text-2xl mb-2">{{ weatherData.data.location.region }}</h1>
            <p class="text-sm mb-12">{{ weatherData.data.location.localtime }}</p>
            <p class="text-8xl mb-8">
                {{ weatherData.data.current.temp_c }}&deg;
            </p>
            <div class="text-center">
                <p>
                    Feels like {{ weatherData.data.current.condition.text }}
                </p>
                <img class="w-[150px] h-auto" :src="weatherData.data.current.condition.icon" />
            </div>
        </div>
        <hr class="border-white border-opacity-10 w-full " />
        <!-- Wind -->
        <div class="max-v-screen-md w-full py-12">
            <div class="mx-8 text-white">
                <h2 class="mb-4">Wind</h2>
                <div class="flex gap-10 overflow-x-auto">
                    <!-- <div v-for="wind in windData" class="flex flex-col gap-4 items-center"> -->
                    wind degree: {{ weatherData.data.current.wind_degree }}
                    wind dir: {{ weatherData.data.current.wind_dir }}
                    wind kph: {{ weatherData.data.current.wind_kph }}
                    wind mph: {{ weatherData.data.current.wind_mph }}
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from '../stores/appStore';


const test = defineProps(['weatherData'])
const appStore = useAppStore();

const confirmDeletion = (name) => {
    let confirmation = window.confirm("Are you sure you want to delete this location ?");
    if (confirmation)
        appStore.deleteLocationFromLocations(name);
}

</script>

<style lang="scss" scoped>
</style>
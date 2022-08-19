<template>
    <div class="flex flex-col flex-1 items-center">
        <!-- Banner -->
        <div v-if="route.params.search.length>0" class="text-white p-4 bg-weather-secondary w-full text-center">
        <p>You are currently previewing the city, click the "+" icon start tracking the city</p>
        </div>

        <!-- Weather Overview -->
        <div class="flex flex-col items-center text-white py-12">
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
                <div class="flex gap-10 overflow-x-scroll">
                    <div v-for="wind in windData" class="flex flex-col gap-4 items-center">
                        {{ wind.label }}: {{ wind.value }}  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const apiKey = '8d45abe6b0ab43fa830170303221608'
const windData = [
    {label:'wind_degree', value:''},
    {label:'wind_dir', value:''},
    {label:'wind_kph', value:''},
    {label:'wind_mph', value:''}
]

const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${route.params.search}&aqi=no`);
        windData[0].value = weatherData.data.current.wind_degree;
        windData[1].value = weatherData.data.current.wind_dir;
        windData[2].value = weatherData.data.current.wind_kph;
        windData[3].value = weatherData.data.current.wind_mph;
        return weatherData;
    } catch (err) {
        console.log(err)
    }
}

const weatherData = await getWeatherData();

</script>

<template>
    <div>

    </div>
</template>

<script setup>

import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const apiKey = '8d45abe6b0ab43fa830170303221608'


const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${route.params.search}&aqi=no`)
        return weatherData;
    } catch (err) {
        console.log(err)
    }
}

const weatherData = await getWeatherData();

</script>

<script setup></script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative flex flex-row content-center items-center">
      <input v-model="searchQuery" type="text" placeholder="Search for city or state" class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus: outline-none
      ">
      <i @click="getSearchResults" class="fa-solid fa-magnifying-glass text-xl hover:cursor-pointer"></i>
    </div>
  </main>
  <div class="flex flex-col items-center text-gray ">
    <div v-if="error">Something went wrong try again</div>
    <div v-else-if="error && !weatherData?.length == null">Results not found</div>
    <div v-else-if="weatherData?.data" class="bg-white py-10 px-20 w-4/12 flex flex-col items-center justify-center
    hover:cursor-pointer" style="border-radius:20px;" @click="previewDetails(weatherData)">
      <h1 class="text-black" style="font-size: 40px;">
        {{ searchQuery }}
      </h1>
      <h2 style="font-size: 24px; color:gray; text-decoration: underline;">
        Condition
      </h2>
      <div>
        code: &nbsp;&nbsp;&nbsp; {{ weatherData.data.current.condition.code }}
      </div>
      <div>
        <img :src="weatherData.data.current.condition.icon" alt="" />
      </div>
      <div>
        text: &nbsp;&nbsp;&nbsp; {{ weatherData.data.current.condition.text }}
      </div>

    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router'

const router = useRouter();
const searchQuery = ref("");
const apiKey = '8d45abe6b0ab43fa830170303221608'
const weatherData = ref(null);
const error = ref(null);

const getSearchResults = async()=>{
  try {
    if(searchQuery.value !== ""){
      console.log(searchQuery.value)
      const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery.value}&aqi=no`)
      weatherData.value = result;
      error.value = false;
      console.log(weatherData.value.data)
    }
    
  } catch (er) {
      console.log("error 123",weatherData)
      error.value = true;
  }
}

const previewDetails = (data) =>{
  console.log()
  router.push({
    name:'cityView',
    params:{search:searchQuery.value},
    query:{
      data:weatherData
    }
  })
}

</script>

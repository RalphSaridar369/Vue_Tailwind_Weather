<script setup></script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative flex flex-row content-center items-center">
      <input 
      v-model="searchQuery"
      type="text" placeholder="Search for city or state"
      class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus: outline-none
      ">
      <i @click="getSearchResults" 
      class="fa-solid fa-magnifying-glass text-xl hover:cursor-pointer"></i>
    </div>
  </main>
</template>

<script setup>

import { ref } from 'vue';
import axios from "axios";

const searchQuery = ref("");
const apiKey = '8d45abe6b0ab43fa830170303221608'

const getSearchResults = async()=>{
  console.log(searchQuery.value)
    if(searchQuery.value !== ""){
      const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery.value}&aqi=no`)
      if(result?.data?.location){
        console.log(result)
      }
      else{
        alert("Location not found")
      }
    }
}

</script>

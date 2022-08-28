

<script setup>

import { computed, onMounted, ref, watch } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/appStore'
import CityCardSkeleton from "../components/CityCardSkeleton.vue";


const appStore = useAppStore()
const router = useRouter();
const searchQuery = ref("");
const loading = ref(false);
const apiKey = '8d45abe6b0ab43fa830170303221608'
const weatherData = ref(null);
const error = ref(null);

const searchInput = (e) => {
  appStore.changeValues("search", e);
}


const getSearchResults = async () => {
  try {
    if (searchQuery.value !== "") {
      console.log(searchQuery.value)
      loading.value = true;
      const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery.value}&aqi=no`)
      setTimeout(() => {
        weatherData.value = result;
        error.value = false;
        appStore.changeCurrentLocation(result);
        loading.value = true;
      }, 3000);
      return result
    }

  } catch (er) {
    loading.value = false;
    error.value = true;
  }
}

const previewDetails = (data) => {
  console.log()
  router.push({
    name: 'cityView',
    params: { search: searchQuery.value },
    query: {
      data: weatherData
    }
  })

  // export default {
  //   async setup() {
  //     const data = await getSearchResults();

  //     return data;
  //   }
  // }
}

onMounted(() => {
  console.log("Im in HomeView page, this is a console log inside onMounted function")
});


// a computed ref
const exists = computed(() => {
  return weatherData?.data ? 'Yes' : 'No'
})

// watch works directly on a ref
// With Composition API, we can use the watch function to trigger a callback whenever a piece of reactive state changes:
watch(error, async (newQuestion, oldQuestion) => {
  if (newQuestion) {
    error.value = 'Thinking...'
    try {
      // const res = await fetch('https://yesno.wtf/api')
      error.value = ""
    } catch (error) {
      error.value = 'Error! Could not reach the API. '
    }
  }
})


</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative flex flex-row content-center items-center">
      <input v-model.lazy="searchQuery" @keyup="searchInput($event.target.value)" type="text"
        placeholder="Search for city or state" class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus: outline-none
      ">
      <i @click="getSearchResults" class="fa-solid fa-magnifying-glass text-xl hover:cursor-pointer"></i>
    </div>
  </main>
  <div>
    <!-- <Suspense> -->
    <div v-if="!weatherData?.data && loading" class="items-center justify-center flex">
      <CityCardSkeleton />
    </div>
    <div class="flex flex-col items-center text-gray " v-else>
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
    <!-- <template #fallback> -->
    <!-- </template> -->
    <!-- </Suspense> -->
  </div>
</template>

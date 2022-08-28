<template>

  <div class="bg-white py-10 px-20 w-4/12 flex flex-col items-center justify-center
          hover:cursor-pointer" style="border-radius:20px;">
    <div class="flex flex-col flex-1 gap-2 w-full">
      <AnimatedPlaceholder class="max-w-[100%] w-full h-10 mb-6" />
    </div>

    <div class="flex flex-col flex-1 gap-2 w-full">
      <AnimatedPlaceholder class="max-w-[100%] w-full" />
      <AnimatedPlaceholder class="max-w-[100%] w-full h-5 " />
    </div>

    <div class="flex flex-col flex-1 gap-2 w-full py-3">
      <AnimatedPlaceholder class="max-w-[100%] w-full h-3" />
      <div class="flex items-center justify-center flex-col w-full flex-1">
        <AnimatedPlaceholder class=" w-28 h-12 flex mt-8" />
      </div>
    </div>
    <div class="flex flex-col flex-1 gap-2 w-full py-3">
      <AnimatedPlaceholder class="max-w-[100%] w-full h-3" />
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>
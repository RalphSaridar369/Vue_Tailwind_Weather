<template>
    <div>
        <Suspense>
            <AsyncsCityView />
            <template #fallback>
                <p style="color:white;">Loading....</p>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import AsyncsCityView from '../components/AsyncsCityView.vue';



</script>
<template>
    <div class="card text-center">
        <img :src="product.image" alt="product image" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate" >{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`">
            <p class="btn my-4" > More info </p>
        </nuxt-link>
    </div>
</template>

<script setup>

const { product } = defineProps(['product'])

</script>

<style scoped>

    .card {
        background-color: #fff;
        padding: 1rem;
        border-radius: 1rem;
    }
    .btn {
        width: fit-content;
        margin: 0 auto;

    }
    .thumb {
        max-height: 120px;
        max-width: 100%;
        margin: 0 auto;
    }
</style>
<template>
    <div class="productDetails" >
        <img :src="product.image" alt="product image">
        <div class="productInfo" >
            <h2>{{ product.title }}</h2>
            <h3>${{ product.price }}</h3>
            <p>{{ product.description }}</p>
            <!-- <h4>{{ product.id }}</h4> -->
            <button class="btn addBtn" > 
                <i class="material-symbols-rounded svg">add_shopping_cart</i>
                <h5>Add to cart</h5>     
            </button>
        </div>
    </div>
</template>

<script setup>

const { product } = defineProps(['product'])

</script>

<style scoped>
    .productDetails {
        display: grid;
        gap: 2rem;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    .productDetails img {
        max-width: 80%;
        margin: auto;
        max-height: 500px;
    }
    h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
        font-weight: 600;
    }
    p {
        margin: 2rem 0;
    }
    .addBtn {
        display: flex;
        align-items: center;
    }
    .svg {
        margin-right: 1rem;
        font-weight: 700;
    }
</style>
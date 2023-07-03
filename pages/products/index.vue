<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  //  fetch the products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  definePageMeta({
    layout: "products",
  })

  useHead({
    title: 'Fake products | All products',
    meta: [
      { name: 'description', content: 'A list of all the products from the fake products store'}
    ]
  })
</script>
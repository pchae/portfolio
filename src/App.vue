<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components
useHead({
  title: 'Phil Choi - Product Design Portfolio',
  meta: [
    { name: 'description', content: 'Product Design Portfolio' },
  ],
})
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }

</style>

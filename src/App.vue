<template>
  <div id="app">
    <transition name="fade" appear >
      <router-view />
    </transition>
  </div>
</template>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .fade-enter-active {
    transition-delay: 0.25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

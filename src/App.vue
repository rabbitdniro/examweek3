<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <header>
    <Nav></Nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer></footer>
</template>

<style scoped></style>

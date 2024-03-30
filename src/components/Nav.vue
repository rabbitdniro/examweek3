<script setup></script>

<template>
  <div class="container">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :to="{ name: 'home' }" class="nav-link active"
              >Home</router-link
            >
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About</router-link
            >
            <router-link :to="{ name: 'contact' }" class="nav-link"
              >Contact</router-link
            >
            <router-link :to="{ name: 'bloghome' }" class="nav-link"
              >Blog</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>

<script setup>
import { watch } from "vue";
import PostCard from "../components/PostCard.vue";

import { useBlogPosts } from "../blogdata/blogposts";
import { storeToRefs } from "pinia";

// Setting stote state to use
const store = useBlogPosts();

// Destructuring blogPost reactive array to keep reactivity in Pinia store
const { blogposts } = storeToRefs(store);

watch(
  blogposts,

  (oldValue) => {
    if (!oldValue) {
      store.getPosts();
    }
  },

  { immediate: true }
);
</script>

<template>
  <div class="container">
    <div class="card text-center mb-2">
      <div class="card-body">
        <h2>Main blog page with 20 posts from dummy API</h2>
      </div>

      <div class="card-footer" style="border: none; background: none">
        <div class="row justify-content-end">
          <div class="col-auto">
            <router-link :to="{ name: 'addnewpost' }" class="btn btn-primary"
              >Add New Post</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <!-- Passing post as a props to PostCard component while looping -->
        <PostCard v-for="post in blogposts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

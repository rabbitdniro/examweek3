<script setup>
import { useBlogPosts } from "../blogdata/blogposts";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

// Getting path parameters using vue-route
const route = useRoute();

// Setting stote state to use
const store = useBlogPosts();

// Destructuring blogPost reactive array to keep reactivity in Pinia store
const { blogposts } = storeToRefs(store);

// Getting single post from blogPosts array
const post = blogposts.value.find((post) => post.id == route.params.id);

// console.log(post);

// Deleting a post
function deletePost(id) {
  store.deleteAPost(id);
}
</script>

<template>
  <div class="container">
    <!-- Header Section Card -->
    <div class="card text-center mb-2">
      <div class="card-body">
        <h2>Single Blog Post, ID: {{ route.params.id }}</h2>
      </div>
    </div>
    <!-- <p>{{ blogPosts }}</p> -->
    <!-- Single Post Card -->
    <div class="row justify-content-center">
      <div class="card m-2 p-2" style="width: 30rem">
        <img
          src="https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h4 class="card-title">{{ post.title }}</h4>
          <p class="card-text">{{ post.body }}</p>
        </div>
        <div class="card-footer" style="border: none; background: none">
          <div class="row justify-content-evenly">
            <div class="col-auto">
              <router-link :to="{ name: 'bloghome' }" class="btn btn-primary"
                >Go Back</router-link
              >
            </div>

            <div class="col-auto">
              <router-link
                @click="deletePost(route.params.id)"
                :to="{ name: 'bloghome' }"
                class="btn btn-primary"
                >Delete Post</router-link
              >
            </div>

            <div class="col-auto">
              <router-link :to="{ name: 'editpost' }" class="btn btn-primary"
                >Edit Post</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { useBlogPosts } from "../blogdata/blogposts";
// import { storeToRefs } from "pinia";

const store = useBlogPosts();
// const { blogposts, addNewPost } = storeToRefs(store);

const router = useRouter();

const newPost = reactive({
  id: 21,
  title: null,
  body: null,
  userId: 0,
  tags: [],
  reactions: 0,
});

function addPost() {
  // console.log(newPost);
  if (!newPost.title && !newPost.body) {
  } else {
    store.addNewPost(newPost);
  }
  router.push({ name: "bloghome" });
}
</script>

<template>
  <div class="container">
    <div class="card text-center mb-2">
      <!-- <p>{{ blogPosts }}</p> -->
      <!-- <p>{{ newPost.title }}</p> -->
      <!-- <p>{{ newPost.body }}</p> -->
      <div class="card-body">
        <h2>Add A New Post</h2>
      </div>
    </div>
    <!-- <p>{{ newPost }}</p> -->
    <!-- Add Post Form -->
    <div class="card">
      <div class="card-body align-self-center" style="width: 50rem">
        <form action="">
          <div class="mb-3">
            <label for="title" class="form-label">Post Title</label>
            <input
              v-model="newPost.title"
              type="text"
              class="form-control"
              id="title"
              placeholder="An Example Title"
            />
          </div>
          <div class="mb-3">
            <label for="postbody" class="form-label">Post Body</label>
            <textarea
              v-model="newPost.body"
              class="form-control"
              id="postbody"
              rows="3"
            ></textarea>
          </div>

          <div class="mb-3 text-center">
            <button @click="addPost()" type="button" class="btn btn-primary">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

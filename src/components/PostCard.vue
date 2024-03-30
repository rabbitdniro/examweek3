<script setup>
// Receiving props from BlogHome Component
const props = defineProps({
  post: Object,
});

// console.log(props.post);
</script>

<template>
  <div class="card m-2 p-2" style="width: 18rem">
    <img
      src="https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h4 class="card-title">{{ post.title.substring(0, 15) }}</h4>
      <p class="card-text">{{ post.body.substring(0, 150) }}</p>
    </div>
    <div class="card-footer" style="border: none; background: none">
      <!-- <a href="#" class="btn btn-primary">Read More</a> -->
      <router-link :to="`/blog/post/${post.id}`" class="btn btn-primary"
        >Read More</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>

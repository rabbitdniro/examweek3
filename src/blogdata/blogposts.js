import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useBlogPosts = defineStore("blogposts", () => {
  const blogposts = ref([]);

  const getPosts = () => {
    axios
      .get("https://dummyjson.com/posts?skip=0&limit=20")
      .then((response) => {
        blogposts.value = response.data.posts;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewPost = (post) => {
    blogposts.value.unshift(post);
  };
  return { blogposts, getPosts, addNewPost };
});

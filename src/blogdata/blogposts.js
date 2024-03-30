import axios from "axios";
import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useBlogPosts = defineStore("blogposts", () => {
  const blogposts = ref(null);

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

  const nextId = computed(() => blogposts.value.length + 1);

  const addNewPost = (post) => {
    blogposts.value.unshift(post);
  };

  const deleteAPost = (id) => {
    blogposts.value = blogposts.value.filter((post) => post.id != id);
  };
  return { blogposts, getPosts, addNewPost, deleteAPost, nextId };
});

<template>
  <div>
    <v-row align="stretch">
      <v-col cols="12" sm="6" md="4" v-for="blog in blogs" :key="blog.id">
        <v-hover v-slot:default="{ hover }">
          <v-card :href="blog.link" target="_blank" :elevation="hover ? 12 : 2" class="rounded-lg">
            <v-card-title>{{ blog.title }}</v-card-title>
            <v-divider></v-divider>
            <v-img :src="blog.thumbnail" aspect-ratio="2"></v-img>
            <v-divider></v-divider>

            <div class="d-flex align-stretch flex-wrap py-2 px-2">
              <v-chip class="ma-2" v-for="c in blog.categories" label :key="c">{{c}}</v-chip>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PinnedBlogs",
  data: () => ({
    blogs: []
  }),
  mounted() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ayushpguptaapg"
      )
      .then(response => {
        let list = response.data.items;
        this.blogs = list
          .filter(item => item.categories.length > 0)
          .slice(0, 9);
      });
  }
};
</script>

<style></style>

<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="repo in repos" :key="repo.id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :href="repo.html_url"
            target="_blank"
            :elevation="hover ? 12 : 2"
          >
            <v-card-title>
              {{ repo.name }}
            </v-card-title>
            <v-card-text>{{ repo.description }}</v-card-text>

            <v-card-title>
              <v-icon left class="mr-1">mdi-star-outline</v-icon>
              {{ repo.stargazers_count }}
              <v-icon left class="mr-1 ml-2">mdi-source-fork</v-icon>
              {{ repo.forks }}</v-card-title
            >
          </v-card></v-hover
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PinnedRepos",
  data: () => ({
    repos: [],
  }),
  mounted() {
    axios
      .get("https://api.github.com/users/apgapg/repos?sort=updated")
      .then((response) => {
        let list = response.data;
        list.sort((a, b) => b.stargazers_count - a.stargazers_count);
        this.repos = list.slice(0, 6);
      });
  },
};
</script>

<style></style>

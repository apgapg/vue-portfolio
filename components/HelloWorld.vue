<template>
  <v-container class="px-8">
    <v-row class="py-4" align="center">
      <v-col md="6">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Ayush World!</h1>

        <!-- <p class="subheading font-weight-regular">
          Hi, I am Ayush P Gupta
          <br />please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>-->
        <p class="text-h5 font-weight-regular grey--text text--darken-1 my-6">
          Hi, I am
          <span class="primary--text font-weight-medium">Ayush P Gupta</span>
          <br />IIT Roorkee | Flutter & Vue Developer | Physics Educator at
          Unacademy <br />| Flute Player | DIY person
        </p>

        <div class="mt-12">
          <!-- <v-btn color="primary">
            <v-icon left class="mr-2" small>mdi-file</v-icon>VIEW MY RESUME
          </v-btn>-->
          <v-btn
            class="ml-4"
            href="https://www.linkedin.com/in/ayushpgupta/"
            target="_blank"
          >
            <img
              left
              class="mr-2"
              src="https://img.icons8.com/color/28/000000/linkedin.png"
            />LINKEDIN PROFILE
          </v-btn>
        </div>
      </v-col>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img
          alt="Vuetify Name"
          contain
          min-width="100"
          :src="require('~/assets/cover.svg')"
        />
      </v-col>

      <!-- <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >{{ eco.text }}</a>
        </v-row>
      </v-col>-->
    </v-row>

    <v-divider class="my-8"></v-divider>

    <v-row class="text-center py-4" justify="center">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold mb-3">About Me</p>
      </v-col>
      <v-col cols="12">
        <p class="text-h6 font-weight-regular grey--text text--darken-1">
          I am a graduate from IIT Roorkee (2018)
          <br />I belong to Lucknow, India
          <br />
          <br />My area of interest is Application Development, Teaching
          Physics, <br />Playing Flute, Sketching, DIY stuff, self-learning and
          many more.
          <br />
          <br />Mainly my expertise is with Mobile Application Development using
          <a
            class="font-weight-medium px-1"
            href="https://flutter.dev/"
            target="_blank"
            >Flutter</a
          >SDK. <br />Also I have intermediate expertise with web app
          development using
          <a
            class="font-weight-medium px-1"
            href="https://vuejs.org/"
            target="_blank"
            >VueJs</a
          >.
        </p>
      </v-col>
    </v-row>

    <v-divider class="my-8"></v-divider>
    <v-row class="text-center py-4" justify="center">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold mb-3">My Github</p>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="grey darken-3 text-none"
          dark
          href="https://github.com/apgapg"
          target="_blank"
        >
          <v-icon left class="mr-3" medium>mdi-github</v-icon>github.com/apgapg
        </v-btn>
      </v-col>
    </v-row>
    <PinnedRepos></PinnedRepos>
    <v-divider class="my-8"></v-divider>
    <v-row class="text-center py-4" justify="center">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold mb-3">My Blogs</p>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="grey darken-3 text-none"
          dark
          href="https://github.com/apgapg"
          target="_blank"
        >
          <img
            class="mr-2"
            src="https://img.icons8.com/ios/20/FFFFFF/medium-logo.png"
          />
          medium.com/@ayushpguptaapg
        </v-btn>
      </v-col>
    </v-row>
    <PinnedBlogs></PinnedBlogs>
    <v-divider class="my-8"></v-divider>
    <v-row class="text-center py-4" justify="center">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold mb-3">My Playstore Apps</p>
      </v-col>
      <v-col cols="12">
        <v-btn
          color=" text-none"
          href="https://play.google.com/store/apps/developer?id=Reweyou+Private+Limited"
          target="_blank"
        >
          <img
            class="mr-2"
            src="https://img.icons8.com/color/24/000000/google-play.png"
          />
          VIEW PLAYSTORE
        </v-btn>
      </v-col>
    </v-row>

    <PinnedApps></PinnedApps>
    <v-divider class="my-8"></v-divider>
  </v-container>
</template>

<script>
import PinnedRepos from "@/components/PinnedRepos";
import PinnedBlogs from "@/components/PinnedBlogs";
import PinnedApps from "@/components/PinnedApps";

export default {
  name: "HelloWorld",
  components: {
    PinnedRepos,
    PinnedBlogs,
    PinnedApps,
  },
  data: () => ({}),
};
</script>

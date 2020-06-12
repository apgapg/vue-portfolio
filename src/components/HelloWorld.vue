<template>
  <v-container class="px-8">
    <v-row class="py-4" align="center">
      <v-col cols="6">
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
          <v-btn color="primary">
            <v-icon left class="mr-2" small>mdi-file</v-icon>VIEW MY RESUME
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6">
        <v-img
          alt="Vuetify Name"
          contain
          min-width="100"
          src="../assets/cover.svg"
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
          I am a graduate from IIT Roorkee (2018)<br />
          I belong to Lucknow, India<br /><br />

          My area of interest is Application Development, Teaching Physics,<br />
          Playing Flute, Sketching, DIY stuff, self-learning and many more.
          <br />
          <br />Mainly my expertise is with Mobile Application Development using
          <a
            class=" font-weight-medium px-1"
            href="https://flutter.dev/"
            target="_blank"
          >
            Flutter</a
          >SDK.<br />
          Also I have intermediate expertise with web app development using
          <a
            class=" font-weight-medium px-1"
            href="https://vuejs.org/"
            target="_blank"
          >
            VueJs</a
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
        <v-btn color="grey darken-3 text-none" dark>
          <v-icon left class="mr-3" medium>mdi-github</v-icon>github.com/apgapg
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>

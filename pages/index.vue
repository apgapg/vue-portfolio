<template>
  <v-app>
    <v-app-bar app color="white" elevation="0" class="px-2">
      <div class="d-flex align-center">
        <!--

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('~/assets/logo.png')"
          transition="scale-transition"
          width="40"
        />
        <div class="text-h6">+</div>
        <v-img
          alt="Vuetify Logo"
          class="shrink ml-2 mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="32"
        />
        <v-toolbar-title class="text-h6 pl-2">Portfolio</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        class="text-none"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span>About</span>
      </v-btn>
      <v-btn
        class="text-none"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span>Projects</span>
      </v-btn>
      <v-btn
        class="text-none"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span>Blogs</span>
      </v-btn>
      <v-btn
        class="text-none mr-2"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span>Contact</span>
      </v-btn>-->
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <!-- <v-container
        fluid
        style="height: 80px;background-color: #263238;padding: 16px 32px"
        dark
      >
        <v-row align="center">
          <div style="width: 8px"></div>
          <div>
            Ayush P Gupta
          </div>
          <div>
            ©2020. All Rights Reserved
          </div>
          <div style="width: 32px"></div>

          <v-btn
            @click="onFbClick()"
            color="white"
            icon
            style="opacity: 0.9"
            text
          >
            <v-icon>mdi-facebook-box</v-icon>
          </v-btn>
          <div style="width: 8px"></div>
          <v-btn
            @click="onInstaClick()"
            color="white"
            icon
            style="opacity: 0.9"
            text
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>-->
    </v-main>
    <v-footer class="primary lighten-1" dark padless>
      <v-row no-gutters class="py-2">
        <v-col cols="12">
          <v-card flat tile class="primary lighten-1 white--text text-center">
            <v-card-text class="pa-1">
              <v-btn
                icon
                x-large
                href="https://www.linkedin.com/in/ayushpgupta/"
                target="_blank"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                icon
                x-large
                href="https://github.com/apgapg"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                x-large
                href="https://medium.com/@ayushpguptaapg"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios/32/FFFFFF/medium-logo.png"
                />
              </v-btn>

              <v-btn
                icon
                x-large
                href="https://www.youtube.com/channel/UCYxCh-to3v3PqEIlm2phgpA"
                target="_blank"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
              <v-btn
                icon
                x-large
                href="https://www.instagram.com/ayushpgupta"
                target="_blank"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                icon
                x-large
                href="https://www.facebook.com/ayushpgupta"
                target="_blank"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pa-1 mb-1">
              ©{{ new Date().getFullYear() }}. All Rights Reserved —
              <strong>Ayush P Gupta</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "~/components/HelloWorld.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  methods: {},
};
</script>

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
          src="@/assets/logo.png"
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

      <v-btn
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
      </v-btn>
    </v-app-bar>

    <v-content>
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
      </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  methods: {
    onSearchClick() {
      this.$router.push("/search");
    },
    onPhoneClick(number) {
      window.open(`tel:${number}`);
    },
    onPlayStoreClick() {
      window.open(
        `https://play.google.com/store/apps/details?id=com.dotservices.android`
      );
    },
    onFbClick() {
      window.open(`https://www.facebook.com/dotappservices/`);
    },
    onInstaClick() {
      window.open(`https://www.instagram.com/dotappservices/`);
    },
  },
};
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="app in apps" :key="app.id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :href="app.playstoreUrl"
            target="_blank"
            :elevation="hover ? 12 : 2"
            class="rounded-lg"
          >
            <v-card-title>{{ app.title }}</v-card-title>
            <v-card-text>{{ app.summary }}</v-card-text>
            <v-img :src="app.icon" max-height="150" contain></v-img>
            <v-card-title class="mb-2">
              <v-icon left class="mr-1">mdi-star-outline</v-icon>
              {{ app.scoreText }}
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PinnedApps",
  data: () => ({
    apps: [
      {
        title: "Workozy - Field Data and Field Work Management",
        appId: "com.workozy.android",
        url: "http://localhost:3000/api/apps/com.workozy.android",
        icon:
          "https://lh3.googleusercontent.com/Tn6w0embt5M6pkDNGeRCPBylMHedTSjiiw7UpkgvUUX21eY8VKNpJTTGUWNkf7rEIRU",
        developer: {
          devId: "FieldAssist",
          url: "http://localhost:3000/api/developers/FieldAssist"
        },
        developerId: "FieldAssist",
        priceText: "FREE",
        price: 0,
        free: true,
        summary: "Field Work Management made easy with Workozy",
        scoreText: "3.9",
        score: 3.88,
        playstoreUrl:
          "https://play.google.com/store/apps/details?id=com.workozy.android",
        permissions:
          "http://localhost:3000/api/apps/com.workozy.android/permissions",
        similar: "http://localhost:3000/api/apps/com.workozy.android/similar",
        reviews: "http://localhost:3000/api/apps/com.workozy.android/reviews"
      },
      {
        title: "DOT Services",
        appId: "com.dotservices.android",
        url: "http://localhost:3000/api/apps/com.dotservices.android",
        icon:
          "https://lh3.googleusercontent.com/xoxWzjkYk4Ok3LT3-0PnIZKp0KAKVXmaEsVyOFxSF7UE4Lp89Pf1KgZOUATxPbCm8SY",
        developer: {
          devId: "Reweyou Private Limited",
          url:
            "http://localhost:3000/api/developers/Reweyou%20Private%20Limited"
        },
        developerId: "Reweyou+Private+Limited",
        priceText: "FREE",
        price: 0,
        free: true,
        summary:
          "One Stop Platform for finding Quality Local Service Providers",
        scoreText: "5.0",
        score: 5,
        playstoreUrl:
          "https://play.google.com/store/apps/details?id=com.dotservices.android",
        permissions:
          "http://localhost:3000/api/apps/com.dotservices.android/permissions",
        similar:
          "http://localhost:3000/api/apps/com.dotservices.android/similar",
        reviews:
          "http://localhost:3000/api/apps/com.dotservices.android/reviews"
      },
      {
        title: "GitHub Trending",
        appId: "com.git_trending.android",
        url: "http://localhost:3000/api/apps/com.git_trending.android",
        icon:
          "https://lh3.googleusercontent.com/QKKa6fuI_dULtW-4KAdCVBYL9zklVynFVfaL-BToIoyBCOysLD757hJItmmYg0nlKVWI",
        developer: {
          devId: "Reweyou Private Limited",
          url:
            "http://localhost:3000/api/developers/Reweyou%20Private%20Limited"
        },
        developerId: "Reweyou+Private+Limited",
        priceText: "FREE",
        price: 0,
        free: true,
        summary: "See the trending repo(s) and developers on GitHub today.",
        scoreText: "4.2",
        score: 4.25,
        playstoreUrl:
          "https://play.google.com/store/apps/details?id=com.git_trending.android",
        permissions:
          "http://localhost:3000/api/apps/com.git_trending.android/permissions",
        similar:
          "http://localhost:3000/api/apps/com.git_trending.android/similar",
        reviews:
          "http://localhost:3000/api/apps/com.git_trending.android/reviews"
      },
      {
        title: "Sankalan: Self Composed Hindi Poems, Stories",
        appId: "com.coddu.fluttersankalan",
        url: "http://localhost:3000/api/apps/com.coddu.fluttersankalan",
        icon:
          "https://lh3.googleusercontent.com/7fXcD20e-WKKlLHBQxz7qSwf29T5J5DJzWqk6YBm32qRdk2K27TB52mnGQ-dOQxnB-s",
        developer: {
          devId: "Reweyou Private Limited",
          url:
            "http://localhost:3000/api/developers/Reweyou%20Private%20Limited"
        },
        developerId: "Reweyou+Private+Limited",
        priceText: "FREE",
        price: 0,
        free: true,
        summary:
          "Sankalan is a collection of self composed Hindi poems, stories",
        scoreText: "0.0",
        score: 0,
        playstoreUrl:
          "https://play.google.com/store/apps/details?id=com.coddu.fluttersankalan",
        permissions:
          "http://localhost:3000/api/apps/com.coddu.fluttersankalan/permissions",
        similar:
          "http://localhost:3000/api/apps/com.coddu.fluttersankalan/similar",
        reviews:
          "http://localhost:3000/api/apps/com.coddu.fluttersankalan/reviews"
      },
      {
        title: "IIT-JEE Notes By Ayush P Gupta",
        appId: "com.coddu.flutter.iitjee.notes",
        url: "http://localhost:3000/api/apps/com.coddu.flutter.iitjee.notes",
        icon:
          "https://lh3.googleusercontent.com/zi9eeJTvG1eMYL5mN4vGQ8FeCp5R8kGVo2HtPPeVbsiTxOzuZN-b6a216kgtiH_Dd7Y",
        developer: {
          devId: "Reweyou Private Limited",
          url:
            "http://localhost:3000/api/developers/Reweyou%20Private%20Limited"
        },
        developerId: "Reweyou+Private+Limited",
        priceText: "FREE",
        price: 0,
        free: true,
        summary: "Read the self composed notes for IIT-JEE by Ayush P Gupta",
        scoreText: "2.7",
        score: 2.7142856,
        playstoreUrl:
          "https://play.google.com/store/apps/details?id=com.coddu.flutter.iitjee.notes",
        permissions:
          "http://localhost:3000/api/apps/com.coddu.flutter.iitjee.notes/permissions",
        similar:
          "http://localhost:3000/api/apps/com.coddu.flutter.iitjee.notes/similar",
        reviews:
          "http://localhost:3000/api/apps/com.coddu.flutter.iitjee.notes/reviews"
      },
      {
        title: "Connect IT - India's Startup Community",
        appId: "com.connectit.android",
        url: "http://localhost:3000/api/apps/com.connectit.android",
        icon:
          "https://lh3.googleusercontent.com/_V5_hQcJv-8zTmxmo7Ef8_mLwQF5yZ9uAZNw89UMw6gfFdATSGwrMRULNfrbFPPO03nN",
        developer: {
          devId: "Reweyou Private Limited",
          url:
            "http://localhost:3000/api/developers/Reweyou%20Private%20Limited"
        },
        developerId: "Reweyou+Private+Limited",
        priceText: "FREE",
        price: 0,
        free: true,
        summary:
          "Showcase, Hire, and Grow your Startup with Like Minded People",
        scoreText: "0.0",
        score: 0,
        playstoreUrl:
          "https://play.google.com/store/apps/details?id=com.connectit.android",
        permissions:
          "http://localhost:3000/api/apps/com.connectit.android/permissions",
        similar: "http://localhost:3000/api/apps/com.connectit.android/similar",
        reviews: "http://localhost:3000/api/apps/com.connectit.android/reviews"
      }
    ]
  })
};
</script>

<style></style>

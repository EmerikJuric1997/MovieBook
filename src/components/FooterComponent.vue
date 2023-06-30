<template>
  <v-footer dark padless class="justify-center blue-grey darken-4">
    <v-card flat tile class="blue-grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.path"
          class="mx-4 white--text"
          icon
          :href="icon.path"
        >
          <v-icon size="24px" class="icons">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Emerik Jurić</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "mdi-facebook",
        path: "https://www.facebook.com/profile.php?id=100007123185072",
      },
      {
        name: "mdi-linkedin",
        path: "https://www.linkedin.com/in/emerik-juri%C4%87-47ba1323b/",
      },
      {
        name: "mdi-instagram",
        path: "https://www.instagram.com/emerik.juric97/",
      },
            {
        name: "mdi-github",
        path: "https://github.com/EmerikJuric1997",
      },
    ],
  }),
};
</script>
<style scoped>
.icons {
  color: rgb(255, 179, 0) !important;
}
</style>
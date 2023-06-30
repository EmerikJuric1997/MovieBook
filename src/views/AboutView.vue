<template>
  <div class="about">
    <v-row>
      <v-col cols="4" class="text-right mx-auto">
        <h1 class="project">ABOUT THE PROJECT</h1>
        <p class="project">
          This project was fully made by me(all the frontend, and backend) using
          <a href="https://www.omdbapi.com/" class="project">this api.</a> In this project I
          made auth with firebase and you can search all of your favourite
          movies and see ratings, plot and many more. For the backend I used
          firebase and for the frontend vue, vuetify, vuesax, html, css and
          google fonts. If you want to know how I made it you can contact me on
          social media, and we can also do some projects togehter and learn.
        </p>
      </v-col><v-divider vertical class="amber"></v-divider>
      <v-col cols="4" class="text-left mx-auto">
        <h1 class="bio">ABOUT ME</h1>
        <p class="bio">
          Hello, my name is Emerik, and I live in Osijek. Currently I am
          studying Informatics at Fakultet Prirodoslovno Matematičkih i Odgojnih
          Znanosti Mostar (FPMOZ), and I'm on 3rd year. In my free time i love
          to code, edit videos and 3d animations. Currently I am learning Vue
          js, laravel and firebase. In the future I would like to help the world
          with coding. I also like going to the gym! If you want to contact me
          you can add me on social media that is provided in the footer! Hope to
          hear from you :)!
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200&display=swap");
.bio {
  color: rgb(255, 205, 89);
}
.about {
  padding-top: 200px;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.project {
  color: rgb(205, 205, 205);
}
</style>

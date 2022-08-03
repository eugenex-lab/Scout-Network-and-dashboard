<template>

  <the-header title="European Scout"> </the-header>
  <home-Page>
  </home-Page>

</template>

<script>

// import greenWoodImg from "/image/Img.jpeg";
// import seskoimg from "/image/noFace.png";
// import StoredPlayers from "./components/ScoutDetails/StoredPlayers.vue";
import TheHeader from "@/components/layouts/TheHeader";
// import BaseButton from "@/components/UI/BaseButton";
import HomePage from "./components/ScoutDetails/HomePage";

export default {
components: {
  TheHeader,HomePage,
},
}
</script>

<style >


* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>
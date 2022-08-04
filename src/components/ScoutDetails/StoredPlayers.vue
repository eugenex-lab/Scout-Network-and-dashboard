<template>
  <ul>
    <player-info v-for="player in scoutPlayers" :key="player.id" :position="player.position"
                 :age="player.age" :best-attribute="player.bestAttribute" :link="player.link" :name="player.name"
                 :countries="player.countries" :preferred-foot="player.preferredFoot"
                 :weakness="player.weakness" :image="player.image">
    </player-info>
  </ul>
</template>

<script>
import PlayerInfo from "./PlayerInfo.vue";


export default {
  components: {
    PlayerInfo,
  },
  // props: ['scoutPlayers'],
  inject:['scoutPlayers'],

  name: "DocumentedPlayerList"
  ,
  methods:{

  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 40rem;
}

</style>
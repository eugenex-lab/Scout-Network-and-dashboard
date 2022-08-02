<template>

  <base-card class="edit">
    <base-button @click="setSelectedTab('stored-players')"
     :mode="storedResButtonMode">
      Scout Repo
    </base-button>
    <base-button  @click="setSelectedTab('new-player')"
    :mode="AddResButtonMode">
      New Player
    </base-button>
  </base-card>
  <keep-alive>
  <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>

import StoredPlayers from "./StoredPlayers.vue";
import NewPlayer from "./NewPlayer";


export default {
  components:{
    StoredPlayers,NewPlayer
  },
  data() {
    return {
      selectedTab: 'stored-players',

      storedPlayers: [{
        id: 1,
        name: 'Mason Greenwood',
        age: 21,
        position: 'Striker',
        countries: 'England',
        preferredFoot: 'Left',
        bestAttributes: ['Finishing', 'Two footed'],
        weakness: ['Women', 'Acceleration'],
        link: "https://www.transfermarkt.com/mason-greenwood/profil/spieler/532826",
        // image: greenWoodImg
      },
        {
          id: 2,
          name: 'Benjamin Šeško',
          age: 19,
          position: 'Striker',
          countries: 'Slovenia',
          preferredFoot: 'Right',
          bestAttributes: ['Finishing', 'Acceleration', 'Strength'],
          weakness: ['None'],
          link: 'https://www.transfermarkt.com/benjamin-sesko/profil/spieler/627442',
          // image: seskoimg
        }
      ]
    }
  },
  provide() {
    return{
      scoutPlayers: this.storedPlayers,
      addPlayer: this.addPlayer
    }

  },
  computed:{
    storedResButtonMode(){
      return this.selectedTab === 'stored-players' ? null : 'flat'
    },
    AddResButtonMode(){
      return this.selectedTab === 'new-player' ? null : 'flat' ;
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;

    },
    addPlayer(name, age, position, countries, preferredFoot, bestAttributes, weakness, link) {
      const newPlayer = {
        id: this.storedPlayers.length + 1,
        name: name,
        age: age,
        position: position,
        countries: countries,
        preferredFoot: preferredFoot,
        bestAttributes: bestAttributes,
        weakness: weakness,
        link: link,
        // image: greenWoodImg
      };
      this.storedPlayers.unshift(newPlayer);
      this.selectedTab = 'stored-players';
    }

  }

}
</script>

<style scoped>

.edit {
  display: flex;
  /*justify-content: space-around;*/
  align-items: center;
  margin: 1rem auto;
  max-width: 40rem;
  color: blue;
  background-color: #ea9d9d;
}



</style>
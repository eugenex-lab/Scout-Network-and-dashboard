<template>

  <base-card>
    <li>
      <div>
        <header>
          <h2>Name: {{ name }} </h2>
          <img src="{{image}}" alt="">
          <!--      <img src="./public/Mmg.png" alt="">-->


          <base-button  mode="flat">Delete</base-button>

        </header>
      </div>

      <p>Age: {{ age }}</p>
      <p>Nationality: {{ countries }}</p>
      <p>Position: {{ position }}</p>
      <p>preferredFoot: {{ preferredFoot }}</p>

      <span class="side">
        <h4 class="strength">Best Attributes</h4>
      <ul>
        <li v-for="best in bestAttribute" :key="best">
            <span>{{ best }}</span>
        </li>
      </ul>
    </span>

      <span class="side" id="left-shift">
         <h4 class="weakness">Weaknesses</h4>
          <ul>
         <li v-for="weak in weakness
            " :key="weak">
            <span>{{ weak
                }}</span>
        </li>



      </ul>
    </span>
      <br>
      <br>
      <nav>
        <a :href="link" target="_blank">Click to see player statistics </a>
      </nav>
      <br>
      <br>
    </li>
  </base-card>

</template>

<script>

import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {BaseButton

  },

  //
  data() {
    return {
      // name: "",
      // age: "",
      kylexy: countries,  //

      // position: "",
      // preferredFoot: "",
      // bestAttribute: [],
      // weakness: [],
      // link: "",
      // image: "",
    }
  },
  props:
      {
        name: {
          type: String,
          required: false
        },
        image: {
          // add image to props
          type: String,
          required: false
        },
        age: {
          type: Number,
          required: false
        },
        position: {
          type: String,
          required: false,

        },
        countries: {
          type: String,
          required: false
        },
        preferredFoot: {
          type: String,
          required: false
        },
        bestAttribute: {
          type: Array,
          required: false
        },
        weakness: {
          type: Array,
          required: false
        },
        link: {
          type: String,
          required: false
        }
      },
  computed: {
    printKylexy() {
      console.log(this.kylexy);
    },
    }

}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #691364;

}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

.side {
  display: inline-block;
  width: 50%;
  vertical-align: top;


}

.weakness {
  color: #790f0f;
}

.strength {
  color: #183b96;
}

#left-shift {
  margin-left: -160px;


}
</style>
<template>

    <base-card>
<li>
    <div>
    <header>
      <h2>Name: {{name}} </h2>
      <img src="{{image}}" alt="">
      <base-button mode="flat">Delete</base-button>

    </header>
    </div>

    <p>Age: {{age}}</p>
    <p>Nationality: {{countries}}</p>
    <p>Position: {{position}}</p>
    <p>preferredFoot: {{preferredFoot}}</p>

    <span class="side">
        <h4 class="strength">Best Attributes</h4>
      <ul>
        <li v-for="best in bestAttributes" :key="best">
            <span>{{best}}</span>
        </li>
      </ul>
    </span>

    <span class="side">
         <h4 class="weakness">Weaknesses</h4>
          <ul>
         <li v-for="weak in weakness" :key="weak">
            <span>{{weak}}</span>
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
  components: {BaseButton},
  props:
  {
    name: {
      type: String,
      required: true
    },
    image:{
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true
    },
    position:{
      type: String,
      required: true,

    },
    countries: {
      type: String,
      required: true
    },
    preferredFoot:{
      type: String,
      required: true
    },
    bestAttributes:{
      type: Array,
      required: true
    },
    weakness:{
      type: Array,
      required: true
    },
    link:{
      type: String,
      required: true
    }
  },
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

.weakness{
  color: #790f0f;
}

.strength{
  color: #183b96;
}
</style>
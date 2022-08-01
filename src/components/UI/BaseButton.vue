<template>
  <button  :class="mode">
    <slot></slot>
<!--    <base-button mode="flat"> </base-button>-->
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props:[

    "mode"
  ],
}
</script>

<style scoped>
button {
  padding: 0.39rem 1.0rem;
  font-family: inherit;
  background-color: #00a6a0;
  border: 1px solid #0508b0;
  color: #c51919;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #5e5600;
  border-color: #f3e019;
}

.flat {
  background-color: transparent;
  border: #691364;
  color: #a60000;
  cursor: pointer;
     
}


.flat:hover,
.flat:active {
  background-color: #702a9f;
}
</style>
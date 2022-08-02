<template>
  <base-card>
    <li>
      {{ item }}
      <button v-on:click="$emit('remove')">Remove</button>
    </li>
  </base-card>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
export default {
  name: "Remove",
  components: {BaseCard},
  props:['item'],
}
</script>

<style scoped>

</style>
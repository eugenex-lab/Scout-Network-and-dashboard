<template>
  <header>
    <slot>
      <h1>
        {{title}}
      </h1>
    </slot>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: #ffffff;
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif
}

</style>
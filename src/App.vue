<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #CFD4DE;
  font-family: Inter;
}

#app{
  min-height: 100vh;
}
</style>

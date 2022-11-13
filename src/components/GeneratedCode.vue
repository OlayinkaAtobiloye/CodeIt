<template>
  <div class="flex">
    <img v-bind:src="imageURL" />
    <p>{{ siteURL }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    imageURL: String,
    siteURL: String
  }
};
</script>

<style>
.flex img {
  margin-right: 12px;
  width: 36px;
  height: auto;
}
.flex {
  display: flex;
  align-items: center;
  margin-right: 32px;
  border-bottom: 1px solid #0a1b45;
  padding-top: 60px;
  padding-left: 32px;
  padding-bottom: 16px;
  flex-wrap: wrap;
}
</style>

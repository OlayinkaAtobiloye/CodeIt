<template>
  <div class="history">
    <SideBar />
    <div v-bind:style="{ width: '70%' }">
      <h2>Generated</h2>
      <GeneratedCode
        v-for="code of this.$store.state.qrCodes"
        v-bind:image-u-r-l="code.imageURL"
        v-bind:site-u-r-l="code.siteURL"
      ></GeneratedCode>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import GeneratedCode from "./GeneratedCode.vue";
export default {
  name: "History",
  components: {
    SideBar,
    GeneratedCode
  },
  data() {
    return {};
  }
};
</script>

<style>
.history {
  display: flex;
}

.history > div > h2 {
  padding-left: 32px;
  padding-top: 60px;
}
</style>

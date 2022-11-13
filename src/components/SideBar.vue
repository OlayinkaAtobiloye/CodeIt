<template>
  <nav class="sidebar">
    <h1>C<span class="text-yellow">O</span>DEiT</h1>
    <ul>
      <li><a href="https://codeitapp.netlify.app">Website</a></li>
      <li><a href="https://instagram.com">Instagram</a></li>
      <li><a href="https://facebook.com">Facebook</a></li>
      <li><a href="https://youtube.com">YouTube</a></li>
      <li>
        <router-link to="/history">History</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  components: {}
};
</script>

<style>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.sidebar {
  width: 20%;
  border-right: 1px solid #021136;
  color: #000000;
  flex-direction: column;
  display: flex;
  /* align-items: center; */
  padding-top: 60px;
  min-height: 100vh;
  padding-left: 5%;
}
.sidebar ul li {
  margin-bottom: 12px;
  margin-top: 60px;
}
.text-yellow {
  color: #ffa901;
}
.bg-deep-blue {
  background: #021136;
}
.text-white {
  background: #ffffff;
}
.text-deep-blue {
  color: #021136;
}
@media (max-width: 768px) {
  .qr-code-div {
    width: 100% !important;
  }
  .sidebar{
    width: 30%;
  }
}
</style>

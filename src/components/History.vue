<template>
    <div class="history">
      <SideBar/>
      <div v-bind:style="{'width': '70%'}">
        <h2>Generated</h2>
        <GeneratedCode v-for="code of codes" :key="code.url" :image="code.image" :url="code.url"></GeneratedCode>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from './SideBar.vue';
  import GeneratedCode from './GeneratedCode.vue';
  export default {
    name: 'History',
    components: {
        SideBar,
        GeneratedCode
    },
    data(){
        return{
            codes: [{image: "hgfregtyhuik", url: "bgdfsghjuik"}]
        }
       
    },
    mounted(){
      console.log('history mounted')
    }
  }
  </script>
  
  <style>
  
.history{
    display: flex;
}

.history > div > h2{
    padding-left: 32px;
    padding-top: 60px;
}
  </style>
  
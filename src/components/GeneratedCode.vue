<template>
    <div class="flex">
      <img src="image"/>
      <p>{{url}}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    props: {
        image: String,
        url: String
    }
  }
  </script>
  
  <style>
  .flex img{
    margin-right: 12px;
    width: 36px;
    height: auto;
  }
  .flex{
    display: flex;
    align-items: center;
    margin-right: 32px;
    border-bottom: 1px solid #0A1B45;
    padding-top: 60px;
    padding-left: 32px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
  </style>
  
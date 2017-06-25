<template>
  <div id="app">
    <div class="search"><search @search-query="startSearch"></search></div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SoundService from '@/services/soundcloud'
  import Search from '@/components/Search.vue'

  export default {
    name: 'app',
    components: {Search},

    created () {
      SoundService.init()
    },

    methods: {
      startSearch(query) {
        this.$router.push({name: 'tracklist', params: {query: query},})
      },
    }

  }
</script>
<style>
  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .search {
    position: fixed;
    width: 100%;
    top:0;
    background-color: #fff;
  }

  .router-view {
    margin-top: 55px;;
  }
</style>
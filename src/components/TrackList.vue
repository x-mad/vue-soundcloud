<template>
  <div class="track-list">
    <div class="track-list-item" v-for="track in tracks">
      <img class="logo" :src="track.artwork_url"></img>
      <div class="track">
        <div class="author"></div>
        <div class="title">{{track.title}}</div>
        <div class="views"></div>
      </div>
      <div class="duration"></div>
    </div>
  </div>
</template>

<script>
  import SCservice from '@/services/soundcloud'

  export default {
    data () {
      return {
        tracks: []
      }
    },

    methods: {
      getTracks (query) {
        return SCservice.search(query)
      }
    },

    beforeRouteEnter (to, from, next) {
      SCservice.search(to.params.query).then(response => {
        next(me => {
          me.tracks = response
        })
      })
    },

    beforeRouteUpdate (to, from, next) {
      SCservice.search(to.params.query).then(response => {
        this.tracks = response
        next()
      })
    },

  }
</script>

<style scoped>
  .track-list {
    padding-top: 15px;
    overflow-y: scroll;
  }

  .track-list-item {
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid #eee;

  }

  .logo {
    height: 60px;
    width: 60px;
    padding: 15px;
    flex-shrink: 0;
  }

  .track {
    margin-left: 10px;
    overflow: hidden;
    padding: 15px 0;
  }

  .title {
    text-align: left;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }
</style>
<template>
  <div class="track-list">
    <div class="track-list-item" v-for="track in tracks">
      <img class="logo" :src="track.artwork_url"/>
      <div class="track">
        <div class="duration">{{getDuration(track.duration)}}</div>
        <div class="user">{{track.user.username}}</div>
        <div class="title">{{track.title}}</div>
        <div class="playback-count ion-play "><span>{{track.playback_count}}</span></div>
      </div>

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
      },

      getDuration (millis) {
        let minutes = Math.floor(millis / 60000)
        let seconds = ((millis % 60000) / 1000).toFixed(0)

        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
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
  }

  .track-list-item {
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid #eee;
    padding-right:10px;
  }

  .logo {
    height: 60px;
    width: 60px;
    padding: 15px;
    flex-shrink: 0;
  }

  .track {
    /*margin-left: 10px;*/
    overflow: hidden;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .playback-count {
    color: #999;
    font-size: 12px;
  }

  .playback-count span {
    padding-left: 3px;
  }

  .title {
    text-align: left;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }

  .user {
    color: #999;
    font-size: 12px;
  }
  .duration {
    position: absolute;
    color: #999;
    font-size: 12px;
    right:10px;
  }

</style>
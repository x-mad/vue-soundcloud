<template>
  <div class="track" >
    <div class="img" :style="styleObj" v-if="track"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        track : null
      }
    },

    computed : {
      largeImage () {
          return this.track.artwork_url.replace('-large.jpg', '-t500x500.jpg')
      },
      styleObj () {
        return {
          'background-image': this.largeImage
        }
      }
    },

    beforeRouteEnter (to, from, next) {
      next(me => {
        me.track = to.params.track
      })
    }
  }
</script>
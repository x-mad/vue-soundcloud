<template>
  
  <div class="searchbar">
    <div class="no-input-ct" v-if="!bInputVisible" transition="no-input-fade">
      <div class="logo"></div>
      <div class="search-btn ion-ios-search-strong" @click="toggleInput(true)"></div>
    </div>
    <div class="input-ct" v-else transition="input-fade">
      <input type="text" class="input" placeholder="Search" v-model="query"  ref="search" @keyup.enter="search" autofocus>
      <button class="clear-cross" v-show="showCross" @click="clearQuery">×</button>
      <!--<button class="cancel" @click="toggleInput(false)">Cancel</button>-->
    </div>
  </div>
</template>

<script>
  import soundService from '@/services/soundcloud'

  export default {
    data () {
      return {
        bInputVisible: false,
        query: ''
      }
    },

    computed: {
      showCross () {
        return this.query.length
      }
    },

    methods : {
      toggleInput (bShow) {
        this.bInputVisible = bShow;
      },

      search () {
        this.$emit('search-query', this.query);
        this.query = ''
      },

      clearQuery () {
        this.query = ''
        this.$refs.search.focus()
      }
    }
  }
</script>

<style scoped>
  .clear-cross {
    display:block;
    position: absolute;
    right:0;
    top:0;
    height:100%;
    background-color: transparent;
    border:none;
    width : 20px;
    color: #999;
    font-size:20px;
    right:10px;
    line-height:36px;
    outline:0;

  }
  .no-input-ct, .input-ct, .logo, .cancel{
    height: 100%;
  }
  .searchbar {
    height: 35px;
    position: relative;
    padding: 5px;
  }
  .logo {
    background: url(https://m.soundcloud.com/assets/images/hdpi/logo-881c7ae2.png) center no-repeat;
    background-size: 128px 16px;
  }
  .search-btn {
    position: absolute;
    right: 0;
    top:0;
    width:45px;
    height:100%;
    color: #333;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cancel {
    /*float: right;*/
    color: #999999;
    background-color: transparent;
    border: none;
    font-size: 15px;
    width:100px;
  }

  .input-ct {
    display: flex;
    justify-content: space-between;
  }
  .input:focus {
    outline: 0;
  }
  .input {
    flex: 1 1;
    background-color: #e5e5e5;
    border: none;
    height: 100%;
    color: #333;
    padding-left: 30px;
    border-radius: 3px;
    font-size: 15px;
  }
  .input-fade-transition, .no-input-fade-transition {
    transition: all 0.5s ease-out;
  }
</style>
<template>
  <div id="app" class="container">
    <h1>Nuxt video</h1>
    <form class="pure-form">
        <input type="text" class="pure-input-1-2" placeholder="Put video url here" v-model="input" ref="input">
        <button class="pure-button button-success" type="button" @click="play">Play</button>
        <button class="pure-button button-warning" type="button" @click="handleReset">Reset</button>
    </form>
    <div class="iframe">
      <iframe :src="url" frameborder="0" scrolling="no" style="width: 100%; height: 100%!important; position: relative!important;"></iframe>
    </div>
  </div>
</template>

<script>
  import config from './config.js'
  export default {
    name: 'app',
    data() {
      return {
        // url: 'https://player.vimeo.com/video/141567420?byline=0&badge=0&portrait=0&title=0',
        url: '',
        input: ''
      }
    },
    methods: {
      play() {
        const input = this.input.trim()
        if (!input) {
          return
        }
        this.url = config.baseUrl + input
      },
      handleReset() {
        this.input = this.url = ''
        this.$refs.input.focus()
      }
    }
  }
</script>

<style src="purecss/build/pure-min.css"></style>
<style>
  html, body, #app {
    height: 100%;
  }
  .container {
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      /*background-color: #eee;*/
  }

  @media (max-width: 768px) {
    .pure-input-1-2 {
      width: 100%!important;
    }
  }

  @media (min-width: 768px) {
      .container {
          padding-right: 15px;
          padding-left: 15px;
          width: 750px;
      }
  }

  @media (min-width: 992px) {
      .container {
          width: 970px;
      }
  }

  @media (min-width: 1200px) {
      .container {
          width: 1170px;
      }
  }
  .iframe {
    width: 100%;
    height: 90%;
    margin-top: 20px;
  }
  .button-success,
  .button-warning {
      color: white;
      border-radius: 4px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  .button-success {
      background: rgb(28, 184, 65); /* this is a green */
  }
  .button-warning {
      background: rgb(223, 117, 20); /* this is an orange */
  }
</style>

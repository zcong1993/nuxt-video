<template>
  <div class="my-container">
    <el-row type="flex" justify="center" align="middle" class="main-title">
      <img src="~static/vimeo_32.png" alt="Nuxt.js Logo" /><span class="my-title">ideo</span>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-input
        placeholder="请输入视频网址"
        v-model="vedioLink">
      </el-input>
      <el-select v-model="value" placeholder="请选择" class="custom-input">
        <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" icon="caret-right" class="custom-input" @click="handleClick">播放</el-button>
      <el-button type="info" icon="loading" class="custom-input" @click="handleReload">刷新</el-button>
    </el-row>
    <el-row type="flex" justify="center" align="middle" class="video-area">
       <iframe class="video-iframe" id="videoIframe" :src = "fullLink">
       </iframe>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vedioLink: '',
      options: [{
          value: 'http://5qiyi.sdyhy.cn/5qiyi/5qiyi1.php?url=',
          label: '线路1'
        }, {
          value: 'http://5qiyi.sdyhy.cn/5qiyi/5qiyi2.php?url=',
          label: '线路2'
        }, {
          value: 'http://5qiyi.sdyhy.cn/5qiyi/5qiyi3.php?url=',
          label: '线路3'
        }],
        value: 'http://5qiyi.sdyhy.cn/5qiyi/5qiyi1.php?url=',
        fullLink: '',
        canReload: false
    }
  },
  methods: {
    handleClick () {
      if(this.vedioLink.trim()) {
        this.fullLink = this.value + this.vedioLink.trim()
        this.canReload = true
      }
    },
    handleReload () {
      if(this.canReload){
        var iframe = document.getElementById('videoIframe')
        iframe.src = iframe.src
      }
    }
  }
}
</script>

<style scoped>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  padding-top: 50px;
}
.el-row {
  padding: 10px;
  text-align: center;
}
.my-title {
  padding-bottom: 1px;
  font-size: 30px;
  margin-left: 4px;
}
.custom-input {
  margin-left: 5px;
}
.main-title {
  margin-bottom: 20px;
}
.video-area {
  overflow: hidden;
  margin: 0 auto;
  width: 98%;
}
.video-iframe {
  min-height: 300px;
  max-height: 500px;
  width: 100%;
  max-width: 800px;
  frameborder: 0;
  marginheight: 0px;
  marginwidth: 0px;
  background: #1F2D3D;
  border: 2px solid #99A9BF;
}
.my-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .my-container {
    width: 750px;
  }
  .video-iframe {
    height: 300px;
  }
}
@media (min-width: 992px) {
  .my-container {
    width: 970px;
  }
  .video-iframe {
    height: 500px;
  }
}
@media (min-width: 1200px) {
  .my-container {
    width: 1170px;
  }
  .video-iframe {
    height: 500px;
  }
}
</style>

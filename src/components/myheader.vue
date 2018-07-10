<template>
  <div id="myheader">
  <!--top start -->
    <div class="top">
    <div class="logo"><a href=""><img src="../assets/logo.png" width="245" height="70" alt="时光流影微信书" /></a></div>
    <div id="nav">
    <div class="nav-ul">
    <ul>
    <li style="border-right:none;"><a href="/page/1" rel="nofollow">联系我们</a></li>
    <li><a href="/page/1" title="时光流影微信书的成品展示">微信书展示</a></li>
    <li><a href="/page/1" title="微信书制作流程">制作教程</a></li>
    <li><a href="/newslist/1" title="时光流影微信书的新闻观点">新闻资讯</a></li>
    <li><a href="/" title="时光流影微信书首页">首页</a></li>
    </ul>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
#myheader{width:100%;position:fixed;z-index:999;top:0px;background:#fff;border-bottom:1px solid #d3d3d3;overflow-x: hidden;}
#myheader .top{width:1180px;height:90px;margin:0 auto;font-size:12px;position:relative;}  
#myheader .top .logo {float:left;width:245px; height:70px;margin:10px 0 10px 0;}

#nav{position:absolute;width:600px;float:right;bottom:20px;right:0px;}
.nav-ul {margin:0 auto;height:30px;line-height:16px;position: relative;width:600px;}
.nav-ul ul { list-style-type:none; }
.nav-ul ul li{ float:right;font-family:"微软雅黑";position: relative;border-right:1px solid #d3d3d3;margin:14px 0 0 0;}
.nav-ul ul li a{ padding:0 10px 0;color: #434343;display:block;font-size: 16px;height:16px;line-height:16px;padding:0 25px 0;list-style-type: none;text-decoration: none;}
.nav-ul ul li a:hover {color:#2aac22;}
</style>

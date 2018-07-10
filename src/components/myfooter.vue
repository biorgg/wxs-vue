<template>
    <div id="footer">
    <div class="inner">
    <img class="logob" src="../assets/logob.png" width="243" height="70" alt="专业的微信书制作网站" />
    <div class="inner_l">
    <h3>服务支持</h3>
    <router-link to="/page/1">微信书制作教程</router-link>
    <router-link to="/page/1">微信书成品展示</router-link>
    <router-link to="/newslist/1">微信书新闻观点</router-link>
    </div>
    <div class="inner_r">
    <h3>联系我们</h3>
    <p>时光流影科技股份有限公司</br>
    地址：安徽省合肥市高新区黄山路599号时代数码港18楼</br>
    电话：400-102-1099</p>
    </div>
    <img class="footer_logo" src="../assets/gzh.jpg" width="140" height="140" alt="时光流影微信书公众号二维码">
    </div>
    <div class="inner_b">
    <p>Copyright&nbsp;&nbsp;2017&nbsp;&nbsp;时光流影科技股份有限公司&nbsp;&nbsp;版权所有&nbsp;&nbsp;All rights reserved &nbsp;&nbsp;<a href="/">网站地图</a>&nbsp;&nbsp;皖ICP备10017145号-11</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
#footer{width:100%;margin:0 auto;font-size:12px;color:#a7a7a7;overflow:hidden;background:#252525;}
#footer a{color:#a7a7a7;} 
#footer a:hover{color:#fff;}                    
#footer .inner{margin:auto;width:1180px;height:182px;padding:30px 0 0;position:relative;}
#footer .inner .logob{float:left;margin:40px 50px 0 40px;width:243px;height:70px;}
#footer .inner h3{color:#fff;font-size:16px;}
#footer .inner_l{float: left;width:auto;padding-right:70px;overflow:hidden;margin:20px 40px 0 0;}
#footer .inner_l a{float: left;width:auto;clear:both;}
#footer .inner_r{float: left;width:380px;overflow:hidden;margin:20px 40px 0 0;}
#footer .inner_b  {width:100%;text-align:center;position:relative;background:#181818;}
#footer .inner_b p{line-height:45px;margin:auto;width:1180px;}
#footer .footer_logo {float: right;}
</style>

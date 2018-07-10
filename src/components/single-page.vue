<template>
<div>
<myheader></myheader>
<div class="bannerbox"></div>
<div class="mainbox">
    <div class="paget">
        <wz-wz></wz-wz>
        <p style="text-align: center;"><img src="../assets/update/005.jpg" title="美女微信书" alt="美女微信书" width="600" height="353" border="0" vspace="0" style="width: 600px; height: 353px;"/></p><p><br/></p><p style="text-align: center;"><img src="../assets/update/001.jpg" title="一一重来的微信书" alt="一一重来的微信书" width="600" height="353" border="0" vspace="0" style="width: 600px; height: 353px;"/></p><p><br/></p><p style="text-align: center;"><img src="../assets/update/002.jpg" title="旅游微信书" alt="旅游微信书" width="600" height="353" border="0" vspace="0" style="width: 600px; height: 353px;"/><br/></p><p><br/></p><p style="text-align: center;"><img src="../assets/update/003.jpg" title="宝宝微信书" alt="宝宝微信书" width="600" height="400" border="0" vspace="0" style="width: 600px; height: 400px;"/></p><p><br/></p><p style="text-align: center;"><img src="../assets/update/004.jpg" title="个人生活微信书" alt="个人生活微信书" width="600" height="400" border="0" vspace="0" style="width: 600px; height: 400px;"/></p>
    </div>
</div>
<myfooter></myfooter>
</div>
</template>

<script>

import myheader from "@/components/myheader.vue";
import myfooter from "@/components/myfooter.vue";

import WzWz from "@/components/wz/wz-wz.vue";


export default {
  name: 'Index',
  data () {
    return {
        lno:0,
      
    }
  },
  components:{myheader,myfooter,WzWz,},
  mounted:function(){
      this.lno=parseInt(this.$route.params.lno)
  }
}
</script>


<style scoped>

</style>

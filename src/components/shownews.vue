<template>
<div>
<myheader></myheader>
<div class="bannerbox"></div>
<div class="mainbox">
    <div class="main_l">
        <list-tit-left :lno="lno"></list-tit-left>
        <wz-ad></wz-ad>
    </div>
    <div class="main_r">
        <wz-wz></wz-wz>
        <div class="post_box">
            <wz-main></wz-main>
            <wz-pre-next></wz-pre-next>
            <wz-xian-guan></wz-xian-guan>
        </div>
        
    </div>
</div>
<myfooter></myfooter>
</div>
</template>

<script>

import myheader from "@/components/myheader.vue";
import myfooter from "@/components/myfooter.vue";
import ListTitLeft from "@/components/wz/wz-tit-l.vue";
import WzAd from "@/components/wz/wz-ad.vue";
import WzWz from "@/components/wz/wz-wz.vue";
import WzMain from "@/components/wz/wz-main.vue";
import WzPreNext from "@/components/wz/wz-pre-next.vue";
import WzXianGuan from "@/components/wz/wz-xianguan.vue";

export default {
  name: 'Index',
  data () {
    return {
        lno:0,
      
    }
  },
  components:{myheader,myfooter,ListTitLeft,WzAd,WzWz,WzMain,WzPreNext,WzXianGuan},
  mounted:function(){
      this.lno=parseInt(this.$route.params.lno)
  }
}
</script>


<style scoped>

</style>

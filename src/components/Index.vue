<template>
<div>
<myheader></myheader>
<banner-index></banner-index>
<index-main></index-main>
<myfooter></myfooter>
</div>
</template>

<script>
import myheader from "@/components/myheader.vue";
import myfooter from "@/components/myfooter.vue";
import bannerIndex from "@/components/index-banner.vue";
import indexMain from "@/components/mymain.vue";

export default {
  name: 'Index',
  data () {
    return {
      
    }
  },
  components:{myheader,myfooter,bannerIndex,indexMain}
}
</script>


<style scoped>

</style>

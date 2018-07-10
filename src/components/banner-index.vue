<template>
  <div style="position:relative; height:400px;">
    <div class="banner" style="position:relative; z-index:1">
    </div>
    <div class="bannerWrap">
      <ul class="showList">
        <li class="hand special" ><img src="../assets/banner01.jpg"/></li>
        <li class="hand" ><img src="../assets/banner02.jpg"/></li>
        <li class="hand" ><img src="../assets/banner03.jpg"/></li>
      </ul>
    </div>
    <p class="banner2" style="height:400px; position:absolute; z-index:0; top:-14px; left:auto; width:100%">
    </p>
  </div>
</template>

<script>

window.$=require("jquery");

export default {
  name: 'myheader',
  data () {
    return {
      
    }
  },
  mounted:function(){
      //banner滚动
      var bannerLength = $('.showList li').length;
      for(var i=0; i<bannerLength; i++){
          $('.showList li').eq(i).text(i+1)
      }
       $('.showList li').click(function(){
             window.clearTimeout(timer)
             $('.showList li').removeClass('special')
             $(this).toggleClass('special')
             var thisImg = $(this).attr('img')
             $('.banner2').css('background','url("'+ thisImg +' ")  no-repeat center 0')
             $('.banner').animate({opacity:0},1000,function(){   $('.banner').css('background-image','url("'+ thisImg +'")').fadeTo("slow", 1000)    })
             var thisIndex = $(this).index()+1>=bannerLength ? 0 :  $(this).index()+1
             var timer = window.setTimeout( ` $('.showList li').eq(${thisIndex}).trigger('click') `, 3000  )
    })
    //自动调用banner，case滚动
    var timer = window.setTimeout( `$('.showList li').eq(1).trigger('click')`  , 3000  )
    window.setInterval( `$('.case-left-arrow').trigger('click')`  , 2000  )
  }
}
</script>

<style scoped>
  .banner{margin-top:90px;position:relative; height:400px; top:-14px; text-align:center; background:url(../assets/banner01.jpg) no-repeat center 0; }
  
  .bannerWrap{ width:1000px; overflow:auto; margin:0 auto; position:relative; top:-70px; z-index:3;}
  .bannerWrap ul.showList{ margin:0 auto; float:right  }
  .bannerWrap ul.showList li{ width:23px; height:23px; background:url(../assets/circle1.png) no-repeat; margin:5px; float:left; color:#fff; padding-top:3px; text-align:center;  }
  .bannerWrap ul.showList li.special{ background:url(../assets/circle2.png) no-repeat; color:#2aac22;}
</style>

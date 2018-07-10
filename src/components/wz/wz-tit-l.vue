<template>
    <div class="box_left">
<!--     {php $Pcat = getParentData($catid);}
    {if $Pcat}
    <div class="box_l_t">
    <h2>{$Pcat['catname']}</h2>
    </div>
    {php $data =getCatNav($catid);}
    <ul>
    {loop  $data $t}
    <li {if $t['catid']==$catid}class="select"{/if}><p><a href="{$t['url']}">{$t['catname']}</a></p></li>
    {/loop}
    </ul>
     {else} -->
     <div class="box_l_t">
    <h2>{{catname}}{{lno}}</h2>
    </div>
      <!-- {/if} -->
    </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
          catname:"新闻资讯"
    }
  },
  props:["lno"]
}
</script>


<style scoped>
.box_left{width:210px;height:auto;position:relative;float: left;background: #fff;}
.box_left ul{width:180px;height:auto;}
.box_left ul li{display: block;text-decoration: none;font: 12px/26px Verdana, Arial, Helvetica, sans-serif;height: 40px;text-align: left;padding-left: 24px;margin: 0px;color: #202020;line-height:40px;border-bottom: 1px solid #dbdbdb;background: url(../../assets/dot2.png) 15px 17px no-repeat;}
.box_left ul li.select{color:#fff;background:#2aac22;}
.box_left ul li.select a{color:#fff;}

.box_l_t{width:210px;height:105px;background:url("../../assets/box_l_t.jpg") no-repeat;border-top: 5px solid #2aac22;}
.box_l_t h2{font-family: "Arial","Microsoft YaHei","微软雅黑","宋体"; color:#2aac22;font-size:21px;line-height:32px;padding:40px 0 0 10px;}


</style>

<template>
<div class="newslist">     
    <ul>
        <li v-for="item of vdata">
        <span class="fw_l">·【<router-link :to="item.vurl" target="_blank">{{item.vpar}}</router-link>】&nbsp;&nbsp;<router-link :to="item.vurl" >{{item.vtit}}</router-link></span><span class='fw_s'>[&nbsp;{{item.vdate}}&nbsp;]</span>
        </li>
    </ul>
    <div class="blank10"></div>
    <div class="blank10"></div>
    <div class="blank10"></div>
    <Page :total="26" :page-size="20" show-total></Page>
</div>


</template>

<script>
  
  export default {
  name: 'Index',
  data () {
    return {
          vdata:[
              {vtit:"你的微信里有多少人的朋友圈设置了三天可见？",vpar:"新闻资讯",vdate:"2018-01-19",vid:16,vurl:"/news/1"},
            {vtit:"时光流影微信书--出你自己的\“专辑\”",vpar:"新闻资讯",vdate:"2017-12-25",vid:17,vurl:"/news/1"},
            {vtit:"国庆长假过去了，微信朋友圈怎么办？不如做本微信书！",vpar:"新闻资讯",vdate:"2017-10-10",vid:18,vurl:"/news/1"},
            {vtit:"微信书--时光流影以微信朋友圈为基础的延伸产品",vpar:"新闻资讯",vdate:"2017-09-21",vid:19,vurl:"/news/1"},
            {vtit:"国庆8天假，出去旅游？不如做本微信时光书",vpar:"新闻资讯",vdate:"2017-09-15",vid:20,vurl:"/news/1"},
            {vtit:"微信书，送给老师最“惊喜的”教师节礼物",vpar:"新闻资讯",vdate:"2017-09-11",vid:21,vurl:"/news/1"},
            {vtit:"“时光流影”自出版平台打造私人定制书",vpar:"新闻资讯",vdate:"2017-09-07",vid:22,vurl:"/news/1"},
            {vtit:"在哪里制作微信书？选择好的公司很重要",vpar:"新闻资讯",vdate:"2017-09-06",vid:23,vurl:"/news/1"}
                ],
        
    }
  }
};


</script>


<style scoped>
.newslist {width:680px;margin: 40px 50px 30px;float:left;}
.newslist li {width:678px;float:left;overflow: hidden;line-height:50px;border-bottom: 1px dashed #dbdbdb;}
.fw_l {float:left; width:500px;height:50px;overflow: hidden;}
.fw_s {float:right;}
</style>

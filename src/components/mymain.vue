<template>
    <div class="main">
        <div class="paishe">
            <p>微信是一款非常酷的社交软件，你会在朋友圈中记录生活的点滴</br>时光流影的一键排版帮助大家将自己和他人的朋友圈，印制成书，永久珍藏</br>赠送家人与朋友，还可以随时随地的分享你的微信电子书</p>
            <img src="../assets/paishe.jpg" width="700" height="380" alt="微信书在线制作,能够将您的微信朋友圈内容一键排版,印刷成书!" />
        </div>
        <div class="zzlc">
            <h3>简单4步,打造您的个性定制微信书</h3>
            <ul>
                <li><img src="../assets/lo1.png" width="90" height="90" alt="微信书制作第一步:添加小编微信" />
                <h4>添加小编</h4>
                <p>添加小编为微信好友,获取您的朋友圈浏览权限</p>
                </li><span></span>
                <li><img src="../assets/lo2.png" width="105" height="105" alt="微信书制作第二步:系统自动获取朋友圈数据" />
                <h4>获取数据</h4>
                <p>系统自动获取您朋友圈已发布的内容</p>
                </li><span></span>
                <li><img src="../assets/lo3.png" width="105" height="105" alt="微信书制作第三步:系统自动排版生成微信书电子书" />
                <h4>自动排版</h4>
                <p>系统自动为你生成一本电子微信书,您可以进行分享或者优化编辑</p>
                </li><span></span>
                <li><img src="../assets/lo4.png" width="105" height="105" alt="微信书制作第四步:申请印刷,等待收货" />
                <h4>申请印刷</h4>
                <p>在线申请印刷成实体书,您的微信书将在3-5个工作日后寄到</p>
                </li>
            </ul>
            <div class="ljty"><Button type="success" @click="jumpout('http://www.timeface.cn/weixin')">立即体验 >></Button></div>
        </div>


        <div class="area01">
        <a @mouseover="pshowin(0)" @mouseout.stop="pshowout" href="/page/1" class="floor-maskItem"><p v-show="pshow[0]" style="width:245px; height:175px;">月份插页可选</p><img src="../assets/jnc/img01.jpg" width="245" height="175"/></a>
        <a @mouseover="pshowin(1)" @mouseout="pshowout" href="/page/1" class="floor-maskItem"><p v-show="pshow[1]" style="left:250px;top:0;width:495px;height:175px;">多套封面模版可选</p><img style="left:250px; top:0;" src="../assets/jnc/img02.jpg" width="495" height="175"/></a>
        <a @mouseover="pshowin(2)" @mouseout="pshowout" href="/page/1" class="floor-maskItem"><p v-show="pshow[2]" style="left:0;top:180px;width:245px;height:175px;">一键自动排版</p><img style="left:0; top:180px;" src="../assets/jnc/img03.jpg" width="245" height="175"/></a>
        <a @mouseover="pshowin(3)" @mouseout="pshowout" href="/page/1" class="floor-maskItem"><p v-show="pshow[3]" style="left:250px;top:180px;width:245px;height:175px;">用心选纸</p><img style="left:250px;top:180px;" src="../assets/jnc/img04.jpg" width="245" height="175"/></a>
        <a @mouseover="pshowin(4)" @mouseout="pshowout" href="/page/1" class="floor-maskItem"><p v-show="pshow[4]" style="left:500px;top:180px;width:245px;height:175px;">精美封面</p><img style="left:500px;top:180px;" src="../assets/jnc/img05.jpg" width="245" height="175"/></a>
        <a @mouseover="pshowin(5)" @mouseout="pshowout" href="/page/1" class="floor-maskItem"><p v-show="pshow[5]" style="left:750px;top:0;width:245px;height:355px;">高档数码印刷</p><img style="left:750px; top:0;" src="../assets/jnc/img06.jpg" width="245" height="355"/></a>
        </div>
        <div class="index_title"><h4>新闻资讯</h4><div class="clear"></div></div>
        <div class="index_boxa">
            <ul>
                <li v-for="item of vdata">
                <span><p style="font-size:20px;">{{item.vdate[0]}}</p><p>{{item.vdate[1]}}</p></span>
                <router-link to="/news/1" title="">{{item.vtit}}</router-link>
                <p class="spanp">{{item.vdes}}</p>
                </li>   
            </ul>
        <div class="ljty"><Button type="success" @click="jumpout('/newslist/1')">更多观点 >></Button></div>
        </div>
        <div class="index_title"><h4>我们的服务</h4><div class="clear"></div></div>
        <div class="zzgy">
        <ul>
        <li><img src="../assets/d1.jpg" width="320" height="95" alt="时光流影微信书物流优势" /><h4>安全快捷的物流</h4><p>配送及时，使命必达</br>专业细致，安全放心</p></li>
        <li><img src="../assets/d2.jpg" width="320" height="95" alt="时光流影微信书客服优势" /><h4>耐心的远程做书向导</h4><p>专职客服在线</br>及时答疑解惑</p></li>
        <li><img src="../assets/d3.jpg" width="320" height="95" alt="时光流影微信书售后优势" /><h4>贴心细致的售后</h4><p>100%优质服务</br>为你保证微信书品质</p></li>
        </ul>
        <div class="ljty"><Button type="success" @click="jumpout('http://www.timeface.cn/weixin')">立即体验 >></Button></div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      pshow:[false,false,false,false,false,false],
      firstt:false,
      vdata:[
            {vid:16,vtit:"你的微信里有多少人的朋友圈设置了三天可见？",vdes:"自从微信可以选择给朋友查看全部、最近半年、最近三天的朋友圈以后，越来越...",vdate:["19","18-01"]},
            {vid:17,vtit:"时光流影微信书--出你自己的“专辑”",vdes:"在手机时代，微信是我们展示的重要窗口。无论现实中你是怎样的人，在网络上...",vdate:["25","17-12"]},
            {vid:18,vtit:"国庆长假过去了，微信朋友圈怎么办？不如做本微信书！",vdes:"十一长假就这样过去了，出门旅游的小伙伴，是不是再一次体验到了小长假的拥...",vdate:["10","17-10"]},
            {vid:19,vtit:"微信书--时光流影以微信朋友圈为基础的延伸产品",vdes:"时光流影近日注册用户正式突破千万级，对时光流影而言，具有里程碑式的...",vdate:["21","17-09"]},
            {vid:20,vtit:"国庆8天假，出去旅游？不如做本微信时光书",vdes:"2017年国庆和中秋碰到了一起，法定放假8天，从10月1号一直放到10月8号，好...",vdate:["15","17-09"]},
            {vid:21,vtit:"微信书，送给老师最“惊喜的”教师节礼物",vdes:"每年9月10号教师节，是属于每个老师的节日！在中国还是很看重教师节这个传...",vdate:["11","17-09"]},
            {vid:22,vtit:"“时光流影”自出版平台打造私人定制书",vdes:"随着互联网尤其是移动互联网的广泛应用，人们阅读方式发生重大改变。电...",vdate:["07","17-09"]},
            {vid:23,vtit:"在哪里制作微信书？选择好的公司很重要",vdes:"一个公司的服务态度，就能反映出公司产品的好坏，公司只想着赚钱，却从来不...",vdate:["06","17-09"]},
            {vid:24,vtit:"时光流影微信书，一本值得长久保存的美好回忆",vdes:"价格便宜，模板精美，版式多样，这种普通人也可以出的微信书近年来渐渐在朋...",vdate:["05","17-09"]},
            ],
    }
  },
  methods:{
    pshowin:function(idx){
        //this.pshow.splice(idx,1)=true;   vue不能监测数组的变化,需要用$set
        this.$set(this.pshow,idx,true)
    },
    pshowout:function(){
        for(var i=0;i<6;i++){
        this.$set(this.pshow,i,false)
        }
    },
    jumpout(e){
         window.location.href = e
    }
  }
}
</script>

<style scoped>
.main{position:relative;width:1180px;margin:0 auto;overflow: hidden;text-align:center;}
.paishe{position:relative;width:700px;float: left;overflow: hidden;margin:40px 0 60px;padding:0 240px 0;box-sizing: content-box}
.paishe p {font-size:16px;line-height:25px;font-family:"Microsoft YaHei","微软雅黑";text-align:center;margin-bottom:50px;}

.zzlc{position:relative;width:1180px;float: left;overflow: hidden;margin-bottom:60px;}
.zzlc h3 {font-size: 22px;line-height:25px;color: #2aac22;font-weight:bold;font-family:"Microsoft YaHei","微软雅黑";text-align:center;}
.zzlc ul{padding:20px 80px;width:1020px;overflow: hidden;margin:25px 0 10px;position:relative;box-sizing: content-box}
.zzlc ul li{float:left;width:243px;overflow: hidden;}
.zzlc ul li img{float:left;height:70px;width:70px;margin:0 0 15px 85px;}
.zzlc ul li h4{font-size: 15px;float:left;width:243px;line-height:25px;color: #2aac22;font-weight:bold;font-family:"Microsoft YaHei","微软雅黑";text-align:center;}
.zzlc ul li p{font-size: 13px;float:left;width:203px;line-height:25px;color:#a9a9a9;font-family:"Microsoft YaHei","微软雅黑";text-align:center;margin:0 20px 0;}
.zzlc ul span{position:relative;display: block;float:left;height: 22px;width: 15px;background: url(../assets/tt.png) no-repeat;margin:50px 0 82px 0;}

.area01{ position:relative;width:1000px;height:360px; overflow:hidden;margin:0 90px 60px;}
.area01 a{display:block;}
.area01 img{ position:absolute; left:0; top:0;float:left;margin:0 5px 5px 0;z-index:99;}
.area01 p{position:absolute;float:left; left:0; top:0;background:#2aac22;z-index:100;color:#fff;text-align:center;font-size:16px;vertical-align:middle;line-height:175px;overflow:hidden;opacity:0.9;filter:Alpha(opacity=90);}



.ljty {position:relative;display:inline-block}

.index_title {float:left;width: 1180px;text-align: center;overflow: hidden;}
.index_title  h4 {font-size:27px;line-height:30px;color: #333333;font-weight: 400;font-family:"Microsoft YaHei","微软雅黑";}

.index_boxa{width: 1100px;margin: 0 auto;overflow: hidden;margin:50px 40px 70px;float:left;position:relative;}
.index_boxa ul {float:left}
.index_boxa ul li{float:left;width:366px;position:relative;overflow:hidden;height:70px;margin-bottom:35px;}
.index_boxa ul li a{float:left;width:266px;height:30px;overflow:hidden;position:relative;line-height:28px;margin:0 20px 0 10px;font-size:12px;font-weight:bold;text-align:left}
.index_boxa .spanp{float:left;width:266px;height:40px;overflow:hidden;position:relative;line-height:20px;margin:0 20px 0 10px;font-size:12px;color:#a9a9a9;text-align:left}
.index_boxa ul li span{float:left;width:40px;height:40px;background:#2aac22;padding:15px;box-sizing: content-box}
.index_boxa ul li span p{float:left;color:#fff;font-size:14px;line-height:20px;text-align:center;width:40px;height:20px;overflow: hidden;}

.zzgy{position:relative;width:1180px;float: left;overflow: hidden;margin:30px 0 70px 0;}
.zzgy ul {margin-bottom:30px;overflow: hidden;padding:0 110px 0;}
.zzgy ul li {float:left;width:320px;}
.zzgy ul li img {display:block;margin-bottom:20px;}
.zzgy ul li h4 {float:left;font-size:16px;height:30px;width:320px;line-height:30px;text-align:center;}
.zzgy ul li p {float:left;font-size:14px;width:320px;line-height:20px;text-align:center;}

</style>

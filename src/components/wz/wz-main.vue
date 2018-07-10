<template>
    <div>
        <h1 class="wz-title">{{title}}</h1>
        <div class="wz-info">类别：{{pname}} | 更新时间：{{udate}} | 人气值：{{clicked}}</div>
        <div class="wz-picrr">
            <p>　　自从微信可以选择给朋友查看全部、最近半年、最近三天的朋友圈以后，越来越多的人都选择了把自己的朋友圈设置为“三天可见”。<br/>　　诚然，有时点开某个好友的朋友圈看到“三天可见”的字样时，心里会有些不舒服，觉得是不是自己已经被踢出了好友圈，毕竟连 “陌生人都可以查看10张照片，而我却只能看到你的三天动态。”<br/>　　但设置“三天可见”的原因也不是完全不能理解。随着使用微信的人越来越多，微信再也不是当初的熟人社交，大家都不得已加了很多的工作伙伴甚至是陌生人，朋友圈也因此变得更为公开化。而往往大家平时在朋友圈里的分享本就是建立在朋友关系之上的，内容难免比较隐私，那么缩小自己朋友圈的可见范围，也算是对自己一块自留地的保护吧。<br/>　　之前在网上看到有人说，其实很羡慕那些开放了所有朋友圈的人，觉得他们很坦荡，很洒脱。即便是过去发过的一些在如今看来冒着傻气的内容，也不在意，这才是真的能坦然面对过去的自己。<br/>　　其实朋友圈存在的初衷大概就是为了让我们能留下生活里那些细小、难忘又有趣的瞬间，多年以后还能翻一翻这些记录，想起曾经的时光。不管当初的自己在如今看来是多么的可笑与矫情，但这些都是我们每个人成长的印记。<br/>　　现在身边陆陆续续有一些朋友选择在时光流影把自己的朋友圈印刷成书，他们说这种方式挺好的，即可以留下往日的点滴时光，也不用公开和他人分享。翻着自己的微信书，就像在回顾自己曾经走过的路。就好比是小时候的日记本，都是写给自己的心情。</p>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Index',
  data () {
    return {
        title:"你的微信里有多少人的朋友圈设置了三天可见？",
        pname:"新闻资讯",
        udate:"2018-01-19 14:08:24",
        clicked:46

    }
  }
}
</script>


<style scoped>
.wz-title {float:left;width:660px;color: #666;display: block;font-size: 16px;font-weight: 700;line-height: 40px;margin: 0 60px;padding: 15px 0 0;text-align: center;}
.wz-info {width:660px;float:left;border-bottom: 1px solid #E5E5E5;color: #8F8F8F;font-size: 12px;line-height: 35px;margin-bottom: 12px;margin:0 60px 0;padding-bottom: 10px;text-align: center;}
.wz-picrr {color: #777;font-size: 14px;font-weight: 400;line-height: 35px;margin-left: auto;margin-right: auto;overflow: hidden;padding:35px 0 5px;width:630px;}

</style>

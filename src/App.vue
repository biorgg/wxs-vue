<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
	*{margin:0;padding:0;word-wrap:break-word;}
	body{font:12px/1.75 "宋体", arial, sans-serif,'DejaVu Sans','Lucida Grande',Tahoma,'Hiragino Sans GB',STHeiti,SimSun,sans-serif;color:#777;word-wrap:break-word;word-break:break-all;}
	html, body, h1, h2, h3, h4, ul, li, dl,input{ font-family:Arial, Helvetica, sans-serif;margin:0px;padding:0px;list-style-type:none;}
	a{ outline:none;text-decoration:none;}
	a{ color:#777777; }
	a:hover { color:#2aac22;}
	a img{border:none;} 
	div,ul,li,p,form{padding: 0px; margin: 0px;list-style-type: none;}
	em{font-style: normal;font-weight: normal;}
	table {padding: 0px; margin: 0px;list-style-type: none;}
	dt,dl,dd {padding: 0px; margin: 0px;list-style-type: none;}
	form{margin:0px;padding:0px;}
	tr {padding: 0px; margin: 0px;list-style-type: none;}
	h3,h4{padding:0px; font-size:14px; font-weight:bold;font-family:"微软雅黑";}
	.clear {clear:both;height:0px; overflow:hidden;}
	.blank10{height:10px;overflow:hidden;clear:both;}

	.bannerbox{width:100%;height:400px;top:50px;position:relative;overflow: hidden;background:url(./assets/mabg.jpg) no-repeat center top;position:absolute;}

	.mainbox{width:1000px;margin:350px auto 50px;position:relative;overflow: hidden;box-shadow: 0 5px 20px #CCCCCC;}
	.paget{width:940px;float:left;background:#fff;margin:0 auto;position:relative;overflow: hidden;color: #777;font-size: 14px;font-weight: 400;line-height: 35px;overflow: hidden;padding: 30px;}

	.main_l{width:210px;float:left;margin-right:10px;overflow: hidden;}
	.main_r{width:780px;float: left;overflow: hidden;}
	.post_box {float:left;width:780px;background:#fff;position:relative;overflow:hidden;padding-bottom:10px;}

</style>

<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news_details">
        <h2>{{newDetails.title}}</h2>
        <span>发布时间：{{newDetails.pubTime|formatTimes}}</span>
        <div v-html="newDetails.content" class="news_content">
          {{newDetails.content}}
          <!-- <p>9月，苹果在发布会上正式发布了iPhone 6S和iPhone 6S Plus，玫瑰金、土豪金的配色再次刺激了时尚筒子们的 神 经.如此靓丽的 定远远不够，家居装饰也要“壕”一次，尤其是雾霾天气下家庭必备的空气净化器。近日净美仕在行业率先推出“千金”M8088A彩色版，可谓为空气净化器产业树立了个性化品牌的标杆。</p>
          <img src="news_imgs/01.jpg" alt=""/>
          <p>作为518天猫定制唯一的空气净化器，其高达580m3/h的CADR值，高达69.9㎡的 净化面积，以及净化效果可视化、手机远程操控、个性化模式等，让首发白色版“千金”在5月18日当日狂售4200余台，销售额达300多万，可谓刷新了空气净化器行业单日销售额的新纪录，赢得众多消费者的热捧。</p>
          <p>众所周知，“千金”的设计原型是源于净美仕董事长于书权的女儿梦里邂逅的一件美丽裙子。作为一个父亲，于书权一直忙于工作和事业，忽略了对女儿的陪伴。有一天，女儿把梦里邂逅的一件美丽裙子画了出来，渴望有一件这样的礼物，于是，女儿的渴望成为于书权设计‘千金’造型的灵感来源。如今，彩色版更是给了女儿一个色彩斑斓的童年梦想。</p>
          <img src="news_imgs/02.jpg" alt=""/>
          <p>目前，随着消费者对家电个性化要求的提高，除了注重产品的高科技含量，还把时尚化的外观设计考虑在内，即产品品质和生活品位的完美结合。而彩色空气净化器的出现为消费者提供了更高品位的生活。据净美仕相关人员透露，净美仕的调研团队历时两个月，收集两万余份调查问卷，最终确定消费者最喜欢的金、粉、蓝三色。如果说土豪金更偏重男性，是财富的象征，那么玫瑰金便是女性的专属，给每一个天使心的女孩美丽的公主梦。</p>
          <p>如今，家电产品外观彩色化已经是企业参与市场竞争、满足消费者个性化需求必不可少的竞争手段之一。正成为一种趋势，最核心的体现就是产品由传统的白色、灰色(黑色)、银色向赤、橙、黄、绿、青、蓝、紫等五彩斑斓色彩，以及卡通图案乃至艺术性画面转变并实现。业内人士表示，以消费者需求为根本出发点，多种个性化色彩家电产品的推出解决了消费者的烦恼，用户可以根据自己的喜好颜色进行自由选择和搭配，实现了家居的个性化配置。</p>
          <p>长期以来，传统家电没有突破单调的色彩及外观设计，渐渐地与现在个性家居品位显得格格不入。</p>
          <p>目前，小家电也“打扮”得更加时尚，为产品添加更多的设计、智能化元素等等。同时，“80后、90后”购物人群对于产品的个性化要求更高，对于传统黑白灰三色为主的外观色彩早已审美疲劳，这也要求家电企业在产品外观上进行更多的创新，提供更加个性化的产品。</p>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import news from '@/service/news'
export default {
  data() {
    return {
      newDetails: {}
    };
  },
  mounted() {
    let nid=this.$route.params.nid;
    news.getNewsContent(nid).then(res=>{
      if(res){
        this.newDetails=res;
      }
    })
  },
  filters: {
    formatTimes(value) {
      if (!value) {
        return "";
      } else {
        let date = new Date(value);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

        let Hour =
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minutes =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        let result =
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          Hour +
          "-" +
          minutes +
          "-" +
          seconds;
        return result;
      }
    }
  }
};
</script>

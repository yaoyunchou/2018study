<template>
  <div class="home">
    <SwiperBanner></SwiperBanner>
    <div class="flex-box clearfix">
      <h2>校园特色</h2>
      <div class="flex-display">
        <a href="/flexible-display" class="nav_link">
          <img src="http://www.szza.edu.cn/uploads/allimg/170710/1-1FG011395I03.jpg" alt="柔性显示屏">
          <div>
            <h3>优质的师资力量</h3>
            <p>深圳市桃源居中澳实验学校位于全国和谐社区、</p>
            <p>教育示范社区——宝安西乡桃源社区，</p>
            <p>天生就充满了灵气与教育的底蕴。</p>
            <p>学校成立于2002年9月，占地18.16万平方米，</p>
            <p>建筑面积13万平方米，绿化率100%，依山傍海，</p>
            <p>钟灵毓秀，是实行寄宿、</p>
            <p>走读双制管理的十二年一贯制民办实验学校，</p>
            <p>更是一所令人羡慕的公园里的学校。</p>
          </div>
        </a>
      </div>
      <div class="flex-sensior">
        <a href="/flexible-sensor" class="nav_link">
          <img src="http://www.szza.edu.cn/uploads/allimg/160603/1-160603152534215.jpg" alt="柔性传感器">
          <div>
            <h3>优美的校园环境</h3>
            <p>鸟瞰图 学校风景 学校正门 每天拾级而上，</p>
            <p>思索学无止境的真谛 运动场，</p>
            <p>红砖点缀白墙的教学楼长廊相连，无论晴天、雨天</p>
            <p>都能奔走自如 紫荆 凤凰、 杜鹃</p>
            <p>校园环境优美 繁花似锦</p>
          </div>
        </a>
      </div>
    </div>
    <Solutions></Solutions>
    <div class="flex-box clearfix">
      <h2>学校荣誉历史</h2>
      <div class="flex-display">
        <a href="/flexible-display" class="nav_link">
          <img src="http://www.szza.edu.cn/uploads/allimg/161027/1-16102GJ6025I.jpg" alt>
          <div>
            <h3>最佳组织奖</h3>
            <p>获得了迪斯尼家庭套票、</p>
            <p>在全国总计713个获奖名额中，我校取得了53人获奖的佳绩，</p>
            <p>Ipad mini、山地自行车、图书礼包等丰厚大奖。</p>
          </div>
        </a>
      </div>
      <div class="flex-sensior">
        <a href="/flexible-sensor" class="nav_link">
          <img src="http://www.szza.edu.cn/uploads/allimg/170911/1-1F911104132630.jpg" alt>
          <div>
            <h3>成立国内最大校园创客信息中心</h3>
            <p>东南教科院周香焕总经理授予我校儿童阅读课程研究中</p>
            <p>心实验学校牌匾以及广东省东南教育科学研究院教师培养基地</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Solutions from "@/components/solutions.vue";
import SwiperBanner from "@/components/swiper.vue";

export default {
  name: "home",
  components: {
    Solutions,
    SwiperBanner
  }
};
</script>

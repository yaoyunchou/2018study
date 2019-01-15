<template>
     <div class="solutions">
      <div class="solutions-title">
        <h2>学校特色</h2>
        <p>校深圳市桃源居中澳实验学校为省一级学校。公办、民办与海外三类体制共存，
          <br>学校下设公办部、民办部、高中部、海外部，即“高中是龙头，海外出品牌，民办出特色，公办是基础”。
        </p>
      </div>
      <ul class="solutions-list clearfix">
        <li>
          <div class="list-no-hover" style="display: block;">
            <h3>艺术中心</h3>
            <a href="#">了解更多</a>
          </div>
          <div class="list-hover" style="display: none;">
            <p class="list-hover-first">手机、柔性键盘、智能穿戴手表、</p>
            <p>美颜自拍杆、手机壳等产品</p>
            <a href="/consumer-electronics">了解更多</a>
          </div>
        </li>

        <li>
          <div class="list-no-hover" style="display: block;">
            <h3>体育中心</h3>
            <a href="#">了解更多</a>
          </div>
          <div class="list-hover" style="display: none;">
            <p class="list-hover-first">柔性汽车中控、仪表、座椅、</p>
            <p>车窗、天窗等产品</p>
            <a href="/smart-transportation">了解更多</a>
          </div>
        </li>

        <li>
          <div class="list-no-hover" style="display: block;">
            <h3>女子素养中心</h3>
            <a href="#">了解更多</a>
          </div>
          <div class="list-hover" style="display: none;">
            <p class="list-hover-first">智能开关、遥控器、会议系统、</p>
            <p>柔性电子智能沙发等产品</p>
            <a href="/smart-home">了解更多</a>
          </div>
        </li>

        <li>
          <div class="list-no-hover">
            <h3>书画中心</h3>
            <a href="#">了解更多</a>
          </div>
          <div class="list-hover">
            <p class="list-hover-first">服饰、鞋履、配饰、</p>
            <p>箱包等产品</p>
            <a href="/sports-fashion">了解更多</a>
          </div>
        </li>

        <li>
          <div class="list-no-hover">
            <h3>语言中心</h3>
            <a href="#">了解更多</a>
          </div>
          <div class="list-hover">
            <p class="list-hover-first">智能背包、智能手写本、教育</p>
            <p>办公软件平台等产品</p>
            <a href="/school-office">了解更多</a>
          </div>
        </li>

        <li>
          <div class="list-no-hover">
            <h3>书画中心</h3>
            <a href="#">了解更多</a>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'solutions',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.solutions {
    background: #fff;
    padding: 42px 20px;
    overflow: hidden;
}

.solutions-title {
    padding-bottom: 31.5px;
    text-align: center;
}

.solutions-title img {
    display: block;
    width: 13.3%;
    margin: 0 auto 12px;
}

.solutions-title h2 {
    font-size: 24px;
    line-height: 24px;
    color: #000;
    margin-bottom: 8px;
}

.solutions-title p {
    font-size: 16px;
    line-height: 32px;
    color: #666;
    margin-bottom: 8px;
    padding: 0;
}

.solutions-title p:last-child {
    margin-bottom: 0;
}

.solutions-pc {
    display: block;
}

.solutions-list li {
    position: relative;
    float: left;
    width: 33.1%;
    height: 176px;
    text-align: center;
    margin-bottom: 4px;
    background-position: center;
    background-size: cover;
}

.solutions-list li:nth-child(3n-1) {
    margin: 0 0.30%;
}

.solutions-list li:nth-child(1) {
    background-image: url(http://www.szza.edu.cn/uploads/allimg/161226/1-161226101245323.JPG);
}

.solutions-list li:nth-child(2) {
    background-image: url(http://www.szza.edu.cn/uploads/allimg/161226/1-161226100055536.JPG);
}

.solutions-list li:nth-child(3) {
    background-image: url(http://www.szza.edu.cn/uploads/allimg/170405/1-1F405102235c4.jpg);
}

.solutions-list li:nth-child(4) {
    background-image: url(http://www.szza.edu.cn/uploads/allimg/161226/1-1612260952494R.jpg);
}

.solutions-list li:nth-child(5) {
    background-image: url(http://www.szza.edu.cn/uploads/allimg/161027/1-16102GKS0504.png);
}

.solutions-list li:nth-child(6) {
    background-image: url(http://www.szza.edu.cn/uploads/allimg/170405/1-1F405102335619.jpg);
}

.solutions-list-en li:nth-child(1) {
    background-image: url(http://royole.com/assets/images/home/siba.jpg);
}

.solutions-list-en li:nth-child(2) {
    background-image: url(http://royole.com/assets/images/home/sibb.jpg);
}

.solutions-list-en li:nth-child(3) {
    background-image: url(http://royole.com/assets/images/home/sibc.jpg);
}

.solutions-list-en li:nth-child(4) {
    background-image: url(http://royole.com/assets/images/home/sibd.jpg);
}

.solutions-list-en li:nth-child(5) {
    background-image: url(http://royole.com/assets/images/home/sibe.jpg);
}

.solutions-list-en li:nth-child(6) {
    background-image: url(http://royole.com/assets/images/home/sibf.jpg);
}

.solutions-list-en li:nth-child(6) {
    background-image: url(http://royole.com/assets/images/home/stock-photo.jpg);
}

.list-no-hover {
    margin-top: 68px;
}

.list-no-hover h3 {
    font-size: 24px;
    line-height: 24px;
    color: blue;
    margin-bottom: 8px;
}

.list-no-hover img {
    display: block;
    margin: 0 auto;
    width: 5.6%;
}

.list-no-hover-en {
    margin-top: 68px;
}

.list-no-hover-en.en {
    margin-top: 0;
}

.list-no-hover-en h3 {
    font-size: 24px;
    line-height: 24px;
    color: blue;
    margin-bottom: 8px;
}

.list-no-hover-en h3.en-title {
    line-height: 176px;
    ;
    margin-bottom: 0;
}

.list-no-hover-en img {
    display: block;
    margin: 0 auto;
    width: 5.6%;
}

.list-hover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .35);
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
}

.list-hover p {
    font-size: 14px;
    line-height: 14px;
    color: #fff;
    margin-top: 5px;
}

.list-hover .list-hover-first {
    margin-top: 6px;
}

.list-hover img {
    display: block;
    width: 5.6%;
    margin: 0 auto;
    display: none;
}

.list-hover a {
    display: block;
    width: 20%;
    height: 30px;
    line-height: 30px;
    margin: 10px auto 0;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 15px;
    color: #fff;
    font-size: 14px !important;
    ;
}

</style>

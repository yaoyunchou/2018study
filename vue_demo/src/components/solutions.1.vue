<template>
     <div class="solutions">
      <div class="solutions-title">
        <h2>6大产品总括简介</h2>
        <p>校深圳市桃源居中澳实验学校为省一级学校。公办、民办与海外三类体制共存，
          <br>学校下设公办部、民办部、高中部、海外部，即“高中是龙头，海外出品牌，民办出特色，公办是基础”。
        </p>
      </div>
      <ul class="solutions-list clearfix">
        <li>
          <div class="list-no-hover" style="display: block;">
            <h3>素质课堂简介</h3>
            <p class="desc">简介内容简介内容简介内容简介内容简介内容简介内容简介内容，简介内容，简介内容简介内容。</p>
            <a href="#are01">了解更多</a>
          </div>
        </li>

        <li>
          <div class="list-no-hover" style="display: block;">
            <h3>智慧课堂简介</h3>
            <p class="desc">简介内容简介内容简介内容简介内容简介内容简介内容简介内容，简介内容，简介内容简介内容。</p>

            <a href="#are02">了解更多</a>
          </div>
        </li>
          <li>
          <div class="list-no-hover" style="display: block;">
            <h3>智能测评简介</h3>
            <a href="#are03">了解更多</a>
          </div>
        </li>
          <li>
          <div class="list-no-hover" style="display: block;">
            <h3>课程情绪AI智能</h3>
            <p class="desc">简介内容简介内容简介内容简介内容简介内容简介内容简介内容，简介内容，简介内容简介内容。</p>

            <a href="#are04">了解更多</a>
          </div>
        </li>
          <li>
          <div class="list-no-hover" style="display: block;">
            <h3>素质课堂简介</h3>
            <p class="desc">简介内容简介内容简介内容简介内容简介内容简介内容简介内容，简介内容，简介内容简介内容。</p>

            <a href="#are05">了解更多</a>
          </div>
        </li>
         <li>
          <div class="list-no-hover" style="display: block;">
            <h3>素质课堂简介</h3>
            <p class="desc">简介内容简介内容简介内容简介内容简介内容简介内容简介内容，简介内容，简介内容简介内容。</p>

            <a href="#are06">了解更多</a>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'solutions1',
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
    background-color: #FFE500;
}

.solutions-list li:nth-child(2) {
    background-color: #51FF00;
}

.solutions-list li:nth-child(3) {
    background-color: #FF0000;
}

.solutions-list li:nth-child(4) {
   background-color: #003CFF;
}

.solutions-list li:nth-child(5) {
    background-color: #00FFAA;
}

.solutions-list li:nth-child(6) {
    background-color: #FFE500;
}

.solutions-list-en li:nth-child(1) {
    background-image: url(http://royole.com/assets/images/home/siba.jpg);
}

.list-no-hover {
    margin-top: 40px;
}

.list-no-hover h3 {
    font-size: 24px;
    line-height: 24px;
    color: #fff;
    margin-bottom: 8px;
}
.list-no-hover a{
    color:#fff;
}
.list-no-hover .desc{
    color:#fff;
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
    color: #fff;
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

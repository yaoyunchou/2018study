
<template>
  <div class="products">
    <div class="top"></div>
    <div class="Headsub-box skrollable skrollable-between" id="inddhsub">
      <div class="maxwidth">
        <p>
          <a
            href="javascript:;"
            @click="setCurrentTab(1)"
            v-bind:class="{ active: isCurrent(1) }"
          >产品特色概述</a>
          <i class="fa fa-chevron-circle-down" id="wapshow"></i>
        </p>
        <ul class="Ul">
          <li>
            <a
              href="javascript:;"
              @click="setCurrentTab(2)"
              v-bind:class="{ active: isCurrent(2) }"
            >产品规则参数</a>
          </li>
          <li>
            <a
              href="javascript:;"
              @click="setCurrentTab(3)"
              v-bind:class="{ active: isCurrent(3) }"
            >课程目录</a>
          </li>
          <li>
            <a
              href="javascript:;"
              @click="setCurrentTab(4)"
              v-bind:class="{ active: isCurrent(4) }"
            >入学要求</a>
          </li>
          <li>
            <a href="/entry" class="but-b open-when-111">立即报名</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="banner">
      <div class="banner_in">
        <h2>{{product.name}}</h2>
        <p class="desc">
          相关描述相关描述相关描述相关描述相关描述，相关描述相关描述相关描述相关描述相关描述，
          相关描述相关描述相关描述相关描述相关描述，
        </p>
      </div>
    </div>
    <div class="info" v-if="isCurrent(1)">
      <p>
        <strong style="margin: 0px; padding: 0px; box-sizing: border-box;">
          <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 24px;">心中有梦自会飞
            <br>——中澳实验学校公办部小学六年级学生毕业动员大会
          </span>
        </strong>
      </p>
      <p>
        <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F419145010451.png">
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">六年级学生班级合影</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 春雨如流苏，浸染了时刻牵绊着它的百花，让人的心情在此刻绽放。在春之使者的召唤下，3月31日下午2点30分，公办部小学六年级全体师生齐聚一堂，在音乐厅隆重召开了&quot;六年级毕业动员大会&quot;，奏响毕业之歌。</span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F4191450391S.png">
          <br>
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F419145059608.png">
        </span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">动员大会现场</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 动员大会上，每班代表纷纷上台表决心。他们时而深情款款、时而慷慨激昂，每一句话都掷地有声，听得在座的同学们热血沸腾，赢得了阵阵喝彩。在&quot;智慧学校，生命教育&quot;的办学理念的润泽下，高云金校长、教学处吕光明主任、六年级教师代表李继红、家长代表朱晓霞女士的演讲语重心长，打动了在场所有人，启迪学生们以爱学习为乐，以爱学习为荣，形成良好的学习态度和习惯，同时拥有爱心与宽容之心，将人生的长途，点缀得鲜花弥漫，朝气蓬勃。</span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F41916112SN.png">
          <br>
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F419161140203.png">
        </span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">动员大会出席领导</span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F419161210948.png">
        </span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >李雨真同学和曾琳茜同学是我们学部主持界的骄傲，她们的开场白惹得同学们回想起往日的岁月，一串串、一串串的成长的脚印。</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; &quot;一年最好是少年、一年最好是青春、一朝最好是清晨。&quot;教学处吕主任告诫我们时间老人是公平的，我们要珍惜这个毕业季。其次，吕主任对高校提出的&quot;五年规划&quot;进行了深度探索以及详细解说：&quot;爱与责任&quot;、&quot;发现每个孩子身上的亮点&quot;等是我们的育人理念；学会&quot;知善恶&quot;、&quot;懂规矩&quot;、&quot;会感恩&quot;、&quot;敢担当&quot;是我们的谆谆教导；&quot;具备一项文体爱好&quot;、&quot;精读一本名家名作&quot;、&quot;能写一笔工整字&quot;等&quot;六个一&quot;活动是促使学生个性的持续发展和学生核心素养的具体要求。最后，吕主任对六年级学生不断进步的发展势头给予了高度评价，不管是班风，还是学习成绩；不管是积极参与班级或是学校活动，还是文明礼仪都是学弟，学妹学习的榜样，我们真为拥有你们这一群阳光向上的小伙伴感到光荣。</span>
      </p>
      <p>
        <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F41916125U55.png">
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">高校长讲话</span>
      </p>
      <p>
        <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F419161239D0.png">
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">教学处吕主任讲话</span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F419161309649.png">
        </span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >教师代表李老师激情演讲</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 年级教师代表李老师的演讲激情澎湃，振奋人心。她的热情感染了在场所有人，更让学生明白了积极的学习和思考，积极的生活和成长。因为，总有一天，当光芒临身时，我们会发现我们的与众不同都是因为积极而来。</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 年级优秀学生曾琳茜分享了她精彩的成长故事，她的声音婉转动听，把同学带进了记忆中的温馨，拾起了自己曾经的懵懂、 快乐、无忧无虑的回忆，还有那阳光真诚的笑容。</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 家长代表朱晓霞女士慈爱的目光、亲切的话语，凝聚了孩子们的心。此时此刻，我们想对您们说：十几年的一日三餐，不知你是否懂得其中的付出；那逐渐增大的衣衫，不知你是否感到其中的奉献；母亲，您的的真情，点燃了我们心中的希望；父亲，您的厚爱，将是鼓起我们远航的风帆。爱我们的父母们，您们辛苦了！</span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F41916133O10.png">
        </span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >优秀学生曾琳茜分享精彩成长故事</span>
      </p>
      <p>
        <span style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;">
          <img alt src="http://www.szza.edu.cn/uploads/allimg/170419/1-1F41916134G18.png">
        </span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >家长代表朱晓霞女士的发言温暖人心</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 半亩方塘一鉴开，天光云影共徘徊。高校长的讲话把这次动员大会的精神带到至高点，让学生们明白小学阶段只是我们成长学习生活当中的一小部分，更多的考验还在未来，100天不是我们与同学告别，留恋的时候，而是我们查漏补缺，弥补我们短板，打好基础的时候，为以后升入新的中学充实能量。&quot;我相信我们六年级的同学在我们老师和家长共同的努力下，百分之百地进去我们中澳初中。&quot;高校关注每位毕业生的发展，对学生的核心素养的培养提出了要求，六年级学生应遵守纪律，有良好的行为习惯，维护学校声誉等，争做小学生的表率。最后，高校感谢了到场家长的积极参与，感谢我们六年级的班主任的不辞辛苦。</span>
      </p>
      <p>
        <span
          style="margin: 0px; padding: 0px; box-sizing: border-box; font-size: 16px;"
        >&nbsp; &nbsp; &nbsp; &nbsp; 高校的讲话，更让毕业班的学生们明确了方向，坚定了信心。</span>
      </p>
      <p>
        <br>
      </p>
    </div>
    <div class="freach" v-if="isCurrent(2)">
      <h3>课程对比</h3>
      <div class="article">
        <div class="js-titems genre-con">
          <table class="tableinfo">
            <tbody>
              <tr class="bg-blue">
                <th class="title">名称</th>
                <td class="text">A课程</td>
                <td class="text">B课程</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">讲师</th>
                <td class="text">特级教师</td>
                <td class="text">高级教师</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">有点</th>
                <td class="text">非常认真负责，课程生动有趣！</td>
                <td class="text">有丰富的课程经验，培养过大批优秀的学生，有很好的口碑</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">讲师</th>
                <td class="text">特级教师</td>
                <td class="text">高级教师</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">有点</th>
                <td class="text">非常认真负责，课程生动有趣！</td>
                <td class="text">有丰富的课程经验，培养过大批优秀的学生，有很好的口碑</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">讲师</th>
                <td class="text">特级教师</td>
                <td class="text">高级教师</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">有点</th>
                <td class="text">非常认真负责，课程生动有趣！</td>
                <td class="text">有丰富的课程经验，培养过大批优秀的学生，有很好的口碑</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">讲师</th>
                <td class="text">特级教师</td>
                <td class="text">高级教师</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">有点</th>
                <td class="text">非常认真负责，课程生动有趣！</td>
                <td class="text">有丰富的课程经验，培养过大批优秀的学生，有很好的口碑</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">讲师</th>
                <td class="text">特级教师</td>
                <td class="text">高级教师</td>
              </tr>
              <tr class="bg-blue">
                <th class="title">有点</th>
                <td class="text">非常认真负责，课程生动有趣！</td>
                <td class="text">有丰富的课程经验，培养过大批优秀的学生，有很好的口碑</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="desc" v-if="isCurrent(3)">
      <h3>课程目录</h3>
      <div class="article clearfix">
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比对比</p>

        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
      </div>
    </div>
    <div class="need" v-if="isCurrent(4)">
      <h3>入学要求</h3>
      <div class="article clearfix">
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>

        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
        <p>课程对比课程对比课程对比课程对比，课程对比课程对比课程对比。课程对比课程对比课程对比，课程对比课程对比。课程对比课程对比课程对比课程对比</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "products",
  components: {},
  data() {
    return {
      product: {
        name: "公立部"
      },
      products: [
        {
          name: "公立部"
        },
        {
          name: "民办小学"
        },
        {
          name: "民办初中"
        },
        {
          name: "普通高中"
        },
        {
          name: "海外部"
        },
        {
          name: "国际高中"
        }
      ],
      currentTab: 1
    };
  },
  methods: {
    isCurrent(index) {
      return this.currentTab === index;
    },
    setCurrentTab(index) {
      this.currentTab = index;
    }
  },
  mounted: function() {
    console.log(this.$route.params.id);
    this.product = this.products[this.$route.params.id];
  }
};
</script>
<style  scoped>
.banner {
  height: 400px;
  overflow: hidden;
  margin-bottom: 50px;
}
.banner_in {
  width: 1200px;
  margin: 0 auto;
  height: 400px;
}
.banner_in h2 {
  font-size: 42px;
  line-height: 42px;
  text-align: left;
  color: #fff;
  margin-top: 100px;
}
.banner_in .desc {
  margin-top: 30px;
  text-align: left;
  width: 500px;
  line-height: 32px;
  color: #fff;
}
.active {
  color: #2196f3 !important;
}
.maxwidth {
  max-width: 1200px;
  margin: 0 auto;
}
.top {
  height: 130px;
  background: #2196f3;
}
.info {
  width: 900px;
  margin: 30px auto 0;
}
.Headsub-box {
  width: 100%;
  height: 50px;
  line-height: 44px;
  /* border-bottom: 1px solid #eee; */
  background: rgba(48, 40, 40, 0.7);
  /* background: #f4f4f4; */
  position: absolute;
  /*top: 80px!important; */
  top: 80px;
  left: 0;
  z-index: 99;
  min-width: 900px;
}
.Headsub-box ul {
  float: right;
}
@media screen and (min-width: 900px) {
  .Headsub-box ul li {
    float: left;
  }
}
.Headsub-box ul,
.Headsub-box ul li {
  line-height: 52px;
  font-size: 14px;
}
.Headsub-box ul li a {
  color: #fff;
  font-size: 14px;
  padding: 0px 12px;
}
.Headsub-box ul li a:hover {
  color: #9ea7c4;
}
.Headsub-box ul li:last-child a {
  border: 0;
  padding-right: 0;
}
.Headsub-box ul li.active a {
  color: #9ea7c4;
}
.Headsub-box p {
  float: left;
  color: #fff;
  font-size: 14px;
  line-height: 50px;
}
.Headsub-box p > a {
  display: inline;
  color: #fff;
  font-size: 16px;
}
.Headsub-box p > a:hover,
.Headsub-box p > a.active {
  color: #9ea7c4;
}
.but-b {
  background-color: #27adef;
  color: #fff;
}
.but-b:hover {
  background-color: #4fc5ff;
}
.Headsub-box ul li a.but-b,
.Headsub-box p a.but-b,
.jon_text .text > a.but-b {
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 3px;
  overflow: hidden;
}

.freach h3,.desc h3,.need h3 {
  font-size: 24px;
  line-height: 42px;
  text-align: center;
}
.article {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  margin-top:20px;
  margin-bottom: 50px;
}
.article p{
  text-indent: 2em;
  line-height: 32px;
}
.freach .article_l,
.freach .article_r {
  width: 45%;
  float: left;
  border: 1px solid #ddd;
}

.article .tableinfo {
  width: 100%;
  line-height: 50px;
}

.article .tableinfo th {
  border-top: 1px solid #ccd3e4;
  text-align: right;
  background-color: #fafbfc;
      width: 180px;
    padding-right: 10px;
}
.article .tableinfo .text{
  text-align: center;
} 
.article .tableinfo td {
  border-left: 1px solid #ccd3e4;
  border-top: 1px solid #ccd3e4;
}

.article .tableinfo td.border-t-no {
  border-top: 0 none;
}

.article .tableinfo .redtitle {
  height: 52px;
  font-size: 14px;
  font-weight: 700;
  color: #d60000;
}

.article .tableinfo .name {
  background-color: #fafbfc;
  line-height: 20px;
  font-weight: 700;
}

.article .border-b-no {
  border-bottom: none;
}
.article .genre-con {
  border-left: 1px solid #ccd3e4;
  border-right: 1px solid #ccd3e4;
  border-bottom: 1px solid #ccd3e4;
}
</style>

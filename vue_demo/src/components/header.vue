<template>
  <header @mouseenter="navHoverShow()" @click="navHoverShow()" @mouseleave="navHoverHide()">

    <transition name="fade">
      <nav class="nav-no-hover" v-if="navNoHoverShowTag">
        <div class="nav-left">
          <!--电脑端需要显示的内容-->
          <p class="pc-navs">
            <a>
              <img class="logo-img" src="@/assets/images/rheader/logo.png">
            </a>
            <a href="/products"><span>首页</span>  </a>
            <a>
              <span>学校产品</span>
            </a>
            <a>
              <span>我要报名</span>
            </a>
          </p>
        </div>
        <!-- <div class="nav-right">
          <a href="/product-list">
            <button class="mall-btn">{{$t("navs.mall")}}</button>
          </a>
          <a href="/account">
            <img class="nav-user" :src="navUserUrl">
          </a>
        </div> -->
      </nav>
    </transition>

    <!-- 在PC端 hover 状态下 显示相关展示区域 -->
    <transition name="fade">
      <nav class="nav-hover" v-if="navHoverShowTag" style="border-bottom:1px solid #e4e4e4;">
        <div class="nav-left">
          <a href="/" class="logo-img-a">
            <img class="logo-img" src="@/assets/images/rheader/logo_blue.png">
          </a>
          <a @mouseenter="navBodyShow(4)" href="/products"><span>首页</span>  </a>
          <a @mouseenter="navBodyShow(1)" @click="navBodyClickShow(1)">
            <span :class="navHoverChosed[1]">学校产品</span>
          </a>
          <a @mouseenter="navBodyShow(3)" @click="navBodyClickShow(3)">
            <span :class="navHoverChosed[3]">我要报名</span>
          </a>
        </div>
        <!-- <div class="nav-right">
          <a href="/product-list">
            <button class="mall-btn">{{$t("navs.mall")}}</button>
          </a>
          <a href="/account">
            <img @mouseenter="navUserMouseEnter()" @mouseleave="navUserMouseLeave()" class="nav-user" :src="navUserHoverUrl">
          </a>
        </div> -->
      </nav>
    </transition>

   
  <transition name="fade">
      <div class="nav-model" v-if="modelShowTag"></div>
    </transition>
    <div class="nav-body nav-solutions" v-if="navSolutionsShowTag">
      <a href="/product/0">
        <dl v-if="soutionsChilds[0]" class="fl-first soa">
          <dd>
            <span>公立部</span>
          </dd>
        </dl>
      </a>
      <a href="/product/1">
        <dl v-if="soutionsChilds[1]" class="sob">
          <dd>
            <span>民办小学</span>
          </dd>
        </dl>
      </a>
      <a href="//product/2">
        <dl v-if="soutionsChilds[2]" class="soc">
          <dd>
            <span>民办初中</span>
          </dd>
        </dl>
      </a>
      <a href="/product/3">
        <dl v-if="soutionsChilds[3]" class="sod">
          <dd>
            <span>普通高中</span>
          </dd>
        </dl>
      </a>
      <a href="/product/4">
        <dl v-if="soutionsChilds[4]" class="soe">
          <dd>
            <span>海外部</span>
          </dd>
        </dl>
      </a>
      <a href="/product/5">
        <dl v-if="soutionsChilds[5]" class="sof">
          <dd>
            <span>国际高中</span>
          </dd>
        </dl>
      </a>
    </div>

    <!-- <div class="nav-flex" v-if="navFlexShowTag">
      <p>
        <a href="/solutions">{{$t("navs.Solutions")}}</a>
      </p>
      <p>
        <a href="/flexible-display">{{$t("navs.FlexDisplay")}}</a>
      </p>
      <p>
        <a href="/flexible-sensor">{{$t("navs.FlexSensor")}}</a>
      </p>
    </div> -->

    <div class="nav-supports" v-if="navSupportsShowTag">
      <p>
        <a href="/instructions">招生须知</a>
      </p>
      <p>
        <a href="/contact-us">联系我们</a>
      </p>
      <p>
        <a href="/entry">报名入口</a>
      </p>
    </div>

  </header>
</template>

<script>
import navUserWhite from "@/assets/images/rheader/profile_white.png";
import navUserGray from "@/assets/images/rheader/profile_gray.png";
import navUserBlue from "@/assets/images/rheader/profile_blue.png";

//如果涉及到异步的数据读取使用，我们引入当前插件
import asyncDataAPI from "@/middle/AsyncDataAPI.js";

export default {
  name: "RoyoleHeader",
  data() {
    return {
      //鼠标悬浮上header 则显示 nav hover 白底新的视觉内容
      navNoHoverShowTag: true,
      navHoverShowTag: false,
      //nav hover 鼠标悬停 用户头像部分，根据用户状态来进行切换对应状态
      navUserUrl: navUserWhite,
      navUserHoverUrl: navUserGray,
      //初始化三个hover导航的显示状态
      navHoverChosed: ["", "", "", ""],
      //是否展开nav body 的model幕布
      modelShowTag: false,
      //产品相关 二级导航展开状态，主面板及子栏目状态
      navProductsShowTag: false,
      productsChilds: [false, false, false, false, false, false, false, false],
      //中文版下 解决方案 二级导航展开状态，主面板及子栏目状态
      navSolutionsShowTag: false,
      soutionsChilds: [false, false, false, false, false, false, false, false],
      //英文版下 flex 相关二级导航展开状态
      navFlexShowTag: false,
      //产品支持 二级导航展开状态
      navSupportsShowTag: false,
      //移动端列表展开状态
      listOpenTag: false,
      //设备宽度
      deviceWidth: 0,
      //设置当前页面域名
      productsList: {},
      loginOK: false
    };
  },
  computed: {
    //判断是否是移动设备，移动设备上没有
    isMobile() {
      //if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      if (this.deviceWidth < 900) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.deviceWidth = document.body.clientWidth;
    //获取头像并填充
    asyncDataAPI.login
      .getUser()
      .then(data => {
        let url = data.data.data.image;
        if (url != "") {
          this.navUserUrl = url;
          this.navUserHoverUrl = url;
          this.loginOK = true;
        } else if (this.deviceWidth < 900) {
          this.navUserUrl = navUserGray;
          this.loginOK = false;
        } else {
          this.navUserUrl = navUserWhite;
          this.loginOK = false;
        }
      })
      .catch(err => {
        if (this.deviceWidth < 900) {
          this.navUserUrl = navUserGray;
        } else {
          this.navUserUrl = navUserWhite;
        }
        this.loginOK = false;
      });
    if (this.deviceWidth < 900) {
      this.navUserUrl = navUserGray;
      this.loginOK = false;
    } else {
      this.navUserUrl = navUserWhite;
      this.loginOK = false;
    }

    //挂载products-list
    asyncDataAPI.nav
      .getProductsList()
      .then(data => {
        if (data.status == "200") {
          this.productsList = data.data.data;
        } else {
          //console.log(data.message);
        }
      })
      .catch(err => {
        //console.log("访问产品列表链接信息失败："+err);
      });
  },
  updated() {},
  methods: {
    navHoverShow() {
      if (this.deviceWidth < 900) return;
      this.navNoHoverShowTag = false;
      this.navHoverShowTag = true;
    },
    navInit() {
      //移除则清除对应的蓝色滑动条状态
      this.navHoverChosed = ["", "", "", ""];
      this.navHoverChosed = Object.assign({}, this.navHoverChosed);
      //初始化显示状态关闭幕布及所有二级导航
      this.modelShowTag = false;
      this.navProductsShowTag = false;
      this.productsChilds = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.navSolutionsShowTag = false;
      this.soutionsChilds = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.navFlexShowTag = false;
      this.navSupportsShowTag = false;
    },
    navHoverHide() {
      if (this.deviceWidth < 900) return;
      this.navNoHoverShowTag = true;
      this.navHoverShowTag = false;
      this.navInit();
    },
    navHide() {
      if (this.deviceWidth < 900) {
        this.listOpenTag = false;
        this.navHoverShowTag = false;
        this.navInit();
      } else {
        this.navHoverHide();
      }
    },
    //PC端下，鼠标划入则显示对应的二级导航相关
    navBodyShow(index) {
      if (this.deviceWidth < 900) return;
      //动画展示导航下蓝色滑动条
      this.navHoverChosed = ["", "", "", ""];
      this.navHoverChosed[index] = "chosed";
      this.navHoverChosed = Object.assign({}, this.navHoverChosed);
      //根据相应值动态的展示对应的二级导航
      this.modelShowTag = false;
      this.navProductsShowTag = false;
      this.productsChilds = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.navSolutionsShowTag = false;
      this.soutionsChilds = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.navFlexShowTag = false;
      this.navSupportsShowTag = false;
      switch (index) {
        case 0:
          this.modelShowTag = true;
          this.navProductsShowTag = true;
          let self = this;
          for (let i = 0; i < this.productsChilds.length; i++) {
            let ster = setTimeout(function() {
              self.productsChilds[i] = true;
              self.productsChilds = Object.assign({}, self.productsChilds);
            }, i * 50);
          }
          break;
        case 1:
          this.modelShowTag = true;
          this.navSolutionsShowTag = true;
          let that = this;
          for (let i = 0; i < this.soutionsChilds.length; i++) {
            let ster = setTimeout(function() {
              that.soutionsChilds[i] = true;
              that.soutionsChilds = Object.assign({}, that.soutionsChilds);
            }, i * 50);
          }
          break;
        case 2:
          this.navFlexShowTag = true;
          break;
        case 3:
          this.navSupportsShowTag = true;
          break;
      }
    },
    //鼠标点击 PC端导航到对应页面，移动端显示对应的二级页面
    navBodyClickShow(index) {
      if (this.deviceWidth < 900) {
        //动画展示导航下蓝色滑动条
        this.navHoverChosed = ["", "", "", ""];
        this.navHoverChosed[index] = "chosed";
        this.navHoverChosed = Object.assign({}, this.navHoverChosed);
        //根据相应值动态的展示对应的二级导航
        this.modelShowTag = false;
        this.navProductsShowTag = false;
        this.productsChilds = [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ];
        this.navSolutionsShowTag = false;
        this.soutionsChilds = [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ];
        this.navFlexShowTag = false;
        this.navSupportsShowTag = false;
        switch (index) {
          case 0:
            this.modelShowTag = true;
            this.navProductsShowTag = true;
            for (let i = 0; i < this.productsChilds.length; i++) {
              this.productsChilds[i] = true;
            }
            this.productsChilds = Object.assign({}, this.productsChilds);
            break;
          case 1:
            this.modelShowTag = true;
            this.navSolutionsShowTag = true;
            for (let i = 0; i < this.soutionsChilds.length; i++) {
              this.soutionsChilds[i] = true;
            }
            this.soutionsChilds = Object.assign({}, this.soutionsChilds);
            break;
          case 2:
            this.modelShowTag = true;
            this.navFlexShowTag = true;
            break;
          case 3:
            this.modelShowTag = true;
            this.navSupportsShowTag = true;
            break;
        }
      } else {
        switch (index) {
          case 0:
            window.location.href = this.$url + "/product-list";
            break;
          case 1:
            window.location.href = this.$url + "/solutions";
            break;
          default:
            break;
        }
      }
    },
    //悬停鼠标到顶部用户位置后显示对应的头像或蓝色
    navUserMouseEnter() {
      if (!this.loginOK) {
        this.navUserHoverUrl = navUserBlue;
      }
    },
    navUserMouseLeave() {
      if (!this.loginOK) {
        this.navUserHoverUrl = navUserGray;
      }
    },
    //移动端相应展开逻辑
    listOpen() {
      if (this.deviceWidth < 900) {
        document.body.style.overflowY = "hidden";
      }
      this.navHoverShowTag = true;
      this.modelShowTag = true;
      this.listOpenTag = true;
      //动画展示导航下蓝色滑动条
      this.navHoverChosed = ["chosed", "", "", ""];
      this.navHoverChosed = Object.assign({}, this.navHoverChosed);
      this.navProductsShowTag = true;
      let self = this;
      for (let i = 0; i < this.productsChilds.length; i++) {
        let ster = setTimeout(function() {
          self.productsChilds[i] = true;
          self.productsChilds = Object.assign({}, self.productsChilds);
        }, i * 50);
      }
    },
    listClose() {
      document.body.style.overflowY = "auto";
      this.navHoverShowTag = false;
      this.modelShowTag = false;
      this.listOpenTag = false;
      this.navHoverChosed = ["", "", "", ""];
      this.navHoverChosed = Object.assign({}, this.navHoverChosed);
      this.navProductsShowTag = false;
      this.productsChilds = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.navSolutionsShowTag = false;
      this.soutionsChilds = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      this.navFlexShowTag = false;
      this.navSupportsShowTag = false;
    }
  }
};
</script>
<style scoped src="@/assets/css/r-header/smpc.css"></style>
<style scoped src="@/assets/css/r-header/mobile.css"></style>
<style scoped src="@/assets/css/r-header/ipad.css"></style>
<style scoped src="@/assets/css/r-header/bgpc.css"></style>

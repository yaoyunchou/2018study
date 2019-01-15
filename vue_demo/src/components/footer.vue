<template>
  <footer>
    <div class="targets">
      <div class="targets-left">
        <dl class="targets-dl">
          <dt>产品中心
            <i class="footer-nav-icon" :class="icondirection[0]"></i>
          </dt>
          <transition name="slider">
            <div>
              <dd>
                <a href="/products">产品首页</a>
              </dd>
              <dd>
                <a href="/product/0">公立部</a>
              </dd>
              <dd>
                <a href="/product/1">民办小学</a>
              </dd>
              <dd>
                <a href="/product/2">民办初中</a>
              </dd>
              <dd>
                <a href="/product/3">普通初中</a>
              </dd>
              <dd>
                <a href="/product/4">海外部</a>
              </dd>
            </div>

            <dd>
              <a href="/product/5">国际高中</a>
            </dd>
          </transition>
        </dl>

        <dl class="targets-dl">
          <dt @click="footerChosed(1)">我要报名
            <i class="footer-nav-icon" :class="icondirection[1]"></i>
          </dt>
          <transition name="slider">
            <div>
              <dd>
                <a href="/instructions">招生须知</a>
              </dd>
              <dd>
                <a href="/contact-us">联系我们</a>
              </dd>
              <dd>
                <a href="/entry">报名入口</a>
              </dd>
            </div>
          </transition>
        </dl>
      </div>

      <div class="targets-right">
        <a class="enspan" href="tel://4009993333">
          <b class="enspan">0755-27451820</b>
        </a>
        <p class="service-time">{{$t("navs.F1t5")}} 9:00-21:00</p>
        <p class="service-time">{{$t("navs.F6t7")}} 9:00-18:00</p>
      </div>
    </div>

    <div class="copright">
      <p class="paddingtop5">深圳市桃源居中澳实验学校 Copyright © 2016 enbi.ALL Rights Reserved}</p>
    </div>
  </footer>
</template>

<script>
import asyncDataAPI from "@/middle/AsyncDataAPI.js";
export default {
  name: "RFooter",
  data() {
    return {
      //手机端底部导航，右侧指示性按钮方向控制数组
      icondirection: [
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right"
      ],
      //底部导航 子栏目是否展示状态控制数组
      fshow: [false, false, false, false, false, false, false],
      //根据屏幕大小，判断底部的语言选择按钮是否显示
      langBoxShowTag: false,
      //是否显示邮箱弹窗
      emailShowTag: false,
      //是否显示二维码弹窗
      codeShowTag: false,
      //发送邮件相关绑定字段
      user_email: "",
      //默认选中
      selected: {
        0: { val: "1", email: "customer" },
        1: { val: "1", email: "support" }
      },
      user_question_info: "",
      //邮箱input弹窗校验样式
      isInputError: false,
      //邮箱input弹窗摇动
      isInputErrorShake: false,
      //邮箱textarea弹窗校验样式
      isTextError: false,
      //邮箱textarea弹窗摇动
      isTextErrorShake: false,
      //邮箱正则
      emailReg: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
      //邮件发送成功通知
      sendSuccess: false,
      //邮件发送成功通知
      sendError: false,
      //遍历select选项框
      options: {
        0: [
          { value: 1, text: "Royole Moon 4G版", email: "customer" },
          { value: 2, text: "Royole Moon", email: "customer" },
          { value: 3, text: "Royole Moon Lite", email: "customer" },
          { value: 4, text: "Royole-X", email: "customer" },
          { value: 5, text: "RoWrite柔记", email: "customer" },
          { value: 6, text: "柔性显示屏", email: "media" },
          { value: 7, text: "柔性传感器", email: "sales" },
          { value: 8, text: "媒体", email: "channel" },
          { value: 9, text: "市场", email: "customer" },
          { value: 10, text: "代理商招募", email: "customer" },
          { value: 11, text: "其他", email: "customer" }
        ],
        1: [
          { value: 1, text: "Moon", email: "support" },
          { value: 2, text: "Royole-X", email: "support" },
          { value: 3, text: "Flexible Display", email: "support" },
          { value: 4, text: "Flexible Sensor", email: "support" },
          { value: 5, text: "Media", email: "media" },
          { value: 6, text: "Market", email: "sales" },
          { value: 7, text: "Channel recruitment", email: "channel" },
          { value: 8, text: "Others", email: "support" }
        ]
      },
      //后台字段
      type: "",
      problem_type: "",
      productsList: {}
    };
  },
  computed: {},
  mounted() {
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
    //根据屏幕大小，来判断底部显示模式，这个部分无法使用媒体查询进行适配
    if (document.body.clientWidth > 999) {
      this.icondirection = ["", "", "", "", "", ""];
      this.fshow = [true, true, true, true, true, true, true];
    } else {
      this.icondirection = [
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right",
        "icon-angle-right"
      ];
      this.fshow = [false, false, false, false, false, false, false];
    }
    //根据屏幕resize，来判断底部显示模式，这个部分无法使用媒体查询进行适配
    let self = this;
    let recalc = function() {
      if (document.body.clientWidth > 999) {
        self.icondirection = ["", "", "", "", "", ""];
        self.fshow = [true, true, true, true, true, true, true];
      } else {
        self.icondirection = [
          "icon-angle-right",
          "icon-angle-right",
          "icon-angle-right",
          "icon-angle-right",
          "icon-angle-right",
          "icon-angle-right",
          "icon-angle-right"
        ];
        self.fshow = [false, false, false, false, false, false, false];
      }
    };
    if (window.orientationchange) {
      var resizeEvt = "orientationchange";
    } else {
      var resizeEvt = "resize";
    }
    window.addEventListener(resizeEvt, recalc, false);
  },
  updated() {},
  watch: {},
  methods: {
    //底部栏目点击，PC端进行跳转，M端进行展开或者收缩
    footerChosed(index) {
      if (document.body.clientWidth < 1000) {
        if (this.icondirection[index] == "") {
          return;
        }
        if (this.icondirection[index] == "icon-angle-right") {
          this.icondirection[index] = "icon-angle-down";
        } else {
          this.icondirection[index] = "icon-angle-right";
        }
        this.fshow[index] = !this.fshow[index];
        this.icondirection = Object.assign({}, this.icondirection);
        this.fshow = Object.assign({}, this.fshow);
      }
    },
    //邮箱弹窗打开
    emailBoxShow() {
      document.body.style.overflowY = "hidden";
      this.emailShowTag = true;
    },
    emailBoxHide() {
      document.body.style.overflowY = "auto";
      //关闭弹窗
      this.emailShowTag = false;
      //弹窗关闭清除所有输入
      this.user_email = "";
      this.user_question_info = "";
      //输入框摇动、样式清除
      this.isInputError = false;
      this.isInputErrorShake = false;
      this.isTextError = false;
      this.isTextErrorShake = false;
      //按钮提示信息清除
      this.sendSuccess = false;
      this.sendError = false;
    },
    //输入框验证
    checkInput() {
      if (!this.emailReg.test(this.user_email)) {
        //输入框错误时摇动、变红样式
        this.isInputError = true;
        this.isInputErrorShake = true;
        setTimeout(() => {
          this.isInputErrorShake = false;
        }, 500);
        //定义是否可以发送接口
        return false;
      } else {
        this.isInputError = false;
        //定义是否可以发送接口
        return true;
      }
    },
    //文本框验证
    checkText() {
      if (this.user_question_info == "") {
        //输入框错误时摇动、变红样式
        this.isTextError = true;
        this.isTextErrorShake = true;
        setTimeout(() => {
          this.isTextErrorShake = false;
        }, 500);
        //定义是否可以发送接口
        return false;
      } else {
        this.isTextError = false;
        //定义是否可以发送接口
        return true;
      }
    },
    //二维码弹窗打开
    codeBoxShow() {
      document.body.style.overflowY = "hidden";
      this.codeShowTag = true;
    },
    codeBoxHide() {
      document.body.style.overflowY = "auto";
      this.codeShowTag = false;
    },

    //语言弹窗打开
    langBoxOpen() {
      this.langBoxShowTag = true;
    },
    langBoxClose() {
      this.langBoxShowTag = false;
    },
    //语言切换动作方法，关闭语言弹出，设置语言状态到本地，通知后台语言变化
    langChose(lang) {
      this.langBoxShowTag = false;
      localStorage.setItem("lang", lang);
      asyncDataAPI.nav
        .getLanguage({
          code: lang
        })
        .then(data => {})
        .catch(err => {});
      let srcArr = window.location.href.split("/");
      let src = srcArr[srcArr.length - 1].split("?")[0].split("#")[0];

      if (lang == "nl" && src == "join-us") {
        window.location.href = "/introduction";
      }

      switch (src) {
        case "consumer-electronics":
        case "smart-transportation":
        case "smart-home":
        case "sports-fashion":
        case "school-office":
        case "solutions-robotics":
        case "solutions-others":
        case "flexible-sensor-products-and-solutions":
        case "fs-fd-in-vehicle-solutions":
        case "translucent-cordless-phone":
        case "auto-retracting-transparent-keyboard":
        case "smart-backpack":
        case "colorful-drinking-glass":
        case "smart-sensor-desk-lamp":
        case "intelligent-home-lighting-switch":
          window.location.href = "/solutions";
          break;
        case "dealer":
        case "retail_store":
        case "shopping-directory":
        case "customer-service":
          window.location.href = "/";
          break;
        case "Coverage":
          window.location.href = "/media-coverage";
          break;
        case "moon-operation-guide":
          window.location.href = "/support";
        default:
          window.location.reload();
          break;
      }
    },
    //发送邮件功能实现
    sendemail() {
      //初始化邮件按钮信息通知
      this.sendSuccess = false;
      this.type = this.selected[0].val;
      this.problem_type = this.selected[0].email + "@royole.com";
      //这里进行字段验证，验证规范和之前的验证规范一致，验证完毕后进行ajax提交
      if (this.checkInput() && this.checkText()) {
        asyncDataAPI.email
          .PostAllInfo({
            email: this.user_email,
            problem_description: this.user_question_info,
            type: this.type,
            problem_type: this.problem_type
          })
          .then(data => {
            if (data.status == "200") {
              //回调成功邮件按钮信息通知
              this.sendSuccess = true;
            } else {
              this.sendError = true;
            }
          });
      }
    }
  }
};
</script>
<style scoped src="@/assets/css/r-footer/smpc.css"></style>
<style scoped src="@/assets/css/r-footer/mobile.css"></style>
<style scoped src="@/assets/css/r-footer/ipad.css"></style>
<style scoped src="@/assets/css/r-footer/bgpc.css"></style>

<template>
  <div class="contactus">
    <div class="top"></div>
    <div class="office clearfix en-lang">
      <div class="zh">
        <div class="zh-office">
          <h3 class="title">深圳桃源居中澳实验学校</h3>
          <div class="paic-box">
            <img src="http://www.szza.edu.cn/uploads/allimg/160603/1-160603152422X6.jpg" alt>
          </div>
          <div class="address-box clearfix">
            <div class="contact">
              <h4>{{$t("contact.Telephone")}}:</h4>
              <p>0755-27451820 0755-27451431</p>
              <h4>{{$t("contact.Address")}}:</h4>
              <p>深圳市宝安区西乡前进二路桃源居旁边</p>
              <h4>邮编:</h4>
              <p>518126</p>
              <h4>驾车路线：</h4>
              <ul class="email-list">
                <li>
                  <span>Ａ：广深高速从宝安出口下高速，直行至第一个红绿灯右转，直行往前进二路方向，第三个红绿灯右转即可到达我校。</span>
                </li>
                <li>
                  <span>Ｂ：机荷高速往机场方向，从鹤洲下高速，往鹤洲方向走，顺着高速桥底在红绿灯处右转，直行至下一个红绿灯处左转（人人乐门口），前行至第二个红绿灯左转即到。</span>
                </li>
                <li>
                  <span>Ｃ：107国道朝机场方向，过固戌后留意凤凰岗指示牌，进辅助道前行100米右转过红绿灯即到。</span>
                </li>
              </ul>
              <h4>地铁+公交线路1：</h4>
              <ul class="email-list">
                <li>
                  <span>Ａ方案：乘坐地铁1号线到坪州站下车，往B出口公交站乘坐M210路公交到到桃源居下车即到</span>
                </li>
                <li>
                  <span>Ｂ方案：乘坐地铁1号线到固戌站下车，坐D出口坐的士到清华实验学校（约十分钟车程）</span>
                </li>
              </ul>
              <h4>地铁+公交线路2：</h4>
              <ul class="email-list">
                <li>
                  <span> 乘坐地铁2号线到灵芝站下车，转乘公交车到桃源居下车即可</span>
                </li>
              </ul>
               <h4>公交乘车路线：</h4>
              <ul class="email-list">
                <li>
                  <span> 395路、b833路、 M349路、 M350路、 M355路、 M358路、727路、794路、M210路、319路、707路、311路、349路</span>
                </li>
              </ul>
            </div>
            <div class="map-box">
              <div
                class="map"
                id="map"
                style="width:100%;height:390px;border:#ccc solid 1px;font-size:12px;"
              ></div>
              <span>
                <a href="http://dwz.cn/royole" target="_blank">点击查看大图/驾车路线</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <r-bar-up></r-bar-up>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      bMap: null,
      marker: [
        {
          title: "深圳桃源居中澳实验学校",
          content: "广东省深圳市宝安区西乡前进二路桃源居旁边",
          point: "113.871947|22.616256",
          isOpen: 1,
          icon: {
            w: 21,
            h: 21,
            l: 0,
            t: 0,
            x: 6,
            lb: 5
          }
        }
      ]
    };
  },
  computed: {},
  mounted() {
    window.GetMap = function() {
      this.creatBingMap();
    }.bind(this);
    window.createBMap = function() {
      this.creatMap();
    }.bind(this);
    this.loadScripts();
    this.loadBingMapScripts();
  },
  updated() {},
  methods: {
    loadScripts() {
      let script = document.createElement("script");
      script.src =
        "https://api.map.baidu.com/api?v=2.0&ak=HCWOmpfpSPkAvcYGY9LykkOH&callback=createBMap";
      document.body.appendChild(script);
    },
    loadBingMapScripts() {
      let script = document.createElement("script");
      script.src =
        "https://cn.bing.com/mapspreview/sdk/mapcontrol?branch=release&callback=GetMap";
      document.body.appendChild(script);
    },
    creatBingMap() {
      new BingMap({
        lat: 37.4698625183,
        lng: -121.9362366199,
        domId: "USMap",
        title: "Royole Corporation In US",
        description: "48025 Fremont Boulevard, Fremont California"
      }).loadMap();
    },
    creatMap() {
      this.bMap = new BMap.Map("map");
      var point = new BMap.Point(113.949877, 22.53163);
      this.bMap.centerAndZoom(point, 19);
      this.bMap.enableDragging();
      this.bMap.enableScrollWheelZoom();
      this.bMap.enableDoubleClickZoom();
      this.bMap.enableKeyboard();
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      this.bMap.addControl(ctrl_nav);
      var ctrl_sca = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      });
      this.bMap.addControl(ctrl_sca);
      this.addMarker();
    },
    addMarker() {
      var that = this;
      for (var i = 0; i < this.marker.length; i++) {
        var json = this.marker[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0, p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point, {
          icon: iconImg
        });
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title, {
          offset: new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
        });
        marker.setLabel(label);
        this.bMap.addOverlay(marker);
        label.setStyle({
          borderColor: "#808080",
          color: "#333",
          cursor: "pointer"
        });

        (function() {
          var index = i;
          var _iw = createInfoWindow(i);
          var _marker = marker;
          _marker.addEventListener("click", function() {
            this.openInfoWindow(_iw);
          });
          _iw.addEventListener("open", function() {
            _marker.getLabel().hide();
          });
          _iw.addEventListener("close", function() {
            _marker.getLabel().show();
          });
          label.addEventListener("click", function() {
            _marker.openInfoWindow(_iw);
          });
          if (!!json.isOpen) {
            label.hide();
            _marker.openInfoWindow(_iw);
          }
        })();
      }
      function createInfoWindow(i) {
        var json = that.marker[i];
        var iw = new BMap.InfoWindow(
          "<b class='iw_poi_title' title='" +
            json.title +
            "'>" +
            json.title +
            "</b><div class='iw_poi_content' style='width:310px;'>" +
            json.content +
            "</div>"
        );
        return iw;
      }

      function createIcon(json) {
        var icon = new BMap.Icon(
          "http://map.baidu.com/image/us_cursor.gif",
          new BMap.Size(json.w, json.h),
          {
            imageOffset: new BMap.Size(-json.l, -json.t),
            infoWindowOffset: new BMap.Size(json.lb + 5, 1),
            offset: new BMap.Size(json.x, json.h)
          }
        );
        return icon;
      }
    }
  }
};
</script>

<style scoped src="@/assets/css/contactus/mobile.css"></style>
<style scoped src="@/assets/css/contactus/ipad.css"></style>
<style scoped src="@/assets/css/contactus/smpc.css"></style>
<style scoped src="@/assets/css/contactus/bgpc.css"></style>
<style>
.top {
  height: 80px;
  background: #2196f3;
}
</style>

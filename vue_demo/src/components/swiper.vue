<template>
  <div class="swiper-banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for=" (item,key) in swiperSlides" :key="key">
        <img
          data-src="img/picture-1.jpg"
          :data-srcset="item.url"
          class="swiper-lazy"
        >
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <img src="https://www.royole.com/assets/images/home/uper.png" class="uper-img" alt>
    <img src="https://www.royole.com/assets/images/home/bottom_arrow_normal.png" class="bottom-img">
  </div>
</template>
 
<script>
export default {
  name: "swiperBanner",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        speed: 1000,
        allowTouchMove: false,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3
        },
        centeredSlides: true,
        //slidesOffsetBefore: 40,
        loop: true,
        slidesPerView: "auto",
        on: {
          slideChangeTransitionEnd: function() {
            this.slides
              .transition(this.params.autoplay.delay + this.params.speed)
              .transform("translate3d(-20px, 0, 0)");
          },
          slideChangeTransitionStart: function() {
            this.slides
              .transition(this.params.speed)
              .transform("translate3d(0, 0, 0)");
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function(index, className) {
            return '<div class="' + className + '"><i></i></div>';
          }
        }
      },
      swiperSlides: [
        {
          url:'http://www.szza.edu.cn/uploads/flash/1604191123213731.jpg'
        },
        {
          url: "http://www.szza.edu.cn/uploads/flash/1607221823394578.jpg"
        },
        {
          url:'http://www.szza.edu.cn/uploads/flash/1604191150034564.jpg'
        },
        {
          url:'http://www.szza.edu.cn/uploads/flash/1604191148564727.jpg'
        },
        {
          url:'http://www.szza.edu.cn/uploads/flash/1604191149216867.jpg'
        },
        {
          url:'http://www.szza.edu.cn/uploads/flash/1604191149093124.jpg'
        },
        {
          url:'http://www.szza.edu.cn/uploads/flash/1604191149474001.jpg'
        }
      ]
    };
  },
  mounted() {}
};
</script>
 <style lang="scss">
.swiper-banner {
  position: relative;
  h2 {
    font-family: -webkit-pictograph;
    font-size: 30px;
    font-style: italic;
    text-align: center;
  }
  .swiper-slide {
    //height: 100vh;
    height: 592px;
    width: 100%;
    transition-timing-function: linear;
  }
  .swiper-slide img {
    width: 100%;
    border-radius: 4px;
  }
  .swiper-slide .title {
    position: absolute;
    transform: rotate(90deg);
    transform-origin: left top;
    left: -3px;
    font-size: 11px;
    color: rgb(102, 102, 102);
  }
  .swiper-pagination-bullet {
    opacity: 1;
    width: 40px;
    height: 6px;
    margin: 0 10px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0;
    position: relative;
    outline: none;
    text-align: left;
  }
  .swiper-pagination-bullet span {
    width: 3px;
    height: 3px;
    background: #ccc;
    display: block;
    border-radius: 50%;
    margin-top: 6px;
    margin-left: 6px;
  }
  .swiper-pagination-bullet i {
    background: blue;
    height: 6px;
    width: 0px;
    display: block;
    z-index: 3;
    transition-timing-function: linear;
  }

  .swiper-pagination-bullet-active i {
    animation: middle 6s;
  }

  @keyframes middle {
    0% {
      width: 0;
    } /*1091*/

    100% {
      width: 40px;
    } /*0913*/
  }
  .uper-img {
    position: absolute;
    bottom: 0;
    height: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9;
    cursor: pointer;
  }
  .bottom-img {
    position: absolute;
    bottom: 0px;
    width: 14px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9;
    cursor: pointer;
    animation-name: myanimate;
    animation-duration: 1.8s;
    animation-timing-function: ease-in-out;
    animation-delay: 0;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
  }
  @keyframes myanimate {
    0% {
      bottom: 4px;
    }
    50% {
      bottom: 12px;
    }
    100% {
      bottom: 4px;
    }
  }
  .swiper-pagination {
    bottom: 50px !important;
  }
}

@media only screen and (max-width: 1200px) {
  .swiper-banner .swiper-slide {
    width: 770px;
  }
}
@media only screen and (max-width: 980px) {
  .swiper-banner .swiper-slide {
    width: 471px;
  }
}
@media only screen and (max-height: 480px) {
  .swiper-banner .swiper-slide {
    width: 471px;
  }
}
</style>
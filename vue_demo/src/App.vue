<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import SwiperBanner from "@/components/swiper.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header
  }
};
</script>
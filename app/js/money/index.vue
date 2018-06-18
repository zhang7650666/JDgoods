<template lang="html">
    <div>
        <v-header></v-header>
        <v-swiper></v-swiper>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <v-footer cname="mfooter"></v-footer>
        <v-nav></v-nav>
    </div>
</template>

<script>
import Header from "../publick/Header.vue" // 公用头部
import Swiper from "./Swiper.vue" // swiper 
import Footer from "../publick/Footer.vue"  // 公司信息
import Nav from "../publick/Nav.vue"  // 导航条
import Ada from "./ada.vue"
import Money from "./money.vue"
import Adb from "./adb.vue"
import Finance from "./finance.vue"
import Adc from "./adc.vue"
export default {
  components:{
    'v-header':Header,
    'v-swiper':Swiper,
    Ada,
    Money,
    Adb,
    Finance,
    Adc,
    'v-footer':Footer,
    'v-nav':Nav

  }
}
</script>
<style lang="scss">
.mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>


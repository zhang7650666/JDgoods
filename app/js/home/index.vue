<template lang="html">
    <div>
        <v-header></v-header>
        <v-swiper></v-swiper>
        <v-novice></v-novice>
        <v-borrow></v-borrow>
        <v-money></v-money>
        <v-product></v-product>
        <v-life></v-life>
        <v-footer></v-footer>
        <v-nav></v-nav>
    </div>
</template>

<script>
import Header from "../publick/Header.vue" // 公用头部
import Swiper from "./Swiper.vue" // swiper 
import Novice from "./Novice.vue" // 新手特权 
import Borrow from "./Borrow.vue" // 急速借贷 
import Money from "./Money.vue"  // 理财精选
import Product from "./Product.vue"  // 产品
import Life from "./Life.vue"  // 生活服务
import Footer from "../publick/Footer.vue"  // 公司信息
import Nav from "../publick/Nav.vue"  // 导航条
export default {
  components:{
    'v-header':Header,
    'v-swiper':Swiper,
    'v-novice':Novice,
    'v-borrow':Borrow,
    'v-money':Money,
    'v-product':Product,
    'v-life':Life,
    'v-footer':Footer,
    'v-nav':Nav

  }
}
</script>

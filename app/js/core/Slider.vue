<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="(item, index) in items" :key="item.id">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
        </swiper>
    </section>
</template>
<script>
import {swiper, swiperSlide} from "vue-awesome-swiper";
export default {
    props:{
        cname:{
            type:String,
            default:''
        },
        options:{
            type:Object,
            default(){
                return{
                    autoplay:true, // 自动播放
                    loop:true, // 循环播放
                    pagination:{// 指示器
                        el:".swiper-pagination"
                    },
                    notNextTick:false, //模板
                }
            }
        },
        items:{
            type:Array,
            default(){
                return[
                    {}
                ]
            }
        }
    },
    data(){
        return{

        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style lang="scss">
@import '~swiper/dist/css/swiper.css';
</style>


<template>
    <header>
        <span class="left">
            <!-- 实际开发中这里应该用router-link  或者是a标签  写上响应的路径链接 -->
            <em>登录</em>&nbsp;|&nbsp;<em>注册</em>
        </span>
        <btn class="btnDownload">APP下载</btn>
    </header>
</template>
<script>
import Btn from '../core/Btn.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        'btn':Btn
    }
}
</script>
<style lang="scss" scoped>
header{
    position:fixed;
    left:0px;
    right:0px;
    top:0px;
    height:100px;
    line-height:100px;
    font-size:32px;
    color:#666;
    background:#fff url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png') no-repeat center center;
    background-size:auto 50%;
    z-index:100;
    .left{
        font-size:28px;
        height:30px;
        line-height: 30px;
        margin:17px 0 0 18px;
    }
    .btnDownload{
        float:right;
        font-size:24px;
        border-width:0px;
        height:56px;
        line-height: 56px;
        min-width:120px;
        padding:0px;
        border-radius:4px;
        margin:28px 24px 0 0;
    }
}
</style>



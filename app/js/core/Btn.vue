<template>
    <div :class="[btnClass,cname]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        cname:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            btnClass:'btn', // 默认类名
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../css/element.scss";
.btn{
    @include btn;
}
</style>


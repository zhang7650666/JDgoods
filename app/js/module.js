// js模块设计


 // @1  设计原则
a、高内聚低耦合
b、周期性迭代


// @2设计方法
a、先整体在部分后颗粒化
b、尽可能的抽象

==================================自适应====================================

// @1基本概念
    a、css像素   设备像素    逻辑像素   设备像素比
    b、viewport
    c、rem

// @2工作原理
    a、利用viewport 和设备像素比调整基准像素
    b、利用px2rem自动转换css单位


    <meta name="viewport" content="width=device-width,initital-scale=1.0,user-scalable=no"
    width:控制viewport的大小，可以是指定的一个值，比如  600，或者特殊值，
            如  device-width 为设备的宽度（单位为缩放为100%时的css像素）
    height:和width  相对应  可以指定高度
    initital-scale: 初始缩放比，也就是页面第一次load是的缩放比
    maximum-scale:允许用户缩放到的最大比例
    miximum-scale:允许用户缩放到的最小比例
    user-scalbale: 是否允许用户缩放

    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,miximum-scale=1.0,user-scalble=no"


  ================================SPA设计=================================
  1、设计意义
    a、前后端分离
    b、减轻服务端压力
    c、增强用户体验
    d、Prerender 预渲染 优化SEO
  2、工作原理
    a、History  API
    b、Hash
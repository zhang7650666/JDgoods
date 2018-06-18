<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Welfare/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../publick/Header.vue"
import Footor from "../publick/Footer.vue"
import Navbar from "../publick/Nav.vue"
import Slider from "./islider.vue"
import Welfare from "./welfare.vue"
import Service from "./service.vue"
export default {
    components: {
        Heador,
        Slider,
        Welfare,
        Service,
        Footor,
        Navbar,
    },
}
</script>

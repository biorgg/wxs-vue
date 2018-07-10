<template>
    <div style="margin-top:90px">
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/banner01.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/banner02.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/banner03.jpg"/></div>
        </CarouselItem>
    </Carousel>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    };
</script>

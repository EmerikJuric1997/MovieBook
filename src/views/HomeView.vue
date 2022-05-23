<template>
  <div class="cardcomponent">
    <Carousel />
    <HomeCenter />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import HomeCenter from '@/components/HomeCenter.vue'

export default {
  name: 'HomeView',
  components: {
    Carousel,
    HomeCenter
}
}
</script>
<style scoped>
.cardcomponent{ 
  padding-top: 100px;
}
</style>
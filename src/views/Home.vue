<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>

import Header from "../components/Header"
import Swip from "../components/Swip"

export default {
  name: "home",
  components: {
      HomeHeader: Header,
      HomeSwiper: Swip
  }
};
</script>

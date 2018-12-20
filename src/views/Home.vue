<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
  </div>
</template>

<script>

import Header from "../components/Header";
import Swip from "../components/Swip";
import Icons from "../components/Icons";

export default {
  name: "home",
  components: {
      HomeHeader: Header,
      HomeSwiper: Swip,
      Icons: Icons
  }
};
</script>

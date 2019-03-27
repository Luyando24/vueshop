<template>
  <div class="container">
    <app-slider></app-slider>
    <app-popular-category></app-popular-category>
    <app-new-stuff></app-new-stuff>
  </div>
</template>

<script>
  import Slider from "../components/Slider.vue";
  import PopularCategory from "../components/PopularCategory.vue";
  import NewStuff from "../components/NewStuff.vue";
  export default {
    name: "Home",
    components: {
      appSlider: Slider,
      appPopularCategory: PopularCategory,
      appNewStuff: NewStuff
    }
  };
</script>


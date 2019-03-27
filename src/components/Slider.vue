<template>
  <div class="container">
    <div class="row slider">
      <div class="col-md-3">
        <div class="list-group">
          <div class="category">
            <p>CATEGORIES</p>
          </div>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            v-for="(category,index) in categories"
            :key="index"
          >{{category.name}}</a>
        </div>
      </div>

      <div class="col-md-9">
        <b-carousel
          id="carousel1"
          style="text-shadow: 1px 1px 2px #333;"
          controls
          indicators
          background="#ababab"
          :interval="4000"
          img-width="1024"
          img-height="340"
          v-model="slide"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="/static/img/kitchen.jpg"
          />

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="/static/img/ladies-wear.jpeg">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="/static/img/blender.jpeg"/>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="340"
              src="/static/img/bedroom.jpg"
              alt="image slot"
            >
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="340"
              src="/static/img/accessories.jpg"
              alt="image slot"
            >
            <p>NEW COLLECTION</p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      categories: ""
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },

  mounted() {
    axios
      .get("http://demo4507124.mockable.io/categories")
      .then(response => (this.categories = response.data));
    console.log(this.response);
  }
};
</script>

<style>
.slider {
  margin-bottom: 20px;
}

.category {
  background: green;
  color: #fff;
  padding-top: 10px;
  padding-left: 10px;
}

.carousel-item {
  height: 442px;
}

.carousel-item img {
  height: 442px;
}
</style>

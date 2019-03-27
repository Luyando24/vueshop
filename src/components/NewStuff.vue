<template>
  <div class="container">
    <div class="card popularCategory">
      <div class="card-header">EXPLORE NEW STUFFS</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3" v-for="(product,index) in products" :key="index">
            <div class="card">
              <div class="card-body">
                <span class="badge badge-pill badge-success">New</span>
                <img :src="items[index].image" :style="img">
              </div>
            </div>
            <p>{{product.name}}</p>
            <div>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="pull-left">
                  <s>N{{product.old_price}}</s>
                </p>
              </div>
              <div class="col-6">
                <p class="pullR">N{{product.price}}</p>
              </div>
            </div>
          </div>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      img: {
        height: "200px",
        width: "200px"
      },
      products: "",
      items: [
        {
          id: 1,
          image: "/static/img/item5.jpg"
        },
        {
          id: 2,
          image: "/static/img/item6.jpg"
        },
        {
          id: 3,
          image: "/static/img/item7.jpg"
        },
        {
          id: 4,
          image: "/static/img/item8.jpg"
        },
        {
          id: 5,
          image: "/static/img/item5.jpg"
        },
        {
          id: 6,
          image: "/static/img/item6.jpg"
        },
        {
          id: 7,
          image: "/static/img/item7.jpg"
        },
        {
          id: 8,
          image: "/static/img/item8.jpg"
        },
        {
          id: 9,
          image: "/static/img/item5.jpg"
        },
        {
          id: 10,
          image: "/static/img/item6.jpg"
        },
        {
          id: 11,
          image: "/static/img/item7.jpg"
        },
        {
          id: 12,
          image: "/static/img/item8.jpg"
        }
      ]
    };
  },

  mounted() {
    // this.fetchProducts();
    // this.fetchCategory();
    axios
      .get("http://demo4507124.mockable.io/products")
      .then(response => (this.products = response.data));
    console.log(this.response);
  }
  // methods: {
  //   fetchProducts() {
  //     axios
  //       .get("http://demo4507124.mockable.io/products")
  //       .then(response => (this.products = response.data));
  //     console.log(this.response);
  //   },
  //   fetchCategory() {
  //     axios
  //       .get("http://demo4507124.mockable.io/categories")
  //       .then(response => (this.category = response.data));
  //     console.log(this.response);
  //   }
  // }
};
</script>

<style>
.popularCategory {
  margin-bottom: 35px;
  box-shadow: 0px 4px 4px 0px rgb(216, 214, 214, 0.8);
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  background: #ffffff;
}
.pullR {
  float: right;
}

/* .cardImg{
    border: none !important;
    box-shadow: 0px 0px 1px 0px rgb(216, 214, 214, 0.8);
    padding: 0;
    height: 242px;
} */
</style>

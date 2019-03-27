<template>
  <div class="container">
    <div class="card popularCategory">
      <div class="card-header">EXPLORE POPULAR CATEGORIES</div>
      <div class="card-body">
        <div class="row">
          <!-- <input v-model="filterProducts"> filteredItems -->
          <div class="col-md-3" v-for="(product,index) in images" :key="index">
            <div class="card">
              <div class="card-body">
                <span class="badge badge-pill badge-success">New</span>
                <img :src="images[index].image" :style="img">
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
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      img: {
        height: "200px",
        width: "200px"
      },
      products: "",
      filterProducts: "",
      products: this.$store.state.products
    };
  },

  computed: {
    ...mapGetters(["getProducts", "getNumberOfProducts"]),
    filteredItems() {
      return this.products.filter(element => {
        return element.match(this.filterProducts);
      });
    }
  },

  methods: {
    ...mapMutations(["ADD_TO_CART"])
  },
  mounted() {
    axios
      .get("http://demo4507124.mockable.io/products")
      .then(response => (this.products = response.data));
    console.log(this.response);
  }
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

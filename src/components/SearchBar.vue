<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/" class="navbar-brand">{{title}}</router-link>
        </div>
        <div class="col-md-7">
          <form class="form-inline search-bar">
            <div class="input-group">
              <input
                type="text"
                class="form-control search-input"
                placeholder="Search for products"
              >
              <div class="input-group-prepend">
                <span class="input-group-text search" id="basic-addon1">SEARCH</span>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-3">
          <span class="mr-30">
            <i class="fas fa-shopping-cart"></i>
          </span>
          <span>
            <i class="fas fa-heart"></i>
          </span>
          <span>
            <i class="fas fa-bell"></i>
          </span>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "PaysMosmo"
    };
  }
};
</script>

<style scoped>
.navbar-style {
  margin-bottom: 20px;
  background-color: #fff !important;
}

.search-input {
  border-color: transparent;
  border-radius: 0px;
  color: darkgrey;
  background: #eef5db;
  width: 556px !important;
}
.search {
  background-color: gold;
  border: none;
  color: #fff;
  font-size: 12px;
  width: 80px;
}

/* Small devices (landscape phones, 576px and up) */
@media screen and (min-width: 576px) {
  .search-input {
    width: 170px;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media screen and (min-width: 768px) {
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

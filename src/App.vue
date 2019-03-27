<template>
  <div>
    <app-navbar></app-navbar>
    <app-searchBar></app-searchBar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SearchBar from "./components/SearchBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
    appSearchBar: SearchBar,
    appFooter: Footer
  }
};
</script>


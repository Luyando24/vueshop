import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from "vee-validate"
import Home from '../components/Home'
import Login from '../components/registration/Login'
import Register from '../components/registration/Register'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
mode: "history",
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
//states
  state: {
    cartItems: [],
         images: [{
             id: 1,
             image: "/static/img/item1.jpg"
           },
           {
             id: 2,
             image: "/static/img/item2.jpg"
           },
           {
             id: 3,
             image: "/static/img/item3.jpg"
           },
           {
             id: 4,
             image: "/static/img/item4.jpg"
           }
         ]
  },

//   //getters
  getters: {
    getProducts: state => state.products,
    getNumberOfProducts: state => (state.cartItems) ? state.cartItems.length : 0,
  },

  //mutations
  mutations: {
    ADD_TO_CART: (state, product) => {
      state.cartItems.push(state.products[product]);
      console.log(state.cartItems)
    }
  },


  //actions
  actions: {
    addToCart: (context, product) => {
      context.commit('ADD_TO_CART', product);
    }
  }
});

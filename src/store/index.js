import { createStore } from 'vuex'
import axios from 'axios';
import { LOADING_SPINNER_SHOW_MUTATION } from './storeconstants';

const store = createStore({

    // -----------------------In state we can store data-------------------
    state: {
        products:[],
        product: null,
        category:[],
        searchbar: null,
        cart:[]
    },


// --------------This part is for loading spinner--------------
    state() {
        return {
            showLoading: false,
        };
    },

//    ----------------------Mutations in which we can set data---------------------------
    mutations:{
        setProducts(state, products){
            state.products = products;
        },
        setProduct(state, product){
            state.product = product;
        },
        catal(state, category){
            state.category = category;
        },

        searches(state, searchbar){
            state.searchbar = searchbar;
        }, 

        // -------------------------SET CART--------------------------------
        
        ADD_TO_CART(state, product){
            console.log("hello ji", product)
            state.product=product;
        },

        // ------------------------Delete Product---------------------------

        remove_product(state){
            state.product = [];
        },

        // ---------------------Clear Cart-------------------------------


     
        CLEAR_CART_ITEMS(state){
            state.product = [];
        },


        // --------------------------------------------------------------------------------

        // -----------------SET DATA OF LOADING-------------------------------

        [LOADING_SPINNER_SHOW_MUTATION](state, payload) {
            state.showLoading = payload;
        },
    },


// ------------------------In action we can get api----------------------
    actions:{
        getProducts({ commit }, page) {
            axios.get(`https://dummyjson.com/products?limit=10&skip=${(page-1) * 10}`)
            .then(response => {
                // console.log(response)
                commit('setProducts', response.data.products)
            })
        },
        getProduct({commit}, productId) {
            axios.get(`https://dummyjson.com/products/${productId}`)
            .then(response => {
                // console.log(response.data)
                commit('setProduct', response.data)
            })
        },

        created({commit}) {
            axios.get('https://dummyjson.com/products/categories')
             .then(res => {
                // console.log(res.data)
                commit('catal', res.data)
            })
        },

        search({commit}, searched) {
            console.log(searched)
            axios.get(`https://dummyjson.com/products/search?q=${searched}`)
             .then(research => {
                console.log("hello" , research.data.products)
                commit('searches', research.data.products)
            })
        },


        // -------------------Cart Api-----------------------------

        addProductToCart(context, {quantity,stock, title, thumbnail ,price}){
            console.log({quantity,stock, title, thumbnail ,price},"yes");
           let product =[]
           quantity = 1
           product.push( {quantity,stock, title, thumbnail ,price})
            console.log(context.state,"Push work")
           context.commit('ADD_TO_CART',product);
        },

        // -------------------------Delete Product-----------------------------
        remove({ commit }){
          commit('remove_product');
        },
        // ----------------------------------------------------------------
        
        // -------------------------Clear cart-----------------------------
        clearCartItems({ commit }){
           commit('CLEAR_CART_ITEMS');
        }
// ----------------------------------------------------------------

},


})
export default store
<template>
<Header /><br>

<!-- --------------------------------------CART Card--------------------------------- -->
<section class="vh-100" style="background-image: white">
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
                <p><span class="h2">Shopping Cart </span><span class="h4">(Items in your cart)</span></p>

                <div class="card mb-4" v-for="item in cart" :key="item.id">
                    <div class="card-body p-4">

                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <img :src="item.thumbnail" class="img-fluid" alt="Generic placeholder image">
                            </div>
                            <div class="col-md-2 d-flex justify-content-center">
                                <div class="res">
                                    <p class="small text-muted mb-4 pb-2" id="res1">Name</p>
                                    <p class="lead fw-normal mb-0">{{ item.title }}</p>
                                </div>
                            </div>
                            <div class="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p class="small text-muted mb-4 pb-2" id="res1">Stock</p>
                                    <p class="lead fw-normal mb-0" id="res2">
                                        {{ item.stock }}</p>
                                </div>
                            </div>
                            <div class="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p class="small text-muted mb-4 pb-2" id="res1">Quantity</p>
                                    <p class="lead fw-normal mb-0">{{ item.quantity }} * ${{ item.price-10 }}</p>
                                </div>
                            </div>
                            <div class="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p class="small text-muted mb-4 pb-2" id="res3">Actual Price</p>
                                    <p class="lead fw-normal mb-0" id="res4">${{ item.price }}</p>
                                </div>
                            </div>
                            <div class="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p class="small text-muted mb-4 pb-2" id="res5">Discount Total</p>
                                    <p class="lead fw-normal mb-0" id="res6"> ${{ item.price-10 }}</p>
                                </div>
                                <div class="remove" id="res7">
                                    <button class="removebtn" @click="remove()">
                                        <i class="fa-sharp fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card mb-5" v-for="item in cart" :key="item.id">
                    <div class="card-body p-4">

                        <div class="float-end">
                            <p class="mb-0 me-5 d-flex align-items-center">
                                <span class="small text-muted me-2">Order total: ${{ item.price-10 }}</span><span class="lead fw-normal"></span>
                            </p>
                        </div>

                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-light btn-lg me-2" @click="clearCartItems()">Clear Cart</button>
                    <button type="button" class="btn btn-primary btn-lg">Buy now</button>
                </div><br><br><br>

            </div>
        </div>
    </div>
</section>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    name: 'Cart',

    components: {
        Header,
        Footer
    },
    // ----------------------------------Cart Data dispatch--------------------------------------
    computed: {
        cart() {
            // console.log(this.$store.state.product,'Products add/remove')
            return this.$store.state.product;

        },
    },

    methods: {
        clearCartItems() {
            alert("Are you Sure to clear your Cart ?");
            this.$store.dispatch("clearCartItems")
        },

        remove() {
            alert("Are you Sure to delete your product ?");
            this.$store.dispatch("remove")

        }
    },

}
</script>

<style scoped>
.remove {
    margin: 10px 0px 30px 50px;
}

.removebtn {
    width: 200%;
    background-color: rgb(247, 148, 148);
}

.removebtn :hover {
    color: rgb(255, 255, 255);
}

/* ------------------------------------MEDIA QUERIES MOBILE RESPONSIVE-------------------------- */

@media only screen and (min-width: 300px) and (max-width: 1250px) {
    .res {
        padding: 30px 7px 28px 7px;
    }
}

#res1 {
    padding: 10px 11px 0px 11px;
}

#res2 {
    padding: 0px 16px 12px 17px;
}

#res3 {
    padding: 24px 14px 26px 14px;
}

#res4 {
    padding: 0px 20px 18px 26px;
}

#res5 {
    padding: 15px 6px 0px 0px;
}

#res6 {
    padding: 0px 0px 10px 15px;
}

#res7 {
    margin: 28px -113px 10px 88px;
}
</style>

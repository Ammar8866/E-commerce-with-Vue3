<template>
<!-- --------------------------Product Card------------------------------ -->
<div class="Shirts">
    <div class="productss">
        <img id="img1" :src="product.thumbnail" alt /><br><br>
        <div class="texting">
            <router-link :to="{name: 'Itemdetails' ,params:{id:product.id}}">{{ product.title }}</router-link>
        </div>
        <div class="ratings">
            Rating: {{ product.rating }} <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <p>Description :{{ product.description }}</p>
        <div class="price">
            <h5>Price : ${{ product.price }}</h5>
        </div>
    </div>
</div>
</template>

<script>
import Itemdetails from './Itemdetails.vue';
export default {
    components: {
        Itemdetails
    },
    props: ['product'],
    // -----------------------Get Data to store state-------------------
    computed: {
        products() {
            return this.$store.state.products;
        }
    },

};
</script>

<style scoped>
.Shirts {
    border: 0px solid;
    height: 90vh;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);
    margin: 1px 0px 3px 0px;
    display: flex;

}

.productss {
    border: 0px solid;
    margin-left: 3.5rem;
    width: 281px;
    height: 22rem;
    margin-top: 50px;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);

}

#img1 {
    height: 265px;
    width: 241px;
}

.ratings {
    color: rgb(255, 102, 0);
    padding: 2px 0px 2px 25px;
}

.texting {
    padding: 4px 0px 2px 62px;
}

.price {
    display: flex;
    padding: 0px 0px 0px 52px;
}
</style>

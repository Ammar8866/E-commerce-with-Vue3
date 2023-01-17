<template>
<Header /><br><br>
<!-- --------------------------Category Card------------------------------------ -->
<div class="cont">
    <div class="Shirts" v-for="category in catproducts" :key="category">
        <div class="productss">
            <img id="img1" :src="category.thumbnail" alt /><br><br>
            <div class="texting">
                <router-link :to="{name: 'Itemdetails' ,params:{id:category.id}}">{{ category.title }}</router-link>
            </div>
            <div class="ratings">
                Rating: {{ category.rating }} <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Description :{{ category.description }}</p>
            <div class="price">
                <h5>Price : ${{ category.price }}</h5>
            </div>
        </div>
    </div>
</div>
<Footer />
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Itemdetails from './Itemdetails.vue';
import axios from 'axios';
export default {
    name: 'Category',
    data() {
        return {
            catproducts: [],
            catpro: this.$route.params.category,
        }
    },

    // -------------------------------Fetch Category Details with aysnc awit----------------------------
    async mounted() {
        let response = await axios.get("https://dummyjson.com/products/category/" + this.catpro)
        console.log(response.data.products)
        this.catproducts = response.data.products
    },

    components: {
        Header,
        Itemdetails,
        Footer
    },
}
</script>

<style scoped>
.cont {
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);
}

.Shirts {
    border: 0px solid;
    height: 90vh;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);
    margin: 1px 0px 30px 0px;

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

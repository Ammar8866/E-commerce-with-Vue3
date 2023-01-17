<template>
<Header />
<!-- ----------------------Search Products Card-------------------------- -->
<div class="cont">
    <div class="Shirts" v-for="query in searchbar" :key="query">
        <div class="productss">
            <img id="img1" :src="query.thumbnail" alt /><br><br>
            <div class="texting">
                <router-link :to="{name: 'Itemdetails' ,params:{id:query.id}}">{{ query.title }}</router-link>
            </div>
            <div class="ratings">
                Rating: {{ query.rating }} <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Description :{{ query.description }}</p>
            <div class="price">
                <h5>Price : ${{ query.price }}</h5>
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
export default {
    components: {
        Header,
        Itemdetails,
        Footer
    },

    // ----------------------Dispatch Query for search----------------------------
    created() {
        this.$store.dispatch("search", this.$route.params.query);
    },

    computed: {
        searchbar() {
            return this.$store.state.searchbar;
        }
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
    margin: 50px 0px 30px 0px;
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

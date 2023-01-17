<template>
<Header /><br><br><br>

<div class="categories">
    <div>
        <h1>All Categories</h1>
        <hr>
        <h5>Explore Amazing Accessories & Fashionable new arrivals this winter season with Discount Rates</h5>
        <hr>
    </div>
</div>

<!-- ----------------------------------Api Product displays------------------------ -->
<div class="flex2">
    <productitem v-for="product in $store.state.products" :key="product.id" :product="product" /><br>
</div><br>
<!-- ------------------------------------Page Pagination---------------------------- -->
<pagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" />
<Footer />
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import pagination from './pagination.vue';
import productitem from './productitem.vue';
export default {
    props: ['product'],
    components: {
        Header,
        productitem,
        pagination,
        Footer,
    },

    // ----------------------------Pagination-------------------------------------------
    data() {
        return {
            currentPage: 1,
        };
    },
    methods: {
        onPageChange(page) {
            console.log(page);
            this.currentPage = page;
            this.$store.dispatch("getProducts", this.currentPage);
        },
    },
    mounted() {
        console.log(this.currentPage)
        this.$store.dispatch("getProducts", this.currentPage);
    },

    // -----------------------------------------------------------------------------------

}
</script>

<style scoped>
.categories {
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);
    margin: -6px 0px 0px 0px;
    display: flex;
    border: 0px solid;
    height: 50%;
    width: 100%;
}

.categories h1 {
    color: darkred;
    padding: 40px 0px 3px 80px;
}

.categories h5 {
    color: darkblue;
    padding: 3px 0px 3px 90px;
}

.flex2 {
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);

}

/* ------------------------------------MEDIA QUERIES MOBILE RESPONSIVE-------------------------- */

@media only screen and (min-width: 300px) and (max-width: 1250px) {
    .categories {
        background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);

    }

    .categories h1 {
        padding: 40px 0px 3px 20px;
    }

    .categories h5 {
        padding: 3px 0px 3px 15px;
    }

    .flex2 {
        background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);
    }

}
</style>
